const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");

const defaults = {
	script: "typescript",
	style: "postcss",
};

module.exports = {
	preprocess: [
		sveltePreprocess({ defaults, postcss }),
		// You could have more preprocessors, like mdsvex
	],
};
