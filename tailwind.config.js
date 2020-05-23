/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

export default {
	purge: false, // Purging is taken care of in postcss.config.js
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		// 🐛: @tailwindcss/ui causes infinite recursion during development
	],
};
