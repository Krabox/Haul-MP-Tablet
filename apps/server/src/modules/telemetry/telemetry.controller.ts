import { Body, Controller, Post } from '@nestjs/common';
import { TelemetryService, TelemetryUpdate } from './telemetry.service';

@Controller('telemetry')
export class TelemetryController {
  constructor(private readonly telemetryService: TelemetryService) {}

  @Post('update')
  processTelemetry(@Body() data: TelemetryUpdate) {
    const result = this.telemetryService.processTelemetryUpdate(data);
    return { success: true, result };
  }
}
