import { Controller, Get } from '@nestjs/common';
import { RadioService } from './radio.service';

@Controller('radio')
export class RadioController {
  constructor(private readonly radioService: RadioService) {}

  @Get('stations')
  getStations() {
    return { stations: this.radioService.findAll() };
  }
}
