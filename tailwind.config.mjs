/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],

	
    
	theme: {
        // make default font roboto
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
		extend: {
            colors: {
                'accent-1': '#333',
            },
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
        },
	},
	plugins: [
		require('flowbite/plugin',  '@tailwindcss/typography', 'tailwindcss-motion')
	],
}
