import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export type Language = 'pt' | 'en'

interface LanguageContextType {
  lang: Language
  toggleLang: () => void
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  pt: {
    // Header / Navbar
    nav_home: 'Home',
    nav_docs: 'Docs',
    nav_components: 'Components',
    nav_github: 'GitHub ↗',
    lang_btn: 'EN Language',

    // Search
    search_label: 'Quick Search',
    search_placeholder: 'Search docs...',
    search_no_results: 'No results found.',

    // Sidebar
    sidebar_title: 'Documentation',
    nav_getting_started: 'Getting Started',
    nav_veneer: 'Veneer Spec DSL',
    nav_manifest: 'Manifest Schema',
    nav_tooling: 'CLI & Tooling',

    // Component Sandbox & Explorer
    sandbox_back: '← Back to Component Catalog',
    tab_sandbox: 'Playground & Sandbox',
    tab_doc: 'Technical Manual (.md)',
    btn_see_manifest: 'View Manifest JSON ->',
    btn_see_vnr: '← View Veneer Spec (.vnr)',
    label_shadow_dom: 'Live Rendering (Shadow DOM)',
    label_vnr_editor: 'Veneer Spec (.vnr) Editor',
    label_manifest: 'Compiled Manifest (manifest.json)',
    label_updates_live: 'Updates live on .vnr edit ->',
    catalog_title: 'Component Catalog',
    catalog_desc: 'Explore pre-built SPM ecosystem React components designed for Shadow DOM mounting.',
    catalog_primitives: 'Layout Primitives',
    catalog_dedicated: 'Dedicated Components',

    // Home Page
    home_hero_eyebrow: 'SITE PACKAGE MANAGER ECOSYSTEM',
    home_hero_title: 'Declarative Modernization of Legacy Web Pages in Shadow DOM',
    home_hero_desc: 'Transform raw 90s HTML tables, legacy forms, and unstyled markup into state-of-the-art React applications without modifying a single line of backend server code.',
    home_btn_docs: 'Explore Documentation →',
    home_btn_components: 'View Component Catalog',
    home_map_eyebrow: 'PORTAL MAP',
    home_map_title: 'SPM Architecture & Features',
    home_showcase_eyebrow: 'LIVE SHOWCASE',
    home_showcase_title: 'From 90s Legacy HTML to Modern React',
    home_pipeline_eyebrow: 'ARCHITECTURE PIPELINE',
    home_pipeline_title: 'How SPM Intercepts and Modernizes',
    home_faq_eyebrow: 'FREQUENTLY ASKED QUESTIONS (FAQ)',
    home_faq_title: 'Frequently Asked Questions about SPM',

    // Footer
    footer_tagline: 'The open-source ecosystem for declarative reconstruction and modernization of legacy web applications using Shadow DOM and React.',
    footer_col_nav: 'Navigation',
    footer_col_repos: 'GitHub Repositories',
    footer_col_spec: 'Specification',
    footer_copyright: '© 2026 SPM Ecosystem. MIT License. Built for web application modernization.',
    footer_online: 'Engine v1.0.0 Online',
  },

  en: {
    // Header / Navbar
    nav_home: 'Home',
    nav_docs: 'Docs',
    nav_components: 'Components',
    nav_github: 'GitHub ↗',
    lang_btn: 'EN Language',

    // Search
    search_label: 'Quick Search',
    search_placeholder: 'Search docs...',
    search_no_results: 'No results found.',

    // Sidebar
    sidebar_title: 'Documentation',
    nav_getting_started: 'Getting Started',
    nav_veneer: 'Veneer Spec DSL',
    nav_manifest: 'Manifest Schema',
    nav_tooling: 'CLI & Tooling',

    // Component Sandbox & Explorer
    sandbox_back: '← Back to Component Catalog',
    tab_sandbox: 'Playground & Sandbox',
    tab_doc: 'Technical Manual (.md)',
    btn_see_manifest: 'View Manifest JSON ->',
    btn_see_vnr: '← View Veneer Spec (.vnr)',
    label_shadow_dom: 'Live Rendering (Shadow DOM)',
    label_vnr_editor: 'Veneer Spec (.vnr) Editor',
    label_manifest: 'Compiled Manifest (manifest.json)',
    label_updates_live: 'Updates live on .vnr edit ->',
    catalog_title: 'Component Catalog',
    catalog_desc: 'Explore pre-built SPM ecosystem React components designed for Shadow DOM mounting.',
    catalog_primitives: 'Layout Primitives',
    catalog_dedicated: 'Dedicated Components',

    // Home Page
    home_hero_eyebrow: 'SITE PACKAGE MANAGER ECOSYSTEM',
    home_hero_title: 'Declarative Modernization of Legacy Web Pages in Shadow DOM',
    home_hero_desc: 'Transform raw 90s HTML tables, legacy forms, and unstyled markup into state-of-the-art React applications without modifying a single line of backend server code.',
    home_btn_docs: 'Explore Documentation →',
    home_btn_components: 'View Component Catalog',
    home_map_eyebrow: 'PORTAL MAP',
    home_map_title: 'SPM Architecture & Features',
    home_showcase_eyebrow: 'LIVE SHOWCASE',
    home_showcase_title: 'From 90s Legacy HTML to Modern React',
    home_pipeline_eyebrow: 'ARCHITECTURE PIPELINE',
    home_pipeline_title: 'How SPM Intercepts and Modernizes',
    home_faq_eyebrow: 'FREQUENTLY ASKED QUESTIONS (FAQ)',
    home_faq_title: 'Frequently Asked Questions about SPM',

    // Footer
    footer_tagline: 'The open-source ecosystem for declarative reconstruction and modernization of legacy web applications using Shadow DOM and React.',
    footer_col_nav: 'Navigation',
    footer_col_repos: 'GitHub Repositories',
    footer_col_spec: 'Specification',
    footer_copyright: '© 2026 SPM Ecosystem. MIT License. Built for web application modernization.',
    footer_online: 'Engine v1.0.0 Online',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('spm_portal_lang')
    return (saved === 'en' || saved === 'pt') ? saved : 'en'
  })

  useEffect(() => {
    localStorage.setItem('spm_portal_lang', lang)
  }, [lang])

  const toggleLang = () => {
    setLangState(prev => (prev === 'pt' ? 'en' : 'pt'))
  }

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en[key] || TRANSLATIONS.pt[key] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
