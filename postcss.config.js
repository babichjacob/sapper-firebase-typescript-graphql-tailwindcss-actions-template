const {
	env: { NODE_ENV }
} = process;

console.log(`this is a ${NODE_ENV} build`);

module.exports = {
	plugins: [
		require("tailwindcss")("./tailwind.config.js"),
		require("autoprefixer"),
		...(NODE_ENV.startsWith("production")
			? [
				require("@fullhuman/postcss-purgecss")({
					content: ["./src/**/*.svelte", "./src/**/*.html"],
					defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/\.]+/g) || [] // eslint-disable-line no-useless-escape
				}),
				require("cssnano")({
					preset: [
						"default",
						{
							discardComments: {
								removeAll: true
							}
						}
					]
				})
			]
			: [])
	]
};
