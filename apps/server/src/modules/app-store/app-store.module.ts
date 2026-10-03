import { Module } from '@nestjs/common';
import { AppStoreController } from './app-store.controller';

@Module({
  controllers: [AppStoreController],
})
export class AppStoreModule {}
