import { Controller, Get } from '@nestjs/common';

@Controller('map')
export class MapController {
  @Get('players')
  getMapPlayers() {
    return {
      players: [
        { id: 'player_001', x: 52.52, y: 13.405, city: 'Berlin', status: 'online' },
        { id: 'player_002', x: 53.5511, y: 9.9937, city: 'Hamburg', status: 'online' },
        { id: 'player_003', x: 48.8566, y: 2.3522, city: 'Paris', status: 'in_delivery' },
      ],
    };
  }
}
