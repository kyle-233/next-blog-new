import { getAllPosts } from '@/lib/reader'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const links = [
		{
			url: 'https://overreacted-kyle.vercel.app/',
			lastModified: new Date(),
		},
	]

	const posts = await getAllPosts()
	posts.forEach((post) => {
		links.push({
			url: `https://overreacted-kyle.vercel.app/${post.slug}`,
			lastModified: new Date(post.date),
		})
	})
	return links
}
