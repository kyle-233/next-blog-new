import { SiteHeader } from '@/components/layout/site-header'
import { siteConfig } from '@/config/site'
import { type Metadata } from 'next'

interface BlogLayoutProps {
	children?: React.ReactNode
}

export const metadata: Metadata = {
	title: `${siteConfig.name} - ${siteConfig.description}`,
	description: siteConfig.description,
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
	return (
		<div className="relative flex flex-col">
			<SiteHeader />
			<main className="flex-1 container max-w-2xl pb-12">{children}</main>
		</div>
	)
}

export default BlogLayout
