import { siteConfig } from '@/config/site'
import { PostProps } from '@/types'
import { Feed, FeedOptions } from 'feed'
import { type Metadata } from 'next'

export const generateFeed = (posts: PostProps[], metadata: Metadata) => {
	const site_url = 'https://overreacted-kyle.vercel.app/'
	const feedOptions: FeedOptions = {
		title: siteConfig.title,
		description: metadata.description as string,
		id: site_url,
		link: site_url,
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		image: 'https://github.com/kyle-233.png',
		favicon: `${site_url}/favicon.ico`,
		feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
		copyright: 'All rights reserved 2024, Kyle Lou',
		generator: 'Feed for Node.js', // optional, default = 'Feed for Node.js'
		author: {
			name: 'Kyle Lou',
			email: 'kylelu417@gmail.com',
			link: site_url,
		},
	}
	const feed = new Feed(feedOptions)
	for (const post of posts) {
		feed.addItem({
			date: new Date(post.date),
			description: post.description,
			id: `${site_url}${post.slug}/`,
			link: `${site_url}${post.slug}/`,
			title: post.title,
		})
	}

	return feed
}
