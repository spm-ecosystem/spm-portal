import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{r as t,t as n}from"./vendor-react-blWa-pWN.js";import{n as r,t as i}from"./ControlBar-5zwo3-qO.js";import{t as a}from"./SegmentedToggle-zm1zCyrJ.js";import{t as o}from"./UiScrollPanel-NPJ9T8YF.js";var s=e(t(),1),c=n();function l(){let[e,t]=(0,s.useState)(`280px`),[n,l]=(0,s.useState)(!0),u=`reconstruct "#side-panel" -> UiScrollPanel {
  width: "${e}";
  showSearch: ${n};
  searchPlaceholder: "Filter system modules...";

  child tags {
    selector: "div.tag-list span.tag";
    bind name:  "self | text";
    bind type:  "self | attr:data-category";
    bind count: "span.badge | text";
  }

  child buttons {
    selector: "div.actions a";
    bind label: "self | text";
    bind url:   "self | attr:href";
  }
}`;return(0,c.jsx)(r,{name:`UiScrollPanel`,category:`Dedicated Components`,description:`Slide-over lateral scroll panel component for displaying contextual tags, grouped buttons, search field, and system runtime statistics.`,vnrExample:u,docUrl:`/src/docs/UiScrollPanel.md`,propsContract:[{name:`tags`,type:`TagItem[]`,desc:`Array of tag badges with name, count, type (category), and target url.`},{name:`buttons`,type:`ButtonItem[]`,desc:`Action buttons grouped into primary and ghost variants.`},{name:`statisticsHtml`,type:`string`,desc:`Raw HTML string rendered at the bottom for runtime metrics.`},{name:`showSearch`,type:`boolean`,desc:`Renders an integrated search filter field at the top.`},{name:`searchPlaceholder`,type:`string`,desc:`Placeholder text for search filter field.`},{name:`width`,type:`string`,desc:`Width of the scroll panel container (default: "280px").`}],useCases:[`Create slide-over or lateral sidebars containing metadata and action links extracted from legacy DOM.`,`Group tags into Modules, Technology, System Status, and Environments categories automatically.`,`Keep search and action buttons accessible in a fixed lateral scroll area.`],controls:(0,c.jsx)(i,{align:`between`,style:{borderRadius:`8px`,border:`1px solid var(--border-contrast)`,width:`100%`},children:(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,flexWrap:`wrap`},children:[(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,c.jsx)(`span`,{style:{fontSize:12,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`,fontWeight:600},children:`Width:`}),(0,c.jsx)(a,{size:`sm`,options:[{id:`280px`,label:`280px`},{id:`340px`,label:`340px`}],value:e,onChange:e=>t(e)})]}),(0,c.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,c.jsx)(`span`,{style:{fontSize:12,color:`var(--text-muted)`,fontFamily:`var(--font-mono)`,fontWeight:600},children:`Search:`}),(0,c.jsx)(a,{size:`sm`,options:[{id:`on`,label:`On`},{id:`off`,label:`Off`}],value:n?`on`:`off`,onChange:e=>l(e===`on`)})]})]})}),children:(0,c.jsxs)(`div`,{style:{width:`100%`,height:420,display:`flex`,background:`var(--bg-surface)`,border:`1px solid var(--border-contrast)`,borderRadius:`8px`,overflow:`hidden`},children:[(0,c.jsx)(o,{width:e,showSearch:n,searchPlaceholder:`Filter system modules...`,searchSubmitUrl:`#`,tags:[{name:`Core Compiler`,type:`modules`,count:`54`},{name:`Shadow DOM Host`,type:`technology`,count:`128`},{name:`Security Gateway`,type:`system status`,count:`92`},{name:`TypeScript React`,type:`technology`,count:`310`},{name:`MV3 Interceptor`,type:`environments`,count:`450`},{name:`Vite Build Engine`,type:`tags`,count:`67`}],buttons:[{label:`Inspect Component`,url:`#`},{label:`Export Config`,url:`#`},{label:`View Source`,url:`#`},{label:`Share Report`,url:`#`}],statisticsHtml:`
    <div style="font-family: var(--font-mono); font-size: 11px; line-height: 1.6;">
      <div>Compiler: Veneer v2.4.0</div>
      <div>Target Host: Chromium Engine</div>
      <div>Deployed: 2026-08-31</div>
      <div>Status: Operational</div>
    </div>
  `}),(0,c.jsx)(`div`,{style:{flex:1,padding:`2rem`,background:`var(--bg-absolute)`,color:`var(--text-muted)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,fontFamily:`var(--font-mono)`},children:`Main Content Viewport Area`})]})})}export{l as default};