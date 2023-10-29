

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0d5d420f.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/index.bd43ff50.js","_app/immutable/chunks/singletons.db0e8214.js"];
export const stylesheets = [];
export const fonts = [];
