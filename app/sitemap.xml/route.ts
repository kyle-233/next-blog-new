import { getAllPosts } from '@/lib/reader'
import { generateSiteMap } from '@/lib/sitemap'

export async function GET() {
	const posts = await getAllPosts()
	const feed = generateSiteMap(posts)
	return new Response(feed, {
		headers: { 'Content-Type': 'application/xhtml+xml' },
	})
}
