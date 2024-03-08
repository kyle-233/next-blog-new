import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: [
			'https://overreacted-kyle.vercel.app/atom.xml',
			'https://overreacted-kyle.vercel.app/rss.xml',
		],
	}
}
