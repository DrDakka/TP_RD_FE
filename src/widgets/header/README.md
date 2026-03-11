# Header Widget

Sticky responsive header. Supports mobile and desktop layouts via CSS Grid.

---

## Features

- **Sticky positioning** — always visible while scrolling (`position: sticky; top: 0`)
- **Frosted glass** — always semi-transparent (`rgba(255,255,255,0.82)` + `backdrop-filter: blur(10px)`)
- **Scroll shrink** — shrinks on scroll past 20px (`padding-block: 4px`). Expands back on hover; collapses again with a delay after hover ends
- **Search (mobile)** — click the icon to expand the search bar full-width with input autofocus; click again or click outside the header to collapse and blur
- **Search (desktop)** — always expanded; when scrolled + unfocused becomes transparent (border and bg disappear); on hover border darkens; on focus restores to normal
- **Search dropdown** — slides in below the header when search is open; animated via `opacity` + `transform: translateY`
- **Burger menu (mobile)** — opens the nav dropdown below the header; closes on outside click
- **Outside click** — a single `mousedown` listener closes both search and burger menu simultaneously

---

## File structure

```
header/
├── Header.tsx                        # Root component
├── header.module.scss                # Header styles: grid layout, state modifiers
│
├── model/
│   ├── useHeader.ts                  # Main state hook
│   ├── _header.constants.scss        # SCSS constants (sizes, grids, animations)
│   ├── navLinks.ts                   # Navigation links data
│   └── index.ts
│
└── ui/
    ├── index.ts                      # Barrel export of all UI components
    ├── shared/
    │   └── iconButton.module.scss    # Shared styles for icon buttons
    ├── logo/
    │   ├── Logo.tsx
    │   └── logo.module.scss
    ├── burgerButton/
    │   └── BurgerButton.tsx
    ├── navBar/
    │   ├── NavBar.tsx                # NavBar module
    │   └── navbar.module.scss
    ├── searchBar/
    │   ├── SearchBar.tsx             # Icon + input wrapper
    │   └── searchBar.module.scss
    ├── searchDropdown/
    │   ├── SearchDropdown.tsx        # Search results dropdown
    │   └── searchDropdown.module.scss
    └── userActions/
        ├── UserActions.tsx           # User actions panel
        └── userActions.module.scss
```

---

## Key nodes

### `Header.tsx`
Root component. Composes all child components and applies CSS modifier classes based on state from `useHeader`.

Modifiers on `<header>`:
| Class | Condition |
|---|---|
| `header--scrolled` | `scrollY > 20` |
| `header--search-expanded` | search is open (mobile only) |
| `header--menu-expanded` | burger menu is open (mobile only) |

### `useHeader.ts`
Hook that manages all header state:

| State | Type | Purpose |
|---|---|---|
| `searchExpanded` | `boolean` | whether the search bar is expanded |
| `bmExpanded` | `boolean` | whether the burger menu is open |
| `scrolled` | `boolean` | whether the page is scrolled past 20px |
| `query` | `string` | current search query |
| `inputRef` | `RefObject<HTMLInputElement>` | ref to the search input element |
| `containerRef` | `RefObject<HTMLElement>` | ref to `<header>` for outside click detection |

Handlers (`handler`):
- `handler.expand()` — toggle search expansion (blurs input on collapse)
- `handler.focus()` — expand search + focus input
- `handler.query(e)` — update search query
- `handler.menu()` — toggle burger menu

### `_header.constants.scss`
SCSS constants shared across all header styles:

| Constant | Value | Purpose |
|---|---|---|
| `$row-max-height` | `46px` | header row height |
| `$fullIconSize` | `46px` | icon button hit area size |
| `$header-padding` | `12px` | base header padding |
| `$transform-fast/med/slow` | `0.1s / 0.3s / 0.7s` | animation durations |
| `$grid-mob` | `list.slash(...)` | CSS Grid for mobile |
| `$grid-search-mob-expanded` | `list.slash(...)` | Grid when search is open on mobile |
| `$grid-desc` | `list.slash(...)` | CSS Grid for desktop |

### `header.module.scss`
Grid layout for the header. Child elements are positioned via `grid-area` using `:nth-child` index selectors.

Mobile grid: `[burger] [logo] [1fr] [search] [spacer] [user-actions]`

Desktop grid: `[logo] [search] [nav] [spacer] [user-actions]`

### `SearchBar.tsx`
Structure: `<div.search-wrapper>` → `<button.icon-btn>` + `<input>`.

- In collapsed state the input is removed from layout via `flex: 0 0 0; width: 0; overflow: hidden`
- Click on wrapper → `handlers.focus()`; click on icon → `handlers.expand()` (with `stopPropagation`)

### `SearchDropdown.tsx`
Accepts `visible` and `query`. Absolutely positioned below the header (`top: 100%`). Animated via `opacity` + `visibility` + `translateY(-8px)`. Has a `data-search-dropdown` attribute to exclude it from the CSS selector that hides other elements when search is expanded.
