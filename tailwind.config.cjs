const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
        container: {
            padding: "1.5rem",
            center: true,
        },
		extend: {
			colors: {
				app: {
					DEFAULT: colors.amber[500],
					...colors.amber
				}
			},
			fontFamily: {
                inter: ['Inter Variable', ...defaultTheme.fontFamily.sans],
                lora: ['Lora Variable', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [
        require("@tailwindcss/typography"),
    ],
}
