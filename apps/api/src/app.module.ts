import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { DrizzleModule } from '@/common/drizzle/drizzle.module';
import { AuthModule } from '@/common/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@mguay/nestjs-better-auth';
import { UsersModule } from './modules/users/users.module';

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot({ isGlobal: true }),
		DrizzleModule,
		AuthModule,
	],
	controllers: [AppController],
	providers: [{ provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
