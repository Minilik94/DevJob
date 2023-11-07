import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-7e1a9690.js';
import { p as page } from './stores-a91ed776.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 style="text-align: center;">${escape($page.status)}: something went wrong while fetching data, <br> this error is coming from the root /routes folder</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-60208c98.js.map
