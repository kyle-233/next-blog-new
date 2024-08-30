'use client'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const PostTitle = ({ title }: { title: string }) => {
	return (
		<h1
			className={cn(
				fontSans.className,
				'text-[40px] font-black leading-[44px] text-[--title] title'
			)}
		>
			{title}
		</h1>
	)
}
