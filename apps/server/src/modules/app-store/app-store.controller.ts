import { Controller, Get } from '@nestjs/common';
import { AppStoreService } from './app-store.service';

@Controller('apps')
export class AppStoreController {
  constructor(private readonly appStoreService: AppStoreService) {}

  @Get('catalog')
  getCatalog() {
    return { apps: this.appStoreService.findAll() };
  }
}
