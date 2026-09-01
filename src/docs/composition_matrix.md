The Site Package Manager (SPM) ecosystem separates components into two fundamental architectural tiers:

- **Primitive Components (16 Atoms)**: Modular, headless UI building blocks (`UiTabs`, `UiSearchBar`, `UiTagBadge`, `UiTable`, `UiPaginationBar`, `UiScrollBox`, `UiImageViewer`, `LayoutPrimitives`).
- **Dedicated Page Views (13 Organisms)**: High-level page layout templates (`UiFormContainer`, `UiTableListPage`, `UiModernGridPage`, `UiPostDetails`, `UiSplitLayout`, `UiDashboardPage`, `UiStatsDashboard`, `UiHeroLanding`, etc.).

---

## 1. Composition Paradigm

Dedicated Page Views act as structural hosts that consume Primitive Components within their props, slots, and child data bindings.

### Architectural Hierarchy

- **Host (Dedicated Page View)**: Renders the page grid and Shadow DOM host (e.g. `UiFormContainer`).
- **Slots & Sub-components (Primitives)**:
  - `UiTabs`: Tab switcher for multi-mode forms ("Sign In" / "Create Account").
  - `UiSearchBar`: Input filter query binding.
  - `UiToast`: Cross-frame feedback notifications.

### Veneer Spec Composition Snippet

```scss
reconstruct "#auth-card" -> UiFormContainer {
    title: "Developer Portal Login";
    subTitle: "Enter credentials to access workspace";

    // Nesting UiTabs primitive inside UiFormContainer
    child tabs extends UiTabs {
        selector: "ul.form-tabs li";
        bind id: "a | attr:data-tab";
        bind label: "a | text";
    }

    // Nesting UiSearchBar primitive inside form filter
    child searchFilter extends UiSearchBar {
        selector: "form.search-box";
        bind defaultValue: "input[name='q'] | attr:value";
    }
}
```

---

## 2. Interactive Component Compatibility Matrix

The matrix below defines which Primitive Components are supported as child slots, sub-components, or data bindings inside each Dedicated Page View:

| Dedicated Component (Host) | Compatible Primitives | Slot / Prop Key | Use Case & Code Example |
| :--- | :--- | :--- | :--- |
| **`UiFormContainer`** | `UiTabs`, `UiSearchBar`, `UiTagBadge`, `UiToast` | `tabs`, `children`, `hiddenInputs` | Multi-tab auth card with embedded search filters and notification toasts. |
| **`UiModernGridPage`** | `UiSearchBar`, `UiTagBadge`, `UiPaginationBar`, `UiImageCard` | `tagGroups`, `items`, `pageLinks` | Gallery grid with search bar, tag sidebar, and floating pagination. |
| **`UiTableListPage`** | `UiTable`, `UiSearchBar`, `UiPaginationBar`, `UiTagBadge` | `columns`, `tableRows`, `pageLinks` | Dense tabular list view with search input, badge columns, and pagination. |
| **`UiPostDetails`** | `UiImageViewer`, `UiTagBadge`, `UiScrollBox`, `UiToast` | `mediaItem`, `tags`, `sidebar` | Article detail page with click-to-zoom hero media, metadata sidebar, and tags. |
| **`UiSplitLayout`** | `UiScrollBox`, `UiImageViewer`, `UiTagBadge`, `UiTable` | `mainHtml`, `tags`, `buttons` | Dual-pane split view combining scrollable main HTML and metadata sidebar. |
| **`UiDashboardPage`** | `UiTable`, `UiTagBadge`, `UiToast` | `cards`, `tableRows` | Operational dashboard displaying metric cards, status tags, and alert toasts. |
| **`UiStatsDashboard`** | `UiTable`, `UiTagBadge`, `UiPaginationBar` | `sections`, `items` | Analytics leaderboards with date range filters and ranking tables. |
| **`UiHeroLanding`** | `UiSearchBar`, `UiTagBadge`, `UiImageCard` | `primaryLinks`, `search` | Hero landing view with site logo, CTA button, search bar, and link pills. |

---

## 3. Composition `.vnr` Code Recipes

### Recipe 1: `UiFormContainer` + `UiTabs` (Tabbed Auth Form)

```scss
reconstruct "#auth-card" -> UiFormContainer {
    title: "Developer Portal Login";
    subTitle: "Enter credentials to access workspace";

    // Composing UiTabs primitive for mode switching
    child tabs extends UiTabs {
        selector: "ul.form-tabs li";
        bind id: "a | attr:data-tab";
        bind label: "a | text";
    }

    child fields {
        selector: "form input.field";
        bind id: "self | attr:name";
        bind label: "label | text";
        bind type: "self | attr:type";
    }
}
```

### Recipe 2: `UiModernGridPage` + `UiSearchBar` + `UiTagBadge` + `UiPaginationBar`

```scss
reconstruct "#catalog-grid" -> UiModernGridPage {
    pageTitle: "Resource Catalog";
    searchPlaceholder: "Search resources...";
    searchSubmitUrl: "/resources/search";

    // Composing UiImageCard primitives inside items grid
    child items {
        selector: ".resource-card";
        bind id: "self | attr:id";
        bind title: "h3.title | text";
        bind imageUrl: "img.cover | attr:src";
        bind linkUrl: "a.details | attr:href";
    }

    // Composing UiTagBadge primitives in sidebar
    child tags extends UiTagBadge {
        selector: "#sidebar-tags a";
        bind label: "self | text";
        bind count: "span.badge-count | text";
    }

    // Composing UiPaginationBar primitive at bottom
    child pageLinks extends UiPaginationBar {
        scope: "document";
        selector: "#pagination-footer a";
        bind label: "self | text";
        bind url:   "self | attr:href";
    }
}
```
