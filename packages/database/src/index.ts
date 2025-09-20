import 'dotenv/config';

import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { neon } from '@neondatabase/serverless';
import { usersTable } from './db/schema';

let db: any;

if (process.env.NODE_ENV === 'production') {
    const sql = neon(process.env.DATABASE_URL!); // Neon connection
    db = drizzleNeon(sql);
} else {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL! }); // Local Postgres
    db = drizzleNode(pool);
}

async function main() {
    const user: typeof usersTable.$inferInsert = {
        name: 'Nipuni',
        age: 25,
        email: 'nipuni@hyperreal.cloud',
    };

    await db.insert(usersTable).values(user);
    console.log('New user created!');

    const users = await db.select().from(usersTable);
    console.table('All users:', users);
}

main();
