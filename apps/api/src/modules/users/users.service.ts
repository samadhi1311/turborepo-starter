import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { NodePgDatabase } from 'drizzle-orm/node-postgres'
import schema from '@repo/db';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
    constructor(@Inject('DRIZZLE_PROVIDER') private readonly db: NodePgDatabase<typeof schema>) { }
    async create(createUserDto: CreateUserDto) {
        const existingUser = await this.db.query.usersTable.findFirst({
            where: eq(schema.usersTable.email, createUserDto.email)
        });

        if (existingUser) throw new ConflictException('A user with the same email exists.');

        return await this.db.insert(schema.usersTable).values(createUserDto).returning();
    }

    async findAll() {
        return await this.db.select().from(schema.usersTable);
    }
}
