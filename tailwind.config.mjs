/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			transitionProperty: {
				background: "background",
			},
		},
		colors: {
			transparent: "transparent",
			text: {
				50: "#1a0000",
				100: "#330000",
				200: "#660000",
				300: "#990000",
				400: "#cc0000",
				500: "#ff0000",
				600: "#ff3333",
				700: "#ff6666",
				800: "#ff9999",
				900: "#ffcccc",
				950: "#ffe5e5",
			},
			background: {
				50: "#0d0d0d",
				100: "#1a1a1a",
				200: "#333333",
				300: "#4d4d4d",
				400: "#666666",
				500: "#808080",
				600: "#999999",
				700: "#b3b3b3",
				800: "#cccccc",
				900: "#e6e6e6",
				950: "#f2f2f2",
			},
			primary: {
				50: "#1a0000",
				100: "#330000",
				200: "#660000",
				300: "#990000",
				400: "#cc0000",
				500: "#ff0000",
				600: "#ff3333",
				700: "#ff6666",
				800: "#ff9999",
				900: "#ffcccc",
				950: "#ffe5e5",
			},
			secondary: {
				50: "#1a0000",
				100: "#330000",
				200: "#660000",
				300: "#990000",
				400: "#cc0000",
				500: "#ff0000",
				600: "#ff3333",
				700: "#ff6666",
				800: "#ff9999",
				900: "#ffcccc",
				950: "#ffe5e5",
			},
			accent: {
				50: "#00141a",
				100: "#002733",
				200: "#004e66",
				300: "#007599",
				400: "#009ccc",
				500: "#00c3ff",
				600: "#33cfff",
				700: "#66dbff",
				800: "#99e7ff",
				900: "#ccf3ff",
				950: "#e5f9ff",
			},
		},
		fontSize: {
			sm: "0.750rem",
			base: "1rem",
			xl: "1.333rem",
			"2xl": "1.777rem",
			"3xl": "2.369rem",
			"4xl": "3.158rem",
			"5xl": "4.210rem",
		},
		fontFamily: {
			heading: "Montserrat",
			body: "Noto Sans",
		},
		fontWeight: {
			normal: "400",
			bold: "700",
		},
	},
	plugins: [],
}
