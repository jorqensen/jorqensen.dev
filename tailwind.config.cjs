const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			"xs": "475px",
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
				rubik: ["RubikVariable", ...defaultTheme.fontFamily.sans],
                "roboto-slab": ["Roboto SlabVariable", "Roboto Slab", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
        require("@tailwindcss/typography"),
        plugin(function ({ addComponents }) {
            addComponents({
                ".bg-sun-tornado": {
                    backgroundColor: "#09090b",
                    backgroundImage: "url('/sun-tornado.svg')",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }
            })
        })
    ],
}
