import cssnano from "cssnano";
import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssPurgecss from "@fullhuman/postcss-purgecss";
import tailwindcss from "tailwindcss";
import tailwindcssConfig from "./tailwind.config";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

export default {
	plugins: [
		postcssImport,

		tailwindcss(tailwindcssConfig),

		postcssPresetEnv({
			features: {
				// https://github.com/tailwindcss/tailwindcss/issues/1190
				"focus-within-pseudo-class": false,
			},
		}),

		!dev && postcssPurgecss({
			content: ["./src/**/*.svelte", "./src/**/*.html"],
			defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
		}),

		!dev && cssnano({
			preset: [
				"default",
				{ discardComments: { removeAll: true } },
			],
		}),
	].filter(Boolean),
};
