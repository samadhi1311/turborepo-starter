import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { config } from 'dotenv';
import { usersTable } from '../schema';

config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function seed() {
    try {
        console.log('🌱 Seeding data...');

        const user: typeof usersTable.$inferInsert[] = [
            {
                name: 'Nipuni',
                age: 25,
                email: 'nipuni@hyperreal.cloud',
            },
            {
                name: 'Samadhi',
                age: 25,
                email: 'samadhi@hyperreal.cloud',
            },
            {
                name: 'Safna',
                age: 25,
                email: 'safna@hyperreal.cloud',
            },
            {
                name: 'Sandun',
                age: 25,
                email: 'sandun@hyperreal.cloud',
            }
        ];

        await db.insert(usersTable).values(user);

        const users = await db.select().from(usersTable);

        console.log('All users:');
        console.table(users);

        console.log('✅ Seeding data completed!');
    } catch (error) {
        console.error('❌ Seeding data failed:', error);
    } finally {
        await pool.end();
    }
}

seed().catch(console.error);