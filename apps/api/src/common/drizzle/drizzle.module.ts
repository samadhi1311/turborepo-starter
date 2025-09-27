import { Global, Module } from '@nestjs/common';

import {
	DRIZZLE_PROVIDER,
	drizzleProvider,
} from '@/common/drizzle/drizzle.provider';

@Global()
@Module({
	providers: [...drizzleProvider],
	exports: [DRIZZLE_PROVIDER],
})
export class DrizzleModule {}
