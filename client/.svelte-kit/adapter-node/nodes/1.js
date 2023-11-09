

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.51a4bf61.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/stores.e7cb215e.js","_app/immutable/chunks/singletons.ac0aab1d.js","_app/immutable/chunks/index.0362d59b.js"];
export const stylesheets = [];
export const fonts = [];
