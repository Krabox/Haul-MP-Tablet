import { Module } from '@nestjs/common';
import { VtcController } from './vtc.controller';

@Module({
  controllers: [VtcController],
})
export class VtcModule {}
