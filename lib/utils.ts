import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...input: ClassValue[]) => {
	return twMerge(clsx(input))
}

export function formatDate(
	date: Date | string | number,
	options: Intl.DateTimeFormatOptions = {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	}
) {
	return new Intl.DateTimeFormat('en-US', {
		...options,
	}).format(new Date(date))
}
