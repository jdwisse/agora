import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.b76629a6.js","app":"_app/immutable/entry/app.fd951b2e.js","imports":["_app/immutable/entry/start.b76629a6.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/singletons.db0e8214.js","_app/immutable/entry/app.fd951b2e.js","_app/immutable/chunks/scheduler.561fae27.js","_app/immutable/chunks/index.bd43ff50.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
})());
