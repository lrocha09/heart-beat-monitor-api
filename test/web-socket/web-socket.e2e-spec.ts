import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../src/app/app.module';
import * as io from 'socket.io-client';

jest.setTimeout(10000);

describe('WebSocket (e2e)', () => {
  let app: INestApplication;
  let connectToSocketIO: () => io.Socket;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await app.listen(0);

    const httpServer = app.getHttpServer();

    connectToSocketIO = () =>
      io.connect(`http://127.0.0.1:${httpServer.address().port}`, {
        transports: ['websocket'],
        forceNew: true,
      });
  });

  afterEach(async () => {
    await app.close();
  });

  it('should connect, emit message and disconnect', (done) => {
    const socket = connectToSocketIO();

    socket.on('connect', () => {
      expect(socket.connected).toBe(true);
    });

    socket.emit('start-monitor', {
      frameRate: 1,
      readingTime: 1,
    });

    socket.on('start-monitor', (data) => {
      expect(data.x).toBeDefined();
      expect(data.y).toBeDefined();
      socket.disconnect();
    });

    socket.on('disconnect', (reason) => {
      expect(reason).toBe('io client disconnect');
      done();
    });

    socket.on('error', done);
  });
});
