import { e as error } from './index-2b68e648.js';

const load = async () => {
  const response = await fetch("http://127.0.0.1:3000/api/v1/jobs");
  if (!response.ok || response.ok === void 0) {
    throw error(response.status, "Something Went Wrong Please try again later ");
  }
  const jobs = await response.json();
  return {
    jobs
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-83a262c0.js')).default;
const universal_id = "src/routes/+page.js";
const imports = ["_app/immutable/nodes/3.ab14a278.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/store.4284a812.js","_app/immutable/chunks/index.0362d59b.js"];
const stylesheets = ["_app/immutable/assets/3.c5196615.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=3-861bb56e.js.map
