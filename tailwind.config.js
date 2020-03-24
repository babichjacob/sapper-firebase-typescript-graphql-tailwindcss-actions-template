/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

View the full documentation at https://tailwindcss.com.

*/

/* eslint-disable global-require */
module.exports = {
	theme: {
		extend: {
			spacing: {
				72: "18rem",
				96: "24rem",
				128: "32rem",
			},
		},
	},

	corePlugins: {
		placeholderColor: false,
	},

	variants: {},

	plugins: [
		require("@tailwindcss/ui"),
	],
};
