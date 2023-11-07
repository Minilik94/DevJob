import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { d as darkMode } from "../../chunks/store.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.header.svelte-6cnisj{display:flex;justify-content:space-between;align-items:center;background:url("../assets/desktop/bg-pattern-header.svg");background-position:center;background-size:cover;height:8rem;border-radius:10px;margin:auto;max-width:full;font-family:"Kumbh Sans", sans-serif}.logo.svelte-6cnisj{font-weight:bold;text-decoration:none;font-size:2rem;color:#fff;padding:1rem 3rem}.fa-toggle-off.svelte-6cnisj{font-size:20px;cursor:pointer}.fa-toggle-on.svelte-6cnisj{font-size:20px;cursor:pointer}.right.svelte-6cnisj{display:flex;align-items:center;padding:1rem 3rem;color:#fff;gap:20px;font-size:1.3rem}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $darkMode, $$unsubscribe_darkMode;
  $$unsubscribe_darkMode = subscribe(darkMode, (value) => $darkMode = value);
  $$result.css.add(css$1);
  $$unsubscribe_darkMode();
  return `  ${$$result.head += `<!-- HEAD_svelte-1opga8o_START --><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"><!-- HEAD_svelte-1opga8o_END -->`, ""} <header class="header svelte-6cnisj"><div data-svelte-h="svelte-825erp"><a class="logo svelte-6cnisj" href="/">devjobs</a></div> <div class="right svelte-6cnisj"><i class="fa-solid fa-sun"></i> ${$darkMode ? `<i class="fa fa-toggle-off svelte-6cnisj"></i>` : `<i class="fas fa-toggle-on svelte-6cnisj"></i>`} <i class="fas fa-moon"></i></div> </header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1lqjuax{max-width:1400px;margin:auto}i.svelte-1lqjuax{cursor:pointer;position:absolute;left:45%}.content.svelte-1lqjuax{max-width:1200px;margin:auto}@media(max-width: 500px){.container.svelte-1lqjuax{max-width:800px}.content.svelte-1lqjuax{max-width:350px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-1lqjuax">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="content svelte-1lqjuax">${slots.default ? slots.default({}) : ``}</div> <footer>${`<p style="text-align: center; color: #9da3dc;" data-svelte-h="svelte-qduywe">© Minilik Zeru 2023</p> <i class="svelte-1lqjuax" data-svelte-h="svelte-13hhcdc">🤐📨🚚🏇😁</i>`}</footer> </div>`;
});
export {
  Layout as default
};
