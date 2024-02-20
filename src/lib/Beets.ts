import type { NewBeet } from '$types'
import db from '$lib/db'
import { beets } from '$lib/db/schema'
import { desc, isNull } from 'drizzle-orm'

export async function create(newBeet: NewBeet) {
	return db.insert(beets).values(newBeet).returning()
}

export async function getFeed() {
	return await db.query.beets.findMany({
		with: {
			author,
			children,
		},
		orderBy: [desc(beets.createdAt)],
		where: isNull(beets.parentId),
	})
}

const author = {
	columns: { password: false },
}

const children = {
	with: { author },
	orderBy: [desc(beets.createdAt)],
}
