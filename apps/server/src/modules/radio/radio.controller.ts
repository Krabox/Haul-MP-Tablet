import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RadioService } from './radio.service';

@Controller('radio')
export class RadioController {
  constructor(private readonly radioService: RadioService) {}

  @Get('stations')
  getStations() {
    return { stations: this.radioService.findAll() };
  }

  @Get('stations/region/:region')
  getStationsByRegion(@Param('region') region: string) {
    return { stations: this.radioService.findByRegion(region) };
  }

  @Post('play/:stationId')
  playStation(@Param('stationId') stationId: string) {
    const station = this.radioService.findAll().find((s) => s.id === stationId);
    return station ? { playing: station } : { error: 'Station not found' };
  }
}
