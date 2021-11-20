import preprocess from 'svelte-preprocess';
import { default as staticAdapter } from '@sveltejs/adapter-static';
import { default as cfAdapter } from '@sveltejs/adapter-cloudflare-workers';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: cfAdapter(),
    // adapter: staticAdapter({
    // 	// default options are shown
    // 	pages: 'build',
    // 	assets: 'build',
    // 	fallback: null
    // }),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }
};

export default config;
