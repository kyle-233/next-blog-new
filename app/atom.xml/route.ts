import { generateFeed } from '@/lib/feed'
import { getAllPosts } from '@/lib/reader'
import { metadata } from '../layout'

export async function GET() {
	const posts = await getAllPosts()
	const feed = generateFeed(posts, metadata)
	return new Response(feed.atom1(), {
		headers: {
			'content-type': 'application/xhtml+xml',
		},
	})
}
