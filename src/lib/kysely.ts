import { DB } from '@db/generated/types'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const db = new Kysely<DB>({
    dialect: new PostgresDialect({
      pool: new Pool({
        connectionString: process.env.DATABASE_URL, // Ensure you have this environment variable set
      }),
    }),
  });
  
  export default db;