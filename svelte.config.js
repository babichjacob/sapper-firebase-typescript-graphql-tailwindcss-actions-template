const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");

const createPreprocessors = ({ sourceMap }) => [
	sveltePreprocess({
		sourceMap,
		defaults: {
			script: "typescript",
			style: "postcss",
		},
		postcss,
	}),
	// You could have more preprocessors, like mdsvex
];

module.exports = {
	createPreprocessors,
	// Options for `svelte-check` and the VS Code extension
	preprocess: createPreprocessors({ sourceMap: true }),
};
