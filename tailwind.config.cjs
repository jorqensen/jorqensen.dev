const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				app: {
					DEFAULT: colors.red[500],
					...colors.red
				}
			},
			fontFamily: {
				rubik: ['RubikVariable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
        require('@tailwindcss/typography')
    ],
}
