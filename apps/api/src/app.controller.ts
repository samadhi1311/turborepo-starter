import { Controller, Get } from '@nestjs/common';
import {
	ApiOperation,
	ApiProperty,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger';

class HealthResponse {
	@ApiProperty({
		example: true,
		description: 'Indicates if the service is healthy',
	})
	ok: boolean;
}

@ApiTags('App')
@Controller()
export class AppController {
	@ApiOperation({ summary: 'Health check' })
	@ApiResponse({
		status: 200,
		description: 'Service is healthy',
		type: HealthResponse,
	})
	@ApiResponse({ status: 500, description: 'Internal server error' })
	@Get('health')
	health() {
		return { ok: true };
	}
}
