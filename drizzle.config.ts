import { defineConfig } from 'drizzle-kit'
import type { Config } from 'drizzle-kit'

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	out: './src/lib/db/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL as string,
	},
	verbose: true,
	strict: true,
}) satisfies Config
