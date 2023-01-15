import { Controller, Get } from '@nestjs/common';

type ApiStatus = {
  status: string;
};

@Controller()
export class AppController {
  @Get()
  getStatus(): ApiStatus {
    return { status: 'OK' };
  }
}
