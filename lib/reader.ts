import { PostProps } from '@/types'
import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import readingTime from 'reading-time'

const postsDirectory = join(process.cwd(), 'content', 'blogs')

export const getPostSlugs = () => {
	return readdirSync(postsDirectory)
}

export const getPostBySlug = (slug: string): PostProps => {
	const realSlug = slug.replace(/\.mdx$/, '')

	const fullPath = join(postsDirectory, `${realSlug}/index.mdx`)

	const fileContents = readFileSync(fullPath)
	const { data, content } = matter(fileContents)
	const readTime = readingTime(content)
	return {
		...data,
		date: data.date,
		slug: realSlug,
		readingTime: readTime,
		content,
	} as PostProps
}

export const getAllPosts = (): PostProps[] => {
	const slugs = getPostSlugs()
	const posts = slugs.map((slug) => getPostBySlug(slug))
	return posts.sort((a, b) => b.date.localeCompare(a.date))
}
