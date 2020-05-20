/*
Tailwind - The Utility-First CSS Framework
A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
View the full documentation at https://tailwindcss.com.
*/

/* eslint-disable global-require */
module.exports = {
	purge: false, // Purging is taken care of in postcss.config.js
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		// 🐛 infinite recursion during development
		// require("@tailwindcss/ui"),
	],
};
