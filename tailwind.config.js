/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ct: {
					"light-pink": "hsl(275, 100%, 97%)",
					"grayish-purple": "hsl(292, 16%, 49%)",
					"dark-purple": "hsl(292, 42%, 14%)",
				},
			},
			fontFamily: {
				sans: ["Work sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
