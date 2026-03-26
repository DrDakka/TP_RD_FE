# tp_rd_fe

Frontend для сервісу відстеження харчування на базі бази USDA.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Zustand, SCSS Modules

---

## Архітектура

Проєкт побудований за принципами FSD (Feature-Sliced Design).

### Потоки даних

- **Каталог** — SSR. `page.tsx` читає `searchParams`, робить fetch на сервері, передає `items` клієнтському компоненту.
- **Фільтри каталогу** — URL як єдине джерело стану. Усі зміни через `useUrlReducer`.
- **Обрані** — Zustand стор. Toggle миттєво оновлює стан + `localStorage`. Синхронізація з IndexedDB відбувається при наступному маунті.

---

## Модулі

### `app/`

| Файл | Опис |
|------|------|
| `layout.tsx` | Кореневий лейаут. Підключає `FavoritesProvider`. |
| `FavoritesProvider.tsx` | Client wrapper. Запускає `useFavoritesSync` (init + flush при маунті). |
| `catalogue/page.tsx` | Серверний компонент. Читає `searchParams`, робить `api.products.list`, передає дані в `CatalogueContent`. |
| `catalogue/CatalogueContent.tsx` | Клієнтський компонент. Рендерить список карток, підключає `useUrlReducer` для диспатчу фільтрів. |
| `catalogue/useUrlReducer.ts` | Редьюсер URL-параметрів. Управляє `search`, `tag`, `prop`, `page`. `page=1` в URL не відображається. |

---

### `features/`

| Файл | Опис |
|------|------|
| `loader/useLoader.ts` | Універсальний хук для fetch-запитів. Підтримує retry (2 спроби), AbortController, прапор `enabled` для lazy-запуску. Повертає `data: T \| 'loading' \| 'error'`, `reload`, `abort`. |
| `favorites/store.ts` | Zustand стор обраних. Стан: `prev` (IDB при ініті) + `favorites` (поточний). `toggle` оновлює стан і `localStorage`. `flush` робить batch-fetch → пише в IDB → оновлює `prev`. Захист від гонки через lock `isFlushing`. |
| `favorites/useFavoritesSync.ts` | Хук для лейауту. При маунті: `init().then(flush)`. |
| `useFavorite.ts` | Хук для компонента. `useFavorite(id)` → `{ isFavorite, toggle }`. Читає з Zustand стору. |

---

### `shared/api/`

| Файл | Опис |
|------|------|
| `api.ts` | API-клієнт. Методи: `products.list(query, signal)`, `products.byId(id, signal)`, `products.batch({ ids }, signal)`, `norms.calculate(payload, signal)`. |
| `router.ts` | Ендпоінти API. |
| `types/product/types.ts` | `CatalogueItem` (базові поля), `FullItem` (`{ item: CatalogueItem, micro: ProductNutrient[] }`). |
| `types/product/enums.ts` | `Tags`, `PropTags`, `MeasureUnits`. |
| `types/product/params.ts` | `GetProductsQuery`, `PostBatchRequest`. |
| `types/product/responses.ts` | `GetProductsResponse: { count, items }`. |

---

### `shared/db/`

| Файл | Опис |
|------|------|
| `favorites.ts` | IndexedDB операції для стору обраних (`tp_rd` / `favorites`). `openDb`, `getAllKeys`, `getItem`, `putItem`, `deleteItem`. Ключ: `item.id`. |

---

### `shared/lib/`

| Файл | Опис |
|------|------|
| `pendingFavs.ts` | localStorage-хелпер для pending-диффу обраних (`tp_rd_pending_add`, `tp_rd_pending_remove`). Страховка при закритті вкладки до flush. SSR-safe. |

---

### `shared/ui/`

Базові UI-компоненти: `Button`, `SearchInput`, `TextInput`, `Logo`, іконки.

---

### `widgets/`

| Файл | Опис |
|------|------|
| `productCard/ProductCard.tsx` | Презентаційний компонент карточки товару. Пропси: `inc: CatalogueItem`, `isFavorite: boolean`, `toggleFav: () => void`. |
| `productCard/ui/Macros.tsx` | Відображення макронутрієнтів (cal, prot, fat, carb). |
| `header/Header.tsx` | Хедер з навігацією, пошуком, діями юзера. |
| `footer/Footer.tsx` | Футер з посиланнями та newsletter. |

---

## Потік обраних

```
Toggle кнопка
  → useFavorite(id).toggle()
  → store.toggle(id): Zustand + localStorage diff

При маунті лейауту (FavoritesProvider)
  → store.init(): IDB keys + localStorage pending → Zustand
  → store.flush(): batch API fetch → IDB write → localStorage clear
```
