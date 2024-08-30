'use client'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { PostProps } from '@/types'
import Color from 'colorjs.io'

interface LinkTitleProps {
	post: PostProps
}

export const LinkTitle = ({ post }: LinkTitleProps) => {
	let lightStart = new Color('lab(63 59.32 -1.47)')
	let lightEnd = new Color('lab(33 42.09 -43.19)')
	let lightRange = lightStart.range(lightEnd)
	let darkStart = new Color('lab(81 32.36 -7.02)')
	let darkEnd = new Color('lab(78 19.97 -36.75)')
	let darkRange = darkStart.range(darkEnd)
	let today = new Date()
	let timeSinceFirstPost = (
		today.valueOf() - new Date(2018, 10, 30).valueOf()
	).valueOf()
	let timeSinceThisPost = (
		today.valueOf() - new Date(post.date).valueOf()
	).valueOf()
	let staleness = timeSinceThisPost / timeSinceFirstPost
	return (
		<h2
			className={cn(
				fontSans.className,
				'text-[28px] font-black text-[--lightLink] dark:text-[--darkLink] title'
			)}
			style={
				{
					'--lightLink': lightRange(staleness).toString(),
					'--darkLink': darkRange(staleness).toString(),
				} as React.CSSProperties
			}
		>
			{post.title}
		</h2>
	)
}
