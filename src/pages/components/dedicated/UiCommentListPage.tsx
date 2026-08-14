import ComponentReference from '../../../components/ComponentReference'

export default function UiCommentListPage() {
  return (
    <ComponentReference
      name="UiCommentListPage"
      summary="Renderiza listas de comentários extraídas de páginas legadas, preservando autor, data, conteúdo, avatar e paginação quando esses dados existem no DOM original."
      useCases={[
        'Substituir blocos de comentários baseados em tabelas ou listas antigas.',
        'Normalizar paginação e links de navegação que já existem na página original.',
        'Separar conteúdo textual de metadados sem inventar usuários ou mensagens no componente.',
      ]}
      props={[
        { name: 'pageTitle', type: 'string', desc: 'Título exibido no topo da página reconstruída.' },
        { name: 'threads', type: 'ThreadItem[]', desc: 'Comentários extraídos do DOM legado.' },
        { name: 'pageLinks', type: 'PageLink[]', desc: 'Links de paginação coletados fora ou dentro do container.' },
      ]}
      example={`reconstruct "#comments-panel" -> UiCommentListPage {
  pageTitle: "Comentários";

  child threads {
    selector: "div.comment-wrapper";
    bind id:           "self | attr:id";
    bind postUser:     "span.author-name | text";
    bind postDate:     "span.timestamp | text";
    bind bodyHtml:     "div.comment-body | html";
    bind thumbnailUrl: "img.author-avatar | attr:src";
  }

  child pageLinks {
    selector: "div#paginator a";
    scope: document;
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`}
    />
  )
}
