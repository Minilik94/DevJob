

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.38c9e013.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js","_app/immutable/chunks/stores.7e0b3cd2.js","_app/immutable/chunks/singletons.a55609f5.js","_app/immutable/chunks/index.0362d59b.js"];
export const stylesheets = [];
export const fonts = [];
