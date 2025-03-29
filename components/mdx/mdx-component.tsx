import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { MdxImage } from './mdx-image'
import { cn } from '@/lib/utils'
import remarkToc from 'remark-toc'
import '@/styles/mdx.css'
import { Counter } from '@/content/blogs/the-two-reacts/components'
import { MdxCode } from './mdx-code'

interface MdxProps {
	content: string
	postComponents: Record<string, React.ReactNode> | undefined
}

export const Mdx = async ({ content = '', postComponents = {} }: MdxProps) => {
	const components = {
		...postComponents,
		Counter: Counter,
		Image: MdxImage,
		pre: MdxCode,
		table: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableElement>) => (
			<div className="my-6 w-full overflow-y-auto">
				<table className={cn('w-full', className)} {...props} />
			</div>
		),
		tr: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableRowElement>) => (
			<tr
				className={cn('m-0 border-t p-0 even:bg-muted', className)}
				{...props}
			/>
		),
		th: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableCellElement>) => (
			<th
				className={cn(
					'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
					className
				)}
				{...props}
			/>
		),
		td: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableCellElement>) => (
			<td
				className={cn(
					'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
					className
				)}
				{...props}
			/>
		),
		button: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLButtonElement>) => (
			<button className={cn('', className)} {...props} />
		),
	}

	const options = {
		useDynamicImport: true,
		parseFrontmatter: true,
		mdxOptions: {
			remarkPlugins: [
				remarkGfm,
				// [remarkToc, { maxDepth: 4 }],
				remarkMath,
			],
			rehypePlugins: [
				rehypeKatex,
				[
					rehypePrettyCode,
					{
						theme: 'material-theme-palenight',
					},
				],
				// rehypeAutolinkHeadings,
			],
		},
	}
	return (
		<MDXRemote
			source={content}
			components={components}
			options={options as any}
		/>
	)
}
