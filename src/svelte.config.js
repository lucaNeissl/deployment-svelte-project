import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		paths: {
			base: '/lessons-svelte-project-lucaNeissl'
		},
		prerender: {
			handleUnseenRoutes: 'ignore'
		},
		adapter: adapter({
			pages: 'build',
			fallback: '404.html'
		})
	},
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	}
};
