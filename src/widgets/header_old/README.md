# Header Widget

Sticky responsive header. Mobile and desktop layouts via CSS Grid.

---

## Features

### Layout & Responsiveness
- **CSS Grid layout** — grid areas named via `data-*` attributes (`data-header-logo`, `data-header-search`, etc.), no positional coupling between component and layout
- **Two grid configurations** — mobile: `[burger] [logo] [1fr] [search] [spacer] [user-actions]`; desktop: `[logo] [search] [nav] [spacer] [user-actions]`
- **Max content width** — on wide screens header content is capped at `1400px` via `padding-inline: max(12px, calc((100% - 1400px) / 2))`

### Sticky & Scroll Behaviour
- **Sticky positioning** — always visible while scrolling (`position: sticky; top: 0`)
- **Frosted glass background** — `::before` pseudo-element with `backdrop-filter: blur` and semi-transparent fill, separate from the grid layer to avoid stacking context issues
- **Scroll shrink** — when `scrollY > 20px`, `padding-block` shrinks to `4px`; expands back on hover; collapses again after hover ends
- **Shadow** — constant `box-shadow` gives the header a subtle lift above page content

### Search (Mobile)
- **Expandable full-width search** — click the magnifier icon to expand; the grid instantly reflows to `[0] [0] [0] [1fr] [0] [0]`, pushing all other elements to zero-width
- **Autofocus on expand** — `inputRef.current.focus()` is called in a `useEffect` keyed on `searchExpanded`
- **Delayed fade-in for non-search elements** — on collapse, logo/burger/actions are invisible during the grid reflow animation (`0.3s`), then fade in after the grid settles. On expand they disappear instantly
- **Magnifier icon delayed appearance** — the icon uses `@keyframes icon-appear` with `animation-delay: 0.3s` (matching grid transition) so it only becomes visible once the grid has already repositioned it; in expanded state `animation: none; opacity: 1` disables the delay
- **tabIndex guard** — input has `tabIndex={searchExpanded ? 0 : -1}` so it is excluded from keyboard tab order when collapsed

### Search (Desktop)
- **Always expanded** — the search bar is always full-width within its grid column
- **Scrolled + unfocused style** — when scrolled and not focused, the search bar shrinks slightly and its border fades to a subtle color
- **Search vs nav collision** — in the `dsc`–`dsc-wide` range, the nav collapses (`max-width: 0`) when search is focused, to prevent overflow
- **Search bar overflow fix** — desktop search uses `width: calc(100% - $logo-search-gap)` to stay within the grid cell despite the left margin offset

### Search Close Triggers
All of these collapse the search bar and blur the input:
- Click the magnifier icon again (`handler.expand`)
- Click outside the header (`mousedown` listener on `document`)
- Press `Escape` (`keydown` listener on `document`)
- Scroll the page (with a 150ms guard — see Race Conditions below)
- Touch-move on mobile (`touchmove` listener, `passive: true`)

### Burger Menu (Mobile)
- **Opens nav dropdown** — slides in below the header via `opacity` + `transform: translateY` animation
- **Closes on outside click** — same `mousedown` handler that handles search outside-click also handles burger menu
- **Closes on scroll** — same scroll handler collapses both search and burger menu

### Logo
- **Hover glow effect** — on hover/focus: transparent green background + three layered `box-shadow`s of decreasing opacity to simulate a soft blurred glow; `outline: none` suppresses the browser default
- **Smooth transition** — `box-shadow` and `background-color` transition at `0.3s`

---

## Race Conditions & Edge Cases

### Scroll fires after click
When the user clicks the search icon during a momentum scroll, a `scroll` event fires immediately after the click and would collapse the search before the expand transition finishes. Fix: `lastExpandedAtRef` stores a `performance.now()` timestamp on expand; the scroll handler skips collapse if fewer than 150ms have passed.

### Grid shift causes icon teleportation
On mobile collapse, columns 1–3 animate from `0` back to their natural widths over `0.3s`. During this animation the magnifier icon moves ~100px to the left. The `@keyframes icon-appear` trick hides the icon during this movement and only reveals it once the grid has settled.

---

## State (`useHeader.ts`)


`searchExpanded` search bar expanded (mobile)
`bmExpanded` burger menu open
`scrolled` `scrollY > 20px` 
`query` current search input value |

Refs:
- `inputRef` — search `<input>` element (for programmatic focus/blur)
- `containerRef` — `<header>` element (for outside-click detection)
- `lastExpandedAtRef` — `performance.now()` timestamp of last expand (race condition guard)

Event handlers are grouped in `effectHandler` (memoized with `useMemo`) to allow stable reference passing to `addEventListener`/`removeEventListener`. A separate `handler` object exposes imperative actions to the component.

---

## File Structure

```
header/
├── Header.tsx                        # Root component
├── header.module.scss                # Grid layout, state modifier classes
│
├── model/
│   ├── useHeader.ts                  # All header state and event wiring
│   ├── _header.constants.scss        # SCSS constants (sizes, grids, durations, shadows)
│   ├── _header.mixins.scss           # Reusable SCSS mixins (frosted glass, dropdown show/hide, etc.)
│   ├── navLinks.ts                   # Nav link data
│   └── index.ts
│
└── ui/
    ├── index.ts
    ├── shared/
    │   └── iconButton.module.scss    # Shared icon button styles
    ├── logo/
    │   ├── Logo.tsx
    │   └── logo.module.scss          # Logo layout + hover glow effect
    ├── burgerButton/
    │   └── BurgerButton.tsx
    ├── navBar/
    │   ├── NavBar.tsx
    │   └── navbar.module.scss
    ├── searchBar/
    │   ├── SearchBar.tsx             # Icon button + input wrapper
    │   └── searchBar.module.scss     # Expand/collapse animation, icon-appear keyframes
    ├── searchDropdown/
    │   ├── SearchDropdown.tsx        # Results dropdown, absolutely positioned below header
    │   └── searchDropdown.module.scss
    └── userActions/
        ├── UserActions.tsx
        └── userActions.module.scss
```

---

## CSS Modifier Classes

Applied to `<header>` by `Header.tsx` based on `useHeader` state:


`header--scrolled` `scrollY > 20` Shrinks `padding-block` to `4px` 
`header--search-expanded` search is open (mobile); Switches to full-width search grid, hides other elements
`header--menu-expanded` burger menu open (mobile); Shows nav dropdown
