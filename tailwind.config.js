/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 5s linear infinite",
			},
			backgroundImage: {
				circularLight:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 100px)",
				circularLightSm:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #ffffff 5px, #ffffff 70px)",
			},
		},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
	darkMode: "class",
};
