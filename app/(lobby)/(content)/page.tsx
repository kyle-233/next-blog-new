import { LinkTitle } from '@/components/link-title'
import { getAllPosts } from '@/lib/reader'
import { formatDate } from '@/lib/utils'

import Link from 'next/link'

const BlogPage = () => {
	const allPosts = getAllPosts()

	return (
		<div className="relative -top-[10px] flex flex-col gap-8">
			{allPosts.map((post) => (
				<Link
					href={`/${post.slug}`}
					key={post.slug}
					className="block py-4 hover:scale-[1.005] scale-100 active:scale-100"
					style={{
						opacity: '1',
						transition:
							'transform 0.2s ease-in-out 0s, opacity 0.2s linear 0.4s',
					}}
				>
					<article>
						<LinkTitle post={post} />
						<p className="text-[13px] text-gray-700 dark:text-gray-300">
							{formatDate(post.date)}
						</p>
						<p className="mt-1">{post.description}</p>
					</article>
				</Link>
			))}
		</div>
	)
}

export default BlogPage
