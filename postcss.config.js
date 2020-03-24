/* eslint-disable global-require */
const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		require("tailwindcss")("./tailwind.config.js"),

		require("postcss-preset-env")(),

		!dev && require("@fullhuman/postcss-purgecss")({
			content: ["./src/**/*.svelte", "./src/**/*.html"],
			defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:\/\.]+/g) || [], // eslint-disable-line no-useless-escape
		}),

		!dev && require("cssnano")({
			preset: [
				"default",
				{ discardComments: { removeAll: true } },
			],
		}),
	],
};
