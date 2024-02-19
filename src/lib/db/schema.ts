import { pgTable, serial, text, timestamp, integer, type AnyPgColumn } from 'drizzle-orm/pg-core'

const users = pgTable('users', {
	id: serial('id').primaryKey(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),

	username: text('username').unique().notNull(),
	email: text('email').unique().notNull(),
})

const beets = pgTable('beets', {
	id: serial('id').primaryKey(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),

	authorId: integer('author_id')
		.references(() => users.id)
		.notNull(),
	parentId: integer('parent_id').references((): AnyPgColumn => beets.id),
})

export default {
	users,
	beets,
}
