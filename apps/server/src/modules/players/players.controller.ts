import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  getPlayers() {
    return { players: this.playersService.findAll() };
  }

  @Get(':id')
  getPlayerById(@Param('id') id: string) {
    return this.playersService.findById(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('online') online: boolean) {
    return this.playersService.updateStatus(id, online);
  }

  @Post()
  createPlayer(@Body() payload: any) {
    return { message: 'Player created', player: payload };
  }
}
