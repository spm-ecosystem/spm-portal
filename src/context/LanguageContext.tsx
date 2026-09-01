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
    nav_home: 'Início',
    nav_docs: 'Docs',
    nav_components: 'Componentes',
    nav_github: 'GitHub ↗',
    lang_btn: 'PT Idioma',

    // Search
    search_label: 'Busca rápida',
    search_placeholder: 'Buscar docs...',
    search_no_results: 'Sem resultados.',

    // Sidebar
    sidebar_title: 'Documentação',
    nav_getting_started: 'Primeiros passos',
    nav_veneer: 'Veneer Spec DSL',
    nav_manifest: 'Manifest Schema',
    nav_tooling: 'CLI & Tooling',

    // Component Sandbox & Explorer
    sandbox_back: '← Voltar ao Catálogo de Componentes',
    tab_sandbox: 'Playground & Sandbox',
    tab_doc: 'Manual Técnico (.md)',
    btn_see_manifest: 'Ver Manifest JSON ➔',
    btn_see_vnr: '← Ver Veneer Spec (.vnr)',
    label_shadow_dom: 'Renderização ao Vivo (Shadow DOM)',
    label_vnr_editor: 'Editor Veneer Spec (.vnr)',
    label_manifest: 'Manifesto Compilado (manifest.json)',
    label_updates_live: 'Atualiza ao editar o .vnr ➔',
    catalog_title: 'Catálogo de Componentes',
    catalog_desc: 'Explore os componentes React pré-construídos do ecossistema SPM para montagem em Shadow DOM.',
    catalog_primitives: 'Primitivas de Layout',
    catalog_dedicated: 'Componentes Dedicados',

    // Home Page
    home_hero_eyebrow: 'ECOSSISTEMA SITE PACKAGE MANAGER',
    home_hero_title: 'Modernização Declarativa de Páginas Legadas em Shadow DOM',
    home_hero_desc: 'Transforme tabelas feias dos anos 90, formulários antigos e HTML legado em aplicações React de última geração sem alterar uma linha de código do backend.',
    home_btn_docs: 'Explorar Documentação →',
    home_btn_components: 'Ver Catálogo de Componentes',
    home_map_eyebrow: 'MAPA DO PORTAL',
    home_map_title: 'Arquitetura e Recursos do SPM',
    home_showcase_eyebrow: 'DEMONSTRAÇÃO AO VIVO',
    home_showcase_title: 'Do HTML Legado dos Anos 90 ao React Moderno',
    home_pipeline_eyebrow: 'FLUXO DE FUNCIONAMENTO',
    home_pipeline_title: 'Como o SPM Intercepta e Moderniza',
    home_faq_eyebrow: 'PERGUNTAS FREQUENTES (FAQ)',
    home_faq_title: 'Perguntas Frequentes sobre o SPM',

    // Footer
    footer_tagline: 'O ecossistema open-source de reconstrução e modernização declarativa de aplicações web legadas utilizando Shadow DOM e React.',
    footer_col_nav: 'Navegação',
    footer_col_repos: 'Repositórios GitHub',
    footer_col_spec: 'Especificação',
    footer_copyright: '© 2026 SPM Ecosystem. Licença MIT. Desenvolvido para modernização de aplicações web.',
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
    btn_see_manifest: 'View Manifest JSON ➔',
    btn_see_vnr: '← View Veneer Spec (.vnr)',
    label_shadow_dom: 'Live Rendering (Shadow DOM)',
    label_vnr_editor: 'Veneer Spec (.vnr) Editor',
    label_manifest: 'Compiled Manifest (manifest.json)',
    label_updates_live: 'Updates live on .vnr edit ➔',
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
