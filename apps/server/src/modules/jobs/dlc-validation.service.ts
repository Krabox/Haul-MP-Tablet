import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PlayersService } from '../players/players.service';
import { HAULMP_CONFIG } from '../../config/haulmp.config';

@Injectable()
export class DlcValidationService {
  constructor(private playersService: PlayersService) {}

  validatePlayerDLC(playerId: string, requiredDlcId: string): boolean {
    const player = this.playersService.findById(playerId);
    if (!player) {
      throw new HttpException('Player not found', HttpStatus.NOT_FOUND);
    }

    if (!HAULMP_CONFIG.SUPPORTED_DLCS.includes(requiredDlcId)) {
      throw new HttpException('DLC not supported', HttpStatus.BAD_REQUEST);
    }

    return player.dlcAccess.includes(requiredDlcId);
  }

  validateJobForPlayer(jobDlcId: string, playerDlcAccess: string[]): boolean {
    if (!jobDlcId) return true; // No DLC required
    return playerDlcAccess.includes(jobDlcId);
  }
}
