import { Test, TestingModule } from '@nestjs/testing';
import { WebSocketService } from './web-socket.service';

describe('WebSocketService', () => {
  let service: WebSocketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebSocketService],
    }).compile();

    service = module.get<WebSocketService>(WebSocketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the Y coordinate', () => {
    const yCoordinate = service.getYCoordinate(0);

    expect(+yCoordinate).toEqual(0.18505);
  });
});
