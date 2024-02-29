import { relations } from 'drizzle-orm'
import { type AnyPgColumn, pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),

	username: text('username').unique().notNull(),
	email: text('email').unique().notNull(),
	password: text('password').notNull(),
})

export const beets = pgTable('beets', {
	id: serial('id').primaryKey(),
	message: text('message').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),

	authorId: integer('author_id')
		.references(() => users.id)
		.notNull(),
	parentId: integer('parent_id').references((): AnyPgColumn => beets.id),
})

export const usersRelations = relations(users, ({ many }) => ({
	beets: many(beets),
}))

export const beetsRelations = relations(beets, ({ one, many }) => ({
	author: one(users, {
		fields: [beets.authorId],
		references: [users.id],
	}),
	parent: one(beets, {
		fields: [beets.parentId],
		references: [beets.id],
		relationName: 'parent',
	}),
	children: many(beets, { relationName: 'parent' }),
}))

export default {
	users,
	beets,
	usersRelations,
	beetsRelations,
}
