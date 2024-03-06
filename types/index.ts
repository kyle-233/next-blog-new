import { type ReadTimeResults } from 'reading-time'
export interface PostProps {
	title: string
	description: string
	image: string
	date: string
	authors: string[]
	slug: string
	readingTime: ReadTimeResults
	content: string
}
