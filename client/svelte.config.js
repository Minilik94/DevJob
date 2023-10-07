import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			entries: ['*']
		}
	}
};