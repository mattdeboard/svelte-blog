import preprocess from "svelte-preprocess";
import { default as staticAdapter } from "@sveltejs/adapter-static";
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: staticAdapter(),
    vite: {
      optimizeDeps: {
        include: ["highlight.js/lib/core"],
      },
      resolve: {
        alias: {
          $components: resolve("./src/components"),
        },
      },
    },
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
