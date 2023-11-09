const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/data.json","assets/desktop/bg-pattern-detail-footer.svg","assets/desktop/bg-pattern-header.svg","assets/desktop/icon-check.svg","assets/desktop/icon-location.svg","assets/desktop/icon-moon.svg","assets/desktop/icon-search.svg","assets/desktop/icon-sun.svg","assets/desktop/logo.svg","assets/favicon-32x32.png","assets/logos/blogr.svg","assets/logos/coffeeroasters.svg","assets/logos/creative.svg","assets/logos/crowdfund.svg","assets/logos/maker.svg","assets/logos/mastercraft.svg","assets/logos/officelite.svg","assets/logos/pod.svg","assets/logos/pomodoro.svg","assets/logos/scoot.svg","assets/logos/typemaster.svg","assets/logos/vector.svg","assets/mobile/bg-pattern-detail-footer.svg","assets/mobile/bg-pattern-header.svg","assets/mobile/icon-filter.svg","assets/screenshot-dark.png","assets/screenshot-light.png","assets/tablet/bg-pattern-header.svg","favicon.png"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.15df07e3.js","app":"_app/immutable/entry/app.e1f099b4.js","imports":["_app/immutable/entry/start.15df07e3.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/singletons.9c45bde9.js","_app/immutable/chunks/index.0362d59b.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.e1f099b4.js","_app/immutable/chunks/scheduler.50aa2f44.js","_app/immutable/chunks/index.e7946bc4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-814e696d.js')),
			__memo(() => import('./chunks/1-3b820ac5.js')),
			__memo(() => import('./chunks/2-412a17cc.js')),
			__memo(() => import('./chunks/3-a02c7b3c.js')),
			__memo(() => import('./chunks/4-faaed7b6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/jobs/[id]",
				pattern: /^\/jobs\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
