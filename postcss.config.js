const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const tailwindcssConfig = require("./tailwind.config");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		postcssImport,

		tailwindcss(tailwindcssConfig),

		// Plugins for polyfills and the like (such as postcss-preset-env) should generally go here
		// but a few have to run *before* Tailwind

		!dev && cssnano({
			preset: [
				"default",
				{ discardComments: { removeAll: true } },
			],
		}),
	].filter(Boolean),
};
