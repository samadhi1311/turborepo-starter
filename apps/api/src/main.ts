import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('API')
        .setDescription('API docs')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, { swaggerUiEnabled: false });

    app.use(
        '/api',
        apiReference({
            spec: {
                content: document,
            },
            hideModels: true,
            theme: 'alternate',
            layout: 'modern',
            documentDownloadType: 'none',
            darkMode: true,
            forceDarkModeState: 'dark',
            hideDarkModeToggle: true,
            defaultHttpClient: {
                targetKey: 'node',
                clientKey: 'undici',
            },
            hiddenClients: true,
        }),
    );

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
