/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

import tailwindui from "@tailwindcss/ui";

export const purge = false; // Purging is taken care of in postcss.config.js

export const theme = {
	extend: {},
};
export const variants = {};
export const plugins = [
	tailwindui, // Can drastically slow down build time, disable if a problem
];

export const future = {
	removeDeprecatedGapUtilities: true,
};
