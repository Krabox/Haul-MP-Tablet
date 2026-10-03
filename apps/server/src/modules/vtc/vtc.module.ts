import { Module } from '@nestjs/common';
import { VtcController } from './vtc.controller';
import { VtcService } from './vtc.service';

@Module({
  controllers: [VtcController],
  providers: [VtcService],
  exports: [VtcService],
})
export class VtcModule {}
