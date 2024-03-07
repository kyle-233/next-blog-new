import { Mdx } from '@/components/mdx/mdx-component'
import { fontSans } from '@/lib/fonts'
import { getAllPosts, getPostBySlug } from '@/lib/reader'
import { cn, formatDate } from '@/lib/utils'
const SlugPage = async ({ params }: { params: { slug: string[] } }) => {
	const post = getPostBySlug(params.slug.join(''))
	let postComponents: any = {}

	try {
		postComponents = await import(
			'../../../../content/blogs/' +
				params.slug.join('') +
				'/components.ts'
		)
	} catch (e: any) {
		if (!e || e.code !== 'MODULE_NOT_FOUND') {
			throw e
		}
	}

	return (
		<article>
			<h1
				className={cn(
					fontSans.className,
					'text-[40px] font-black leading-[44px] text-[--title]'
				)}
			>
				{post.title}
			</h1>
			<p className="mt-2 text-[13px] text-gray-700 dark:text-gray-300">
				{formatDate(post.date)}
			</p>
			<div className="markdown mt-10">
				<Mdx content={post.content} postComponents={postComponents} />
			</div>
		</article>
	)
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
	const allPosts = await getAllPosts()
	return allPosts.map((post) => ({
		slug: [post.slug],
	}))
}

export default SlugPage
