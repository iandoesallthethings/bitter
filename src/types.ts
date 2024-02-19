import db from '$lib/db/schema'
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm'

export type User = InferSelectModel<typeof db.users>
export type NewUser = InferInsertModel<typeof db.users>

export type Beet = InferSelectModel<typeof db.beets>
export type NewBeet = InferInsertModel<typeof db.beets>
