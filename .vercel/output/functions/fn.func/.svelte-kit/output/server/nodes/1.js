

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.40cdd3e7.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/index.bd43ff50.js","_app/immutable/chunks/singletons.d2d43bf9.js"];
export const stylesheets = [];
export const fonts = [];
