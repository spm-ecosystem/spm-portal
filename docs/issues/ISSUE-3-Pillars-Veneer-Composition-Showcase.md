# [Epic] Integration of 3 Documentation Pillars: Veneer DSL Manual (spm-cli), Primitive-Dedicated Composition Guide, and Real-World Dataset Showcase (spm-veneer-coder)

## 📌 Overview
This epic issue defines the roadmap for expanding and maturing the documentation ecosystem within `spm-portal`. It integrates 3 major architectural documentation pillars into a cohesive, developer-friendly portal.

---

## 🔹 Pillar 1: Full Veneer DSL Specification Manual (`spm-cli` Integration)
- **Goal**: Integrate the 491-line comprehensive C++ compiler reference manual (`spm-cli/docs/veneer_spec.md`) directly into `spm-portal`.
- **Scope & Features**:
  - Full keyword reference (`theme`, `class`, `extends`, `selector`, `reconstruct`, `child`, `bind`, `preserve`, `scope`).
  - Extractor base pipelines (`text`, `html`, `attr:<name>`, `hrefOrOnclick`, `hiddenInputs`, `selector`) and pipe operations (`split`, `split:<delimiter>`, `number`, `cleanNumber`).
  - Raw String Literal syntax (`R"delim(...)delim"`).
  - Implicit JSON type deserialization rules.
  - Multi-package workspace structures and sibling class autoloading.

---

## 🔹 Pillar 2: Component Architecture & Primitive + Dedicated Composition Guide
- **Goal**: Provide an interactive guide and matrix explaining how Primitive components (`UiTabs`, `UiSearchBar`, `UiTagBadge`, `UiTable`, `UiPaginationBar`, `UiScrollBox`, `UiImageViewer`, `LayoutPrimitives`) compose into Dedicated Page Views (`UiFormContainer`, `UiTableListPage`, `UiModernGridPage`, `UiPostDetails`, `UiSplitLayout`, `UiDashboardPage`, etc.).
- **Scope & Features**:
  - Interactive **Component Compatibility Matrix** in the Component Catalog.
  - Composition `.vnr` code recipes demonstrating slot mapping (e.g., nesting `UiTabs` inside `UiFormContainer`, `UiSearchBar` + `UiTagBadge` inside `UiModernGridPage`).
  - Clear architectural taxonomy separating Primitive Atoms from Dedicated Organisms.

---

## 🔹 Pillar 3: Real-World HTML ➔ VNR Dataset Showcase (`spm-veneer-coder` Fine-Tuning Recipes)
- **Goal**: Expose the 200+ real-world legacy DOM HTML examples from the `spm-veneer-coder` fine-tuning dataset as practical, copy-pasteable modernization recipes in `spm-portal`.
- **Scope & Features**:
  - Multi-component page synthesis examples combining 3-4 components in single `.vnr` manifests.
  - Real-world DOM transformations across Hacker News, Reddit, GitHub Issues, Safebooru, and legacy Admin Boards.
  - Side-by-side comparison: **Legacy HTML ➔ Veneer Spec (.vnr) ➔ Compiled Manifest (manifest.json) ➔ Rendered Shadow DOM UI**.

---

## 📋 Task Checklist
- [ ] **Task 1**: Update `scripts/sync-docs.js` to bundle `spm-cli/docs/veneer_spec.md` with chapter navigation.
- [ ] **Task 2**: Add `/docs/architecture/composition` route & Component Compatibility Matrix in `spm-portal`.
- [ ] **Task 3**: Create `/docs/showcase/real-world-recipes` section showcasing the 200+ HTML ➔ VNR transformation pairs from `spm-veneer-coder`.
