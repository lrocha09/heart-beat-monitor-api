import { Module } from '@nestjs/common';
import { EventsGateway } from './web-socket.gateway';
import { WebSocketService } from './web-socket.service';

@Module({
  providers: [WebSocketService, EventsGateway],
})
export class WebSocketModule {}
