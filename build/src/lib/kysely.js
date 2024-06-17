import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
const db = new Kysely({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL, // Ensure you have this environment variable set
        }),
    }),
});
export default db;
//# sourceMappingURL=kysely.js.map