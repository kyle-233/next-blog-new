import { readdir } from 'fs/promises'
import { PostPreview } from './post-preview'
import { join } from 'path'

export async function PostList() {
	const postsDirectory = join(process.cwd(), 'content', 'blogs')
	const entries = await readdir(postsDirectory, { withFileTypes: true })
	const dirs = entries.filter((entry) => entry.isDirectory())

	return (
		<div className="mb-8 flex h-72 flex-col gap-2 overflow-scroll font-sans">
			{dirs.map((dir) => (
				<PostPreview key={dir.name} slug={dir.name} />
			))}
		</div>
	)
}
