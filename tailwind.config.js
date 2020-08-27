/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

const tailwindui = require("@tailwindcss/ui");

module.exports = {
	purge: false, // Purging is taken care of in postcss.config.js
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		tailwindui,
	],

	future: {
		removeDeprecatedGapUtilities: true,
	},
};
