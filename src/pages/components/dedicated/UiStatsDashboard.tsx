import ComponentReference from '../../../components/ComponentReference'

export default function UiStatsDashboard() {
  return (
    <ComponentReference
      name="UiStatsDashboard"
      summary="Reorganiza tabelas de métricas e rankings que já existem no DOM legado, sem criar números ou períodos artificiais."
      useCases={[
        'Ler rankings existentes em tabelas e renderizar seções comparáveis.',
        'Preservar links de perfis, tags ou registros quando eles estão no HTML fonte.',
        'Mostrar filtros e navegação somente quando esses elementos forem extraídos da página original.',
      ]}
      props={[
        { name: 'pageTitle', type: 'string', desc: 'Título da página de métricas.' },
        { name: 'dateRangeText', type: 'string', desc: 'Período exibido pela página original, quando disponível.' },
        { name: 'navLinks', type: 'NavLink[]', desc: 'Filtros ou abas de navegação extraídos do DOM.' },
        { name: 'sections', type: 'StatsSection[]', desc: 'Grupos de métricas, cada um com uma lista de itens.' },
      ]}
      example={`reconstruct "#stats-container" -> UiStatsDashboard {
  pageTitle: "Métricas";
  bind dateRangeText: ".current-range | text";

  child navLinks {
    selector: "div.stats-navigation a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }

  child sections {
    selector: "section.stats-block";
    bind title: "h3 | text";

    child items {
      selector: "tr.ranking-row";
      bind place:  "td.position | text";
      bind name:   "td.name a | text";
      bind amount: "td.value | text";
      bind url:    "td.name a | attr:href";
    }
  }
}`}
    />
  )
}
