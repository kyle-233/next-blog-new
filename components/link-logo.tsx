'use client'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const LinkLogo = () => {
	const pathname = usePathname()
	const isActive = pathname === '/'
	return (
		<Link
			className={cn(
				fontSans.className,
				'inline-block text-2xl font-black scale-100 active:scale-100',
				{ 'hover:scale-[1.02]': !isActive }
			)}
			style={{
				opacity: '1',
				transition:
					'transform 0.2s ease-in-out 0s, opacity 0.2s linear 0.4s',
			}}
			href="/"
		>
			<span
				style={
					{
						'--myColor1': isActive
							? 'rgba(var(--text))'
							: 'var(--pink)',
						'--myColor2': isActive
							? 'rgba(var(--text))'
							: 'var(--purple)',
						backgroundImage:
							'linear-gradient(45deg, var(--myColor1), var(--myColor2))',
						backgroundClip: 'text',
						color: 'transparent',
						transition:
							'--myColor1 0.2s ease-out 0s, --myColor2 0.2s ease-in-out 0s',
					} as any
				}
			>
				overreacted
			</span>
		</Link>
	)
}
