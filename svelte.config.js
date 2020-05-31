import sveltePreprocess from "svelte-preprocess";
import postcss from "./postcss.config";

const dev = process.env.NODE_ENV === "development";

export const preprocess = sveltePreprocess({
	postcss,
	typescript: {
		// This returns compilation times back to what they're like without TypeScript
		// And still type checks for production builds
		// Use IDE tools for type checking during development instead
		transpileOnly: dev,
	},
});
