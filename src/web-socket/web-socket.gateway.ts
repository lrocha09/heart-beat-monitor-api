import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { WebSocketService } from './web-socket.service';

type IMonitorBody = {
  frameRate: number;
  readingTime: number;
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(private readonly webSocketService: WebSocketService) {}

  private readonly logger = new Logger(EventsGateway.name);

  @WebSocketServer()
  private server: Server;

  afterInit(): void {
    this.logger.debug('WebSocket Server started');
  }

  handleConnection(client: any): void {
    this.logger.debug(`Client ID: ${client.id}`);
  }

  @SubscribeMessage('start-monitor')
  async startMonitor(
    @ConnectedSocket() client: Socket,
    @MessageBody()
    body: IMonitorBody,
  ): Promise<unknown> {
    const { frameRate, readingTime } = body;

    this.logger.debug(
      `Monitor started => ID: ${client.id} | frameRate: ${frameRate} | readingTime: ${readingTime}`,
    );

    const monitorStartTime = Date.now();
    let xCoordinate = 0;

    while (true) {
      this.server.emit('start-monitor', {
        x: xCoordinate,
        y: this.webSocketService.getYCoordinate(xCoordinate),
      });

      const sleepTime = this.webSocketService.getRefreshRate(frameRate);

      await this.webSocketService.sleep(sleepTime);

      if (this.webSocketService.msToSeconds(xCoordinate) > readingTime) {
        return;
      }

      xCoordinate = Date.now() - monitorStartTime;
    }
  }
}
