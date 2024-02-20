import type { NewUser, User } from '$types'
import * as Bun from 'bun'
import { eq } from 'drizzle-orm'
import db from '$lib/db'
import { users } from '$lib/db/schema'
import { error } from '@sveltejs/kit'

export async function create(newUser: NewUser) {
	const hashedPassword = await Bun.password.hash(newUser.password)

	return db
		.insert(users)
		.values({
			...newUser,
			password: hashedPassword,
		})
		.returning()
}

export async function getByUsername(username: string, includePassword = false) {
	return (await db.query.users.findFirst({
		where: eq(users.username, username),
		columns: { password: includePassword },
	})) as User
}

export async function getByEmail(email: string, includePassword = false) {
	return (await db.query.users.findFirst({
		where: eq(users.email, email),
		columns: { password: includePassword },
	})) as User
}

export async function checkPassword(email: string, password: string) {
	const user = await getByEmail(email, true)

	if (!user) throw error(401, 'Invalid email or password')

	return await Bun.password.verify(password, user.password)
}
