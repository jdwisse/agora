export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.446276a9.js","app":"_app/immutable/entry/app.a27ded32.js","imports":["_app/immutable/entry/start.446276a9.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/singletons.d2d43bf9.js","_app/immutable/entry/app.a27ded32.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/index.bd43ff50.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
