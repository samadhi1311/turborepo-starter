import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '@/common/drizzle/schema';

@Injectable()
export class AuthService {
	constructor(
		@Inject('DRIZZLE_PROVIDER')
		private readonly db: NodePgDatabase<typeof schema>,
	) {}
}
