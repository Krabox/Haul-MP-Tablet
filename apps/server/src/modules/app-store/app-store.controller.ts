import { Controller, Get, Param } from '@nestjs/common';
import { AppStoreService } from './app-store.service';

@Controller('apps')
export class AppStoreController {
  constructor(private readonly appStoreService: AppStoreService) {}

  @Get('catalog')
  getCatalog() {
    return { apps: this.appStoreService.findAll() };
  }

  @Get(':id')
  getAppById(@Param('id') id: string) {
    return this.appStoreService.findById(id);
  }
}
