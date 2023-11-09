import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.36a1550e.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/store.4284a812.js","_app/immutable/chunks/index.0362d59b.js"];
export const stylesheets = ["_app/immutable/assets/3.c5196615.css"];
export const fonts = [];
