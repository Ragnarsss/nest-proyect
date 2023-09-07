import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'mi app';
  }

  @Get('page1')
  myEndpoint() {
    return 'spy';
  }
}
