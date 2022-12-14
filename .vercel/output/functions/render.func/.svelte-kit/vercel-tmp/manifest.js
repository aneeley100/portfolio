export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","JetBrainsMono.ttf","andrew.png","global.css"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-f132e9d2.js","imports":["_app/immutable/start-f132e9d2.js","_app/immutable/chunks/index-732481e9.js","_app/immutable/chunks/singletons-5eb566f6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
