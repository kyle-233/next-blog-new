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

export const copyToClipboard = (text: string) => {
	return new Promise((resolve, reject) => {
	  if (navigator?.clipboard) {
		const cb = navigator.clipboard;
  
		cb.writeText(text).then(resolve).catch(reject);
	  } else {
		try {
		  const body = document.querySelector('body');
  
		  const textarea = document.createElement('textarea');
		  body?.appendChild(textarea);
  
		  textarea.value = text;
		  textarea.select();
		  document.execCommand('copy');
  
		  body?.removeChild(textarea);
  
		  resolve(void 0);
		} catch (e) {
		  reject(e);
		}
	  }
	});
  };

  export const removeDuplicateNewLine = (text: string): string => {
	if (!text) return text;
  
	return text
	  .replace(/(\r\n\r\n)/gm, `\r\n`)
	  .replace(/(\n\n)/gm, `\n`)
	  .replace(/(\r\r)/gm, `\r`);
  };
