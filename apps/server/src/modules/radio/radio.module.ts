import { Module } from '@nestjs/common';
import { RadioController } from './radio.controller';

@Module({
  controllers: [RadioController],
})
export class RadioModule {}
