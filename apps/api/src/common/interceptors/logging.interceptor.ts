// src/common/interceptors/logging.interceptor.ts
import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger = new Logger('HTTP');

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.switchToHttp().getRequest();
		const { method, url, body } = req;

		this.logger.log(`Request: ${method} ${url} ${JSON.stringify(body)}`);

		const now = Date.now();
		return next
			.handle()
			.pipe(
				tap((data) =>
					this.logger.log(
						`Response: ${method} ${url} ${Date.now() - now}ms ${JSON.stringify(data)}`,
					),
				),
			);
	}
}
