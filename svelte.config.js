import preprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import adapter from "@sveltejs/adapter-node";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		defaults: {
			style: "scss",
		},
		postcss: {
			plugins: [autoprefixer()],
		},
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			out: "build",
			precompress: false,
			env: {
				host: "0.0.0.0",
				port: "PORT",
			},
		}),
		target: "#svelte",
	},
};

export default config;
