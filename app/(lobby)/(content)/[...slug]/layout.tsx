import { SiteFooter } from '@/components/layout/site-footer'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

interface SlugLayoutProps {
	children?: React.ReactNode
}
export async function generateMetadata({
	params,
}: {
	params: {
		slug: string[]
	}
}): Promise<Metadata> {
	return { title: `${params.slug.at(-1)} - ${siteConfig.name}` }
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
