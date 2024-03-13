import { PostProps } from '@/types'
import { MetadataRoute } from 'next'

export async function sitemap(
	posts: PostProps[]
): Promise<MetadataRoute.Sitemap> {
	const site_url = 'https://overreacted-kyle.vercel.app/'
	const postsRoutes = posts.map((post) => ({
		url: `${site_url}${post.slug}/`,
		lastModified: new Date().toISOString(),
	}))
	return [...postsRoutes] as MetadataRoute.Sitemap
}

export function generateSiteMap(posts: PostProps[]) {
	const site_url = 'https://overreacted-kyle.vercel.app/'
	return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>https://overreacted-kyle.vercel.app</loc>
       </url>
       ${posts
			.map(({ slug }) => {
				return `
                    <url>
                        <loc>${`${site_url}/${slug}`}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                    </url>
                `
			})
			.join('')}
     </urlset>
   `
}
