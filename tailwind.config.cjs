const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			padding: '1rem',
		},
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				app: {
					DEFAULT: colors.green[500],
					...colors.green
				}
			},
			fontFamily: {
				rubik: ['RubikVariable', ...defaultTheme.fontFamily.sans],
				inter: ['InterVariable', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'blob': "url('/blob-scene-haikei.svg')",
			}
		},
	},
	plugins: [
        require('@tailwindcss/typography')
    ],
}
