import { Injectable } from '@nestjs/common';
import { PlayersService, Player } from '../players/players.service';

export interface TelemetryUpdate {
  playerId: string;
  truckModel: string;
  position: { x: number; y: number; z: number };
  city: string;
  speed: number;
  fuel: number;
  cargo: number;
  status: string;
  timestamp: string;
}

@Injectable()
export class TelemetryService {
  constructor(private playersService: PlayersService) {}

  processTelemetryUpdate(data: TelemetryUpdate) {
    const player = this.playersService.findById(data.playerId);
    if (!player) {
      console.warn(`[Telemetry] Player not found: ${data.playerId}`);
      return null;
    }

    // Update player state
    player.currentCity = data.city;
    player.lastSeenAt = data.timestamp;

    // Log significant events
    if (data.status === 'job_delivered') {
      console.log(`[Telemetry] ${player.username} delivered job in ${data.city}`);
      return { event: 'job_delivered', playerId: data.playerId, city: data.city };
    }

    if (data.status === 'job_started') {
      console.log(`[Telemetry] ${player.username} started job from ${data.city}`);
      return { event: 'job_started', playerId: data.playerId, city: data.city };
    }

    return { event: 'position_update', playerId: data.playerId, city: data.city };
  }
}
