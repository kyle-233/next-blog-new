import { Montserrat, Merriweather } from 'next/font/google'

export const fontSans = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700', '900'],
	style: ['normal'],
})

export const fontMono = Merriweather({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	style: ['normal', 'italic'],
})
