/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#512051',
				'secondary' : '#927B91',
				'background' : '#F7F2F7',
				'accent' : '#EE69A4',
			},
		},
	},
	plugins: [],
}
