import ComponentReference from '../../../components/ComponentReference'

export default function UiSplitLayoutPage() {
  return (
    <ComponentReference
      name="UiSplitLayout"
      summary="Organiza um conteúdo principal e uma barra lateral usando dados extraídos do HTML legado: mídia, tags, links, busca e blocos auxiliares."
      useCases={[
        'Reconstruir páginas de detalhe com imagem ou conteúdo principal em destaque.',
        'Mover metadados dispersos para uma sidebar consistente.',
        'Preservar busca, tags e links existentes sem depender de chamadas novas ao backend.',
      ]}
      props={[
        { name: 'imageSlot', type: 'MediaItem[]', desc: 'Mídias extraídas para o painel principal.' },
        { name: 'tags', type: 'TagItem[]', desc: 'Tags, contadores e URLs coletados do DOM.' },
        { name: 'buttons', type: 'ButtonItem[]', desc: 'Ações ou links relacionados ao item exibido.' },
        { name: 'statisticsHtml', type: 'string', desc: 'HTML auxiliar preservado quando não há contrato estruturado melhor.' },
        { name: 'sidebarWidth', type: 'string', desc: 'Largura CSS da sidebar.' },
        { name: 'sidebarSide', type: '"left" | "right"', desc: 'Posição física da sidebar.' },
        { name: 'showSearch', type: 'boolean', desc: 'Habilita a busca quando a página original já oferece esse fluxo.' },
      ]}
      example={`reconstruct "#legacy-post-view" -> UiSplitLayout {
  sidebarWidth: "300px";
  sidebarSide: right;
  imageFit: contain;

  bind statisticsHtml: "#info-sidebar ul | html";

  child imageSlot {
    selector: "#main-image-node";
    bind src: "self | attr:src";
    bind alt: "self | attr:alt";
  }

  child tags {
    selector: "ul.tags-list li";
    bind name:  "a.tag-name | text";
    bind count: "span.counter | text";
    bind url:   "a.tag-name | attr:href";
  }
}`}
    />
  )
}
