import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{r as t,t as n}from"./vendor-react-blWa-pWN.js";import{t as r}from"./vendor-marked-CCiCWKfQ.js";import{t as i}from"./codeHighlighter-BdVj3Exg.js";var a="# LayoutPrimitives\n\n## Purpose & Use Cases\n\nLayout Primitives are foundational, lightweight React structural components (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`, `UiText`, `UiImage`, `UiLink`, `UiScrollBox`) defined in `primitives/LayoutPrimitives.tsx`. They provide generic HTML layout primitives for constructing custom UI views without hardcoding visual styles or visual overrides.\n\n## Component Overview\n\n| Primitive | Underlying HTML Element | Key Props | Description |\n| :--- | :--- | :--- | :--- |\n| `UiBox` | `<div>` | `className`, `children` | Generic container block wrapper for borders, padding, and layout bounds. |\n| `UiFlexRow` | `<div>` (flex row) | `className`, `children` | Horizontal Flexbox row container (`flex flex-row`). |\n| `UiFlexColumn` | `<div>` (flex col) | `className`, `children` | Vertical Flexbox column container (`flex flex-col`). |\n| `UiGrid` | `<div>` (grid layout) | `className`, `children` | CSS Grid container (`grid`). |\n| `UiText` | `<span>` | `className`, `content` | Inline text span for rendering dynamic text content. |\n| `UiImage` | `<img>` | `className`, `src`, `alt` | Standard image element for rendering responsive media. |\n| `UiLink` | `<a>` | `className`, `href`, `children` | Standard hyperlink element for navigation links. |\n| `UiScrollBox` | `<div>` (scrollable) | `height`, `maxHeight`, `overflow` | Scrollable container box with explicit overflow and height controls. |\n\n## Properties (Props API)\n\n### `PrimitiveProps` (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `className` | `string` | `undefined` | CSS class string appended to root container. |\n| `children` | `React.ReactNode` | `undefined` | Nested child components or elements. |\n| `...props` | `HTMLAttributes<HTMLDivElement>` | - | Standard HTML `div` attributes forwarded to element. |\n\n### `UiText` (`TextProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `content` | `string` | `undefined` | Dynamic text content string rendered inside `<span>`. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `...props` | `HTMLAttributes<HTMLSpanElement>` | - | Standard HTML `span` attributes forwarded to element. |\n\n### `UiImage` (`ImageProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `src` | `string` | `undefined` | Source URL of image. |\n| `alt` | `string` | `undefined` | Alternative text description for image. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `...props` | `ImgHTMLAttributes<HTMLImageElement>` | - | Standard HTML `img` attributes forwarded to element. |\n\n### `UiLink` (`LinkProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `href` | `string` | `undefined` | Target destination hyperlink URL. |\n| `className` | `string` | `undefined` | Custom CSS class string. |\n| `children` | `React.ReactNode` | `undefined` | Link label or child elements. |\n| `...props` | `AnchorHTMLAttributes<HTMLAnchorElement>` | - | Standard HTML `a` attributes forwarded to element. |\n\n### `UiScrollBox` (`ScrollBoxProps`)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `height` | `string` | `undefined` | Explicit container height (e.g. `'300px'`, `'100%'`). |\n| `maxHeight` | `string` | `undefined` | Container maximum height constraint. |\n| `overflow` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `'auto'` | CSS overflow behavior. |\n| `overflowX` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `undefined` | Horizontal overflow behavior. |\n| `overflowY` | `'auto' \\| 'scroll' \\| 'hidden' \\| 'visible'` | `undefined` | Vertical overflow behavior. |\n| `className` | `string` | `''` | Custom CSS class string. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\nLayout Primitives are unstyled structural components. They accept styling via `className` and `style` properties, seamlessly inheriting SPM theme design tokens:\n- `var(--spm-bg-primary)`, `var(--spm-bg-secondary)`, `var(--spm-bg-tertiary)`\n- `var(--spm-text-primary)`, `var(--spm-text-secondary)`, `var(--spm-text-muted)`\n- `var(--spm-border)`, `var(--spm-radius)`, `var(--spm-accent)`\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct \"#custom-panel\" -> UiFlexColumn {\n    className: \"my-custom-panel\";\n    \n    child header -> UiFlexRow {\n        className: \"panel-header\";\n        child title -> UiText {\n            content: \"Panel Title\";\n        }\n    }\n\n    child image -> UiImage {\n        bind src: \"img | attr:src\";\n        bind alt: \"img | attr:alt\";\n    }\n\n    child link -> UiLink {\n        bind href: \"a | attr:href\";\n        child text -> UiText {\n            content: \"View Details\";\n        }\n    }\n}\n```\n",o='# UiCommentListPage\n\n## Purpose & Use Cases\n\n`UiCommentListPage` modernizes comment discussion feeds and message boards. It renders thread cards displaying post thumbnails, post metadata (author, date, rating, score), tag badges, speech-bubble reply threads (`UiCommentReply`), header title, and bottom pagination controls (`UiPaginationBar`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Comments\'` | Title text displayed in header bar. |\n| `threads` | `CommentThread[]` | `[]` | List of comment thread items containing post metadata and replies array. |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `showThumbnails` | `boolean` | `true` | Whether to render thread thumbnail image containers. |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `CommentThread` Schema\n\n- `id`: `string` - Unique thread identifier.\n- `thumbnailUrl`: `string` (optional) - Image thumbnail associated with post.\n- `postUrl`: `string` - Target link to main post page.\n- `postDate`: `string` - Post creation date text.\n- `postUser`: `string` - Original poster username.\n- `postRating`: `string` - Post rating descriptor (e.g. `\'Safe\'`).\n- `postScore`: `string` - Post popularity/score count.\n- `tags`: `TagItem[]` (optional) - Array of associated tag badges (`label`, `url`, `type`).\n- `comments`: `CommentItem[]` (optional) - Array of user replies (`author`, `authorUrl`, `date`, `body`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Page background color.\n- `var(--spm-bg-secondary)` - Thread card background color.\n- `var(--spm-bg-tertiary)` - Speech bubble reply background color.\n- `var(--spm-border)` - Thread border and speech bubble outline color.\n- `var(--spm-text-primary)` - Comment body text color.\n- `var(--spm-text-secondary)` - Author username text color.\n- `var(--spm-text-muted)` - Date stamp and post metadata text color.\n- `var(--spm-accent)` - Author link hover color and accent badges.\n- `var(--spm-radius)` - Border radius of speech bubbles and thread cards.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(#comment-list)" -> UiCommentListPage {\n    urlPattern: "page=comment&s=list";\n    pageTitle: "Comments";\n    height: "calc(100vh - 78px)";\n\n    child threads {\n        selector: "#comment-list > div.post";\n        bind id: "self | attr:id";\n        bind thumbnailUrl: ".col1 img | attr:src";\n        bind postUrl: ".col1 a | attr:href";\n        bind postDate: ".col2 span.info:nth-child(1) | text";\n        bind postUser: ".col2 span.info:nth-child(2) | text";\n        bind postRating: ".col2 span.info:nth-child(3) | text";\n        bind postScore: ".col2 span.info:nth-child(4) | text";\n\n        child tags {\n            selector: ".col2 .tags span";\n            bind label: "a | text";\n            bind url: "a | attr:href";\n            bind type: "self | attr:class";\n        }\n\n        child comments {\n            selector: ".response-list div.post";\n            bind author: ".author h6 a | text";\n            bind authorUrl: ".author h6 a | attr:href";\n            bind date: ".author span.date | text";\n            bind body: ".content .body | text";\n        }\n    }\n\n    child pageLinks extends DocumentLink {\n        selector: "#paginator .pagination a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',s='# UiDashboardPage\n\n## Purpose & Use Cases\n\n`UiDashboardPage` provides a card-based dashboard layout component suitable for user account control panels, settings menus, options hubs, and administrative pages. It features a header section with page title and optional subtitle, and a responsive grid of action cards (`DashboardCard`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Dashboard\'` | Title text displayed in header bar. |\n| `subTitle` | `string` | `undefined` | Optional subtitle description text rendered below title. |\n| `cards` | `DashboardCard[]` | `[]` | List of dashboard card objects (`{ title, description, url, urlLabel }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `DashboardCard` Schema\n\n- `title`: `string` - Main title of the option card.\n- `description`: `string` (optional) - Explanation or body text describing card action.\n- `url`: `string` - Target URL destination for card action button.\n- `urlLabel`: `string` (optional) - Custom button text label (defaults to `\'Open\'`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Layout background color.\n- `var(--spm-bg-secondary)` - Header bar and card background color.\n- `var(--spm-border)` - Border color for cards and header divider line.\n- `var(--spm-text-primary)` - Header title and card heading text color.\n- `var(--spm-text-secondary)` - Subtitle and card description text color.\n- `var(--spm-accent)` - Card action button background and hover color.\n- `var(--spm-accent-text)` - Text color for card action buttons.\n- `var(--spm-radius)` - Border radius of dashboard cards and action buttons.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#user-index" -> UiDashboardPage {\n    urlPattern: "page=account&s=home";\n    pageTitle: "My Account Home";\n    subTitle: "Manage your settings, options, and account status.";\n    height: "calc(100vh - 78px)";\n\n    child cards {\n        selector: "#user-index h4";\n        bind title: "self | text";\n        bind url: "a | attr:href";\n        bind urlLabel: "a | text";\n        bind description: "self | nextSiblingText";\n    }\n}\n```\n',c="# `UiDevDiagnosticPanel` Component Specification\n\n- **Component Name**: `UiDevDiagnosticPanel`\n- **Category**: Dedicated Layout Component\n- **Source File**: `src/components/dedicated/UiDevDiagnosticPanel.tsx`\n- **Registry Key**: `UiDevDiagnosticPanel`\n\n---\n\n## 1. Overview & Purpose\n\n`UiDevDiagnosticPanel` is an isolated developer overlay component designed to monitor runtime modernization health, missing DOM selectors, WebSocket hot-reloading events, and system notifications during extension development mode (`isDev`).\n\nIt renders as an encapsulated dark surface drawer (`#09090b` / `#000000`) inside a dedicated Shadow DOM root (`#spm-dev-diagnostic-host`), ensuring 100% style isolation from host website CSS or user theme variables.\n\n---\n\n## 2. Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `items` | `DevDiagnosticItem[]` | `[]` | List of diagnostic events (`id`, `type`, `severity`, `title`, `message`, `details`, `timestamp`, `occurrenceCount`). |\n| `onClear` | `() => void` | `undefined` | Callback invoked when the user clicks the \"Clear\" button. |\n| `initialExpanded` | `boolean` | `false` | Initial state of the drawer expansion. |\n| `className` | `string` | `''` | Custom CSS class name. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `DevDiagnosticItem` Schema\n\n- `id`: `string` - Unique identifier for the diagnostic entry.\n- `type`: `'MISSING_SELECTOR' \\| 'BUILD_ERROR' \\| 'WEBSOCKET_DISCONNECTED' \\| 'SYSTEM_INFO'` - Diagnostic event category.\n- `severity`: `'warning' \\| 'error'` - Severity level determining badge indicator color.\n- `title`: `string` - Technical summary heading.\n- `message`: `string` - Detailed description or seletor name.\n- `details`: `string` (optional) - Additional technical stack trace or context.\n- `timestamp`: `number` - Epoch timestamp of the event.\n- `occurrenceCount`: `number` (optional) - Deduplication count for duplicate events (renders `xN` badge).\n\n---\n\n## 3. Design Tokens (SPM Extension System Surface)\n\n- `var(--spm-system-bg)` / `#09090b` - Main drawer background color.\n- `var(--spm-system-header)` / `#000000` - Header bar background color.\n- `var(--spm-system-border)` / `rgba(255, 255, 255, 0.15)` - Border divider color.\n- `var(--spm-system-text)` / `#ffffff` - Primary text color.\n- `var(--spm-system-muted)` / `#a1a1aa` - Muted metadata text color.\n- `var(--spm-system-active-line)` / `#ffffff` - Active tab underline border.\n\n---\n\n## 4. Usage Example\n\n```tsx\nimport { UiDevDiagnosticPanel } from 'spm-components';\n\n<UiDevDiagnosticPanel\n  items={[\n    {\n      id: 'diag-1',\n      type: 'MISSING_SELECTOR',\n      severity: 'warning',\n      title: 'Missing Selector',\n      message: 'table.legacy-grid -> UiTableListPage',\n      timestamp: Date.now(),\n      occurrenceCount: 2,\n    }\n  ]}\n  onClear={() => console.log('Diagnostics cleared')}\n/>\n```\n",l='# `UiFormContainer` Component Specification\n\n- **Component Name**: `UiFormContainer`\n- **Category**: Dedicated Layout Component\n- **Source File**: `src/components/dedicated/UiFormContainer.tsx`\n- **Registry Key**: `UiFormContainer`\n\n---\n\n## 1. Overview & Purpose\n\n`UiFormContainer` is a dedicated layout component used to modernize legacy HTML input forms, search bars, authentication forms, and submission forms into a clean, accessible card container.\n\nIt encapsulates form inputs, handles form submission events, forwards hidden input fields automatically, styles submit buttons using SPM design tokens, and supports multi-tab form switching (e.g. Login / Register mode toggling).\n\n---\n\n## 2. Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `title` | `string` | `undefined` | Header title text above the form. |\n| `subTitle` | `string` | `undefined` | Subtitle description text. |\n| `actionUrl` | `string` | `\'\'` | Target URL for form submission. |\n| `method` | `string` | `\'POST\'` | Form HTTP submission method (`GET`, `POST`). |\n| `fields` | `FormField[]` | `[]` | Form field configurations (`id`, `label`, `type`, `defaultValue`, `placeholder`, `required`, `options`). |\n| `submitLabel` | `string` | `\'Submit\'` | Text label for the submission button. |\n| `hiddenInputs` | `Record<string, string>` | `{}` | Key-value map of hidden form fields to forward upon submission. |\n| `tabs` | `FormTab[]` | `[]` | Multi-tab form configuration array (`id`, `label`, `title`, `subTitle`, `submitLabel`, `actionUrl`, `method`, `fields`, `hiddenInputs`). |\n| `activeTabId` | `string` | `undefined` | Initial active tab ID when `tabs` is provided. |\n| `className` | `string` | `\'\'` | Custom CSS class name. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### Interface: `FormTab`\n```typescript\nexport interface FormTab {\n  id: string;\n  label: string;\n  title?: string;\n  subTitle?: string;\n  submitLabel?: string;\n  actionUrl?: string;\n  method?: string;\n  fields?: FormField[];\n  hiddenInputs?: Record<string, string>;\n}\n```\n\n---\n\n## 3. Veneer Spec (.vnr) Example\n\n### Single Form Mode\n```vnr\nreconstruct "form#login-form" -> UiFormContainer {\n    title: "Account Login";\n    subTitle: "Enter your credentials to continue.";\n    actionUrl: "/login.php";\n    method: "post";\n    submitLabel: "Log In";\n}\n```\n\n### Multi-Tab Auth Mode (Login / Register Toggle)\n```vnr\nreconstruct "div.auth-container" -> UiFormContainer {\n    activeTabId: "login";\n\n    tabs: [\n        {\n            id: "login",\n            label: "Login",\n            title: "Access Account",\n            subTitle: "Welcome back!",\n            actionUrl: "/login",\n            submitLabel: "Log In"\n        },\n        {\n            id: "register",\n            label: "Create Account",\n            title: "Join Us",\n            subTitle: "Create your new account today.",\n            actionUrl: "/register",\n            submitLabel: "Register"\n        }\n    ];\n}\n```\n',u='# UiHeroLanding\n\n## Purpose & Use Cases\n\n`UiHeroLanding` provides a full-viewport landing page hero component for modernized index pages. It features a brand header (logo or fallback site name), tagline headline, subtext summary, prominent Call-To-Action (CTA) button, an integrated search bar (`UiSearchBar`), and quick-navigation link pills.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `siteName` | `string` | `undefined` | Fallback brand name text displayed when no logo image is supplied. |\n| `logoUrl` | `string` | `undefined` | Optional image URL for brand logo. |\n| `logoHref` | `string` | `\'/\'` | Target destination URL when clicking logo. |\n| `tagline` | `string` | `undefined` | Main hero headline text. |\n| `subtext` | `string` | `undefined` | Subtitle description text rendered below tagline. |\n| `ctaLabel` | `string` | `undefined` | Primary call-to-action button label. |\n| `ctaUrl` | `string` | `undefined` | Destination URL for CTA button. |\n| `searchPlaceholder` | `string` | `undefined` | Placeholder text for embedded search bar. |\n| `searchSubmitUrl` | `string` | `undefined` | Form submit action URL for search bar. |\n| `searchParamName` | `string` | `undefined` | Query string parameter key for search field (e.g., `\'q\'`, `\'search\'`). |\n| `primaryLinks` | `NavLink[]` | `[]` | List of pill navigation links (`{ label: string, url: string }`). |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Hero section full viewport background color.\n- `var(--spm-bg-secondary)` - Background color for link pills and container elements.\n- `var(--spm-border)` - Border color for link pills and input borders.\n- `var(--spm-text-primary)` - Main tagline heading color.\n- `var(--spm-text-secondary)` - Subtext description text color.\n- `var(--spm-text-muted)` - Subtitle and helper label text color.\n- `var(--spm-accent)` - Primary CTA button background color.\n- `var(--spm-accent-text)` - Primary CTA button text color.\n- `var(--spm-radius)` - Border radius for CTA button, input fields, and link pills.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#static-index" -> UiHeroLanding {\n    urlPattern: R"(spm\\.dev\\/?$)";\n    tagline: "Modern Component Platform";\n    subtext: "High-performance modular web component architecture and documentation engine.";\n    ctaLabel: "Get Started";\n    ctaUrl: "/docs/overview";\n    searchPlaceholder: "Search components... (e.g. UiSplitLayout, UiNavHeader)";\n    searchSubmitUrl: "/docs/search";\n    searchParamName: "q";\n\n    bind siteName: "img[alt=\'SPM Platform\'] | attr:alt";\n    bind logoUrl: "img[alt=\'SPM Platform\'] | attr:src";\n\n    child primaryLinks extends NavLink {\n        selector: "#links a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',d="# UiImageCard\n\n## Purpose & Use Cases\n\n`UiImageCard` renders thumbnail card items for gallery feeds, grid layouts, and search results. It supports customizable aspect ratios (`square`, `video`, `portrait`, `auto`), hover scaling effects, object-fit options (`cover`, `contain`), optional title captions, and CSS variable custom width overrides.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `imageUrl` | `string` | **Required** | Source URL for card thumbnail image. |\n| `linkUrl` | `string` | **Required** | Target hyperlink URL when clicking card. |\n| `title` | `string` | **Required** | Title text used for caption and tooltip attributes. |\n| `id` | `string` | **Required** | Unique DOM identifier assigned to card element. |\n| `width` | `string` | `'160px'` | Default width of card container (overridden by `--spm-image-card-width` if defined). |\n| `aspectRatio` | `'square' \\| 'video' \\| 'portrait' \\| 'wide' \\| 'auto'` | `'square'` | Predefined aspect ratio (`square` = 1/1, `video` = 16/9, `portrait` = 3/4, `wide` = 21/9, `auto` = intrinsic). |\n| `imageFit` | `'cover' \\| 'contain'` | `'cover'` | CSS `object-fit` property applied to image. |\n| `showTitle` | `boolean` | `true` | Toggles rendering of bottom title caption block. |\n| `className` | `string` | `''` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### Aspect Ratio Controls & Presets\n\n`UiImageCard` enforces geometric proportions across gallery grid items to eliminate cumulative layout shift (CLS):\n- `square` (default): 1:1 aspect ratio (`aspectRatio: '1 / 1'`), standard for avatars and media post grids.\n- `video`: 16:9 widescreen format (`aspectRatio: '16 / 9'`), ideal for video thumbnails and horizontal photography.\n- `portrait`: 3:4 vertical poster format (`aspectRatio: '3 / 4'`), standard for book covers and portrait art.\n- `wide`: 21:9 ultra-wide banner format (`aspectRatio: '21 / 9'`), suited for panoramic banners.\n- `auto`: Intrinsic image aspect ratio without container constraint (`aspectRatio: 'auto'`).\n\n### Broken Image Fallback Behavior\n\nIf the source `imageUrl` fails to load, returns a 404 HTTP status, or is invalid, `UiImageCard` catches the image `onError` event and automatically falls back to rendering a standardized placeholder SVG icon (`UiImage` fallback) with neutral styling to prevent browser broken image icon glitches.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-image-card-width)` - Custom variable controlling card width dynamically.\n- `var(--spm-bg-secondary)` - Card background color.\n- `var(--spm-border)` - Default card border color.\n- `var(--spm-text-primary)` - Title text color.\n- `var(--spm-text-secondary)` - Hover title text color.\n- `var(--spm-accent)` - Hover state border color.\n- `var(--spm-radius)` - Border radius of card container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild items -> UiImageCard {\n    selector: \"#post-list .thumb\";\n    width: \"180px\";\n    aspectRatio: \"square\";\n    imageFit: \"cover\";\n    showTitle: true;\n\n    bind imageUrl: \"img | attr:src\";\n    bind linkUrl: \"a | attr:href\";\n    bind title: \"img | attr:title\";\n    bind id: \"self | attr:id\";\n}\n```\n",f="# UiImageViewer\n\n## Purpose & Use Cases\n\n`UiImageViewer` renders a full-container responsive image view. It centers the image within parent dimensions, applies CSS `object-fit` constraints (`contain` or `cover`), auto-detects extreme aspect ratios (> 2.2:1 or < 0.5:1) to automatically fallback from `cover` to `contain` preventing severe cropping, provides interactive click-to-zoom and fit toggle controls, supports customizable background fill colors, and displays a graceful fallback state when no source image is provided.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `src` | `string` | `undefined` | Source URL of image to display. |\n| `alt` | `string` | `''` | Alt text for image element. |\n| `fit` | `'contain' \\| 'cover'` | `'contain'` | CSS `object-fit` sizing behavior (`contain` keeps full image visible, `cover` fills bounds). |\n| `imageFit` | `'contain' \\| 'cover'` | `undefined` | Alias for `fit` with precedence over `fit`. |\n| `background` | `string` | `var(--spm-bg-primary)` | Container background color. |\n| `className` | `string` | `''` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `enableZoom` | `boolean` | `true` | Enables click-to-zoom on image and overlay toggle fit button. |\n| `onFitChange` | `(fit: 'contain' \\| 'cover') => void` | `undefined` | Callback fired when user toggles fit mode. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Default viewer background color.\n- `var(--spm-bg-secondary)` - Background color for floating controls.\n- `var(--spm-border)` - Border color for floating controls.\n- `var(--spm-text-primary)` - Text color for floating controls.\n- `var(--spm-text-muted)` - Text color displayed when image source is missing.\n- `var(--spm-radius)` - Border radius for floating controls.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild imageSlot -> UiImageViewer {\n    selector: \"#image\";\n    fit: \"contain\";\n    enableZoom: true;\n\n    bind src: \"self | attr:src\";\n    bind alt: \"self | attr:alt\";\n}\n```\n\n",p='# UiModernGridPage\n\n## Purpose & Use Cases\n\n`UiModernGridPage` provides a comprehensive gallery page layout. It combines a responsive thumbnail grid (`UiImageCard`), a sidebar panel supporting grouped tag lists (`tagGroups`) or raw HTML, an integrated search bar (`UiSearchBar`), page title header, and bottom pagination controls (`UiPaginationBar`). Includes responsive mobile drawer/column adaptation.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | **Required** | Title displayed at top of gallery feed. |\n| `items` | `GridItem[]` | **Required** | Array of image thumbnail items (`{ imageUrl, linkUrl, title, id }`). |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `sidebarHtml` | `string` | `undefined` | Raw HTML content fallback for sidebar slot. |\n| `tags` | `TagItem[]` | `[]` | List of tag badges rendered in sidebar. |\n| `tagGroups` | `TagGroupConfig[]` | `[]` | Group definitions (`{ title: string, typeKey: string }`) to organize tags into categorized sections. |\n| `showSearch` | `boolean` | `false` | Enables embedded search bar. |\n| `searchPlaceholder` | `string` | `undefined` | Placeholder text for search field. |\n| `searchSubmitUrl` | `string` | `undefined` | Form submit action URL for search field. |\n| `searchParamName` | `string` | `\'q\'` | Search field query string parameter key. |\n| `searchDefaultValue` | `string` | `\'\'` | Initial search query string. |\n| `height` | `string` | `\'100vh\'` | Height constraint of gallery container. |\n| `sidebarWidth` | `string` | `\'280px\'` | Width of sidebar panel. |\n| `hideSidebarOnMobile` | `boolean` | `true` | Hides sidebar panel on narrow viewports. |\n| `mobileBreakpoint` | `number` | `720` | Responsive mobile width threshold in pixels. |\n| `mobileColumns` | `number` | `2` | Number of grid columns on mobile screens. |\n| `mobileGap` | `string` | `\'8px\'` | Grid gap spacing on mobile screens. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Grid page background color.\n- `var(--spm-bg-secondary)` - Header bar and sidebar background color.\n- `var(--spm-border)` - Divider line border color.\n- `var(--spm-text-primary)` - Gallery title text color.\n- `var(--spm-text-muted)` - Empty feed notification text color.\n- `var(--spm-accent)` - Hover accent border and active indicators.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#post-list" -> UiModernGridPage {\n    urlPattern: "page=post&s=list";\n    pageTitle: "Gallery";\n    height: "calc(100vh - 78px)";\n    sidebarWidth: "260px";\n    hideSidebarOnMobile: true;\n    showSearch: true;\n    searchPlaceholder: "Filter items…";\n    searchSubmitUrl: "/docs/search";\n    searchParamName: "q";\n\n    mobileBreakpoint: 720;\n    mobileColumns: 2;\n    mobileGap: "8px";\n\n    tagGroups: R"([\n      { "title": "Modules", "typeKey": "modules" },\n      { "title": "Technology", "typeKey": "technology" },\n      { "title": "Status", "typeKey": "status" },\n      { "title": "Tags", "typeKey": "tags" }\n    ])";\n\n    bind searchDefaultValue: ".sidebar form input[name=\'q\'] | attr:value";\n\n    child items {\n        selector: "#post-list .thumb";\n        bind imageUrl: "img | attr:src";\n        bind linkUrl: "a | attr:href";\n        bind title: "img | attr:title";\n        bind id: "self | attr:id";\n    }\n\n    child pageLinks extends StandardLink {\n        selector: "#paginator .pagination a";\n    }\n\n    child tags extends TagItem {\n        selector: "#tag-sidebar li";\n        bind addUrl: "a:nth-of-type(2) | attr:href";\n        bind removeUrl: "a:nth-of-type(3) | attr:href";\n    }\n}\n```\n',m='# UiNavHeader\n\n## Purpose & Use Cases\n\n`UiNavHeader` provides a responsive, customizable site header component for modernized layouts. It renders a brand identity section (logo image or fallback site name text) on the left, primary navigation links centered in the middle, secondary action/utility links (such as login/user status) on the right, and supports multiple layout configurations (`standard`, `stacked`, `minimal`). It includes active URL matching logic to highlight current navigation routes automatically using CSS `color-mix()` based on `var(--spm-accent)`.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `siteName` | `string` | `\'Site\'` | Fallback site title text displayed when no logo image URL is provided. |\n| `logoUrl` | `string` | `undefined` | Optional image URL for site logo. |\n| `logoHref` | `string` | `\'/\'` | Target URL when clicking logo or site title. |\n| `primaryLinks` | `NavLink[]` | `[]` | Primary navigation items centered in main bar (`{ label: string, url: string }`). |\n| `secondaryLinks` | `NavLink[]` | `[]` | Secondary/user action items aligned to right corner (`{ label: string, url: string }`). |\n| `items` | `NavLink[]` | `[]` | Alias for `primaryLinks` navigation items array. |\n| `extraHtml` | `string` | `undefined` | Sanitized raw HTML block rendered on the right side of the navigation bar. |\n| `layout` | `\'standard\' \\| \'stacked\' \\| \'minimal\'` | `\'standard\'` | Header layout variant (`standard` = single bar with centered links, `stacked` = 2-tier header bar with secondary actions on top and primary nav on bottom, `minimal` = compact brand-only container). |\n| `sticky` | `boolean` | `false` | When `true`, fixes navigation header to top of viewport during scrolling with blur backdrop filter. |\n| `hideOnMobile` | `boolean` | `false` | When `true`, hides navigation header on viewports narrower than `mobileBreakpoint`. |\n| `mobileBreakpoint` | `number` | `720` | Pixel width threshold for mobile responsive hiding. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### Layout Variants\n\n- `"standard"`: Single-row header bar containing brand logo/title on the left, primary navigation links centered in the middle, and secondary action links / extra HTML aligned to the right.\n- `"stacked"`: 2-tier header bar layout. Top tier contains brand logo/title and secondary user action links; bottom tier features a dedicated, horizontally scrollable primary navigation bar.\n- `"minimal"`: Compact single-row container that centers the brand logo/title, hiding primary and secondary navigation links.\n\n### Sticky Navigation Behavior\n\nWhen `sticky={true}` (or `sticky: true` in `.vnr`), `UiNavHeader` attaches to the top of the viewport (`top: 0`) and remains fixed in view while the user scrolls down the page.\n\nThe following CSS rules are applied to the header root element:\n```css\nposition: sticky;\ntop: 0;\nz-index: 1000;\nbackdrop-filter: blur(12px);\n-webkit-backdrop-filter: blur(12px);\n```\n\nThis creates a modern semi-translucent frosted glass effect using `rgba(18, 18, 21, 0.92)` with blur, ensuring navigation links and brand identity remain continuously accessible without obstructing visibility of the underlying scrolling page content.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-surface)` - Background color of header bar container (`rgba(18, 18, 21, 0.92)`).\n- `var(--spm-accent)` - Dynamic accent color for active link text, bottom indicator line, pill background, and glow.\n- `var(--spm-border)` - Outer border color of header bar container (`1px solid var(--spm-border)`).\n- `var(--spm-text-primary)` - Site title text color.\n- `var(--spm-text-muted)` - Inactive navigation link color.\n- `var(--spm-radius)` - Border radius for nav container (`var(--spm-radius, 8px)`) and nav link pills (`6px`).\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#header" -> UiNavHeader {\n    siteName: "SPM Portal";\n    logoHref: "/";\n    layout: "stacked";\n    sticky: true;\n    hideOnMobile: false;\n\n    bind logoUrl: "#logo img | attr:src";\n\n    child primaryLinks extends NavLink {\n        selector: "#navbar ul.main-nav a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n\n    child secondaryLinks extends NavLink {\n        selector: "#navbar ul.user-nav a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',h=`# UiNestedTreeTable

The \`UiNestedTreeTable\` component provides an expandable/collapsible hierarchical tree table for rendering structured data such as file directories, nested categories, or legacy Bill-of-Materials (BOM) trees.

## Props Interface

\`\`\`typescript
export interface TreeNode {
  id: string;
  label: string;
  values?: Record<string, string>;
  children?: TreeNode[];
  icon?: string;
}

export interface TreeColumn {
  key: string;
  title: string;
  width?: string;
}

export interface UiNestedTreeTableProps {
  title?: string;
  columns?: TreeColumn[];
  data?: TreeNode[];
  expandedDepth?: number;
  className?: string;
  style?: React.CSSProperties;
}
\`\`\`

## Veneer Spec (.vnr) Example

\`\`\`vnr
reconstruct "#legacy-bom-table" -> UiNestedTreeTable {
  title: "Bill of Materials Hierarchy";
  expandedDepth: 2;
}
\`\`\`

## Theme Variables Used
- \`--spm-bg-surface\`, \`--spm-bg-primary\`, \`--spm-bg-secondary\`
- \`--spm-text-primary\`, \`--spm-border\`, \`--spm-radius\`
`,g='# UiPaginationBar\n\n## Purpose & Use Cases\n\n`UiPaginationBar` renders page navigation links for paginated feeds, lists, and search results. It parses incoming `pageLinks` data, determines page offset values automatically based on query parameters (such as `pid` or `page`), renders Previous/Next controls, and highlights the currently active page.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageLinks` | `PageLink[]` | `[]` | List of page link objects (`{ label: string, url: string }`). |\n| `paramName` | `string` | `\'pid\'` | Query parameter key used to derive page offset and active status. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Inactive page button background color.\n- `var(--spm-bg-tertiary)` - Button hover state background color.\n- `var(--spm-border)` - Border color of pagination buttons and container.\n- `var(--spm-text-primary)` - Inactive page number text color.\n- `var(--spm-text-secondary)` - Secondary navigation control label color.\n- `var(--spm-accent)` - Active page button background color and focus border.\n- `var(--spm-accent-text)` - Active page button text color.\n- `var(--spm-radius)` - Border radius of individual page buttons.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild pageLinks extends PageLink -> UiPaginationBar {\n    selector: "#paginator .pagination a";\n    paramName: "pid";\n    bind label: "self | text";\n    bind url: "self | attr:href";\n}\n```\n',_=`# UiPostDetails

The \`UiPostDetails\` component provides a split layout for displaying detailed view pages, such as image board posts, article details, or media inspect views. It includes a metadata sidebar (tag groups, search bar, statistics) and a main content viewport with action buttons.

## Props Interface

\`\`\`typescript
export interface TagItem {
  name: string;
  count: string;
  type: string;
  url: string;
  addUrl?: string;
  removeUrl?: string;
}

export interface GenericButtonItem {
  label: string;
  url: string;
  targetSelector?: string;
  iconSvg?: string;
}

export interface TagGroupConfig {
  title: string;
  typeKey: string;
}

export interface UiPostDetailsProps {
  imageUrl: string;
  imageAlt?: string;
  tags?: TagItem[];
  tagGroups?: TagGroupConfig[];
  statisticsHtml?: string;
  buttons?: GenericButtonItem[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchSubmitUrl?: string;
  searchParamName?: string;
}
\`\`\`

## Veneer Spec (.vnr) Example

\`\`\`vnr
reconstruct "#post-view" -> UiPostDetails {
  bind imageUrl: "img#main-image | attr:src";
  bind imageAlt: "img#main-image | attr:alt";
  bind statisticsHtml: "#stats-block | html";
  
  child tags {
    selector: "#tag-sidebar li";
    bind name: "a.tag-name | text";
    bind count: "span.count | text | cleanNumber";
    bind type: "self | attr:class";
    bind url: "a.tag-name | hrefOrOnclick";
  }
}
\`\`\`

## Theme Variables Used
- \`--spm-bg-primary\`, \`--spm-bg-secondary\`, \`--spm-bg-tertiary\`
- \`--spm-text-primary\`, \`--spm-text-muted\`
- \`--spm-accent\`, \`--spm-border\`, \`--spm-radius\`
`,v='# UiScrollPanel\n\n## Purpose & Use Cases\n\n`UiScrollPanel` provides a scrollable sidebar panel for detail views, media inspectors, and layout drawers. It aggregates search input (`UiSearchBar`), dynamic category tag grouping (`UiTagBadge`), categorized action buttons (`ButtonItem[]` automatically styled as `primary` or `ghost`), and raw statistics HTML blocks (`statisticsHtml`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `tags` | `TagItem[]` | `[]` | Array of tag badge objects (`{ name, count, type, url }`). Dynamically grouped into categories based on `type`. |\n| `buttons` | `ButtonItem[]` | `[]` | List of action buttons (`{ label, url, targetSelector }`) automatically classified by label intent (`primary` vs `ghost`). |\n| `statisticsHtml` | `string` | `undefined` | Raw HTML content rendered inside a statistics panel block. |\n| `showSearch` | `boolean` | `false` | Enables integrated search bar at top of panel. |\n| `searchPlaceholder` | `string` | `\'Filter items…\'` | Search field placeholder text. |\n| `searchSubmitUrl` | `string` | `undefined` | Search form action URL target. |\n| `searchParamName` | `string` | `\'q\'` | Search field query parameter name. |\n| `width` | `string` | `\'280px\'` | Fixed or responsive width of panel container. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onClose` | `() => void` | `undefined` | Optional callback executed when close button is clicked. |\n\n### Dynamic Category Tag Grouping\n\n`UiScrollPanel` groups tag items (`TagItem[]`) dynamically by evaluating the `type` field of each item (`(t.type || \'GENERAL\').toUpperCase()`). Each group is rendered under an uppercase section heading:\n\n- `MODULES`: Package and extension component modules.\n- `TECHNOLOGY`: Language, framework, and engine dependencies.\n- `STATUS`: Build status, health checks, and lifecycle states.\n- `TAGS`: Topic labels, keywords, and general categorization.\n\nIf `type` is omitted on a tag item, it is automatically assigned to the `GENERAL` category group.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-surface)` - Panel background color (`#121215`).\n- `var(--spm-bg-element)` - Ghost action button background color (`#1e1e24`).\n- `var(--spm-border)` - Panel divider border color (`#27272a`).\n- `var(--spm-text-primary)` - Primary text color (`#ffffff`).\n- `var(--spm-text-muted)` - Category section header and statistics label text color (`#94a3b8` / `#a1a1aa`).\n- `var(--spm-accent)` - Primary action button background (`#ffffff`).\n- `var(--spm-accent-fg)` - Primary action button text color (`#000000`).\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#sidebar" -> UiScrollPanel {\n    width: "300px";\n    showSearch: true;\n    searchPlaceholder: "Filter modules...";\n    searchSubmitUrl: "/docs/search";\n    searchParamName: "q";\n\n    bind statisticsHtml: "#stats-summary | html";\n\n    child tags extends TagItem {\n        selector: "#meta-sidebar .tag-group-item";\n        bind name: "a.tag-name | text";\n        bind count: "span.tag-count | text";\n        bind type: "self | attr:data-category";\n        bind url: "a.tag-name | attr:href";\n    }\n\n    child buttons extends ButtonItem {\n        selector: "#actions-list a";\n        bind label: "self | text";\n        bind url: "self | hrefOrOnclick";\n        bind targetSelector: "self | selector";\n    }\n}\n```\n',y='# UiSearchBar\n\n## Purpose & Use Cases\n\n`UiSearchBar` provides a styled search input form component supporting GET/POST form target navigation, query parameter binding, hidden form input forwarding, and interactive focus states. It can function as a standalone form element or be embedded within components like `UiScrollPanel`, `UiHeroLanding`, and `UiModernGridPage`.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `placeholder` | `string` | `\'Search…\'` | Placeholder text displayed when input is empty. |\n| `defaultValue` | `string` | `\'\'` | Initial text value populated in search input field. |\n| `submitUrl` | `string` | `undefined` | Target URL action for native browser form submission. |\n| `queryParamName` | `string` | `\'q\'` | The `name` attribute key used for the search text field. |\n| `method` | `\'get\' \\| \'post\' \\| \'GET\' \\| \'POST\'` | `\'GET\'` | HTTP form submission method. |\n| `hiddenFields` | `{ name: string; value: string }[] \\| string` | `[]` | Array or JSON-parsed string of hidden form inputs (`{ name: string, value: string }`) to forward on submit. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to form wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onSearch` | `(value: string) => void` | `undefined` | Optional JS callback executed when form is submitted (prevents default navigation if specified). |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-tertiary)` - Input field container background color.\n- `var(--spm-border)` - Default border color around search input.\n- `var(--spm-text-primary)` - Input text color.\n- `var(--spm-text-muted)` - Placeholder text color and default search icon color.\n- `var(--spm-accent)` - Focused state border color and search submit button hover color.\n- `var(--spm-radius)` - Border radius of search container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#search-box" -> UiSearchBar {\n    placeholder: "Search documentation...";\n    submitUrl: "/docs/search";\n    queryParamName: "q";\n    method: "GET";\n    hiddenFields: R"([\n      { "name": "type", "value": "component" },\n      { "name": "scope", "value": "all" }\n    ])";\n\n    bind defaultValue: "form input[name=\'q\'] | attr:value";\n}\n```\n',b='# UiSplitLayout\n\n## Purpose & Use Cases\n\n`UiSplitLayout` provides a responsive two-column split layout shell for documentation workspaces, detail inspection views, and content managers. It pairs a main view (rendering custom React content via `mainContent`, HTML markup via `mainHtml`, or media via `imageSlot` with `UiImageViewer`) with a sidebar column (`sidebarContent`, `sidebarHtml`, or default `UiScrollPanel`). Supports desktop toggle collapsing (`collapsible`), side positioning (`sidebarSide`: `"left"` | `"right"`), customizable column widths (`sidebarWidth`), image fit modes (`contain` | `cover`), and search forwarding.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `mainContent` | `React.ReactNode` | `undefined` | Custom React node content rendered inside the main viewport area. |\n| `mainHtml` | `string` | `undefined` | HTML markup string rendered inside the main viewport when `mainContent` and `imageSlot` are empty. |\n| `sidebarContent` | `React.ReactNode` | `undefined` | Custom React node content rendered inside the sidebar column. |\n| `sidebarHtml` | `string` | `undefined` | HTML markup string rendered inside the sidebar container when `sidebarContent` is omitted. |\n| `collapsible` | `boolean` | `true` | Enables a desktop toggle handle button to expand or collapse the sidebar column. |\n| `sidebarSide` | `\'left\' \\| \'right\'` | `\'left\'` | Position of sidebar column (`left` or `right`). |\n| `sidebarWidth` | `string` | `\'300px\'` | Width of sidebar panel column. |\n| `imageSlot` | `ImageSlotItem[]` | `[]` | Media image items (`{ src, alt }`) rendered in main view using `UiImageViewer`. |\n| `tags` | `TagItem[]` | `[]` | Forwarded tag items rendered in default sidebar panel. |\n| `buttons` | `ButtonItem[]` | `[]` | Forwarded action buttons rendered in default sidebar panel. |\n| `statisticsHtml` | `string` | `undefined` | Forwarded HTML content string rendered in sidebar statistics block. |\n| `imageFit` | `\'contain\' \\| \'cover\'` | `\'contain\'` | Image object-fit property passed to `UiImageViewer`. |\n| `height` | `string` | `\'100%\'` | Layout container height. |\n| `splitButtons` | `boolean` | `true` | Enables separate button placement layout. |\n| `showSearch` | `boolean` | `false` | Enables search bar in default sidebar panel. |\n| `searchPlaceholder` | `string` | `\'Search documentation…\'` | Forwarded search bar placeholder text. |\n| `searchSubmitUrl` | `string` | `undefined` | Forwarded search bar submission URL. |\n| `searchParamName` | `string` | `\'q\'` | Forwarded query parameter key for search bar. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Main viewing pane background color (`#09090b`).\n- `var(--spm-bg-surface)` - Sidebar column background color (`#121215`).\n- `var(--spm-border)` - Divider border line separating main view and sidebar (`#27272a`).\n- `var(--spm-text-primary)` - Primary text color (`#ffffff`).\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#doc-workspace" -> UiSplitLayout {\n    sidebarWidth: "300px";\n    sidebarSide: "left";\n    collapsible: true;\n    height: "calc(100vh - 64px)";\n    showSearch: true;\n    searchPlaceholder: "Search documentation...";\n    searchSubmitUrl: "/docs/search";\n    searchParamName: "q";\n\n    bind statisticsHtml: "#doc-stats | html";\n    bind mainHtml: "#doc-body | html";\n\n    child tags extends TagItem {\n        selector: "#doc-toc .toc-item";\n        scope: "document";\n        bind name: "a.toc-link | text";\n        bind count: "span.doc-count | text";\n        bind type: "self | attr:data-category";\n        bind url: "a.toc-link | attr:href";\n    }\n\n    child buttons extends ButtonItem {\n        selector: "#doc-actions a";\n        scope: "document";\n        bind label: "self | text";\n        bind url: "self | hrefOrOnclick";\n        bind targetSelector: "self | selector";\n    }\n}\n```\n',x='# UiStatsDashboard\n\n## Purpose & Use Cases\n\n`UiStatsDashboard` provides a metrics and analytics leaderboard layout component. It presents top-ranked metrics and statistical breakdown tables (such as top component usage, active contributors, or build counts) organized into section cards, complete with timeframe badges (`dateRangeText`) and navigation links (`navLinks`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'Statistics\'` | Title text displayed in header bar. |\n| `dateRangeText` | `string` | `\'All time\'` | Timeframe indicator text rendered in top date range badge. |\n| `navLinks` | `NavLink[]` | `[]` | Navigation links array (`{ label, url }`) rendered below header. |\n| `sections` | `StatSection[]` | `[]` | List of statistical leaderboard cards (`{ title, items }`). |\n| `height` | `string` | `\'100vh\'` | Height constraint of layout wrapper. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `StatSection` & `StatItem` Schemas\n\n- `StatSection`:\n  - `title`: `string` - Heading title of leaderboard section card.\n  - `items`: `StatItem[]` - Ranked item list.\n- `StatItem`:\n  - `place`: `string` (optional) - Rank index (e.g. `\'#1\'`).\n  - `amount`: `string` - Metric value count or percentage label.\n  - `name`: `string` - Item or entity name text.\n  - `profileUrl`: `string` (optional) - Hyperlink URL associated with entity.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Layout primary background color.\n- `var(--spm-bg-secondary)` - Stat section card background color.\n- `var(--spm-bg-tertiary)` - Date badge background and table row hover color.\n- `var(--spm-border)` - Section card border and row divider color.\n- `var(--spm-text-primary)` - Section title and item entity name text color.\n- `var(--spm-text-secondary)` - Navigation link text color.\n- `var(--spm-text-muted)` - Rank position label and metric count text color.\n- `var(--spm-accent)` - Hover accent border and active tab link color.\n- `var(--spm-radius)` - Border radius of stat cards and timeframe badges.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(div.toptencont)" -> UiStatsDashboard {\n    urlPattern: "page=stats";\n    pageTitle: "Workspace Statistics Dashboard";\n    height: "calc(100vh - 78px)";\n\n    bind dateRangeText: "h2 | text";\n\n    child navLinks extends NavLink {\n        selector: "#content > a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n\n    child sections {\n        selector: "div.toptencont";\n        bind title: "thead tr th | text";\n\n        child items {\n            selector: "tbody tr";\n            bind place: "td:nth-child(1) | text";\n            bind amount: "td:nth-child(2) | text";\n            bind name: "td:nth-child(3) a | text";\n            bind profileUrl: "td:nth-child(3) a | attr:href";\n        }\n    }\n}\n```\n',S='# UiTable\n\n## Purpose & Use Cases\n\n`UiTable` provides a generic, styled HTML tabular grid component. It accepts a column configuration array (`columns`), row dataset (`data`), optional row click handler (`onRowClick`), column text alignment controls, custom widths, and custom cell rendering functions.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `columns` | `ColumnConfig<T>[]` | **Required** | Column definitions (`{ key, header, width, align, render }`). |\n| `data` | `T[]` | **Required** | Dataset array containing row objects to render. |\n| `onRowClick` | `(item: T) => void` | `undefined` | Optional click event callback executed when a table row is clicked. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to container element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `ColumnConfig<T>` Schema\n\n- `key`: `keyof T | string` - Object property key or identifier for column value.\n- `header`: `string` - Text heading displayed in table header cell.\n- `width`: `string` (optional) - Width constraint for column (e.g., `\'120px\'`, `\'15%\'`).\n- `align`: `\'left\' | \'center\' | \'right\'` (optional) - Text alignment inside header and data cells (defaults to `\'left\'`).\n- `render`: `(item: T) => React.ReactNode` (optional) - Custom cell rendering callback.\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-secondary)` - Table container background color.\n- `var(--spm-bg-tertiary)` - Table header row (`<thead>`) background color.\n- `var(--spm-border)` - Outer border and table cell row divider color.\n- `var(--spm-text-primary)` - Cell content text color.\n- `var(--spm-text-secondary)` - Table header text color.\n- `var(--spm-accent)` - Hover highlight background and border accent color.\n- `var(--spm-radius)` - Border radius of table wrapper container.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild tableRows -> UiTable {\n    columns: R"([\n      { "key": "id", "header": "ID", "width": "60px", "align": "center" },\n      { "key": "title", "header": "Title", "align": "left" },\n      { "key": "author", "header": "Author", "width": "120px" }\n    ])";\n}\n```\n',C='# UiTableListPage\n\n## Purpose & Use Cases\n\n`UiTableListPage` provides a complete tabular list page layout for search result indexes, directory listings, and wiki page tables. It wraps a `UiTable` grid with page title headers, column cell formatting logic (`text`, `link`, `html`, `badge`, `checkbox`), optional infinite scroll (`onLoadMore`), and bottom pagination links (`UiPaginationBar`).\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `pageTitle` | `string` | `\'List\'` | Title text displayed in header bar. |\n| `tableRows` | `any[]` | `[]` | Data row list array. |\n| `columns` | `TableColumnConfig[]` | `undefined` | Column formatting configurations (`{ key, header, width, align, type, urlKey, badgeStyleKey }`). |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links array (`{ label, url }`). |\n| `height` | `string` | `\'auto\'` | Height constraint of page container. Defaults to `\'auto\'` for natural document page scrolling, or can be set to `\'100vh\'` / `\'calc(100vh - 60px)\'` for fixed viewport scrolling. |\n| `className` | `string` | `\'\'` | Custom CSS class name appended to root element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n| `onLoadMore` | `() => Promise<{ tableRows: any[]; hasMore: boolean }>` | `undefined` | Optional async callback executed on reaching page end to load more rows. |\n\n### `TableColumnConfig` Schema\n\n- `key`: `string` - Row property key to extract cell data from.\n- `header`: `string` - Table column header title text.\n- `width`: `string` (optional) - Width constraint for column.\n- `align`: `\'left\' | \'center\' | \'right\'` (optional) - Alignment of cell content.\n- `type`: `\'text\' | \'link\' | \'html\' | \'badge\' | \'checkbox\' | \'date\' | \'currency\'` (optional) - Cell renderer type.\n  - `\'date\'` - Renders a locale-aware date string from date strings or timestamps, supporting correct chronological sorting.\n  - `\'currency\'` - Renders numbers as formatted USD currency values (e.g. `$1,200.00`), supporting correct numerical sorting.\n- `urlKey`: `string` (optional) - Row property key containing hyperlink URL (used when `type` is `\'link\'`).\n- `badgeStyleKey`: `string` (optional) - Row property key containing badge style identifier (used when `type` is `\'badge\'`).\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-primary)` - Page layout primary background color.\n- `var(--spm-bg-secondary)` - Table container and header bar background color.\n- `var(--spm-bg-tertiary)` - Table header row (`<thead>`) background color.\n- `var(--spm-border)` - Table border and row divider color.\n- `var(--spm-text-primary)` - Page title and table text content color.\n- `var(--spm-text-secondary)` - Column header text color.\n- `var(--spm-accent)` - Hyperlink text color and active indicators.\n- `var(--spm-radius)` - Table container border radius.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct "#content:has(table.highlightable)" -> UiTableListPage {\n    urlPattern: "page=alias&s=list";\n    pageTitle: "Tag Aliases";\n    height: "calc(100vh - 78px)";\n    columns: R"([\n      { "key": "pending", "header": "Pending", "width": "60px", "type": "checkbox" },\n      { "key": "aliasName", "header": "Alias", "type": "link", "urlKey": "aliasUrl" },\n      { "key": "toName", "header": "To Tag", "type": "link", "urlKey": "toUrl" },\n      { "key": "reason", "header": "Reason / Discussion", "type": "text" }\n    ])";\n\n    child tableRows {\n        selector: "#aliases table.highlightable tr:not(.tableheader)";\n        bind pending: "td:nth-child(1) input[type=\'checkbox\'] | attr:class";\n        bind aliasName: "td:nth-child(2) a | text";\n        bind aliasUrl: "td:nth-child(2) a | attr:href";\n        bind toName: "td:nth-child(3) a | text";\n        bind toUrl: "td:nth-child(3) a | attr:href";\n        bind reason: "td:nth-child(4) | text";\n    }\n\n    child pageLinks extends DocumentLink {\n        selector: "#paginator .pagination a";\n        bind label: "self | text";\n        bind url: "self | attr:href";\n    }\n}\n```\n',w="# UiTabs\n\n## Purpose & Use Cases\n\n`UiTabs` provides a flexible tabbed navigation and content switching component. It supports:\n- **Navigational Mode**: Tab items render as standard hyperlinks (`<a>` with `href`) for URL routing and multi-page layouts.\n- **Local Panel Mode**: Tab items render as buttons switching embedded HTML tab panels (`contentHtml`) dynamically within the client without reloading.\n- **Visual Variants**: `'underline'` (default), `'pill'`, and `'boxed'`.\n- **Orientations**: `'horizontal'` (default) and `'vertical'`.\n- **URL Parameter Sync**: Optional `activeParamName` to synchronize active tab selection with URL search parameters (e.g., `?tab=settings`).\n- **Badges & Disabled State**: Tab items can display count/status badges (`badge`) and be individually disabled (`disabled`).\n\n## Properties (Props API)\n\n### `UiTabsProps`\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `tabs` | `UiTabItem[]` | `[]` | Array of tab descriptor items. |\n| `activeParamName` | `string` | `undefined` | Optional URL search parameter key to synchronize active tab ID with browser URL query string. |\n| `variant` | `'underline' \\| 'pill' \\| 'boxed'` | `'underline'` | Visual appearance variant (`'underline'`, `'pill'`, `'boxed'`). |\n| `orientation` | `'horizontal' \\| 'vertical'` | `'horizontal'` | Layout direction for tab list and panels (`'horizontal'`, `'vertical'`). |\n| `className` | `string` | `''` | Custom CSS class name appended to root wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `UiTabItem`\n\n| Field | Type | Optional | Description |\n| :--- | :--- | :--- | :--- |\n| `id` | `string` | No | Unique identifier for the tab. |\n| `label` | `string` | No | Display label text for the tab button or link. |\n| `href` | `string` | Yes | Target URL for navigational mode (used when `contentHtml` is not provided). |\n| `badge` | `string \\| number` | Yes | Optional count or status pill displayed next to the tab label. |\n| `contentHtml` | `string` | Yes | Raw HTML content to render inside the active tab panel (Local Panel mode). |\n| `active` | `boolean` | Yes | Whether the tab is initially active (overridden by URL query param if `activeParamName` matches). |\n| `disabled` | `boolean` | Yes | Disables tab selection and navigation. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-border)` - Tab bar border line and boxed tab border outline.\n- `var(--spm-accent)` - Active tab indicator underline, pill background, and active highlights.\n- `var(--spm-accent-fg)` - Text color for active pill tabs.\n- `var(--spm-text-primary)` - Active tab label text and active tab panel content color.\n- `var(--spm-text-secondary)` - Inactive tab label color.\n- `var(--spm-text-muted)` - Badge text color and muted secondary elements.\n- `var(--spm-bg-secondary)` - Background color for boxed tab lists.\n- `var(--spm-bg-surface)` - Background color for active boxed tab item.\n- `var(--spm-bg-tertiary)` - Background color for inactive tab item badges.\n- `var(--spm-radius)` - Border radius for boxed container and tab items.\n\n## Veneer Spec (.vnr) Examples\n\n### 1. Navigational Mode (URL Navigation)\n\n```vnr\nreconstruct \"#subnav-tabs\" -> UiTabs {\n    variant: \"underline\";\n    orientation: \"horizontal\";\n\n    child tabs extends UiTabItem {\n        selector: \"#subnav ul li a\";\n        bind id: \"self | attr:data-tab-id\";\n        bind label: \"self | text\";\n        bind href: \"self | attr:href\";\n        bind badge: \"span.badge | text\";\n    }\n}\n```\n\n### 2. Local Panel Mode (Client-Side Tab Switching)\n\n```vnr\nreconstruct \"#content-sections\" -> UiTabs {\n    variant: \"boxed\";\n    orientation: \"horizontal\";\n    activeParamName: \"tab\";\n\n    child tabs extends UiTabItem {\n        selector: \".tab-section\";\n        bind id: \"self | attr:id\";\n        bind label: \"h3.tab-title | text\";\n        bind contentHtml: \".tab-body | html\";\n    }\n}\n```\n",T='# UiTagBadge\n\n## Purpose & Use Cases\n\n`UiTagBadge` renders tag and category pill badges. It displays a category label, post count pill, primary hyperlink (`href`), and optional interactive action buttons for adding (`+` via `addUrl`) or removing (`-` via `removeUrl`) tags in search filter sidebars.\n\n## Properties (Props API)\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `label` | `string` | **Required** | Text label of tag or category. |\n| `count` | `string \\| number` | `undefined` | Optional post/item count displayed next to tag label. |\n| `href` | `string` | `undefined` | Hyperlink URL for tag search navigation. |\n| `addUrl` | `string` | `undefined` | Optional URL for `+` action button to append tag to current search. |\n| `removeUrl` | `string` | `undefined` | Optional URL for `-` action button to exclude tag from current search. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-bg-tertiary)` - Background color of tag badge pill.\n- `var(--spm-border)` - Border color of tag badge pill.\n- `var(--spm-text-primary)` - Primary tag label text color.\n- `var(--spm-text-muted)` - Item count text color and action button icon color.\n- `var(--spm-accent)` - Hover border color and active state indicator.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nchild tags extends TagItem -> UiTagBadge {\n    selector: "#tag-sidebar li";\n    bind label: "a:nth-of-type(1) | text";\n    bind count: "span.tag-count | text";\n    bind href: "a:nth-of-type(1) | attr:href";\n    bind addUrl: "a:nth-of-type(2) | attr:href";\n    bind removeUrl: "a:nth-of-type(3) | attr:href";\n}\n```\n',E=`# UiTerminalConsole

The \`UiTerminalConsole\` component renders a dark, monospace live terminal output for log streams, system events, audit trails, and debug consoles.

## Props Interface

\`\`\`typescript
export interface LogEntry {
  id?: string;
  timestamp?: string;
  level?: 'info' | 'warn' | 'error' | 'debug';
  message: string;
}

export interface UiTerminalConsoleProps {
  title?: string;
  logs?: LogEntry[];
  autoScroll?: boolean;
  maxLines?: number;
  filterLevel?: 'all' | 'info' | 'warn' | 'error';
  className?: string;
  style?: React.CSSProperties;
}
\`\`\`

## Veneer Spec (.vnr) Example

\`\`\`vnr
reconstruct "#live-logs-container" -> UiTerminalConsole {
  title: "System Audit Console";
  filterLevel: "all";
}
\`\`\`

## Theme Variables Used
- Dark theme monospace variables (\`#090d16\`, \`#0f172a\`, \`#1e293b\`)
- Level badge colors (\`#38bdf8\`, \`#fbbf24\`, \`#f87171\`)
`,D="# UiToastContainer\n\n## Purpose & Use Cases\n\n`UiToastContainer` provides global toast feedback notifications and confirmation modal portals for user feedback. It manages animated toast items (`UiToast`) supporting four variant types (`info`, `warning`, `success`, `error`), backdrop blurs, auto-dismissal timers, and portal listening above SPM Shadow DOM overlays.\n\n## Properties (Props API)\n\n### `UiToast` Item Props API\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `message` | `string` | **Required** | Message text rendered inside toast notification. |\n| `type` | `'info' \\| 'warning' \\| 'success' \\| 'error'` | `'info'` | Feedback variant type controlling indicator border color (`info` = accent, `success` = green, `warning` = amber, `error` = red). |\n| `onClose` | `() => void` | **Required** | Callback function invoked when toast is closed or auto-dismissed. |\n| `className` | `string` | `''` | Custom CSS class name appended to toast element. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n### `UiToastContainer` Portal Props API\n\n| Prop Name | Type | Default Value | Description |\n| :--- | :--- | :--- | :--- |\n| `position` | `'top-right' \\| 'top-left' \\| 'bottom-right' \\| 'bottom-left'` | `'bottom-right'` | Screen corner positioning anchor for toast stack. |\n| `className` | `string` | `''` | Custom CSS class name appended to container wrapper. |\n| `style` | `React.CSSProperties` | `{}` | Custom inline style overrides. |\n\n## Design Tokens (CSS Variables)\n\n- `var(--spm-border)` - Border color of toast card container.\n- `var(--spm-radius)` - Border radius for toast item cards.\n- `var(--spm-text-primary)` - Toast message body text color.\n- `var(--spm-accent)` - Default indicator border color for `info` type toasts.\n\n## Veneer Spec (.vnr) Example\n\n```vnr\nreconstruct \"#global-toast-portal\" -> UiToastContainer {\n    urlPattern: \".*\";\n    position: \"bottom-right\";\n}\n```\n",O="# Site Package Manager (SPM) - CLI Tooling & Pipeline Manual (`cli-tooling.md`)\n\nThe `spm-cli` C++17 binary acts as the official compiler and runtime development tools orchestrator for Site Package Manager (`spm`).\n\n---\n\n## 1. CLI Commands & Subcommands\n\n### A. Development Mode (`spm dev`)\nStarts an in-memory compiler and file watcher server with live hot-reloading for extension themes.\n```bash\nspm dev\n```\n- Monitors `.vnr` source files inside `vnr_project/` subdirectories.\n- Automatically compiles `.vnr` changes into dynamic payloads and notifies the running browser extension to hot-reload Shadow DOM styles and component mounts.\n\n### B. Project Compilation (`spm compile`)\nCompiles a Veneer Spec (`.vnr`) project folder into a standalone, production-ready `manifest.json`.\n```bash\nspm compile [path/to/vnr_project]\n```\n- Lexes, parses, resolves class inheritance, and emits formatted JSON.\n- Deep-merges preexisting metadata (`author`, `description`, `targetUrl`, `version`) into the output `manifest.json`.\n\n### C. Selector Validation (`spm validate`)\nValidates compiled manifest selectors and data extraction pipes against local HTML page snapshots offline.\n```bash\nspm validate <manifest.json> --against <snapshot.html> [--json]\n```\n- Parses HTML snapshots using a JSDOM-equivalent layout engine.\n- Matches CSS selectors for all components and reconstructs.\n- Runs data extraction pipes (`text`, `attr`, `split`, `number`, `cleanNumber`) and validates that expected properties extract successfully.\n- Outputs detailed pass/fail status reports, or clean JSON metadata if `--json` is supplied.\n\n### D. Transformation Application (`spm apply`)\nApplies compiled manifest transformations to a local HTML snapshot and saves the modernized layout result.\n```bash\nspm apply <manifest.json> --input <input.html> -o <output.html>\n```\n- Implements layout replacements, components reconstruction, and element hiding.\n- Injects theme CSS variables and custom styles directly in the `<head>` style block.\n- Outputs the finalized modern HTML file for visual verification.\n\n---\n\n## 2. Recommended Directory Layout for Themes\n\n```text\nsite-domain/\n└── theme-name/\n    ├── manifest.json              # Auto-compiled production output\n    ├── content.css                # Global CSS overrides\n    └── vnr_project/               # Veneer Spec source folder\n        ├── theme.vnr              # Theme tokens & custom styles\n        ├── classes.vnr            # Scraping blueprints\n        ├── navigation.vnr         # Header reconstructs\n        └── pages.vnr              # Feed and page reconstructs\n```\n",k="# Site Package Manager (SPM) - Component Development Guide\n\nAll modern layout reconstructions in SPM rely on React components to replace legacy DOM structures. To maintain architectural clarity, components are divided into two distinct styles: **Layout Primitives** and **Dedicated Layout Components**.\n\n---\n\n## 1. The Component Contract\n\nComponents must follow a strict, standardized contract to ensure compatibility with dynamic property injection, auto-registration, and styling overrides.\n\n### Coding Blueprint Example\n\n```tsx\n// 1. Interface first - all props optional with sensible defaults\ninterface UiMyComponentProps {\n  items?: { label: string; url: string }[];\n  title?: string;\n  className?: string;\n  style?: React.CSSProperties;\n}\n\n// 2. Export a named function - no default exports\nexport function UiMyComponent({\n  items = [],\n  title,\n  className = '',\n  style = {},\n}: UiMyComponentProps) {\n  return (\n    <div\n      className={className}\n      style={{\n        background: 'var(--spm-bg-primary)',  // Always use visual CSS variables\n        color: 'var(--spm-text-primary)',\n        ...style,                              // Always spread incoming styles last\n      }}\n    >\n      {/* Conditional rendering - avoids orphan markup */}\n      {title && <h2>{title}</h2>}\n      \n      {items.map((item, i) => (\n        <a key={i} href={item.url}>{item.label}</a>\n      ))}\n    </div>\n  );\n}\n```\n\n### Critical Rules\n- **Named Exports Only**: Never use `export default`. The registry generator relies on named exports.\n- **Style Spreading**: Always accept `className` and `style` in the properties, and apply them directly to the root element. Spread `style` last to allow external layout properties (like width, padding, margins) to overwrite component styles at mount time.\n\n## 2. Component Documentation Index\n\nFor detailed specifications, Props API tables, design tokens, and `.vnr` (Veneer Spec) usage examples for each component, consult the dedicated documentation files below:\n\n| Component | Category | Documentation File | Description |\n| :--- | :--- | :--- | :--- |\n| `LayoutPrimitives` | Primitives | [`LayoutPrimitives.md`](components/LayoutPrimitives.md) | Generic layout building blocks (`UiBox`, `UiFlexRow`, `UiFlexColumn`, `UiGrid`, `UiText`, `UiImage`, `UiLink`, `UiScrollBox`). |\n| `UiNavHeader` | Dedicated | [`UiNavHeader.md`](components/UiNavHeader.md) | Navigation header with logo, site title, primary/secondary links, and responsive layouts. |\n| `UiHeroLanding` | Dedicated | [`UiHeroLanding.md`](components/UiHeroLanding.md) | Full viewport landing hero with logo, tagline, CTA button, search bar, and primary links. |\n| `UiSearchBar` | Dedicated | [`UiSearchBar.md`](components/UiSearchBar.md) | Form search input with GET/POST form target, query binding, and hidden field forwarding. |\n| `UiImageCard` | Dedicated | [`UiImageCard.md`](components/UiImageCard.md) | Thumbnail image card with title caption, aspect ratio controls, link, and hover effects. |\n| `UiTagBadge` | Dedicated | [`UiTagBadge.md`](components/UiTagBadge.md) | Category/tag pill badge with item count and remove/add filter action links. |\n| `UiPaginationBar` | Dedicated | [`UiPaginationBar.md`](components/UiPaginationBar.md) | Page navigation links bar for paginated feeds with active page detection. |\n| `UiModernGridPage` | Dedicated | [`UiModernGridPage.md`](components/UiModernGridPage.md) | Gallery grid page layout with optional tag sidebar slot and mobile column controls. |\n| `UiImageViewer` | Dedicated | [`UiImageViewer.md`](components/UiImageViewer.md) | Responsive image viewer with fit options (`contain`/`cover`) and background fallback. |\n| `UiScrollPanel` | Dedicated | [`UiScrollPanel.md`](components/UiScrollPanel.md) | Scrollable sidebar panel with search input, tag lists, buttons, and statistics HTML. |\n| `UiSplitLayout` | Dedicated | [`UiSplitLayout.md`](components/UiSplitLayout.md) | Two-column layout shell supporting image viewer/main HTML content and scroll panel sidebar. |\n| `UiCommentListPage` | Dedicated | [`UiCommentListPage.md`](components/UiCommentListPage.md) | Comment thread list with post thumbnails, speech bubble replies, and metadata. |\n| `UiDashboardPage` | Dedicated | [`UiDashboardPage.md`](components/UiDashboardPage.md) | Card panel dashboard layout for user account options, settings, and actions. |\n| `UiStatsDashboard` | Dedicated | [`UiStatsDashboard.md`](components/UiStatsDashboard.md) | Ranking metrics and analytics tables dashboard with date range badges. |\n| `UiTable` | Dedicated | [`UiTable.md`](components/UiTable.md) | Tabular grid layout with row click callbacks, custom cell renderers, and column configs. |\n| `UiTableListPage` | Dedicated | [`UiTableListPage.md`](components/UiTableListPage.md) | Search results table page inside a `UiTable` container with pagination and infinite scroll. |\n| `UiToastContainer` | Dedicated | [`UiToastContainer.md`](components/UiToastContainer.md) | Global toast notifications stack and modal confirm portal listener. |\n\n---\n\n## 3. Layout Primitives\n\nPrimitives are generic, lightweight building blocks located in `src/components/primitives/LayoutPrimitives.tsx`. They are used inside reconstructs to structure content without introducing visual overrides.\n\n### Primitive Registry\n\n| Component | Renders As | Key Props | Purpose |\n| :--- | :--- | :--- | :--- |\n| `UiBox` | `<div>` | Standard HTML div props | A generic box wrapper for padding, background blocks, and borders. |\n| `UiFlexRow` | `<div>` (flex row) | Standard HTML div props | A horizontal layout container for aligning elements side-by-side. |\n| `UiFlexColumn` | `<div>` (flex column) | Standard HTML div props | A vertical layout container for stacking elements. |\n| `UiGrid` | `<div>` (grid layout) | Standard HTML div props | A CSS Grid layout container for multi-column structures. |\n| `UiText` | `<span>` | `content` | Renders styled text overrides dynamically. |\n| `UiImage` | `<img>` | `src`, `alt` | Standard responsive image rendering. |\n| `UiLink` | `<a>` | `href` | Navigation hyperlinks. |\n\n---\n\n## 4. Dedicated Layout Components\n\nDedicated components are complex, pre-styled views located in `src/components/dedicated/`. They are designed to modernize major sections of the legacy page (such as full feeds, split image views, navigation headers, or comment boards).\n\n### Dedicated Components Directory\n\n| Component | Purpose | Key Props |\n| --- | --- | --- |\n| `UiNavHeader` | Site navigation header | `siteName`, `logoUrl`, `logoHref`, `primaryLinks`, `secondaryLinks`, `layout` |\n| `UiHeroLanding` | Full-viewport landing page hero | `siteName`, `logoUrl`, `logoHref`, `tagline`, `subtext`, `ctaLabel`, `ctaUrl`, `searchSubmitUrl`, `searchParamName`, `primaryLinks` |\n| `UiSearchBar` | Search input field | `placeholder`, `defaultValue`, `submitUrl`, `queryParamName` |\n| `UiImageCard` | Single image card with link | `imageUrl`, `linkUrl`, `title`, `id`, `width`, `aspectRatio`, `imageFit`, `showTitle` |\n| `UiTagBadge` | Tag pill with post count | `label`, `count`, `href` |\n| `UiPaginationBar` | Page navigation links | `pageLinks`, `paramName` |\n| `UiModernGridPage` | Gallery page with sidebar slot | `pageTitle`, `items`, `pageLinks` |\n| `UiImageViewer` | Full-height image that fills its container | `src`, `alt`, `fit` (`contain`\\|`cover`), `background` |\n| `UiScrollPanel` | Scrollable sidebar panel with search, tags, buttons, stats | `tags`, `buttons`, `statisticsHtml`, `showSearch`, `searchSubmitUrl`, `searchParamName`, `width` |\n| `UiSplitLayout` | Two-column full-height layout shell | `imageSlot`, `tags`, `buttons`, `statisticsHtml`, `sidebarWidth`, `sidebarSide`, `imageFit`, `showSearch`, `searchSubmitUrl` |\n| `UiCommentListPage` | Comment threads list with optional sidebar | `pageTitle`, `threads`, `pageLinks`, `height` |\n| `UiDashboardPage` | List panel layout for options/actions | `pageTitle`, `subTitle`, `cards`, `height` |\n| `UiStatsDashboard` | Metric tables/rankings blocks dashboard | `pageTitle`, `dateRangeText`, `navLinks`, `sections`, `height` |\n| `UiTable` | Isolated tabular grid with row callback | `columns`, `data`, `onRowClick` |\n| `UiTableListPage` | Search results page layout inside a `UiTable` | `pageTitle`, `tableRows`, `columns`, `pageLinks`, `height`, `onLoadMore` |\n| `UiToastContainer` | Toast feedback overlays & confirmation portals | - |\n\n---\n\n### Component Contracts (Props)\n\n#### `UiCommentListPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Comments'` | Title of the comments page |\n| `threads` | `CommentThread[]` | `[]` | Array of comment threads (`id`, `thumbnailUrl`, `postUrl`, `postDate`, `postUser`, `postRating`, `postScore`, `tags`, `comments`) |\n| `pageLinks` | `PageLink[]` | `[]` | Array of page links for pagination (`label`, `url`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiDashboardPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Account Control Panel'` | Header title text |\n| `subTitle` | `string` | - | Subtitle description |\n| `cards` | `DashboardCard[]` | `[]` | Custom action cards (`title`, `description`, `url`, `urlLabel`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiStatsDashboard`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Statistics'` | Header title text |\n| `dateRangeText` | `string` | `'All time'` | Range label tag |\n| `navLinks` | `NavLink[]` | `[]` | Navigation links (`label`, `url`) |\n| `sections` | `StatSection[]` | `[]` | Stat card groups (`title`, list of `items` with `place`, `amount`, `name`, `profileUrl`) |\n| `height` | `string` | `'100vh'` | Layout height |\n\n#### `UiTableListPage`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `pageTitle` | `string` | `'Wiki Pages'` | Header title text |\n| `tableRows` | `any[]` | `[]` | Data row list |\n| `columns` | `TableColumnConfig[]` | - | Configuration of columns (`key`, `header`, `width`, `align`, `type`, `urlKey`, `badgeStyleKey`) |\n| `pageLinks` | `PageLink[]` | `[]` | Pagination links |\n| `height` | `string` | `'100vh'` | Layout height |\n| `onLoadMore` | `() => Promise<{tableRows, hasMore}>` | - | Async infinite scroll trigger callback |\n\n#### `UiImageViewer`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `src` | `string` | - | Image URL |\n| `alt` | `string` | `''` | Alt text |\n| `fit` | `'contain' \\| 'cover'` | `'contain'` | CSS `object-fit` |\n| `background` | `string` | `var(--spm-bg-primary)` | Container background |\n\n#### `UiScrollPanel`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `tags` | `TagItem[]` | `[]` | Tags array (`name`, `count`, `type`, `url`) - grouped by `type` automatically |\n| `buttons` | `ButtonItem[]` | `[]` | Button array (`label`, `url`) - auto-classified into nav/primary/ghost by label keywords |\n| `statisticsHtml` | `string` | - | Raw HTML rendered in a statistics section |\n| `showSearch` | `boolean` | `false` | Show UiSearchBar at the top |\n| `searchSubmitUrl` | `string` | - | URL to submit searches to |\n| `searchParamName` | `string` | `'q'` | Query parameter name |\n| `width` | `string` | `'280px'` | Panel width |\n\n#### `UiSplitLayout`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `imageSlot` | `{src, alt}[]` | `[]` | Image data - first item is rendered via `UiImageViewer` |\n| `tags` | `TagItem[]` | `[]` | Forwarded to `UiScrollPanel` |\n| `buttons` | `ButtonItem[]` | `[]` | Forwarded to `UiScrollPanel` |\n| `statisticsHtml` | `string` | - | Forwarded to `UiScrollPanel` |\n| `sidebarWidth` | `string` | `'280px'` | Panel width |\n| `sidebarSide` | `'left' \\| 'right'` | `'left'` | Panel position |\n| `imageFit` | `'contain' \\| 'cover'` | `'contain'` | Forwarded to `UiImageViewer` |\n| `showSearch` | `boolean` | `false` | Show search in panel |\n| `searchSubmitUrl` | `string` | - | Search URL |\n| `searchParamName` | `string` | `'q'` | Search param name |\n\n#### `UiHeroLanding`\n\n| Prop | Type | Default | Description |\n| --- | --- | --- | --- |\n| `siteName` | `string` | `'Site'` | Fallback text if no logo |\n| `logoUrl` | `string` | - | Logo image URL |\n| `logoHref` | `string` | `'/'` | Logo link URL |\n| `tagline` | `string` | - | Heading below logo |\n| `subtext` | `string` | - | Subtitle paragraph |\n| `ctaLabel` | `string` | `'Browse'` | CTA button text |\n| `ctaUrl` | `string` | `'/'` | CTA button URL |\n| `searchSubmitUrl` | `string` | - | If set, renders a search bar |\n| `searchParamName` | `string` | `'q'` | Search param name |\n| `primaryLinks` | `{label, url}[]` | `[]` | Pill nav links below CTA |\n\n---\n\n## 5. Design & Styling Conventions\n\nComponents are mounted inside an isolated **Shadow DOM** to prevent the host site's legacy styles from polluting the modern UI.\n- **Strict CSS Variables**: Never write hardcoded color or spacing values (like `#ffffff` or `12px`). Use predefined SPM theme variables (e.g. `var(--spm-bg-primary)`, `var(--spm-border)`, `var(--spm-radius)`).\n- **Conditional Rendering**: If data from a scraped property is missing, do not render a placeholder or empty tags. Use logical checks (`{data && <Element />}`) to keep the UI clean.\n\n---\n\n## 6. Auto-Registration Mechanics\n\nYou do **not** need to register your new components in registry files manually. SPM features an automated build step:\n\n### How it works:\n1.  When you run `npm run build` or `npm run dev`, the compiler executes `scripts/build-registry.js`.\n2.  The script scans all component files under `src/components/` recursively.\n3.  It extracts the component names, analyzes their TypeScript `Props` interface declarations, and generates:\n    *   [`src/components-registry.ts`](../src/components-registry.ts): The runtime registry mapping component names to their lazy-loaded TSX wrappers.\n    *   `schemas/theme-manifest-schema.json`: The layout JSON validation schema used by VS Code to validate property configurations.\n\n---\n\n## 7. Running & Writing Tests\n\nTo run the component unit tests:\n```bash\nnpm run test\n```\n\n### Writing Tests\nFor component unit tests that query DOM elements or interact with shadow roots, you must configure Vitest to run in a browser-like sandbox. Include the following environment header at the top of your test files:\n\n```ts\n// @vitest-environment jsdom\n```\n\n---\n\n## 8. Component Design Checklist (Agnostic Guidelines)\n\nTo keep the component library generic and portable across any host website or domain, all components must follow this design checklist:\n\n1. **Zero Hardcoded Metadata:**\n   - Never hardcode site titles, company names, logos, or URLs.\n   - All texts (like `\"Search...\"`, titles, placeholders) must be received via props with sensible, neutral defaults (e.g. `pageTitle = \"Dashboard\"`).\n2. **CSS Variables for Themes:**\n   - Do not hardcode specific hex colors or styles unless they are neutral layouts.\n   - Use design token variables (`var(--spm-bg-primary)`, `var(--spm-accent)`, etc.) to style components so they adapt natively to user color themes.\n3. **Container-Fluid Sizing:**\n   - Components must not have hardcoded fixed width parameters (like `width: \"800px\"`) on outer boundaries. They should fill their parent container natively (`width: \"100%\"`) and let the theme layout control sizing.\n",A='The Site Package Manager (SPM) ecosystem separates components into two fundamental architectural tiers:\n\n- **Primitive Components (16 Atoms)**: Modular, headless UI building blocks (`UiTabs`, `UiSearchBar`, `UiTagBadge`, `UiTable`, `UiPaginationBar`, `UiScrollBox`, `UiImageViewer`, `LayoutPrimitives`).\n- **Dedicated Page Views (13 Organisms)**: High-level page layout templates (`UiFormContainer`, `UiTableListPage`, `UiModernGridPage`, `UiPostDetails`, `UiSplitLayout`, `UiDashboardPage`, `UiStatsDashboard`, `UiHeroLanding`, etc.).\n\n---\n\n## 1. Composition Paradigm\n\nDedicated Page Views act as structural hosts that consume Primitive Components within their props, slots, and child data bindings.\n\n### Architectural Hierarchy\n\n- **Host (Dedicated Page View)**: Renders the page grid and Shadow DOM host (e.g. `UiFormContainer`).\n- **Slots & Sub-components (Primitives)**:\n  - `UiTabs`: Tab switcher for multi-mode forms ("Sign In" / "Create Account").\n  - `UiSearchBar`: Input filter query binding.\n  - `UiToast`: Cross-frame feedback notifications.\n\n### Veneer Spec Composition Snippet\n\n```scss\nreconstruct "#auth-card" -> UiFormContainer {\n    title: "Developer Portal Login";\n    subTitle: "Enter credentials to access workspace";\n\n    // Nesting UiTabs primitive inside UiFormContainer\n    child tabs extends UiTabs {\n        selector: "ul.form-tabs li";\n        bind id: "a | attr:data-tab";\n        bind label: "a | text";\n    }\n\n    // Nesting UiSearchBar primitive inside form filter\n    child searchFilter extends UiSearchBar {\n        selector: "form.search-box";\n        bind defaultValue: "input[name=\'q\'] | attr:value";\n    }\n}\n```\n\n---\n\n## 2. Interactive Component Compatibility Matrix\n\nThe matrix below defines which Primitive Components are supported as child slots, sub-components, or data bindings inside each Dedicated Page View:\n\n| Dedicated Component (Host) | Compatible Primitives | Slot / Prop Key | Use Case & Code Example |\n| :--- | :--- | :--- | :--- |\n| **`UiFormContainer`** | `UiTabs`, `UiSearchBar`, `UiTagBadge`, `UiToast` | `tabs`, `children`, `hiddenInputs` | Multi-tab auth card with embedded search filters and notification toasts. |\n| **`UiModernGridPage`** | `UiSearchBar`, `UiTagBadge`, `UiPaginationBar`, `UiImageCard` | `tagGroups`, `items`, `pageLinks` | Gallery grid with search bar, tag sidebar, and floating pagination. |\n| **`UiTableListPage`** | `UiTable`, `UiSearchBar`, `UiPaginationBar`, `UiTagBadge` | `columns`, `tableRows`, `pageLinks` | Dense tabular list view with search input, badge columns, and pagination. |\n| **`UiPostDetails`** | `UiImageViewer`, `UiTagBadge`, `UiScrollBox`, `UiToast` | `mediaItem`, `tags`, `sidebar` | Article detail page with click-to-zoom hero media, metadata sidebar, and tags. |\n| **`UiSplitLayout`** | `UiScrollBox`, `UiImageViewer`, `UiTagBadge`, `UiTable` | `mainHtml`, `tags`, `buttons` | Dual-pane split view combining scrollable main HTML and metadata sidebar. |\n| **`UiDashboardPage`** | `UiTable`, `UiTagBadge`, `UiToast` | `cards`, `tableRows` | Operational dashboard displaying metric cards, status tags, and alert toasts. |\n| **`UiStatsDashboard`** | `UiTable`, `UiTagBadge`, `UiPaginationBar` | `sections`, `items` | Analytics leaderboards with date range filters and ranking tables. |\n| **`UiHeroLanding`** | `UiSearchBar`, `UiTagBadge`, `UiImageCard` | `primaryLinks`, `search` | Hero landing view with site logo, CTA button, search bar, and link pills. |\n\n---\n\n## 3. Composition `.vnr` Code Recipes\n\n### Recipe 1: `UiFormContainer` + `UiTabs` (Tabbed Auth Form)\n\n```scss\nreconstruct "#auth-card" -> UiFormContainer {\n    title: "Developer Portal Login";\n    subTitle: "Enter credentials to access workspace";\n\n    // Composing UiTabs primitive for mode switching\n    child tabs extends UiTabs {\n        selector: "ul.form-tabs li";\n        bind id: "a | attr:data-tab";\n        bind label: "a | text";\n    }\n\n    child fields {\n        selector: "form input.field";\n        bind id: "self | attr:name";\n        bind label: "label | text";\n        bind type: "self | attr:type";\n    }\n}\n```\n\n### Recipe 2: `UiModernGridPage` + `UiSearchBar` + `UiTagBadge` + `UiPaginationBar`\n\n```scss\nreconstruct "#catalog-grid" -> UiModernGridPage {\n    pageTitle: "Resource Catalog";\n    searchPlaceholder: "Search resources...";\n    searchSubmitUrl: "/resources/search";\n\n    // Composing UiImageCard primitives inside items grid\n    child items {\n        selector: ".resource-card";\n        bind id: "self | attr:id";\n        bind title: "h3.title | text";\n        bind imageUrl: "img.cover | attr:src";\n        bind linkUrl: "a.details | attr:href";\n    }\n\n    // Composing UiTagBadge primitives in sidebar\n    child tags extends UiTagBadge {\n        selector: "#sidebar-tags a";\n        bind label: "self | text";\n        bind count: "span.badge-count | text";\n    }\n\n    // Composing UiPaginationBar primitive at bottom\n    child pageLinks extends UiPaginationBar {\n        scope: "document";\n        selector: "#pagination-footer a";\n        bind label: "self | text";\n        bind url:   "self | attr:href";\n    }\n}\n```\n',j=`# Site Package Manager (SPM) - Theme Manifest Schema

The \`manifest.json\` file is the compiled output configuration generated from Veneer Spec (\`.vnr\`) sources. It is evaluated at runtime by the SPM content script to reconstruct legacy HTML elements or layout sections with React components.

---

## Root Fields

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| \`targetUrl\` | \`string\` | Yes | Matching URL glob pattern indicating which domains this theme should activate on (e.g. \`*://example.com/*\`). |
| \`version\` | \`string\` | No | Version of the theme package (e.g. \`"1.0.0"\`). |
| \`minEngineVersion\` | \`string\` | No | Minimum compatible version of the SPM extension engine (e.g. \`"1.0.0"\`). |
| \`theme\` | \`object\` | Yes | Defines global styling variables, custom styles overrides, and descriptive metadata. |
| \`components\` | \`array\` | No | List of selector overrides that target, hide, or replace individual legacy elements. |
| \`reconstructs\` | \`array\` | No | List of page-level section replacements that mount React layout components inside isolated Shadow DOM hosts. |

---

## 1. Theme Configuration

Defines styling variables (custom property mappings) and custom CSS rules injected globally.

\`\`\`json
"theme": {
  "label": "Obsidian",
  "author": "spm-ecosystem",
  "description": "Auto-versioning Obsidian dark theme on pipeline",
  "cssVariables": {
    "--spm-bg-primary": "#000000",
    "--spm-bg-secondary": "#111111",
    "--spm-bg-tertiary": "#222222",
    "--spm-text-primary": "#ffffff",
    "--spm-text-muted": "#a1a1aa",
    "--spm-accent": "#7c6af5",
    "--spm-accent-fg": "#ffffff",
    "--spm-accent-hover": "#9d8fff",
    "--spm-border": "#333333",
    "--spm-radius": "10px"
  },
  "customStyles": "#notice, #long-notice { display: none !important; }",
  "noticeSelector": "#has-mail-notice"
}
\`\`\`

### Properties
*   \`label\` (string): Human-readable name of the theme shown in the extension popup.
*   \`author\` (string): Developer signature.
*   \`description\` (string): Short explanation of theme styling goals.
*   \`cssVariables\` (object): Map of custom CSS property names to valid CSS color, spacing, or sizing values. Components should exclusively rely on these variables.
*   \`customStyles\` (string): Raw CSS stylesheet injected globally into the main document and Shadow DOM roots to hide ads, banners, or apply global page layout overrides. Automatically bundled from any \`.css\` files (e.g. \`content.css\`) in the theme project directory during compilation (\`spm compile\`) or dev server watching (\`spm dev\`).
*   \`noticeSelector\` (string): Optional selector targeting notices that should trigger extension banner overlays.

---

## 2. Components Configuration

Replaces or hides targeted elements individually.

\`\`\`json
"components": [
  {
    "name": "UiSearchBar",
    "selector": ".sidebar form",
    "action": "replace",
    "props": {
      "placeholder": "Search…",
      "submitUrl": "https://example.com/search",
      "queryParamName": "q"
    },
    "propsMap": {
      "defaultValue": "input[name='q'] | attr:value"
    }
  },
  {
    "name": "UiNavHeader",
    "selector": "#subnavbar",
    "action": "hide"
  }
]
\`\`\`

### Properties
*   \`name\` (string, required): React component name matching an entry in the React registry.
*   \`selector\` (string, required): Standard CSS selector targeting the legacy DOM element.
*   \`action\` (string, required): Action to perform. Supported:
    *   \`"replace"\`: Hides the element and mounts the React component in its place.
    *   \`"hide"\`: Sets \`display: none !important\` on the selector to remove it visually.
*   \`props\` (object): Static prop values passed directly to the React component.
*   \`propsMap\` (object): Dynamic prop mappings extracted live from the DOM at injection time (see *Prop Mapping Rules* below).

---

## 3. Reconstructs Configuration

Reconstructs entire sections or full page contents with isolated React structures in the Shadow DOM.

\`\`\`json
"reconstructs": [
  {
    "containerSelector": "#gallery",
    "layoutComponent": "UiGridPage",
    "urlPattern": "page=gallery",
    "props": {
      "pageTitle": "Gallery",
      "mobileColumns": 2,
      "mobileGap": "8px"
    },
    "propsMap": {
      "searchDefaultValue": ".sidebar form input[name='q'] | attr:value"
    },
    "preserve": {
      "sidebarSlot": ".sidebar"
    },
    "children": [
      {
        "name": "items",
        "selector": "#gallery .item",
        "propsMap": {
          "id": "self | attr:id",
          "imageUrl": "img | attr:src",
          "linkUrl": "a | attr:href",
          "title": "img | attr:title"
        }
      }
    ]
  }
]
\`\`\`

### Properties
*   \`containerSelector\` (string, required): CSS selector of the container element that will be replaced. The element will have its children hidden, and a Shadow DOM root host appended.
*   \`layoutComponent\` (string, required): Name of the React component that acts as the container layout.
*   \`urlPattern\` (string): JavaScript regular expression matched against the current page URL path/query (e.g. \`page=gallery\`). The reconstruct will only load if the pattern matches.
*   \`props\` (object): Static prop values passed directly to the layout component.
*   \`propsMap\` (object): Dynamic properties extracted from the container element's DOM before it is hidden.
*   \`preserve\` (object): Map of slot names to selectors. Targeted nodes are removed from the legacy page before hiding the container and reparented inside the Shadow DOM (into elements having \`id="{slotName}-container"\`).
*   \`children\` (array): Array of nested data extractions. Each child queries matching elements and generates an array of objects passed as a prop array to the layout component.
    *   \`name\`: Prop array name on the React component.
    *   \`selector\`: CSS selector targeting matching children.
    *   \`scope\`: (Optional) \`"document"\` to run queries from the root document instead of relative to the container element.
    *   \`propsMap\`: Data extraction rules for child item fields.
    *   \`children\`: Recursive nested child array definitions for complex layouts (e.g. threads containing comments).

---

## 4. Prop Mapping Rules

Dynamic extractions extract content from matching DOM nodes and bind it to props. Extractions follow the format:

$$\\text{Selector} \\quad | \\quad \\text{Operation}$$

| Rule Syntax | Targeted Element | Result |
| :--- | :--- | :--- |
| \`<css-selector> \\| text\` | First matching descendant | Text content (\`textContent\`) of the node. |
| \`<css-selector> \\| html\` | First matching descendant | Inner HTML (\`innerHTML\`) of the node. |
| \`<css-selector> \\| attr:<name>\` | First matching descendant | Value of the specified attribute (e.g. \`attr:src\` for images). |
| \`self \\| text\` | Targeted element itself | Text content of the targeted element itself. |
| \`self \\| html\` | Targeted element itself | Inner HTML of the targeted element itself. |
| \`self \\| attr:<name>\` | Targeted element itself | Value of the specified attribute of the targeted element itself. |
| \`self \\| hrefOrOnclick\` | Targeted element itself | Resolves \`href\` value, or extracts navigation destination from an inline \`onclick\` handler if \`href\` is empty. |
| \`<css-selector> \\| nextSiblingText\` | Matching descendant | Extracts text content from the sibling node immediately following the matched element. |

---

## 5. Metadata Merging

During compilation via \`spm compile\`, the CLI automatically parses any preexisting target \`manifest.json\` file. It performs a **deep merge** on the \`"theme"\` block:
- Global properties like \`author\`, \`description\`, \`targetUrl\`, and \`minEngineVersion\` present in the destination JSON file are **preserved** and merged back into the compilation output.
- This ensures GitOps metadata is maintained across compilations without manual restoration.
`,M=`**Veneer Coder** (\`spm-veneer-coder\`) is a specialized, compiler-aware LLM subagent fine-tuned specifically for generating valid **Veneer Spec (\`.vnr\`)** code, CSS design tokens, and modernizing unstructured legacy HTML into React Shadow DOM interfaces.

---

## 1. Core Architecture & Self-Correction Loop

Unlike generic conversational AI models, **Veneer Coder** operates within an autonomous **Compiler Feedback Loop** powered by \`spm-cli\`:

- **Scrape & Inspect**: Reads raw legacy HTML DOM nodes, CSS classes, and selector attributes.
- **DSL Generation**: Emits structured Veneer Spec code (\`reconstruct\`, \`class\`, \`child\`, \`bind\`, \`preserve\`).
- **Compiler Pass**: Feeds the generated \`.vnr\` to \`spm-cli compile --strict\`.
- **Diagnostic Verification & Retry**:
  - **PASS**: Emits clean \`manifest.json\` and mounts modern React Shadow DOM view.
  - **FAIL**: Feeds \`spm-cli\` diagnostic error log back into the LLM context for automatic self-correction.

---

## 2. Model Presets & Fine-Tuning Infrastructure

The model is trained using **Unsloth SFT** and LoRA adapters on specialized code generation architectures:

- **Primary Models**: \`qwen2.5-coder-1.5b\` (lightweight, sub-second execution) and \`qwen2.5-coder-7b\` (deep multi-component page synthesis).
- **LoRA Rank**: \`r: 32\`, \`lora_alpha: 32\`, target modules \`q_proj\`, \`k_proj\`, \`v_proj\`, \`o_proj\`, \`gate_proj\`, \`up_proj\`, \`down_proj\`.
- **Training Epochs**: \`num_train_epochs: 3\`, learning rate \`2e-4\` with cosine scheduler.
- **Dataset Composition**: **70%+ direct HTML -> VNR page transformation tasks**, paired with golden compiler diagnostic validation examples.

---

## 3. Real-World Multi-Component Page Synthesis Dataset

The fine-tuning dataset consists of **255 to 340+ real-world HTML -> VNR examples** scraped and synthesized from production web applications:

### A. Navigation & Search Header Pages (15-20 Examples)
- **Combined Components**: \`UiNavHeader\` + \`UiSearchBar\` + \`UiHeroLanding\`
- **Real-World Scenarios**: Wiki navigation headers, documentation search bars, primary/secondary link rows, mobile breakpoints.

### B. Data Tables & Portal Listings (15-20 Examples)
- **Combined Components**: \`UiNavHeader\` + \`UiTableListPage\` + \`UiTagBadge\` + \`UiPaginationBar\`
- **Real-World Scenarios**: GitHub issues, StackOverflow feeds, admin panels, multi-value array tag columns (\`| split: ','\`), currency/date formatting.

### C. Media Galleries & Split Viewers (15-20 Examples)
- **Combined Components**: \`UiSplitLayout\` + \`UiImageViewer\` + \`UiScrollPanel\` + \`UiTagBadge\`
- **Real-World Scenarios**: Image boards, photo galleries using \`imageUrl\`/\`title\` aliases, metadata sidebars.

### D. Discussion & Thread Pages (15-20 Examples)
- **Combined Components**: \`UiCommentListPage\` + \`UiPostDetails\` + \`UiTagBadge\`
- **Real-World Scenarios**: Hacker News threads, Reddit posts, article layouts with optional thumbnails and DOMPurify XSS sanitization.

### E. Metrics & Dashboard Analytics (15-20 Examples)
- **Combined Components**: \`UiDashboardPage\` + \`UiStatsDashboard\` + \`UiTable\` + \`UiToast\`
- **Real-World Scenarios**: Server performance counters, status indicators, rankings leaderboards, toast notification alerts.

---

## 4. Invoking the Subagent via CLI

You can execute the subagent runner or invoke standard CLI tools:

\`\`\`bash
# Execute self-correcting subagent generation loop
python -m spm_veneer_coder.agent "Create header reconstruction for #header -> UiNavHeader" --html page.html -o theme.vnr

# Run JSON subagent payload interface for external CLI integration
python -m spm_veneer_coder.subagent_cli --input-json '{"task": "Map search", "html_path": "page.html", "env_dir": "site-x"}'

# Validate generated Veneer Spec against spm-cli compiler
spm compile theme/ -o dist/manifest.json --strict
\`\`\`

*Note: You can also instruct any AI agent harness (such as Antigravity, Claude Code, or AGY) to run these commands automatically via terminal execution tools during pair programming.*

---

## 5. Composition Example: Multi-Component Generation

Here is an example output generated by \`spm-veneer-coder\` for a legacy portal feed:

\`\`\`scss
// Generated by spm-veneer-coder
theme "DarkModern" {
    variables {
        --spm-accent: "#ffffff";
        --spm-bg-primary: "#09090b";
        --spm-bg-surface: "#121215";
    }
}

selector "#legacy-nav" -> UiNavHeader {
    action: replace;
    siteName: "Developer Portal";
    logoUrl: "/logo.svg";
    sticky: true;
}

reconstruct "#main-feed" -> UiTableListPage {
    pageTitle: "Document Directory";

    columns: [
      { key: "title", header: "Document Title", type: "link", urlKey: "url" },
      { key: "author", header: "Author", type: "text" },
      { key: "category", header: "Category", type: "badge" }
    ];

    child tableRows {
        selector: "table.data-table tr.item-row";
        bind title: "td.title a | text";
        bind url:   "td.title a | attr:href";
        bind author: "td.author | text";
        bind category: "td.tags | text | split: ,";
    }

    child pageLinks {
        scope: "document";
        selector: "#paginator a";
        bind label: "self | text";
        bind url:   "self | attr:href";
    }
}
\`\`\`
`,N=`# Veneer Spec — Extended Language Reference & Example Cookbook

> **Scope of this document**: This is an expanded, example-driven companion to the official
> [\`veneer_spec.md\`](https://github.com/spm-ecosystem/spm-cli/blob/main/docs/veneer_spec.md) and
> [\`manifest_schema.md\`](https://github.com/spm-ecosystem/spm-cli/blob/main/docs/manifest_schema.md)
> references shipped in \`spm-cli\`. It keeps every rule from the official docs intact and adds a
> much larger set of worked examples, edge cases, anti-patterns, and full real-world theme
> walkthroughs for the Veneer Spec (\`.vnr\`) DSL compiled by \`spm-cli\`.
>
> **Important note on scope**: This file documents the **Veneer Spec language** itself (lexing,
> parsing, class resolution, emission — everything \`spm-cli\` compiles) in depth, since that is
> what is described in the \`spm-cli\` repository docs. It does **not** invent prop schemas for
> individual React components (\`UiGridPage\`, \`UiNavHeader\`, \`UiSearchBar\`, etc.) beyond what is
> already demonstrated in \`spm-cli\`'s own docs — the authoritative prop lists for those live in
> \`spm-components/docs\`, which could not be crawled directly (GitHub blocks automated access to
> that repository's file-tree view, and the docs aren't otherwise indexed). Section 12
> ("Known Components — Observed Contract") lists everything that can be safely inferred from the
> \`spm-cli\` examples, marked accordingly. If you paste the contents of \`spm-components/docs\`
> (or raw file links) into the conversation, this document can be extended with the exact,
> per-component prop tables and hundreds of additional binding examples.

---

## Table of Contents

1. [Mental Model](#1-mental-model)
2. [Lexer & Token Reference](#2-lexer--token-reference)
3. [Extraction Syntax Deep Dive](#3-extraction-syntax-deep-dive)
4. [\`theme\` — Exhaustive Examples](#4-theme--exhaustive-examples)
5. [\`class\` / \`extends\` — Exhaustive Examples](#5-class--extends--exhaustive-examples)
6. [\`selector\` — Exhaustive Examples](#6-selector--exhaustive-examples)
7. [\`reconstruct\` — Exhaustive Examples](#7-reconstruct--exhaustive-examples)
8. [\`child\` — Exhaustive Examples](#8-child--exhaustive-examples)
9. [\`bind\` — Exhaustive Examples](#9-bind--exhaustive-examples)
10. [\`preserve\` — Exhaustive Examples](#10-preserve--exhaustive-examples)
11. [\`scope\` — Exhaustive Examples](#11-scope--exhaustive-examples)
12. [Known Components — Observed Contract](#12-known-components--observed-contract)
13. [Raw String Literals — Pattern Library](#13-raw-string-literals--pattern-library)
14. [Implicit JSON Type Deserialization — Exhaustive Cases](#14-implicit-json-type-deserialization--exhaustive-cases)
15. [Workspace / Multi-file Compilation Examples](#15-workspace--multi-file-compilation-examples)
16. [Full Worked Themes](#16-full-worked-themes)
17. [Common Errors, Anti-Patterns & Fixes](#17-common-errors-anti-patterns--fixes)
18. [CLI Recipes](#18-cli-recipes)
19. [Cheat Sheet](#19-cheat-sheet)

---

## 1. Mental Model

Veneer Spec never touches the DOM itself — it is a **compiler** that turns \`.vnr\` source into a
\`manifest.json\` file. That manifest is what the SPM browser-extension runtime reads to:

1. Find legacy elements (\`selector\`, \`reconstruct\`).
2. Decide what to do with them (\`hide\` vs \`replace\`).
3. Mount a React component in their place, inside an isolated Shadow DOM host.
4. Populate that component's props — statically (plain keys) or dynamically (\`bind\`, scraped at
   injection time from the *original* legacy DOM before it's hidden).

Everything else in the language (\`class\`/\`extends\`, \`scope\`, raw strings, implicit JSON typing)
exists purely to make steps 1–4 easier to author and validate.

\`\`\`
 .vnr source files  ──lexer──▶ tokens ──parser──▶ AST ──resolver──▶ resolved AST ──emitter──▶ manifest.json
                                                (class inheritance,
                                                 circular-dep checks)
\`\`\`

---

## 2. Lexer & Token Reference

| Token category   | Examples                                              | Notes |
|-------------------|-------------------------------------------------------|-------|
| Keywords          | \`theme\`, \`class\`, \`extends\`, \`selector\`, \`reconstruct\`, \`child\`, \`bind\`, \`preserve\`, \`scope\`, \`variables\`, \`customStyles\` | Case-sensitive, lowercase only. |
| Identifiers       | \`PrimaryLink\`, \`UiGridPage\`, \`items\`, \`pageLinks\`     | Used for class names, component names, child/prop names. |
| Arrow operator    | \`->\`                                                  | Links a \`selector\`/\`reconstruct\` target to a component name. |
| String literal    | \`"Search…"\`, \`"#gallery"\`                              | Standard double-quoted string; supports normal escaping (\`\\"\`, \`\\\\\`). |
| Raw string literal| \`R"(...)"\`, \`\` R"delim(...)delim" \`\`                    | See [Section 13](#13-raw-string-literals--pattern-library). |
| Property line     | \`key: value;\`                                         | Every property assignment must terminate with \`;\`. |
| Block braces      | \`{ }\`                                                 | Delimit \`theme\`, \`class\`, \`selector\`, \`reconstruct\`, \`child\`, \`preserve\`, \`variables\` bodies. |
| Comments          | \`// line comment\`, \`/* block comment */\`               | Stripped during lexing; never appear in the emitted manifest. |

### 2.1 Comment examples

\`\`\`vnr
// This whole file configures the primary navigation
selector "#navbar" -> UiNavHeader {
    action: replace; // swap the legacy header entirely
    /*
      className below must match a CSS class already
      shipped by the UiNavHeader stylesheet bundle
    */
    className: "site-navigation-header";
}
\`\`\`

### 2.2 Whitespace & formatting

Veneer Spec is whitespace-insensitive between tokens. The following two snippets compile to an
identical AST:

\`\`\`vnr
selector "#sidebar" { action: hide; }
\`\`\`

\`\`\`vnr
selector
    "#sidebar"
{
    action
        :
        hide
    ;
}
\`\`\`

Idiomatic formatting (used throughout this document) is: one property per line, 4-space indent,
opening brace on the same line as the block keyword.

---

## 3. Extraction Syntax Deep Dive

The general shape of any dynamic extraction is:

\`\`\`
"<selector-or-self> | <base-extractor> [ | <pipe> ]*"
\`\`\`

### 3.1 Base extractor examples (one per extractor)

\`\`\`vnr
bind title:        "h2.item-title | text";
bind descriptionHtml: ".item-body | html";
bind thumbnail:     "img.cover | attr:src";
bind altText:       "img.cover | attr:alt";
bind ctaUrl:        "a.buy-now | hrefOrOnclick";
bind priceLabel:    ".price | nextSiblingText";
bind formFields:    "form#checkout | hiddenInputs";
bind ownSelector:   "self | selector";
\`\`\`

### 3.2 \`self\` vs explicit selector

\`self\` always refers to the element that was already matched by the enclosing \`selector\`,
\`reconstruct\`, or \`child\` block — it never re-queries the DOM.

\`\`\`vnr
class ExternalLink {
    // "self" = the anchor tag matched by the child's own selector
    bind label: "self | text";
    bind url:   "self | attr:href";
}

class CardWithBadge {
    // relative selectors query *inside* the matched card element
    bind title: "h3.card-title | text";
    bind badge: "span.badge | text";
    // "self" still refers to the card element itself, e.g. for its own id
    bind cardId: "self | attr:data-id";
}
\`\`\`

### 3.3 Chaining multiple pipes

\`\`\`vnr
bind tagList:      "self | attr:data-tags | split";
bind tagListCsv:    "self | attr:data-tags | split:,";
bind price:         ".price-tag | text | cleanNumber";
bind stock:         ".stock-count | text | number";
bind categoryPath:  ".breadcrumb | text | split:›";
\`\`\`

### 3.4 \`split\` examples

\`\`\`vnr
// "featured bestseller limited" -> ["featured","bestseller","limited"]
bind badges: "self | attr:data-flags | split";

// "Electronics, Computers, Laptops" -> ["Electronics","Computers","Laptops"]
bind categories: ".breadcrumbs | text | split:,";

// "red|blue|green" -> ["red","blue","green"]
bind swatches: ".variant-colors | attr:data-colors | split:|";

// "2024-06-01/2024-06-15" -> ["2024-06-01","2024-06-15"]
bind dateRange: ".availability | attr:data-range | split:/";
\`\`\`

### 3.5 \`number\` vs \`cleanNumber\`

\`\`\`vnr
// "42" -> 42 (native JSON number)
bind reviewCount: ".review-count | text | number";

// "$ 1,200.50" -> 1200.5
bind price: ".price | text | cleanNumber";

// "R$ 89,90" -> 89.9  (Brazilian Real formatting also stripped)
bind priceBr: ".preco | text | cleanNumber";

// "€349" -> 349
bind priceEu: ".price-eur | text | cleanNumber";

// "1 234,56 kr" -> depends on compiler locale rules; prefer cleanNumber only
// for currency-adjacent values, use "number" for plain integers/decimals
bind quantity: ".qty-input | attr:value | number";
\`\`\`

**Rule of thumb**: use \`number\` for already-clean numeric strings (quantities, IDs, ratings), and
\`cleanNumber\` whenever a currency symbol, thousands separator, or surrounding whitespace might be
present.

### 3.6 \`hrefOrOnclick\` examples

Legacy sites frequently wire navigation through \`onclick="location.href='...'"\` instead of a real
\`href\`. \`hrefOrOnclick\` normalizes both cases into a single destination string.

\`\`\`vnr
// <a href="/item/42">View</a>
bind detailUrl: "a.view-link | hrefOrOnclick"; // -> "/item/42"

// <a onclick="window.location='/item/42'">View</a>
bind detailUrl: "a.view-link | hrefOrOnclick"; // -> "/item/42"

// <button onclick="document.location.href='/cart/add?id=7'">Add</button>
bind addToCartUrl: "button.add | hrefOrOnclick";
\`\`\`

### 3.7 \`hiddenInputs\` examples

Useful for preserving CSRF tokens or hidden form state when a form is being replaced by a React
component but still needs to submit compatible payloads server-side.

\`\`\`vnr
selector "#login-form" -> UiLoginForm {
    action: replace;
    bind csrfFields: "self | hiddenInputs";
    // -> '[{"name":"csrf_token","value":"9f2a..."},{"name":"redirect","value":"/home"}]'
}
\`\`\`

### 3.8 \`selector\` (self-referential) examples

Occasionally a component needs to know the *unique selector string* of the element it was mounted
on, e.g. for analytics or for a "scroll back to here" feature.

\`\`\`vnr
child items {
    selector: "#results .result-row";
    bind anchorSelector: "self | selector";
}
\`\`\`

---

## 4. \`theme\` — Exhaustive Examples

### 4.1 Minimal theme

\`\`\`vnr
theme "Minimal" {
    variables {
        --spm-accent: "#2563eb";
    }
}
\`\`\`

### 4.2 Full design-token palette

\`\`\`vnr
theme "Slate" {
    variables {
        --spm-bg-primary: "#0b0f14";
        --spm-bg-secondary: "#121820";
        --spm-bg-tertiary: "#1b232d";
        --spm-text-primary: "#f5f7fa";
        --spm-text-muted: "#8b98a5";
        --spm-accent: "#38bdf8";
        --spm-accent-fg: "#03131c";
        --spm-accent-hover: "#7dd3fc";
        --spm-border: "#233040";
        --spm-radius: "8px";
        --spm-radius-lg: "16px";
        --spm-shadow-sm: "0 1px 2px rgba(0,0,0,0.4)";
        --spm-font-sans: "'Inter', system-ui, sans-serif";
        --spm-font-mono: "'JetBrains Mono', monospace";
        --spm-spacing-1: "4px";
        --spm-spacing-2: "8px";
        --spm-spacing-3: "16px";
        --spm-spacing-4: "24px";
    }
    customStyles {
        "#legacy-ad-slot, #newsletter-modal, .cookie-banner { display: none !important; }"
    }
}
\`\`\`

### 4.3 Theme with only global CSS overrides (no custom variables)

\`\`\`vnr
theme "Bare" {
    variables {}
    customStyles {
        R"(
        body { overflow-x: hidden !important; }
        #legacy-footer-ads { display: none !important; }
        .popup-overlay { display: none !important; }
        )"
    }
}
\`\`\`

### 4.4 Theme hiding multiple ad/tracking regions at once

\`\`\`vnr
theme "AdFree" {
    variables {
        --spm-accent: "#16a34a";
    }
    customStyles {
        R"(
        #top-leaderboard-ad,
        #sidebar-ad-300x250,
        #interstitial-ad,
        .sponsored-listing,
        [id^="google_ads_"] { display: none !important; }
        )"
    }
}
\`\`\`

### 4.5 Light/dark-ready token set (values chosen so the same class names work under either scheme)

\`\`\`vnr
theme "AdaptiveContrast" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-bg-secondary: "#f4f5f7";
        --spm-text-primary: "#111318";
        --spm-text-muted: "#5b6472";
        --spm-accent: "#7c3aed";
        --spm-accent-fg: "#ffffff";
        --spm-border: "#e2e4e9";
        --spm-radius: "12px";
    }
    customStyles {
        ""
    }
}
\`\`\`

> **Note**: exactly one \`theme\` block is allowed per compiled project (per the base
> \`spm-cli\` docs). Declaring a second \`theme\` block anywhere in the workspace — even in a
> different \`.vnr\` file — is a compile-time error.

---

## 5. \`class\` / \`extends\` — Exhaustive Examples

### 5.1 Base link class + two specializations

\`\`\`vnr
class BaseLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class DocumentScopedLink extends BaseLink {
    scope: "document";
}

class ExternalLink extends BaseLink {
    bind isExternal: "self | attr:data-external | number";
}
\`\`\`

### 5.2 Two-level inheritance chain

\`\`\`vnr
class Interactive {
    bind isDisabled: "self | attr:disabled";
}

class Clickable extends Interactive {
    bind url: "self | attr:href";
}

class TrackedClickable extends Clickable {
    bind trackingId: "self | attr:data-track-id";
}
\`\`\`

\`TrackedClickable\` resolves, at compile time, to the union of all three classes' bindings:
\`isDisabled\`, \`url\`, \`trackingId\`.

### 5.3 Overriding a parent binding

\`\`\`vnr
class GenericCard {
    bind title: ".title | text";
    bind image: "img | attr:src";
}

class LazyLoadedCard extends GenericCard {
    // overrides GenericCard's "image" binding to read the lazy-load attribute instead
    bind image: "img | attr:data-src";
}
\`\`\`

Compiled \`LazyLoadedCard\` usage keeps \`title\` from the parent and uses the child's \`image\` rule.

### 5.4 Class used purely for scope, no bindings of its own

\`\`\`vnr
class GlobalPaginationLink {
    scope: "document";
    bind label: "self | text";
    bind url: "self | attr:href";
    bind isCurrent: "self | attr:aria-current";
}
\`\`\`

### 5.5 Sibling classes referencing each other's shape (not inheritance, just consistent fields)

\`\`\`vnr
class CommentAuthor {
    bind name: ".author-name | text";
    bind avatarUrl: ".author-avatar img | attr:src";
    bind profileUrl: ".author-name a | attr:href";
}

class ForumPostAuthor {
    bind name: ".poster-name | text";
    bind avatarUrl: ".poster-avatar img | attr:src";
    bind profileUrl: ".poster-name a | attr:href";
    bind postCount: ".poster-stats .posts | text | number";
    bind joinDate: ".poster-stats .joined | text";
}
\`\`\`

### 5.6 Real usage — extending a class inside a \`child\` block

\`\`\`vnr
reconstruct "#thread" -> UiThreadPage {
    child replies extends CommentAuthor {
        selector: ".reply";
        bind body: ".reply-body | html";
        bind postedAt: ".reply-meta time | attr:datetime";
    }
}
\`\`\`

Note that \`child\` can both extend a class **and** declare its own additional \`bind\` lines — the
final \`propsMap\` is the merge of inherited + locally declared bindings, with local bindings
winning on conflicts (same override rule as class-to-class inheritance).

### 5.7 Circular dependency (compile error — shown for reference)

\`\`\`vnr
// [ERROR] This will fail to compile: "circular inheritance detected: A -> B -> A"
class A extends B {
    bind x: "self | text";
}

class B extends A {
    bind y: "self | text";
}
\`\`\`

### 5.8 Referencing an undeclared class in the same file (compile error)

\`\`\`vnr
// [ERROR] Fails unless \`MissingBase\` is declared somewhere in this file or a sibling .vnr
// file in the same directory (see Sibling Class Autoloading, §15.3)
class Derived extends MissingBase {
    bind z: "self | text";
}
\`\`\`

---

## 6. \`selector\` — Exhaustive Examples

### 6.1 Simple hide

\`\`\`vnr
selector ".newsletter-signup-banner" {
    action: hide;
}
\`\`\`

### 6.2 Hide with a comma-separated multi-target selector

\`\`\`vnr
selector "#top-banner, .promo-strip, .site-notice" {
    action: hide;
}
\`\`\`

### 6.3 Replace with only static props

\`\`\`vnr
selector ".search-box" -> UiSearchBar {
    action: replace;
    placeholder: "Search the catalog…";
    submitUrl: "https://example.com/search";
    queryParamName: "q";
}
\`\`\`

### 6.4 Replace with a mix of static props and \`bind\`

\`\`\`vnr
selector "#account-widget" -> UiAccountMenu {
    action: replace;
    loginUrl: "https://example.com/login";
    logoutUrl: "https://example.com/logout";
    bind isLoggedIn: "self | attr:data-authenticated | number";
    bind username: ".account-name | text";
    bind avatarUrl: ".account-avatar img | attr:src";
}
\`\`\`

### 6.5 Multiple independent \`selector\` blocks in one file

\`\`\`vnr
selector "#top-nav" -> UiNavHeader {
    action: replace;
    logoHref: "https://example.com/";
}

selector "#footer-links" -> UiFooter {
    action: replace;
    bind columns: "self | attr:data-footer-json";
}

selector ".legacy-breadcrumbs" {
    action: hide;
}
\`\`\`

### 6.6 Component with a large static JSON array prop, via raw strings

\`\`\`vnr
selector "#quick-nav" -> UiQuickNav {
    action: replace;
    items: R"([
      { "icon": "home", "label": "Home", "url": "/" },
      { "icon": "search", "label": "Browse", "url": "/browse" },
      { "icon": "user", "label": "Account", "url": "/account" },
      { "icon": "cart", "label": "Cart", "url": "/cart" }
    ])";
}
\`\`\`

### 6.7 Search bar with regex-validated submit target (illustrative)

\`\`\`vnr
selector "#hero-search form" -> UiSearchBar {
    action: replace;
    placeholder: "Try 'wireless headphones'";
    submitUrl: "https://example.com/s";
    queryParamName: "query";
    bind defaultValue: "input[name='query'] | attr:value";
}
\`\`\`

### 6.8 \`selector\` inside a nested subdirectory file (\`layout/headers/top_nav.vnr\`)

\`\`\`vnr
// layout/headers/top_nav.vnr
selector "header.site-header" -> UiNavHeader {
    action: replace;
    className: "modernized-header";
    bind logoUrl: ".brand img | attr:src";

    child navLinks extends BaseLink {
        selector: "nav.primary a";
    }
}
\`\`\`

---

## 7. \`reconstruct\` — Exhaustive Examples

### 7.1 Minimal reconstruct (no constraints)

\`\`\`vnr
reconstruct "#app-root" -> UiHomePage {
    pageTitle: "Home";
}
\`\`\`

### 7.2 Reconstruct constrained by \`urlPattern\` (plain substring)

\`\`\`vnr
reconstruct "#listings" -> UiGridPage {
    urlPattern: "type=listing";
    pageTitle: "All Listings";
}
\`\`\`

### 7.3 Reconstruct constrained by \`urlPattern\` (regex via raw string)

\`\`\`vnr
reconstruct "#home" -> UiHeroLanding {
    urlPattern: R"(^https?:\\/\\/example\\.com\\/?(?:\\?.*)?$)";
    tagline: "Find anything. Instantly.";
}
\`\`\`

### 7.4 Reconstruct with \`mediaQuery\` gating (mobile-only mount)

\`\`\`vnr
reconstruct "#mobile-nav-drawer" -> UiMobileDrawer {
    mediaQuery: "(max-width: 768px)";
    pageTitle: "Menu";
}
\`\`\`

### 7.5 Reconstruct with static + dynamic props + one \`child\`

\`\`\`vnr
reconstruct "#directory" -> UiDirectoryPage {
    urlPattern: "page=directory";
    pageTitle: "Business Directory";
    resultsPerPage: 24;
    showMap: true;

    bind searchDefaultValue: ".directory-search input[name='q'] | attr:value";

    child entries {
        selector: ".directory-entry";
        bind name: ".entry-name | text";
        bind category: ".entry-category | text";
        bind phone: ".entry-phone | text";
        bind url: ".entry-name a | attr:href";
    }
}
\`\`\`

### 7.6 Reconstruct with multiple \`child\` blocks

\`\`\`vnr
reconstruct "#forum-index" -> UiForumIndexPage {
    urlPattern: "board=index";
    pageTitle: "Forum";

    child categories {
        selector: ".forum-category";
        bind name: ".category-title | text";
        bind description: ".category-desc | text";
        bind topicCount: ".category-stats .topics | text | number";
        bind postCount: ".category-stats .posts | text | number";
    }

    child announcements {
        scope: "document";
        selector: "#sitewide-announcements li";
        bind title: "a | text";
        bind url: "a | attr:href";
    }
}
\`\`\`

### 7.7 Reconstruct + \`preserve\` + \`child\` together (full combination)

\`\`\`vnr
reconstruct "#item-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/item\\/\\d+)";
    pageTitle: "Item Details";

    bind title: "h1.item-title | text";
    bind description: ".item-description | html";
    bind price: ".item-price | text | cleanNumber";
    bind imageUrl: ".item-gallery img.main | attr:src";

    preserve {
        commentsSlot: "#legacy-comments-widget";
        purchaseFormSlot: "#legacy-buy-box form";
    }

    child gallery {
        selector: ".item-gallery .thumb";
        bind imageUrl: "img | attr:src";
        bind altText: "img | attr:alt";
    }

    child specifications {
        selector: ".spec-table tr";
        bind label: "td:first-child | text";
        bind value: "td:last-child | text";
    }
}
\`\`\`

### 7.8 Reconstruct with nested (recursive) children — comment threads

\`\`\`vnr
reconstruct "#thread-view" -> UiThreadPage {
    urlPattern: "thread=";
    pageTitle: "Discussion Thread";

    child topLevelComments extends CommentAuthor {
        selector: ".comment.depth-0";
        bind body: ".comment-body | html";
        bind commentId: "self | attr:data-comment-id";

        child replies extends CommentAuthor {
            selector: ".comment.depth-1";
            bind body: ".comment-body | html";
            bind commentId: "self | attr:data-comment-id";
        }
    }
}
\`\`\`

### 7.9 Reconstruct targeting several possible container selectors

\`\`\`vnr
reconstruct "#results-grid, .search-results-container" -> UiGridPage {
    urlPattern: "q=";
    pageTitle: "Search Results";
}
\`\`\`

### 7.10 Two reconstructs in the same file, gated by mutually-exclusive URL patterns

\`\`\`vnr
reconstruct "#catalog" -> UiGridPage {
    urlPattern: R"(\\/browse\\/?$)";
    pageTitle: "Browse Catalog";
}

reconstruct "#catalog" -> UiListPage {
    urlPattern: R"(\\/browse\\?view=list)";
    pageTitle: "Browse Catalog (List View)";
}
\`\`\`

---

## 8. \`child\` — Exhaustive Examples

### 8.1 Minimal child list

\`\`\`vnr
child items {
    selector: ".item-card";
    bind title: ".title | text";
}
\`\`\`

### 8.2 Child list with several bindings

\`\`\`vnr
child products {
    selector: ".product-tile";
    bind id: "self | attr:data-product-id";
    bind title: ".product-name | text";
    bind price: ".product-price | text | cleanNumber";
    bind imageUrl: "img.product-image | attr:src";
    bind inStock: ".stock-badge | attr:data-in-stock | number";
    bind url: "a.product-link | attr:href";
}
\`\`\`

### 8.3 Child extending a class, with local overrides

\`\`\`vnr
child footerLinks extends BaseLink {
    selector: "#footer nav a";
    // adds a field not present on BaseLink
    bind section: "self | attr:data-section";
}
\`\`\`

### 8.4 Child with \`scope: "document"\` for elements outside the reconstruct container

\`\`\`vnr
child paginationLinks extends BaseLink {
    scope: "document";
    selector: "#pager .page-link";
}
\`\`\`

### 8.5 Nested (recursive) child — category tree, 3 levels deep

\`\`\`vnr
child rootCategories {
    selector: ".category-tree > .category-node";
    bind name: "> .category-label | text";
    bind slug: "self | attr:data-slug";

    child subCategories {
        selector: "> .category-children > .category-node";
        bind name: "> .category-label | text";
        bind slug: "self | attr:data-slug";

        child leafCategories {
            selector: "> .category-children > .category-node";
            bind name: "> .category-label | text";
            bind slug: "self | attr:data-slug";
        }
    }
}
\`\`\`

### 8.6 Multiple sibling \`child\` blocks with different purposes inside one \`reconstruct\`

\`\`\`vnr
reconstruct "#dashboard" -> UiDashboardPage {
    child metrics {
        selector: ".metric-tile";
        bind label: ".metric-label | text";
        bind value: ".metric-value | text | cleanNumber";
        bind trend: ".metric-trend | attr:data-trend";
    }

    child recentActivity {
        selector: ".activity-row";
        bind actor: ".activity-actor | text";
        bind action: ".activity-action | text";
        bind timestamp: ".activity-time | attr:datetime";
    }

    child quickLinks extends BaseLink {
        selector: ".quick-link";
    }
}
\`\`\`

### 8.7 Child list scraping a data table (rows -> objects)

\`\`\`vnr
child tableRows {
    selector: "table#report-table tbody tr";
    bind rank: "td:nth-child(1) | text | number";
    bind name: "td:nth-child(2) | text";
    bind score: "td:nth-child(3) | text | cleanNumber";
    bind change: "td:nth-child(4) | text";
}
\`\`\`

### 8.8 Child list combining a \`bind\` and a nested \`child\` (item + its tags)

\`\`\`vnr
child articles {
    selector: ".article-summary";
    bind headline: "h2 | text";
    bind excerpt: ".excerpt | text";
    bind publishedAt: "time | attr:datetime";
    bind url: "h2 a | attr:href";

    child tags {
        selector: ".article-tags a";
        bind label: "self | text";
        bind url: "self | attr:href";
    }
}
\`\`\`

---

## 9. \`bind\` — Exhaustive Examples

### 9.1 Text content

\`\`\`vnr
bind title: "h1 | text";
bind subtitle: "h2.subtitle | text";
bind footerNote: "#legal-disclaimer | text";
\`\`\`

### 9.2 HTML content (rich text preserved)

\`\`\`vnr
bind bodyHtml: ".post-content | html";
bind termsHtml: "#terms-block | html";
\`\`\`

### 9.3 Attributes

\`\`\`vnr
bind imageUrl: "img.hero | attr:src";
bind videoUrl: "video source | attr:src";
bind ariaLabel: "button.close | attr:aria-label";
bind dataId: "self | attr:data-id";
bind lang: "html | attr:lang";
\`\`\`

### 9.4 Combined pipes for cleaned numeric data

\`\`\`vnr
bind rating: ".star-rating | attr:data-rating | number";
bind reviewCount: ".review-count | text | cleanNumber";
bind discountPercent: ".discount-badge | text | cleanNumber";
\`\`\`

### 9.5 Combined pipes for arrays

\`\`\`vnr
bind sizes: ".size-options | attr:data-sizes | split:,";
bind colorSwatches: ".color-options | attr:data-colors | split:|";
bind keywords: "meta[name='keywords'] | attr:content | split:,";
\`\`\`

### 9.6 Binding against \`self\` at every applicable level

\`\`\`vnr
selector "#promo-banner" -> UiPromoBanner {
    action: replace;
    bind headline: "self | attr:data-headline";
    bind ctaUrl: "self | hrefOrOnclick";
}

reconstruct "#landing" -> UiHeroLanding {
    bind backgroundImage: "self | attr:data-bg";
}

child items {
    selector: ".item";
    bind id: "self | attr:id";
}
\`\`\`

### 9.7 Multiple \`bind\` lines targeting the same descendant selector for different purposes

\`\`\`vnr
bind thumbnailUrl: "img.cover | attr:src";
bind thumbnailAlt: "img.cover | attr:alt";
bind thumbnailWidth: "img.cover | attr:width | number";
\`\`\`

### 9.8 \`bind\` used for form pre-fill values

\`\`\`vnr
selector "#filter-form" -> UiFilterPanel {
    action: replace;
    bind selectedCategory: "select[name='category'] | attr:value";
    bind minPrice: "input[name='min_price'] | attr:value | number";
    bind maxPrice: "input[name='max_price'] | attr:value | number";
    bind inStockOnly: "input[name='in_stock'] | attr:checked";
}
\`\`\`

---

## 10. \`preserve\` — Exhaustive Examples

### 10.1 Preserving a single legacy widget

\`\`\`vnr
reconstruct "#item-detail" -> UiItemDetailsPage {
    preserve {
        reviewsSlot: "#legacy-reviews-widget";
    }
}
\`\`\`

### 10.2 Preserving several widgets at once

\`\`\`vnr
reconstruct "#checkout" -> UiCheckoutPage {
    preserve {
        paymentFormSlot: "#legacy-payment-iframe";
        couponWidgetSlot: ".coupon-code-box";
        shippingCalculatorSlot: "#shipping-estimator";
    }
}
\`\`\`

### 10.3 Preserving a third-party embedded widget (chat, live support)

\`\`\`vnr
reconstruct "#support-center" -> UiSupportPage {
    preserve {
        liveChatSlot: "#zendesk-chat-widget";
    }
}
\`\`\`

### 10.4 Preserving a legacy comment form while reconstructing the whole thread

\`\`\`vnr
reconstruct "#thread" -> UiThreadPage {
    preserve {
        newCommentFormSlot: "#legacy-comment-form";
    }

    child comments extends CommentAuthor {
        selector: ".comment";
        bind body: ".comment-body | html";
    }
}
\`\`\`

> Per the manifest schema, the runtime looks for a host element with
> \`id="{slotName}-container"\` inside the React layout to reparent the preserved node into —
> layout components must declare matching containers for every slot name used in \`preserve\`.

---

## 11. \`scope\` — Exhaustive Examples

### 11.1 Default (implicit) container scope — no \`scope\` key needed

\`\`\`vnr
reconstruct "#gallery" -> UiGridPage {
    child items {
        // implicitly scoped to descendants of "#gallery"
        selector: ".item-card";
    }
}
\`\`\`

### 11.2 Explicit \`document\` scope for elements physically outside the container

\`\`\`vnr
reconstruct "#gallery" -> UiGridPage {
    child pagination extends BaseLink {
        scope: "document";
        selector: "#global-pager a";
    }
}
\`\`\`

### 11.3 Mixed scoping within the same \`reconstruct\`

\`\`\`vnr
reconstruct "#results" -> UiGridPage {
    child items {
        // scoped to "#results" (default)
        selector: ".result-card";
    }

    child filters {
        // scoped to the whole document, since filters live in the sidebar,
        // outside of #results
        scope: "document";
        selector: "#sidebar-filters .filter-option";
        bind label: "self | text";
        bind value: "self | attr:data-value";
    }
}
\`\`\`

### 11.4 \`scope\` on a class, inherited by every child that extends it

\`\`\`vnr
class GlobalNavLink {
    scope: "document";
    bind label: "self | text";
    bind url: "self | attr:href";
}

reconstruct "#page" -> UiPage {
    child topNav extends GlobalNavLink {
        selector: "#site-header nav a"; // resolved from document root, not #page
    }
}
\`\`\`

### 11.5 Why \`scope: "container"\` is never emitted

\`\`\`vnr
child items {
    scope: "container"; // explicit, but redundant — this is already the default
    selector: ".item";
}
\`\`\`

Compiled output omits the \`scope\` key entirely for this block (identical output to §11.1),
because \`"container"\` is the default and the compiler strips it to keep the manifest minimal.

---

## 12. Known Components — Observed Contract

The following components and prop names are used as illustrative examples across the official
\`spm-cli\` docs. They are documented here **only to the extent they appear in those examples** —
treat this as a partial, "as observed" reference, not an exhaustive spec. The authoritative,
complete prop tables for every component ship in \`spm-components/docs\`.

| Component | Observed static props | Observed dynamic (\`bind\`) props | Observed \`child\` usage |
|---|---|---|---|
| \`UiNavHeader\` | \`className\`, \`logoHref\`, \`primaryLinks\` (JSON array), \`secondaryLinks\` (JSON array) | \`logoUrl\`, \`siteName\` | link lists via extended classes |
| \`UiSearchBar\` | \`placeholder\`, \`submitUrl\`, \`queryParamName\` | \`defaultValue\` | — |
| \`UiGridPage\` | \`pageTitle\`, \`className\`, \`height\`, \`sidebarWidth\`, \`showSearch\`, \`searchPlaceholder\`, \`searchSubmitUrl\`, \`searchParamName\`, \`mobileColumns\`, \`mobileGap\`, \`mobilePadding\`, \`mobileShowHeader\`, \`mobileHeaderSticky\`, \`mobileShowPagination\`, \`mobileCardAspectRatio\`, \`hideSidebarOnMobile\`, \`mobileBreakpoint\`, \`tagGroups\` (JSON array) | \`searchDefaultValue\` | \`items\`, \`tags\` (extends a tag class), \`pageLinks\` (extends a link class) |
| \`UiHeroLanding\` | \`tagline\`, \`subtext\`, \`ctaLabel\`, \`ctaUrl\`, \`searchPlaceholder\`, \`searchSubmitUrl\`, \`searchParamName\` | \`logoUrl\`, \`siteName\` | \`primaryLinks\` (extends a link class) |
| \`UiItemDetailsPage\` | \`pageTitle\` (implied) | \`title\`, \`description\`, \`price\`, \`imageUrl\` (implied by \`preserve\` example) | \`preserve.sidebarSlot\`, gallery/spec children |

All numeric-looking static values (\`mobileColumns: 2\`, \`mobileBreakpoint: 720\`) are emitted as
native JSON numbers per the implicit type deserialization rules; all boolean-looking values
(\`showSearch: true\`) are emitted as native JSON booleans.

**To extend this table with the full, authoritative component catalog** (every prop each
component accepts, its type, whether it's required, and default values), share the contents of
\`spm-ecosystem/spm-components/docs\` — either pasted directly or as individual raw file URLs
(e.g. \`https://raw.githubusercontent.com/spm-ecosystem/spm-components/main/docs/UiGridPage.md\`).
Once available, this section can be rewritten into one full sub-section per component, each with
a complete prop table and dedicated \`.vnr\` examples exercising every prop.

---

## 13. Raw String Literals — Pattern Library

Raw strings (\`R"(...)"\`) exist so regexes and inline JSON never need backslash-escaping. The
delimiter defaults to nothing (\`R"(...)"\`) but can be customized (\`\` R"delim(...)delim" \`\`) if the
content itself contains the sequence \`)"\`.

### 13.1 URL pattern regexes

\`\`\`vnr
// Root/home page only, with or without trailing slash or index.html
urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";

// Any path under /blog/
urlPattern: R"(\\/blog\\/.+)";

// A specific numeric item route
urlPattern: R"(\\/item\\/\\d+\\/?$)";

// Query string contains page=gallery, in any position
urlPattern: R"([?&]page=gallery(&|$))";

// Exclude admin subpaths while matching everything else under /shop
urlPattern: R"(\\/shop\\/(?!admin).*)";

// Multiple TLDs for the same brand
urlPattern: R"(example\\.(com|co\\.uk|de)\\/)";
\`\`\`

### 13.2 Inline JSON arrays for static props

\`\`\`vnr
primaryLinks: R"([
  { "label": "Home", "url": "https://example.com/" },
  { "label": "Shop", "url": "https://example.com/shop" },
  { "label": "About", "url": "https://example.com/about" }
])";
\`\`\`

### 13.3 Inline JSON objects with nested structures

\`\`\`vnr
tagGroups: R"([
  { "title": "Categories", "typeKey": "category" },
  { "title": "Brands", "typeKey": "brand", "collapsedByDefault": true },
  { "title": "Price Range", "typeKey": "price", "renderAs": "slider" }
])";
\`\`\`

### 13.4 Table column definitions (common in dashboard/grid components)

\`\`\`vnr
columns: R"([
  { "key": "id", "header": "ID", "width": "60px" },
  { "key": "name", "header": "Name", "type": "text" },
  { "key": "createdAt", "header": "Created", "type": "date" },
  { "key": "actions", "header": "", "type": "actions", "width": "80px" }
])";
\`\`\`

### 13.5 Custom delimiter usage (content contains the default closing sequence)

\`\`\`vnr
// The content includes literal \`)"\` inside a nested string, so a custom delimiter is required
customStyles {
    R"css(
    .quote::after { content: ")"; }
    )css"
}
\`\`\`

### 13.6 Raw strings for multi-line CSS

\`\`\`vnr
customStyles {
    R"(
    #legacy-hero-banner { display: none !important; }
    body.legacy-theme { background: var(--spm-bg-primary) !important; }
    .cta-button {
        border-radius: var(--spm-radius);
        background: var(--spm-accent);
        color: var(--spm-accent-fg);
    }
    )"
}
\`\`\`

### 13.7 Regex with alternation for multi-selector matching contexts

\`\`\`vnr
// Matches "/forum/thread/123" or "/forum/t/123"
urlPattern: R"(\\/forum\\/(?:thread|t)\\/\\d+)";
\`\`\`

### 13.8 Escaping-avoidance comparison (why raw strings matter)

\`\`\`vnr
// Without raw strings — every backslash and quote must be escaped:
urlPattern: "example\\\\.com\\\\/item\\\\/\\\\d+";

// With raw strings — written exactly as a regex engine would expect:
urlPattern: R"(example\\.com\\/item\\/\\d+)";
\`\`\`

---

## 14. Implicit JSON Type Deserialization — Exhaustive Cases

The emitter attempts to parse every property value as JSON before falling back to a plain string.

| Written value | Emitted as | Type |
|---|---|---|
| \`mobileColumns: 2;\` | \`2\` | number |
| \`mobileGap: "8px";\` | \`"8px"\` | string (fails JSON number parse) |
| \`showSearch: true;\` | \`true\` | boolean |
| \`hideSidebarOnMobile: false;\` | \`false\` | boolean |
| \`mobileBreakpoint: 720;\` | \`720\` | number |
| \`tagGroups: R"([{"title":"Tags"}])";\` | \`[{"title":"Tags"}]\` | array |
| \`metadata: R"({"source":"legacy"})";\` | \`{"source":"legacy"}\` | object |
| \`pageTitle: "Gallery";\` | \`"Gallery"\` | string |
| \`discountRate: "0.15";\` | \`0.15\` | number (valid JSON number literal) |
| \`phoneNumber: "5551234567";\` | \`5551234567\` | **number** — caution, see 14.1 |
| \`zipCode: "02139";\` | \`"02139"\` | string — leading zero makes it invalid JSON number, stays a string |
| \`isFeatured: "true";\` | \`true\` | boolean (quoted \`"true"\` still parses as JSON boolean) |
| \`emptyList: "[]";\` | \`[]\` | array |
| \`nullableField: "null";\` | \`null\` | null |

### 14.1 Gotcha — numeric-looking IDs silently becoming numbers

\`\`\`vnr
// DANGER: if this "phone" string is a pure digit sequence with no leading zero,
// it will be coerced to a JSON number, which can lose formatting significance
// (e.g. leading zeros, or values too large for a JS float to represent exactly).
bind accountNumber: "self | attr:data-account"; // e.g. "10023491"  -> emitted as 10023491
\`\`\`

**Mitigation**: if a value must always remain a string (phone numbers, account numbers, postal
codes with leading zeros), keep at least one non-numeric character, prefix with a stable marker,
or rely on the fact that leading zeros already force string emission:

\`\`\`vnr
// Leading zero forces string output naturally
bind zip: ".address .zip | text"; // "02139" stays a string

// For all-digit values with no leading zero, consider whether numeric emission
// is actually acceptable for the target prop's expected type before relying on it.
\`\`\`

### 14.2 Booleans from \`attr:checked\` / \`attr:disabled\`

\`\`\`vnr
// <input type="checkbox" checked> -> attr:checked returns "checked" (a string, not boolean!)
// This does NOT auto-coerce to \`true\` unless you validate with your own logic downstream.
bind subscribed: "input[name='newsletter'] | attr:checked";
\`\`\`

### 14.3 Arrays and objects only coerce from **raw strings**, not from unescaped quoted strings

\`\`\`vnr
// [ERROR] Will NOT parse as JSON — the escaped quotes make this a plain string containing braces
badExample: "{\\"a\\": 1}";

// [OK] Correct approach — use a raw string so the JSON body is unescaped
goodExample: R"({"a": 1})";
\`\`\`

---

## 15. Workspace / Multi-file Compilation Examples

### 15.1 Recommended nested package layout

\`\`\`
theme-project/
├── core/
│   └── classes.vnr          # shared class blueprints (BaseLink, CardBase, etc.)
├── layout/
│   ├── headers/
│   │   └── top_nav.vnr
│   └── footers/
│       └── site_footer.vnr
├── pages/
│   ├── home/
│   │   └── landing.vnr
│   ├── gallery/
│   │   └── grid_layout.vnr
│   └── item/
│       └── details.vnr
├── theme.vnr                 # single global theme block
└── manifest.json              # compiled output target (also merge source)
\`\`\`

Compile the whole tree in one pass:

\`\`\`bash
./spm compile theme-project/ -o theme-project/manifest.json
\`\`\`

### 15.2 File naming is arbitrary — this is equally valid

\`\`\`
theme-project/
├── a.vnr
├── b.vnr
├── zzz_misc_overrides.vnr
└── whatever_i_want.vnr
\`\`\`

The compiler concatenates and globally resolves every \`.vnr\` file it finds recursively,
regardless of name.

### 15.3 Sibling Class Autoloading — linter mode example

\`\`\`bash
# Compiling just pages/gallery/grid_layout.vnr in isolation (e.g. from an editor linter)
./spm compile theme-project/pages/gallery/grid_layout.vnr -o /tmp/grid_layout.json
\`\`\`

If \`grid_layout.vnr\` references \`class TagItem\` (declared in a sibling file in the same
directory, e.g. \`pages/gallery/classes.vnr\`), the compiler transparently loads that sibling file
in the background purely to resolve the class — it does **not** emit anything from that sibling
file into \`/tmp/grid_layout.json\` beyond what \`grid_layout.vnr\` itself references.

### 15.4 Class declared in a completely different top-level directory (works, because resolution is global for full-workspace compiles)

\`\`\`vnr
// core/classes.vnr
class BaseLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}
\`\`\`

\`\`\`vnr
// pages/home/landing.vnr — different directory entirely
reconstruct "#hero" -> UiHeroLanding {
    child quickLinks extends BaseLink {
        selector: ".quick-link";
    }
}
\`\`\`

This only resolves correctly when compiling the **directory** (\`spm compile theme-project/ -o ...\`),
since single-file linter mode only auto-loads *sibling* files, not the whole tree.

### 15.5 Deep merge with a pre-existing manifest (metadata preservation)

Given an existing \`manifest.json\`:

\`\`\`json
{
  "targetUrl": "*://example.com/*",
  "version": "2.3.1",
  "minEngineVersion": "1.4.0",
  "theme": {
    "author": "acme-themes",
    "description": "Official Acme dark theme"
  }
}
\`\`\`

Running \`spm compile theme-project/ -o manifest.json\` again — after editing only \`.vnr\` sources —
preserves \`targetUrl\`, \`version\`, \`minEngineVersion\`, \`author\`, and \`description\` in the freshly
emitted output, merging them with whatever the new compilation produces for \`cssVariables\`,
\`customStyles\`, \`components\`, and \`reconstructs\`.

---

## 16. Full Worked Themes

### 16.1 Marketplace theme

\`\`\`vnr
// theme.vnr
theme "MarketplaceLight" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-bg-secondary: "#f7f7f8";
        --spm-accent: "#ff5a1f";
        --spm-accent-fg: "#ffffff";
        --spm-border: "#e5e5e5";
        --spm-radius: "10px";
    }
    customStyles {
        "#legacy-promo-carousel, .sticky-ad-footer { display: none !important; }"
    }
}
\`\`\`

\`\`\`vnr
// core/classes.vnr
class ListingLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class ListingCard {
    bind title: ".listing-title | text";
    bind price: ".listing-price | text | cleanNumber";
    bind imageUrl: "img.listing-photo | attr:src";
    bind location: ".listing-location | text";
    bind postedAt: ".listing-date | attr:datetime";
    bind url: "a.listing-link | attr:href";
}
\`\`\`

\`\`\`vnr
// layout/headers/top_nav.vnr
selector "#site-header" -> UiNavHeader {
    action: replace;
    className: "marketplace-header";
    logoHref: "https://example-market.com/";
    bind logoUrl: ".brand-logo img | attr:src";

    child categories extends ListingLink {
        selector: "#category-nav a";
    }
}

selector "#legacy-search-bar" -> UiSearchBar {
    action: replace;
    placeholder: "Search listings…";
    submitUrl: "https://example-market.com/search";
    queryParamName: "q";
    bind defaultValue: "input[name='q'] | attr:value";
}
\`\`\`

\`\`\`vnr
// pages/browse/grid.vnr
reconstruct "#listings-container" -> UiGridPage {
    urlPattern: R"(\\/browse\\/?(\\?.*)?$)";
    pageTitle: "Browse Listings";
    mobileColumns: 2;
    mobileGap: "8px";
    showSearch: true;

    tagGroups: R"([
      { "title": "Category", "typeKey": "category" },
      { "title": "Condition", "typeKey": "condition" },
      { "title": "Price", "typeKey": "price" }
    ])";

    child items extends ListingCard {
        selector: ".listing-card";
    }

    child pageLinks extends ListingLink {
        scope: "document";
        selector: "#pagination a";
    }
}
\`\`\`

\`\`\`vnr
// pages/item/details.vnr
reconstruct "#listing-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/listing\\/\\d+)";

    bind title: "h1.listing-title | text";
    bind description: ".listing-description | html";
    bind price: ".listing-price | text | cleanNumber";
    bind sellerName: ".seller-info .name | text";

    preserve {
        contactSellerSlot: "#legacy-contact-form";
    }

    child gallery {
        selector: ".listing-gallery .thumb";
        bind imageUrl: "img | attr:src";
    }
}
\`\`\`

### 16.2 Forum theme

\`\`\`vnr
theme "ForumDark" {
    variables {
        --spm-bg-primary: "#12141a";
        --spm-accent: "#5865f2";
        --spm-text-primary: "#e6e7ec";
        --spm-border: "#23252d";
    }
    customStyles {
        "#forum-sponsor-bar { display: none !important; }"
    }
}

class UserRef {
    scope: "document";
    bind username: "self | text";
    bind profileUrl: "self | attr:href";
}

reconstruct "#board-index" -> UiForumIndexPage {
    urlPattern: "board=index";
    pageTitle: "Community Forum";

    child categories {
        selector: ".forum-category-block";
        bind name: ".cat-title | text";
        bind topicCount: ".cat-stats .topics | text | number";
        bind postCount: ".cat-stats .posts | text | number";

        child lastPoster extends UserRef {
            selector: ".cat-last-post .username a";
        }
    }
}

reconstruct "#thread-view" -> UiThreadPage {
    urlPattern: R"(\\/thread\\/\\d+)";
    pageTitle: "Thread";

    preserve {
        replyFormSlot: "#legacy-reply-box";
    }

    child posts {
        selector: ".forum-post";
        bind body: ".post-content | html";
        bind postedAt: ".post-meta time | attr:datetime";

        child author extends UserRef {
            selector: ".post-author a.username";
        }
    }
}
\`\`\`

### 16.3 News / blog theme

\`\`\`vnr
theme "EditorialClean" {
    variables {
        --spm-bg-primary: "#ffffff";
        --spm-text-primary: "#1a1a1a";
        --spm-accent: "#c0392b";
        --spm-font-sans: "'Source Sans Pro', sans-serif";
    }
    customStyles {
        "#autoplay-video-widget, .paywall-nag { display: none !important; }"
    }
}

class ArticleLink {
    bind headline: "h3 | text";
    bind url: "h3 a | attr:href";
    bind imageUrl: "img | attr:src";
    bind category: ".kicker | text";
    bind publishedAt: "time | attr:datetime";
}

reconstruct "#front-page" -> UiHeroLanding {
    urlPattern: R"(^https?:\\/\\/example-news\\.com\\/?$)";
    tagline: "Today's Top Stories";

    child topStories extends ArticleLink {
        selector: ".top-story";
    }
}

reconstruct "#category-feed" -> UiGridPage {
    urlPattern: R"(\\/section\\/[a-z-]+\\/?$)";
    pageTitle: "Section";
    mobileColumns: 1;

    child items extends ArticleLink {
        selector: ".article-teaser";
    }
}

reconstruct "#article-body" -> UiItemDetailsPage {
    urlPattern: R"(\\/article\\/\\d+)";

    bind title: "h1.headline | text";
    bind byline: ".byline | text";
    bind bodyHtml: ".article-content | html";
    bind publishedAt: "time.published | attr:datetime";

    preserve {
        commentsSlot: "#legacy-comments-plugin";
    }
}
\`\`\`

### 16.4 Job board theme

\`\`\`vnr
theme "CareerBoard" {
    variables {
        --spm-accent: "#0a66c2";
        --spm-radius: "6px";
    }
    customStyles {
        ""
    }
}

class JobCard {
    bind title: ".job-title | text";
    bind company: ".job-company | text";
    bind location: ".job-location | text";
    bind salary: ".job-salary | text | cleanNumber";
    bind postedAt: ".job-posted | attr:datetime";
    bind url: "a.job-link | attr:href";
    bind remote: "self | attr:data-remote | number";
}

reconstruct "#job-search-results" -> UiGridPage {
    urlPattern: "q=";
    pageTitle: "Job Search";
    mobileColumns: 1;
    showSearch: true;
    searchPlaceholder: "Job title, keyword, or company";
    searchSubmitUrl: "https://example-jobs.com/search";
    searchParamName: "q";

    bind searchDefaultValue: "#job-search-input | attr:value";

    child items extends JobCard {
        selector: ".job-result-row";
    }

    child pageLinks {
        scope: "document";
        selector: "#results-pager a";
        bind label: "self | text";
        bind url: "self | attr:href";
    }
}
\`\`\`

### 16.5 Real estate theme

\`\`\`vnr
theme "PropertyModern" {
    variables {
        --spm-accent: "#0f766e";
        --spm-bg-secondary: "#f0fdfa";
    }
    customStyles {
        ""
    }
}

class ListingSummary {
    bind price: ".price | text | cleanNumber";
    bind beds: ".beds | text | number";
    bind baths: ".baths | text | number";
    bind sqft: ".sqft | text | cleanNumber";
    bind address: ".address | text";
    bind imageUrl: "img.primary-photo | attr:src";
    bind url: "a.listing-link | attr:href";
}

reconstruct "#property-search" -> UiGridPage {
    urlPattern: "listings";
    pageTitle: "Property Listings";
    mobileColumns: 1;
    tagGroups: R"([
      { "title": "Beds", "typeKey": "beds" },
      { "title": "Price Range", "typeKey": "price" },
      { "title": "Property Type", "typeKey": "type" }
    ])";

    child items extends ListingSummary {
        selector: ".property-card";
    }
}

reconstruct "#property-detail" -> UiItemDetailsPage {
    urlPattern: R"(\\/property\\/\\d+)";

    bind address: "h1.property-address | text";
    bind price: ".property-price | text | cleanNumber";
    bind description: ".property-description | html";

    preserve {
        contactAgentSlot: "#legacy-agent-contact-form";
        mortgageCalculatorSlot: "#legacy-mortgage-calc";
    }

    child photos {
        selector: ".property-gallery img";
        bind imageUrl: "self | attr:src";
    }

    child features {
        selector: ".feature-list li";
        bind label: "self | text";
    }
}
\`\`\`

---

## 17. Common Errors, Anti-Patterns & Fixes

### 17.1 Missing semicolon

\`\`\`vnr
// [ERROR] compile error: expected ';' after property value
selector "#nav" -> UiNavHeader {
    action: replace
    logoHref: "https://example.com/";
}
\`\`\`

\`\`\`vnr
// [OK]
selector "#nav" -> UiNavHeader {
    action: replace;
    logoHref: "https://example.com/";
}
\`\`\`

### 17.2 Two \`theme\` blocks in the workspace

\`\`\`vnr
// file: a.vnr
theme "First" { variables {} }

// file: b.vnr — [ERROR] compile error: duplicate theme declaration
theme "Second" { variables {} }
\`\`\`

### 17.3 Unescaped backslashes in a plain (non-raw) string regex

\`\`\`vnr
// [ERROR] almost certainly not what was intended — "\\d" is not a valid escape
// sequence in a plain string literal and will likely be mis-parsed or rejected
urlPattern: "\\d+";

// [OK] use a raw string for anything regex-flavored
urlPattern: R"(\\d+)";
\`\`\`

### 17.4 Forgetting \`action\` on a \`selector\` block

\`\`\`vnr
// [ERROR] compile error: selector block missing required "action" key
selector "#promo" -> UiPromoBanner {
    headline: "Sale!";
}
\`\`\`

\`\`\`vnr
// [OK]
selector "#promo" -> UiPromoBanner {
    action: replace;
    headline: "Sale!";
}
\`\`\`

### 17.5 Extending a class declared later in the same file, in a workspace/full-directory compile

This is actually **fine** — class resolution happens after full parsing, so declaration order
across the workspace does not matter for a directory compile:

\`\`\`vnr
reconstruct "#page" -> UiPage {
    child links extends LinkClassDeclaredBelow {
        selector: ".link";
    }
}

class LinkClassDeclaredBelow {
    bind label: "self | text";
    bind url: "self | attr:href";
}
\`\`\`

It only becomes a problem in **single-file linter mode** if the class lives in a file the
compiler's sibling autoloader can't find (e.g. it's in a different top-level directory) — see
§15.3–15.4.

### 17.6 Using \`child\` outside of a \`selector\`/\`reconstruct\` block

\`\`\`vnr
// [ERROR] compile error: "child" is only valid nested inside a selector or reconstruct block
child orphanList {
    selector: ".x";
}
\`\`\`

### 17.7 Typo'd base extractor name

\`\`\`vnr
// [ERROR] compile error: unknown base extractor "txt" (did you mean "text"?)
bind title: "h2 | txt";
\`\`\`

### 17.8 Reusing a \`child\` name twice at the same nesting level

\`\`\`vnr
// [ERROR] likely a compile-time or resolver-level conflict: duplicate child name "items"
// within the same parent block
reconstruct "#page" -> UiGridPage {
    child items {
        selector: ".a";
    }
    child items {
        selector: ".b";
    }
}
\`\`\`

\`\`\`vnr
// [OK] give each list a distinct prop name
reconstruct "#page" -> UiGridPage {
    child primaryItems {
        selector: ".a";
    }
    child secondaryItems {
        selector: ".b";
    }
}
\`\`\`

### 17.9 Raw string delimiter collision

\`\`\`vnr
// [ERROR] the default raw-string terminator \`)"\` appears inside the content itself,
// closing the literal prematurely and leaving trailing garbage that fails to parse
badRegex: R"(\\)")"; 
\`\`\`

\`\`\`vnr
// [OK] use a custom delimiter so the closing sequence becomes unambiguous
badRegex: R"tag(\\)")tag";
\`\`\`

### 17.10 Forgetting that \`preserve\` slot names must match layout-side container IDs

A \`preserve\` block referencing \`mySlot\` compiles successfully even if \`UiSomePage\` has no
\`id="mySlot-container"\` element in its rendered output — the *compiler* has no way to validate
against the React component internals. This fails silently at **runtime** (the node is removed
from the legacy DOM but never reparented anywhere visible), not at compile time. Always confirm
slot names against the target component's actual implementation/docs.

---

## 18. CLI Recipes

\`\`\`bash
# Compile a full workspace to a manifest
./spm compile theme-project/ -o theme-project/manifest.json

# Lint a single file without writing a permanent manifest
./spm compile theme-project/pages/home/landing.vnr -o /tmp/landing.json

# Iterate on a single page's markup while live-reloading via the browser extension
./spm dev theme-project/

# Typical CI step: compile and fail the build on any compiler diagnostic
./spm compile theme-project/ -o theme-project/manifest.json || exit 1
\`\`\`

---

## 19. Cheat Sheet

\`\`\`
theme "<Label>" {
    variables { --token-name: "<value>"; }
    customStyles {
        "<raw-css>"
    }
}

class <Name> [extends <Parent>] {
    [scope: "document";]
    bind <prop>: "<selector-or-self> | <extractor> [| <pipe>]*";
}

selector "<css-selector>" [-> <Component>] {
    action: hide | replace;
    <staticProp>: <value>;
    bind <prop>: "<extraction>";
    [child <name> [extends <Class>] { ... }]
}

reconstruct "<css-selector>" -> <Component> {
    [urlPattern: "<substring-or-regex>";]
    [mediaQuery: "<css-media-query>";]
    <staticProp>: <value>;
    bind <prop>: "<extraction>";
    [preserve { <slotName>: "<selector>"; }]
    [child <name> [extends <Class>] {
        [scope: "document";]
        selector: "<selector>";
        bind <prop>: "<extraction>";
        [child <nestedName> { ... }]
    }]
}
\`\`\`

**Base extractors**: \`text\` · \`html\` · \`attr:<name>\` · \`hrefOrOnclick\` · \`nextSiblingText\` ·
\`hiddenInputs\` · \`selector\`

**Pipes**: \`split\` · \`split:<delim>\` · \`number\` · \`cleanNumber\`

**Implicit JSON typing**: numbers, booleans, arrays (\`R"([...])"\`), objects (\`R"({...})"\`) all
auto-coerce from string literals when valid JSON; everything else stays a string.
`,P=`# Veneer Spec Language Reference Manual

The Veneer Spec (\`.vnr\`) configuration language is a custom declarative Domain Specific Language (DSL) built for the Site Package Manager (SPM) compiler. 

---

## 1. Introduction & Rationale

Traditionally, layout overrides and DOM modernization mappings in SPM were written directly as raw JSON files (\`manifest.json\`). However, as configuration complexity scales (with hundreds of properties, nested loops, data scraping selectors, and layout variables), writing raw JSON becomes extremely verbose, difficult to validate at write-time, and error-prone due to character escaping.

Veneer Spec solves these issues by providing:
1.  **Strong Typing and Semantic Syntax**: Structural keywords instead of generic JSON key-value pairs.
2.  **Object-Oriented blue-printing (\`class\` / \`extends\`)**: Allows creating base layouts and inheriting selectors/bindings, removing duplication (DRY configuration).
3.  **Raw String Literal Blocks**: Bypasses backslash escaping for regexes and pure JSON lists/tables.
4.  **Static Validation and Compiler Diagnostics**: Resolves inheritance paths, detects circular dependencies, checks type compatibility, and reports exact syntax error lines before compiling.

---

## 2. Core Concepts & Mental Model

### The Layout Override Paradigm
SPM works by intercepting the legacy site's HTML, hiding targeted sections, and injecting modern React views. The Veneer DSL defines **what** parts of the page to target, **which** React component to mount, and **how** to extract unstructured data from the legacy DOM to populate the React component's props.

### Scraping Mappings & Bindings
A key concept of the Veneer Spec is the declarative binding of HTML nodes to component props using the extraction syntax:

$$\\text{Selector} \\quad | \\quad \\text{BaseExtractor} \\quad [ \\ | \\ \\text{Pipe} \\ ]^*$$

The Veneer engine evaluates this query at runtime against the page structure, scraping text content, attributes, or raw HTML, and then running any subsequent pipeline operations sequentially.

#### 1. Base Extractors
*   \`text\` - Extracts the \`textContent\` of the matched element.
*   \`html\` - Extracts the \`innerHTML\` of the matched element.
*   \`attr:<name>\` - Extracts the specified attribute value (e.g. \`attr:src\`, \`attr:href\`).
*   \`hrefOrOnclick\` - Automatically resolves link destination from \`href\` or fallback inline \`onclick\` assignment.
*   \`nextSiblingText\` - Extracts the text content of the immediate next sibling element.
*   \`hiddenInputs\` - Collects all \`<input type="hidden">\` tags within the element as a JSON array string.
*   \`selector\` - Generates a unique selector string for the element.

#### 2. Pipe Operations (Sequential Processing)
Pipes can be chained together sequentially using the \`|\` character.
*   \`split\` - Splits a space-separated text string into a JSON stringified array of tokens (e.g. \`"tag1 tag2"\` -> \`["tag1", "tag2"]\`).
*   \`split:<delimiter>\` - Splits a string by a custom delimiter and trims each token (e.g. \`split:,\` turns \`"tag1, tag2"\` -> \`["tag1", "tag2"]\`).
*   \`number\` - Converts a valid number string directly into a JSON numeric value.
*   \`cleanNumber\` - Strips currency symbols (\`$\`, \`R$\`, \`€\`), commas, and spacing, then parses the value into a JSON float number (e.g. \`"$ 1,200.50"\` -> \`1200.5\`).

---

## 3. Keyword-by-Keyword Reference

### \`theme\`
The \`theme\` block defines the metadata, visual design tokens (CSS custom properties), and raw CSS stylesheet modifications injected into the global document scope.

*   **Role**: Groups styling tokens and global page overrides under a single visual label.
*   **Rules**:
    *   Only one \`theme\` block is allowed per compiled project.
    *   Variables are defined inside the \`variables\` sub-block and compile to the manifest's \`"cssVariables"\`.
    *   Custom stylesheet rules are defined under \`customStyles { "<raw-css>" }\`.
*   **Syntax**:
    \`\`\`scss
    theme "ModernDark" {
        variables {
            --spm-accent: "#7c6af5";
            --spm-bg-primary: "#000000";
        }
        customStyles {
            "#advertisement-banner { display: none !important; }"
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "theme": {
      "label": "ModernDark",
      "cssVariables": {
        "--spm-accent": "#7c6af5",
        "--spm-bg-primary": "#000000"
      },
      "customStyles": "#advertisement-banner { display: none !important; }"
    }
    \`\`\`

---

### \`class\` & \`extends\`
Classes act as blueprints defining reusable data extraction fields and scopes.

*   **Role**: Simplifies the declaration of repetitive structures (like list item cards, buttons, or navigation links) by letting child nodes inherit and override properties.
*   **Rules**:
    *   Classes are resolved at compile-time and are completely omitted from the final JSON output (zero runtime cost).
    *   A class can inherit properties from a parent class using the \`extends\` keyword.
    *   If a property or binding is declared in both the child and parent, the child's value overrides the parent's.
*   **Syntax**:
    \`\`\`scss
    class LinkBase {
        bind label: "self | text";
        bind url: "self | attr:href";
    }

    class DocumentLink extends LinkBase {
        scope: "document";
    }
    \`\`\`

---

### \`selector\`
A \`selector\` block targets an individual legacy element in the DOM to replace it with an isolated React component or hide it entirely.

*   **Role**: Alters targeted, individual legacy elements (like headers, sidebars, or search bars) without replacing the whole page grid.
*   **Rules**:
    *   Must specify a target string representing the CSS selector of the legacy node.
    *   Can map directly to a component using the arrow syntax: \`selector "#element" -> UiComponent\`.
    *   Must contain an \`action\` key (either \`hide\` or \`replace\`).
*   **Syntax**:
    \`\`\`scss
    selector "#sub-navbar" {
        action: hide;
    }

    selector "#search-input" -> UiSearchBar {
        action: replace;
        placeholder: "Search…";
        bind defaultValue: "input[name='q'] | attr:value";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "components": [
      {
        "selector": "#sub-navbar",
        "action": "hide"
      },
      {
        "selector": "#search-input",
        "name": "UiSearchBar",
        "action": "replace",
        "props": {
          "placeholder": "Search…"
        },
        "propsMap": {
          "defaultValue": "input[name='q'] | attr:value"
        }
      }
    ]
    \`\`\`

---

### \`reconstruct\`
Transforms a large page container (like a full catalog feed, comment board, or landing page) into a modern React view mounted inside an isolated Shadow DOM host.

*   **Role**: Performs full-viewport page overrides.
*   **Rules**:
    *   Targets a container using a CSS selector (which gets its legacy children hidden at injection).
    *   Maps to a React layout component using the arrow syntax: \`reconstruct "#container" -> LayoutComponent\`.
    *   Can configure constraints like \`urlPattern\` or \`mediaQuery\` so the layout only mounts on specific pages or device breakpoints.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#gallery" -> UiGridPage {
        urlPattern: "page=gallery";
        pageTitle: "Catalog Gallery";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#gallery",
        "layoutComponent": "UiGridPage",
        "urlPattern": "page=gallery",
        "props": {
          "pageTitle": "Catalog Gallery"
        }
      }
    ]
    \`\`\`

---

### \`child\`
Defines a nested data array scraped from matching legacy elements inside the page.

*   **Role**: Creates list arrays (like item grids, comments, tags, or nav lists) and sends them to the parent React layout as a prop array.
*   **Rules**:
    *   Declares a name that maps to the prop array key on the layout component (e.g. \`child items\` defines the \`items\` prop array).
    *   Can extend a class to inherit pre-configured bindings.
    *   Must specify a \`selector\` indicating which elements inside the container represent the list items.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#gallery" -> UiGridPage {
        child items {
            selector: "#gallery .item-card";
            bind id: "self | attr:id";
            bind imageUrl: "img | attr:src";
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#gallery",
        "layoutComponent": "UiGridPage",
        "children": [
          {
            "name": "items",
            "selector": "#gallery .item-card",
            "propsMap": {
              "id": "self | attr:id",
              "imageUrl": "img | attr:src"
            }
          }
        ]
      }
    ]
    \`\`\`

---

### \`bind\`
Sets up dynamic scraping instructions. 

*   **Role**: Tells the engine how to extract a property value from the matched element's DOM at runtime.
*   **Rules**:
    *   Follows the pattern \`bind <prop-name>: "<selector> | <operation>";\`.
    *   Compiles into the \`"propsMap"\` object of the target manifest item.
*   **Syntax**:
    \`\`\`scss
    bind title: "h2 | text";
    bind logoUrl: "img.brand | attr:src";
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "propsMap": {
      "title": "h2 | text",
      "logoUrl": "img.brand | attr:src"
    }
    \`\`\`

---

### \`preserve\`
Prevents specific interactive elements (like a legacy comment form or complex sidebar) from being hidden, reparenting them inside dedicated slot templates in the modern React Shadow DOM.

*   **Role**: Links legacy interactive DOM structures into the new modern React layout without breaking their event handlers, cookies, or states.
*   **Rules**:
    *   Maps a React layout slot name (e.g. \`sidebarSlot\`) to the legacy element CSS selector (e.g. \`.sidebar\`).
    *   Compiles into the \`"preserve"\` block of the target manifest reconstruct.
*   **Syntax**:
    \`\`\`scss
    reconstruct "#item-view" -> UiItemDetailsPage {
        preserve {
            sidebarSlot: ".sidebar";
        }
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "reconstructs": [
      {
        "containerSelector": "#item-view",
        "layoutComponent": "UiItemDetailsPage",
        "preserve": {
          "sidebarSlot": ".sidebar"
        }
      }
    ]
    \`\`\`

---

### \`scope\`
Configures the boundary limits of the CSS selector query.

*   **Role**: Tells the runtime engine whether it should search for elements only within the container element's boundary (\`scope: "container"\`) or search the entire page (\`scope: "document"\`).
*   **Rules**:
    *   The default scope is \`"container"\` (meaning selectors inside child nodes only query descendants of the parent reconstruct container).
    *   Setting \`scope: "document";\` is useful for items like global pagination elements or secondary search bars located outside the main layout container.
    *   If \`"container"\` is configured, the compiler omits the key in the compiled output to keep the JSON clean.
*   **Syntax**:
    \`\`\`scss
    child pageLinks {
        scope: "document";
        selector: "#paginator .pagination a";
    }
    \`\`\`
*   **Compiled Output**:
    \`\`\`json
    "children": [
      {
        "name": "pageLinks",
        "selector": "#paginator .pagination a",
        "scope": "document"
      }
    ]
    \`\`\`

---

## 4. Delimiters & Type Rules

### Raw String Literals: \`R"delim(content)delim"\`
In standard string literal syntax, special characters like backslashes (\`\\\`) or double quotes (\`"\`) must be escaped (e.g. \`"\\\\w+"\` or \`"\\"value\\""\`). This makes regex rules and complex JSON configurations difficult to read.

Veneer Spec supports C++ style **Raw String Literals**, which treat everything inside \`R"delim(...)delim"\` as a raw, unescaped string.
*   **Usage**: Recommended for compiling regular expressions (like \`urlPattern\`) and inline JSON blocks (like table \`columns\` or array data sets).
*   **Syntax**:
    \`\`\`scss
    urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";
    
    columns: R"([
      { "key": "id", "header": "ID", "width": "50px" },
      { "key": "name", "header": "Item Title", "type": "text" }
    ])";
    \`\`\`

### Implicit JSON Type Deserialization
When emitting properties to the manifest JSON, the compiler automatically runs a deserialization check on all values:
- If a value represents a valid JSON type (a number \`3\`, a boolean \`true\`, an array \`[...]\`, or an object \`{...}\`), it parses and emits it as a **native JSON type** instead of a string.
- If it fails parsing (like \`"280px"\`), it is emitted as a standard string.

---

## 5. Advanced Workspace Features

### Workspace directory compilation & Package structures
When executing \`spm compile <directory_path> -o manifest.json\`, the compiler recursively searches all \`.vnr\` files under the target path, concatenates their source contents, and resolves class blueprints globally. 

*   **Arbitrary File Naming**: File names are completely arbitrary; they do not need to follow standard names like \`navigation.vnr\` or \`classes.vnr\`. The compiler will read and parse any file ending with the \`.vnr\` extension.
*   **Nested Package Structures (Java-style)**: You are not restricted to keeping files in a single flat directory. You can organize your theme configuration into deeply nested folders and subpackages (e.g. \`core/models/blueprints.vnr\`, \`layout/headers/top_nav.vnr\`, \`pages/gallery/grid_layout.vnr\`). The compiler traverses all subfolders recursively, merging all declarations into a single global compilation context. This allows developers to build large-scale, modular theme packages.


### Sibling Class Autoloading
When compiling a single file (like \`pages.vnr\`), the compiler automatically inspects its directory context. If it detects that a class is referenced as a base but not declared in the current file, it loads and parses sibling \`.vnr\` files in the background to import their class blueprints. This resolves the classes automatically, allowing isolated background validation for syntax linters.

---

## 6. Complete Theme: Agnostic Example

The following is a modular layout configuration for a generic catalog page.

### \`classes.vnr\`
\`\`\`scss
class StandardLink {
    bind label: "self | text";
    bind url: "self | attr:href";
}

class DocumentLink extends StandardLink {
    scope: "document";
}

class TagItem {
    scope: "document";
    bind name: "a:last-of-type | text";
    bind count: "span.count-badge | text";
    bind type: "self | attr:class";
    bind url: "a:last-of-type | attr:href";
}
\`\`\`

### \`theme.vnr\`
\`\`\`scss
theme "ModernDark" {
    variables {
        --spm-accent: "#7c6af5";
        --spm-accent-fg: "#ffffff";
        --spm-accent-hover: "#9d8fff";
        --spm-bg-primary: "#000000";
        --spm-bg-secondary: "#111111";
        --spm-bg-tertiary: "#222222";
        --spm-border: "#333333";
        --spm-radius: "10px";
        --spm-text-muted: "#a1a1aa";
        --spm-text-primary: "#ffffff";
    }
    customStyles {
        "#system-banner, #cookie-consent-bar { display: none !important; }"
    }
}
\`\`\`

### \`navigation.vnr\`
\`\`\`scss
selector "#header-container, #navbar, header" -> UiNavHeader {
    action: replace;
    className: "site-navigation-header";
    logoHref: "https://example.com/";
    
    primaryLinks: R"([
      { "label": "My Account", "url": "https://example.com/account" },
      { "label": "Items", "url": "https://example.com/items?action=list" },
      { "label": "Comments", "url": "https://example.com/comments" },
      { "label": "Wiki Pages", "url": "https://example.com/wiki" },
      { "label": "Statistics", "url": "https://example.com/stats" },
      { "label": "Help Desk", "url": "https://example.com/help" }
    ])";

    secondaryLinks: R"([
      { "label": "Upload Item", "url": "https://example.com/items/upload" },
      { "label": "My Favorites", "url": "https://example.com/favorites" },
      { "label": "Random Item", "url": "https://example.com/items/random" },
      { "label": "Contact Us", "url": "https://example.com/contact" },
      { "label": "Terms of Service", "url": "https://example.com/tos" }
    ])";

    bind logoUrl: "#site-logo img | attr:src";
    bind siteName: "#site-logo a | text";
}

selector "#sub-navbar" {
    action: hide;
}

selector "#sidebar-search form, .search-container form" -> UiSearchBar {
    action: replace;
    placeholder: "Search items…";
    submitUrl: "https://example.com/items";
    queryParamName: "q";
    bind defaultValue: "input[name='q'] | attr:value";
}
\`\`\`

### \`pages.vnr\`
\`\`\`scss
reconstruct "#home-landing" -> UiHeroLanding {
    urlPattern: R"(example\\.com\\/?(?:index\\.html)?$)";
    tagline: "The Modern Search Engine";
    subtext: "Browse millions of cataloged resources, updated in real time.";
    ctaLabel: "Browse Catalog";
    ctaUrl: "https://example.com/items?action=list";
    searchPlaceholder: "Search catalog... (e.g. category:news keyword)";
    searchSubmitUrl: "https://example.com/items";
    searchParamName: "q";

    bind logoUrl: "img[alt='Company Logo'] | attr:src";
    bind siteName: "img[alt='Company Logo'] | attr:alt";

    child primaryLinks extends StandardLink {
        selector: "#quick-links a";
    }
}

reconstruct "#gallery-view" -> UiGridPage {
    urlPattern: "page=gallery";
    pageTitle: "Catalog Gallery";
    className: "modern-grid-gallery";
    height: "calc(100vh - 80px)";
    sidebarWidth: "260px";
    showSearch: true;
    searchPlaceholder: "Search items…";
    searchSubmitUrl: "https://example.com/items";
    searchParamName: "q";
    mobileColumns: 2;
    mobileGap: "8px";
    mobilePadding: "8px";
    mobileShowHeader: true;
    mobileHeaderSticky: true;
    mobileShowPagination: true;
    mobileCardAspectRatio: "1 / 1.28";
    hideSidebarOnMobile: true;
    mobileBreakpoint: 720;
    
    tagGroups: R"([
      { "title": "Categories", "typeKey": "category" },
      { "title": "Tags", "typeKey": "tag" },
      { "title": "Creators", "typeKey": "creator" },
      { "title": "System Data", "typeKey": "metadata" }
    ])";

    bind searchDefaultValue: ".sidebar-filter form input[name='q'] | attr:value";

    child items {
        selector: "#gallery-view .item-card";
        bind id: "self | attr:id";
        bind imageUrl: "img | attr:src";
        bind linkUrl: "a | attr:href";
        bind title: "img | attr:title";
    }

    child tags extends TagItem {
        selector: "#sidebar-tags li";
    }

    child pageLinks extends StandardLink {
        selector: "#paginator .pagination a";
    }
}
\`\`\`
`,F=e(t(),1),I=n();function L(e){return e.replace(/\$\$\\text\{Selector\}\s*\\quad\s*\|\s*\\quad\s*\\text\{Operation\}\$\$/g,"`selector | operation`").replace(/\$\$\\text\{([^\}]+)\}\s*\\quad\s*\|\s*\\quad\s*\\text\{([^\}]+)\}\$\$/g,"`$1 | $2`").replace(/\$\$(.*?)\$\$/g,"`$1`")}function R(e){let t=L(e);return t.includes(`Component Specification`)&&(t=t.replace(/^#\s+.*?Component Specification[\s\S]*?(?:---|##\s+Overview|##\s+1\.)/i,`## Overview`)),t}function z(e){if(typeof window>`u`)return e;let t=new DOMParser().parseFromString(e,`text/html`);return t.querySelectorAll(`pre code`).forEach(e=>{let t=e.textContent||``;e.innerHTML=i(t)}),t.body.innerHTML}var B=Object.assign({"/src/docs/LayoutPrimitives.md":a,"/src/docs/UiCommentListPage.md":o,"/src/docs/UiDashboardPage.md":s,"/src/docs/UiDevDiagnosticPanel.md":c,"/src/docs/UiFormContainer.md":l,"/src/docs/UiHeroLanding.md":u,"/src/docs/UiImageCard.md":d,"/src/docs/UiImageViewer.md":f,"/src/docs/UiModernGridPage.md":p,"/src/docs/UiNavHeader.md":m,"/src/docs/UiNestedTreeTable.md":h,"/src/docs/UiPaginationBar.md":g,"/src/docs/UiPostDetails.md":_,"/src/docs/UiScrollPanel.md":v,"/src/docs/UiSearchBar.md":y,"/src/docs/UiSplitLayout.md":b,"/src/docs/UiStatsDashboard.md":x,"/src/docs/UiTable.md":S,"/src/docs/UiTableListPage.md":C,"/src/docs/UiTabs.md":w,"/src/docs/UiTagBadge.md":T,"/src/docs/UiTerminalConsole.md":E,"/src/docs/UiToastContainer.md":D,"/src/docs/cli_tooling.md":O,"/src/docs/components.md":k,"/src/docs/composition_matrix.md":A,"/src/docs/manifest_schema.md":j,"/src/docs/spm_veneer_coder.md":M,"/src/docs/veneer-spec-reference.md":N,"/src/docs/veneer_spec.md":P});function V(e){try{let t=e.split(`/`).pop()?.replace(/\.md$/,``);if(!t)return null;let n=t.replace(/Page$/,``),r=Object.keys(B).find(e=>{let r=e.split(`/`).pop()?.replace(/\.md$/,``)||``;return r.toLowerCase()===t.toLowerCase()||r.toLowerCase()===n.toLowerCase()});return r?B[r]:null}catch{return null}}function H({url:e,fallbackContent:t}){let[n,i]=(0,F.useState)(``),[a,o]=(0,F.useState)(!0),[s,c]=(0,F.useState)(null);return(0,F.useEffect)(()=>{let n=!0;o(!0),c(null);let a=V(e);return(a?Promise.resolve(a):fetch(e).then(e=>{if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);return e.text()}).then(e=>{if(e.trim().startsWith(`<!doctype html>`)||e.trim().startsWith(`<html`)||e.includes(`@vite/client`))throw Error(`Documentation file not found on server.`);return e})).then(async e=>{if(!n)return;let t=R(e),a=z(await r.parse(t));i(a),o(!1)}).catch(e=>{if(n){if(t){let e=R(t);Promise.resolve(r.parse(e)).then(e=>{if(n){let t=z(e);i(t),o(!1)}})}else c(e.message),o(!1)}}),()=>{n=!1}},[e,t]),a?(0,I.jsx)(`div`,{style:{padding:`2rem 0`,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`,fontSize:13},children:`Loading documentation...`}):s?(0,I.jsxs)(`div`,{style:{padding:`1.25rem`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:6,color:`var(--text-muted)`,fontSize:13,lineHeight:1.6},children:[(0,I.jsx)(`p`,{style:{margin:`0 0 0.5rem`,color:`#ffffff`,fontWeight:600},children:`Documentation Spec`}),(0,I.jsxs)(`p`,{style:{margin:0},children:[`Technical specification for this component is synchronized directly from `,(0,I.jsx)(`code`,{children:`spm-components`}),` documentation repository.`]})]}):(0,I.jsx)(`div`,{className:`prose-spm`,dangerouslySetInnerHTML:{__html:n}})}export{H as t};