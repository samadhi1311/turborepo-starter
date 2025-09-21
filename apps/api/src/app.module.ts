import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { DrizzleModule } from '@/common/modules/drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from '@/modules/users/users.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), DrizzleModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
