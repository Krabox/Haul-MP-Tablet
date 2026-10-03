import { Injectable } from '@nestjs/common';

export interface MapPlayer {
  id: string;
  playerName: string;
  x: number;
  y: number;
  city: string;
  status: 'online' | 'in_delivery' | 'resting';
}

@Injectable()
export class MapService {
  private players: MapPlayer[] = [
    { id: 'player_001', playerName: 'Krabox', x: 52.52, y: 13.405, city: 'Berlin', status: 'online' },
    { id: 'player_002', playerName: 'Dreiklang', x: 53.5511, y: 9.9937, city: 'Hamburg', status: 'online' },
    { id: 'player_003', playerName: 'Rogue', x: 48.8566, y: 2.3522, city: 'Paris', status: 'in_delivery' },
    { id: 'player_004', playerName: 'Mika', x: 50.1109, y: 8.6821, city: 'Frankfurt', status: 'resting' },
  ];

  findAll() {
    return this.players;
  }
}
