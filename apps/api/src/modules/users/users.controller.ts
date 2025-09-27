import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Session } from 'better-auth/types';

@ApiTags('Users')
@Controller('users')
export class UsersController {
	@Get('session')
	getSession() {
		return {};
	}
}
