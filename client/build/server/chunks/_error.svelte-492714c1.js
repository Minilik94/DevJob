import { c as create_ssr_component, a as subscribe, e as escape } from './ssr-7e1a9690.js';
import { p as page } from './stores-a91ed776.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}: ${escape($page.error.message)} this error is comming from /routes/jobs</h1>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-492714c1.js.map
