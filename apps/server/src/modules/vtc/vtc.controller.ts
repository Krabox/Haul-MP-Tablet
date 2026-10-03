import { Controller, Get, Param } from '@nestjs/common';
import { VtcService } from './vtc.service';

@Controller('vtc')
export class VtcController {
  constructor(private readonly vtcService: VtcService) {}

  @Get()
  getVtcs() {
    return { vtcs: this.vtcService.findAll() };
  }

  @Get(':id')
  getVtcById(@Param('id') id: string) {
    return this.vtcService.findById(id);
  }
}
