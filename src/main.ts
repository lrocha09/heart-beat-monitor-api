import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService) as ConfigService<any>;
  const serverPort = configService.get('SERVER_PORT') as number;

  if (!serverPort) throw new Error('A porta da aplicação não foi configurada.');
  await app.listen(serverPort);
}
bootstrap();
