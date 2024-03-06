import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.25rem',
		},
		extend: {
			colors: {
				background: 'rgba(var(--bg))',
				text: 'rgba(var(--text))',
			},
		},
		fontFamily: {
			sans: ['Merriweather', ...defaultTheme.fontFamily.sans],
		},
	},
	plugins: [],
}
export default config
