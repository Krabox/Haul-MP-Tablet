import { Controller, Get } from '@nestjs/common';

@Controller('players')
export class PlayersController {
  @Get()
  getPlayers() {
    return {
      players: [
        {
          id: 'player_001',
          username: 'Krabox',
          vtcId: 'vtc_001',
          online: true,
          currentCity: 'Berlin',
          truckModel: 'Volvo FH',
        },
        {
          id: 'player_002',
          username: 'Dreiklang',
          vtcId: 'vtc_002',
          online: true,
          currentCity: 'Hamburg',
          truckModel: 'Scania R',
        },
      ],
    };
  }
}
