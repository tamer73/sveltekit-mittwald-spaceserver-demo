// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';

console.log('PORT is set to ', process.env?.PORT);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// these are default values anyway, get port from ENV
			env: {
				//host: 'HOST',
				port: 'PORT'
			}
		})
	}
};

export default config;
