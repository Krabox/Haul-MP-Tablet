import { Controller, Get } from '@nestjs/common';

@Controller('radio')
export class RadioController {
  @Get('stations')
  getStations() {
    return {
      stations: [
        { id: 'rad_001', name: 'Radio 1', genre: 'Pop', streamUrl: 'https://example.com/stream1', enabled: true },
        { id: 'rad_002', name: 'Classic FM', genre: 'Classic', streamUrl: 'https://example.com/stream2', enabled: true },
        { id: 'rad_003', name: 'Truck FM', genre: 'Road', streamUrl: 'https://example.com/stream3', enabled: true },
      ],
    };
  }
}
