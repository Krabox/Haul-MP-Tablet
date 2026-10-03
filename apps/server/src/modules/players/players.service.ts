import { Injectable } from '@nestjs/common';

export interface Player {
  id: string;
  username: string;
  steamId: string;
  avatarUrl?: string;
  vtcId?: string;
  currentTruck?: string;
  currentCity: string;
  online: boolean;
  dlcAccess: string[];
  lastSeenAt: string;
}

@Injectable()
export class PlayersService {
  private players: Player[] = [
    {
      id: 'player_001',
      username: 'Krabox',
      steamId: '76561198000000001',
      vtcId: 'vtc_001',
      currentTruck: 'Volvo FH',
      currentCity: 'Berlin',
      online: true,
      dlcAccess: ['heavy_cargo', 'going_east', 'vive_la_france'],
      lastSeenAt: '2026-10-03T12:00:00Z',
    },
    {
      id: 'player_002',
      username: 'Dreiklang',
      steamId: '76561198000000002',
      vtcId: 'vtc_002',
      currentTruck: 'Scania R',
      currentCity: 'Hamburg',
      online: true,
      dlcAccess: ['going_east'],
      lastSeenAt: '2026-10-03T11:54:00Z',
    },
    {
      id: 'player_003',
      username: 'Rogue',
      steamId: '76561198000000003',
      vtcId: 'vtc_001',
      currentTruck: 'MAN TGX',
      currentCity: 'Dresden',
      online: true,
      dlcAccess: ['heavy_cargo', 'scandinavia'],
      lastSeenAt: '2026-10-03T12:11:00Z',
    },
  ];

  findAll() {
    return this.players;
  }

  findById(id: string) {
    return this.players.find((player) => player.id === id) ?? null;
  }

  updateStatus(id: string, status: boolean) {
    const player = this.findById(id);
    if (!player) return null;
    player.online = status;
    return player;
  }
}
