import { Module } from '@nestjs/common';
import { AuthController } from '@/common/auth/auth.controller';
import { AuthService } from '@/common/auth/auth.service';
import { drizzleProvider } from '@/common/drizzle/drizzle.provider';
import { AuthModule as BetterAuthModule } from '@mguay/nestjs-better-auth';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as schema from '@/common/drizzle/schema';

@Module({
	imports: [
		ConfigModule,
		BetterAuthModule.forRootAsync({
			inject: ['DRIZZLE_PROVIDER', ConfigService],
			useFactory: (db: NodePgDatabase, configService: ConfigService) => ({
				auth: betterAuth({
					database: drizzleAdapter(db, {
						provider: 'pg',
						schema: schema,
					}),
					trustedOrigins: [
						configService.getOrThrow<string>('FRONTEND_URL'),
					],
					emailAndPassword: { enabled: true },
				}),
			}),
		}),
	],
	controllers: [AuthController],
	providers: [AuthService, ...drizzleProvider],
})
export class AuthModule {}
