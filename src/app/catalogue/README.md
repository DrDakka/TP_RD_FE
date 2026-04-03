# Catalogue Page

## Structure

```
catalogue/
  page.tsx                       # Server Component (SSR entry point)
  ui/
    ClientPage.tsx               # Client Component (render + pagination)
  model/
    useUrlReducer.ts             # Filter state reducer
    useClientCatalogue.ts        # Page hook (URL sync + fetch)
  lib/
    constants.ts                 # SearchParamKey enum, defaultState
    ValidationError.ts           # Validation error class
    index.ts
    init/
      getInit.ts                 # Server-side searchParams parsing & validation
      valSearchParam.ts          # Field validators (val.keys, val.entr, valFields)
      createSearchParams.ts      # FilterState → query string
```

## Data Flow

### Initial load (SSR)

```
URL (?search=...&tag=...&page=...)
  └── page.tsx (async Server Component)
        ├── getInit(searchParams)
        │     ├── val.keys()   — validates keys against SearchParamKey
        │     ├── val.entr()   — validates values via valFields
        │     │     └── ValidationError → notFound()
        │     └── createSearchParams() → query string
        └── api.products.list(query) — direct server→backend request (no CORS)
              └── <ClientPage initialState={...} initialData={...} />
```

### Client-side navigation (after mount)

```
User changes filter / page
  └── dispatch(action)
        └── useUrlReducer — updates FilterState (useReducer)
              └── useClientCatalogue (useEffect on state)
                    ├── createSearchParams(state) → query string
                    ├── window.history.pushState(url?query) — no SSR rerender
                    └── reload() → clientApi.products.list(query)
                          └── /api/products?... (Next.js Route Handler)
                                └── backend (server→backend, no CORS)
```

## Key decisions

**Hybrid rendering** — SSR for initial load (SEO), client-side fetch for navigation (UX).

**`window.history.pushState` instead of `router.push`** — updates URL without triggering Next.js server navigation.

**`/api/products` Route Handler** — proxies client requests to the backend, bypassing CORS (browser cannot call the backend directly).

**`getInit`** — single server-side entry point for searchParams: key validation → value validation → builds `initialState` and `query`.

**`useUrlReducer`** — initialized once from `initialState` (SSR prop), then lives as pure React state.

## searchParams validation

Runs server-side in `getInit`. On invalid params throws `ValidationError` → `page.tsx` calls `notFound()`.

Rules per API contract:
- `search` — string, max 40 chars, forbidden chars `#${}[]!>?<`, lowercase only
- `tag` — one of `Tags` enum values
- `prop` — single or array of `PropTags` enum values
- `page` — integer ≥ 0
