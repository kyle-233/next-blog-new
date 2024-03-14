import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { fontMono } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import { Analytics } from '@/components/analytics'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['nextjs', 'react', 'react server components', 'blog'],
	authors: [
		{
			name: 'kyle',
			url: '',
		},
	],
	creator: 'kyle',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
	alternates: {
		types: {
			'application/atom+xml':
				'https://overreacted-kyle.vercel.app/atom.xml',
			'application/rss+xml':
				'https://overreacted-kyle.vercel.app/rss.xml',
		},
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: siteConfig.name,
	// 	description: siteConfig.description,
	// 	images: [`${siteConfig.url}/og.jpg`],
	// 	creator: 'kyle-233',
	// },
	// icons: {
	// 	icon: '/icon.png',
	// },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-screen bg-background text-text',
					fontMono.className
				)}
			>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
