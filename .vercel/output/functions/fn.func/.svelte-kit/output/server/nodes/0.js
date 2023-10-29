

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9d5fe334.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/index.bd43ff50.js"];
export const stylesheets = ["_app/immutable/assets/0.5f1238e1.css"];
export const fonts = [];
