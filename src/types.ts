import db from '$lib/db/schema'
import type {
	BuildQueryResult,
	DBQueryConfig,
	ExtractTablesWithRelations,
	InferInsertModel,
	InferSelectModel,
} from 'drizzle-orm'

export type User = InferSelectModel<typeof db.users>
export type NewUser = InferInsertModel<typeof db.users>

export type Beet = InferSelectModel<typeof db.beets>
export type NewBeet = InferInsertModel<typeof db.beets>

export type BeetWithRelations = InferResultType<'beets', { author: true; children: true }>

// HELPERS
type Schema = typeof db
type TSchema = ExtractTablesWithRelations<Schema>

export type IncludeRelation<TableName extends keyof TSchema> = DBQueryConfig<
	'one' | 'many',
	boolean,
	TSchema,
	TSchema[TableName]
>['with']

export type InferResultType<
	TableName extends keyof TSchema,
	With extends IncludeRelation<TableName> | undefined = undefined,
> = BuildQueryResult<
	TSchema,
	TSchema[TableName],
	{
		with: With
	}
>
