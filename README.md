# spm-portal

[![Documentation Portal](https://img.shields.io/badge/docs-spm--portal-blue?style=for-the-badge)](https://spm-ecosystem.github.io/spm-portal/)

The official unified documentation portal and interactive component explorer for the **Site Package Manager (SPM)** ecosystem.

---

## 🌐 Live Website
The documentation portal is hosted on GitHub Pages:
👉 **[https://spm-ecosystem.github.io/spm-portal/](https://spm-ecosystem.github.io/spm-portal/)**

---

## What is spm-portal?
`spm-portal` is a modern React + Vite application that serves as the central documentation portal for the SPM ecosystem. It fetches and renders Markdown specifications in real-time directly from the main ecosystem repositories (`spm-cli`, `spm-components`, and `site-package-manager`).

### Features:
- 📖 **Veneer Spec Language Manual**: Real-time rendered syntax guide for `.vnr` scripts.
- 🎨 **Component Explorer**: Live documentation viewer for all 17 React UI components.
- 🛠️ **Theme Manifest Schema**: VS Code JSON schema and layout property reference.
- 🚀 **Automated Deployments**: Automatic GitHub Actions deployment to GitHub Pages on every push to `main`.

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
