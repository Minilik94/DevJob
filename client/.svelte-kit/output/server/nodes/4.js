import * as server from '../entries/pages/jobs/_id_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/jobs/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/jobs/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.c9adbc5a.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/store.4284a812.js","_app/immutable/chunks/index.0362d59b.js"];
export const stylesheets = ["_app/immutable/assets/4.d1814bf0.css"];
export const fonts = [];
