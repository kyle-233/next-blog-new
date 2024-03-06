import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkLogo } from '../link-logo'

export const SiteHeader = () => {
	return (
		<header>
			<div className="container max-w-2xl pt-12 pb-14 flex flex-row place-content-between">
				<LinkLogo />
				<div className="relative top-[4px] italic">
					by{' '}
					<Link
						href="https://github.com/kyle-233"
						target="_blank"
						className=" scale-100 active:scale-100"
					>
						<Image
							className="relative inline -top-1 w-8 h-8 rounded-full mx-1"
							src="https://github.com/kyle-233.png"
							alt="Kyle"
							width={32}
							height={32}
						/>
					</Link>
				</div>
			</div>
		</header>
	)
}
