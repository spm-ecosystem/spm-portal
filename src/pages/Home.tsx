import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const portalSections = [
  {
    index: '01',
    title: 'Documentação operacional',
    desc: 'Instalação local, build da extensão, carregamento no navegador e anti-flicker.',
    href: '/docs/getting-started',
  },
  {
    index: '02',
    title: 'Veneer Spec',
    desc: 'Sintaxe declarativa para mapear seletores do DOM legado para props React.',
    href: '/docs/veneer',
  },
  {
    index: '03',
    title: 'Manifest Schema',
    desc: 'Formato JSON compilado pelo spm-cli e consumido pela extensão em runtime.',
    href: '/docs/manifest',
  },
  {
    index: '04',
    title: 'Componentes',
    desc: 'Contratos dos layouts que o manifesto pode montar dentro do Shadow DOM.',
    href: '/components',
  },
]

const legacyPreview = `<table border="1" cellpadding="4">
  <tr>
    <td><b>Título</b></td>
    <td><b>Tipo</b></td>
  </tr>
  <tr>
    <td><a href="/docs/1">Instalação</a></td>
    <td>Guia</td>
  </tr>
</table>`

const veneerPreview = `reconstruct "#content" -> UiTableListPage {
  pageTitle: "Documentos";

  child tableRows {
    selector: "table tr:not(:first-child)";
    bind title: "td:nth-child(1) a | text";
    bind url:   "td:nth-child(1) a | attr:href";
    bind kind:  "td:nth-child(2) | text";
  }
}`

export default function Home() {
  const [split, setSplit] = useState(52)

  const updateSplit = (clientX: number, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect()
    const next = ((clientX - rect.left) / rect.width) * 100
    setSplit(Math.max(0, Math.min(100, next)))
  }

  return (
    <div className="spm-home">
      <Navbar />

      <section className="home-hero-shell">
        <div>
          <h1 className="home-hero-title">
            SPM
            <br />
            Portal
            <span>Docs.</span>
          </h1>

          <p className="home-hero-copy">
            Documentação visual para entender como o SPM transforma HTML legado em interfaces React usando Veneer Spec, manifestos compilados e Shadow DOM.
          </p>

          <div className="home-actions">
            <Link to="/docs/getting-started" className="home-primary-action">Começar pelos docs</Link>
            <Link to="/docs/veneer" className="home-secondary-action">Ler Veneer Spec</Link>
          </div>
        </div>
        <a className="home-scroll-cue" href="#portal-map" aria-label="Ir para a próxima seção">
          <span>Scroll down</span>
          <i />
        </a>
      </section>

      <section className="home-section-shell" id="portal-map">
        <div className="home-section-heading">
          <p className="eyebrow">Mapa do portal</p>
          <h2>Escolha por onde entrar</h2>
        </div>

        <div className="home-doc-grid">
          {portalSections.map(section => (
            <Link key={section.title} to={section.href} className="home-doc-row">
              <div>
                <span>{section.index}</span>
                <h3>{section.title}</h3>
              </div>
              <p>{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section-shell">
        <div className="home-preview-grid">
          <div>
            <p className="eyebrow">Antes / depois</p>
            <h2 className="section-title">Do HTML legado ao contrato Veneer</h2>
            <p className="body-copy">
              O preview mostra a troca de perspectiva: em vez de escrever um manifesto JSON manual, você descreve
              quais dados existem no DOM e como eles chegam ao componente.
            </p>
          </div>

          <div
            className="home-preview-card"
            onPointerDown={event => {
              event.currentTarget.setPointerCapture(event.pointerId)
              updateSplit(event.clientX, event.currentTarget)
            }}
            onPointerMove={event => {
              if (event.buttons !== 1) return
              updateSplit(event.clientX, event.currentTarget)
            }}
          >
            <div className="home-preview-pane home-preview-legacy">
              <div className="home-preview-label">HTML legado</div>
              <pre>{legacyPreview}</pre>
            </div>
            <div className="home-preview-pane home-preview-modern" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
              <div className="home-preview-label">Veneer Spec</div>
              <pre>{veneerPreview}</pre>
            </div>
            <div className="home-preview-divider" style={{ left: `${split}%` }} />
            <div className="home-preview-handle" style={{ left: `${split}%` }} aria-hidden="true">
              ⇔
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-shell">
        <div className="home-flow-list">
          {[
            ['01', 'Inspecionar', 'Identifique containers, listas, links e dados que já existem na página original.'],
            ['02', 'Declarar', 'Escreva blocos .vnr com selector, reconstruct, child e bind.'],
            ['03', 'Compilar', 'O spm-cli resolve classes e emite um manifest.json consumível pela extensão.'],
            ['04', 'Montar', 'A extensão aplica tema, extrai dados e renderiza React dentro do Shadow DOM.'],
          ].map(([index, title, desc]) => (
            <div key={index} className="home-flow-item">
              <div>
                <span>{index}</span>
                <h3>{title}</h3>
              </div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
