# Catalogue Page

## Data Flow

```
Server (Next.js page)
  │  passes initialState (parsed URL params) + initialData (prefetched products)
  ▼
CataloguePage
  │  merges initialState with defaultState
  ▼
useClientCatalogue
  ├── useFilters        → filter state + handlers
  ├── useData           → API calls, URL sync
  └── usePopstate       → browser Back/Forward support
```

### useFilters

Manages filter state via `useReducer`. Returns three groups of handlers:

| Group | What it is | Has href |
|---|---|---|
| `filters.free` | Text input, sliders — no navigation | No |
| `filters.static` | Dropdowns, selects — each option is a `<Link>` | Yes |
| `filters.base` | `reset`, `restore` — core actions | — |

Static filters use a **Command pattern**: each filter key maps to a list of side-effect actions in `commandConfig`. Both `handler` (dispatches actions) and `href` (builds URL via `buildFilterUrl`) use the same action list, so they always stay in sync.

### useData

Watches `state`. On every change:
1. Serializes state to query string via `createSearchParams`
2. Pushes to `window.history` if query changed
3. Fetches new products via `clientApi.products.list`

First render is skipped (uses `initialData` from server).

### usePopstate

Listens to `popstate` (browser Back/Forward). On fire:
1. Parses `window.location.search` via `parseParams` (uses `URLSearchParams.getAll` for multi-value `prop`)
2. Calls `filters.base.restore(parsedState)` — dispatches `RESTORE` action

---

## Dependency Direction

```
shared/api/types
      ↑
model/hooks/types    ← domain enums (FreeFilters, StaticFilters),
                       FilterState, FilterAction
      ↑
widgets/filters/     ← UI types (StaticFiltersMap, UiArgMap),
                       mappers (apiToUi, uiToApi), config
lib/
constants.ts
CataloguePage.tsx
```

Widgets import from model. Model never imports from widgets.

---

## How to Add a Filter

### Static filter (has href — dropdown, select, checkbox list)

**1. Add enum value and API type to `model/hooks/types.ts`:**

```ts
enum StaticFilters {
  TAG = 'tag',
  PROP = 'prop',
  PAGE = 'page',
  CATEGORY = 'category', // new
}

type StaticArgMap = {
  // ...
  [StaticFilters.CATEGORY]: Categories; // new API enum
};
```

**2. Add to `FilterState` in the same file:**

```ts
type FilterState = {
  // ...
  [StaticFilters.CATEGORY]: Categories | null;
};
```

**3. Handle the action in `model/hooks/useUrlReducer.ts`:**

```ts
case StaticFilters.CATEGORY:
  return { ...state, [StaticFilters.CATEGORY]: action.payload, page: 1 };
```

**4. Add to `defaultState` in `constants.ts`:**

```ts
[StaticFilters.CATEGORY]: null,
```

**5. Add side effects in `commandConfig` inside `useFilters.ts`:**

```ts
const commandConfig: Record<keyof StaticArgMap, FilterAction[]> = {
  // ...
  [StaticFilters.CATEGORY]: [pageReset], // resets page on selection
};
```

**6. Add UI label type and mapper in `widgets/filters/static/`:**

- `types.ts` — extend `UiArgMap` with the new key
- `mappers.ts` — add `apiToUi` and `uiToApi` entries
- `config.ts` — add entry to `staticConfig` with `label`, `list`, `multiselect`

**7. Add to `lib/createSearchParams.ts` and `lib/parseParams.ts`:**

```ts
// createSearchParams.ts
[StaticFilters.CATEGORY]: (inc, params) => {
  if (inc) params.set(StaticFilters.CATEGORY, String(inc));
},

// parseParams.ts
[StaticFilters.CATEGORY]: (params.get(StaticFilters.CATEGORY) as Categories) ?? null,
```

**8. Add validator in `lib/valSearchParam.ts`:**

```ts
[StaticFilters.CATEGORY]: (inc): inc is Categories =>
  typeof inc === 'string' && VALID_CATEGORIES.has(inc),
```

---

### Free filter (no href — text input, range slider)

**1. Add enum value to `FreeFilters` in `model/hooks/types.ts`:**

```ts
enum FreeFilters {
  SEARCH = 'search',
  NUTRIENT = 'nutrient', // new
}
```

**2. Add to `FreeArgMap` and `FilterState`:**

```ts
type FreeArgMap = {
  [FreeFilters.NUTRIENT]: number;
};

type FilterState = {
  [FreeFilters.NUTRIENT]: number;
};
```

**3. Handle in reducer, add to `defaultState`, `createSearchParams`, `parseParams`, `valSearchParam`** — same as static steps 3, 4, 7, 8.

**4. Add handler in `useFilters.ts`** inside `freeFilters`:

```ts
[FreeFilters.NUTRIENT]: (value: number) => {
  dispatch({ type: FreeFilters.NUTRIENT, payload: value });
  dispatch(pageReset);
},
```

**5. Add UI component** in `widgets/filters/free/` and wire it in `Filters.tsx`.
