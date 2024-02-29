import type { NewBeet } from '$types'
import db from '$lib/db'
import { beets } from '$lib/db/schema'
import { desc, eq, isNull } from 'drizzle-orm'

export async function create(newBeet: NewBeet) {
	return db.insert(beets).values(newBeet).returning()
}

export async function getFeed() {
	return await db.query.beets.findMany({
		with: { author, children },
		orderBy: [desc(beets.createdAt)],
		where: isNull(beets.parentId),
	})
}

export async function getById(id: number) {
	return await db.query.beets.findFirst({
		with: { author, children },
		where: eq(beets.id, id),
	})
}

export async function getByUserId(userId: number) {
	return await db.query.beets.findMany({
		with: { author, children },
		orderBy: [desc(beets.createdAt)],
		where: eq(beets.authorId, userId),
	})
}

const author = {
	columns: { password: false },
}

const children = {
	with: { author },
	orderBy: [desc(beets.createdAt)],
}
