import ComponentReference from '../../../components/ComponentReference'

export default function UiDashboardPage() {
  return (
    <ComponentReference
      name="UiDashboardPage"
      summary="Monta uma página de ações a partir de links já existentes no sistema legado, mantendo URL, título e descrição como dados extraídos."
      useCases={[
        'Transformar menus administrativos antigos em um painel de navegação legível.',
        'Agrupar links de configuração que já estão publicados no HTML original.',
        'Exibir cards de ação sem criar rotas ou permissões que não existem no backend.',
      ]}
      props={[
        { name: 'pageTitle', type: 'string', desc: 'Título principal do painel.' },
        { name: 'subTitle', type: 'string', desc: 'Texto auxiliar opcional abaixo do título.' },
        { name: 'cards', type: 'DashboardCard[]', desc: 'Itens de navegação extraídos da página original.' },
      ]}
      example={`reconstruct "#admin-control-panel" -> UiDashboardPage {
  pageTitle: "Painel";
  subTitle: "Ações disponíveis neste sistema";

  child cards {
    selector: "ul.options-links li";
    bind title:       "a.option-anchor | text";
    bind description: "span.option-hint | text";
    bind url:         "a.option-anchor | attr:href";
  }
}`}
    />
  )
}
