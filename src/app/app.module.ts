import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebSocketModule } from '../web-socket/web-socket.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [WebSocketModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
