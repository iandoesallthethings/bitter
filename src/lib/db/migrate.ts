import 'dotenv/config'
import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { sql } from '@vercel/postgres'
import db from '$lib/db'

await migrate(db, { migrationsFolder: 'src/lib/db/migrations' })

await sql.end()
