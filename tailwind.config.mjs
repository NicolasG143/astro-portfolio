/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main': {
					'50': '#f4f5fa',
					'100': '#e5e7f4',
					'200': '#d1d6ec',
					'300': '#b1bbdf',
					'400': '#8c99ce',
					'500': '#707ac1',
					'600': '#5e62b2',
					'700': '#5252a3',
					'800': '#484786',
					'900': '#323258',
					'950': '#292843',
				},
				
			}
		},
	},
	plugins: [],
}
