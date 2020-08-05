const sveltePreprocess = require("svelte-preprocess");

const defaults = {
	script: "typescript",
	style: "postcss",
};

module.exports = {
	// Real svelte-preprocess configuration is in `rollup.config.js`
	// This is only for the language server for VS Code and svelte-check
	preprocess: sveltePreprocess({ defaults }),
	defaults,
};
