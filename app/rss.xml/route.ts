import { generateFeed } from '@/lib/feed'
import { getAllPosts } from '@/lib/reader'
import { metadata } from '../layout'

export async function GET() {
	const posts = await getAllPosts()
	const feed = generateFeed(posts, metadata)
	return new Response(feed.rss2(), {
		headers: { 'Content-Type': 'application/xml' },
	})
}
