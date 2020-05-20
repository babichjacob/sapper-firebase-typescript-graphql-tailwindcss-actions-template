/* eslint-disable global-require */
const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		require("postcss-import"),

		require("tailwindcss")("./tailwind.config.js"),

		require("postcss-preset-env")({
			features: {
				// https://github.com/tailwindcss/tailwindcss/issues/1190
				"focus-within-pseudo-class": false,
			},
		}),

		!dev && require("@fullhuman/postcss-purgecss")({
			content: ["./src/**/*.svelte", "./src/**/*.html"],
			defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
		}),

		!dev && require("cssnano")({
			preset: [
				"default",
				{ discardComments: { removeAll: true } },
			],
		}),
	],
};
