import ComponentReference from '../../../components/ComponentReference'

export default function UiTableListPage() {
  return (
    <ComponentReference
      name="UiTableListPage"
      summary="Renderiza listas tabulares densas a partir de linhas existentes no DOM legado, com colunas configuráveis e paginação preservada."
      useCases={[
        'Modernizar tabelas administrativas sem mudar a origem dos dados.',
        'Transformar células em links, badges ou texto conforme o contrato de coluna.',
        'Manter paginação original enquanto a tabela recebe apresentação nova.',
      ]}
      props={[
        { name: 'pageTitle', type: 'string', desc: 'Título da listagem.' },
        { name: 'columns', type: 'ColumnDef[]', desc: 'Definição de colunas, tipos, alinhamento e largura.' },
        { name: 'tableRows', type: 'Record<string, string>[]', desc: 'Linhas extraídas pelo bloco child.' },
        { name: 'pageLinks', type: 'PageLink[]', desc: 'Links de paginação preservados da página original.' },
      ]}
      example={`reconstruct "#wiki-directory" -> UiTableListPage {
  pageTitle: "Documentos";

  columns: [
    { key: "title", header: "Título", type: "link", urlKey: "url" },
    { key: "kind",  header: "Tipo", type: "badge" }
  ];

  child tableRows {
    selector: "table.legacy-grid tr.row";
    bind title: "td.title a | text";
    bind url:   "td.title a | attr:href";
    bind kind:  "td.kind | text";
  }

  child pageLinks {
    selector: "div.paginator-container a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`}
    />
  )
}
