import { e as error } from './index-2b68e648.js';

const load = async ({ params }) => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/v1/jobs/${params.id}`);
    if (!response.ok) {
      throw error(response.status, "Job not found");
    }
    const jobs = await response.json();
    return {
      jobs
    };
  } catch (error2) {
    return {
      error: "Failed to retrieve the page. Please try again later."
    };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d22933aa.js')).default;
const server_id = "src/routes/jobs/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/4.c9adbc5a.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/store.4284a812.js","_app/immutable/chunks/index.0362d59b.js"];
const stylesheets = ["_app/immutable/assets/4.d1814bf0.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-701d32f6.js.map
