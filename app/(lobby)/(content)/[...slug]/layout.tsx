import { SiteFooter } from '@/components/layout/site-footer'
import { siteConfig } from '@/config/site'
import { getPostBySlug } from '@/lib/reader'
import { Metadata } from 'next'

interface SlugLayoutProps {
	children?: React.ReactNode
}
export async function generateMetadata({
	params,
}: {
	params: {
		slug: string[]
		title: string
	}
}): Promise<Metadata> {
	const post = getPostBySlug(params.slug.join(''))
	return { title: `${post.title} - ${siteConfig.name}` }
}
const SlugLayout = ({ children, ...props }: SlugLayoutProps) => {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	)
}

export default SlugLayout
