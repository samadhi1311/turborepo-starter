import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { drizzleProvider } from '@/common/modules/drizzle/drizzle.provider';

@Module({
    controllers: [UsersController],
    providers: [UsersService, ...drizzleProvider],
})
export class UsersModule { }
