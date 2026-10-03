import { Injectable } from '@nestjs/common';

export interface Vtc {
  id: string;
  name: string;
  tag: string;
  ownerPlayerId: string;
  description: string;
  members: Array<{ id: string; username: string; role: 'owner' | 'manager' | 'driver' | 'support' }>;
}

@Injectable()
export class VtcService {
  private vtcs: Vtc[] = [
    {
      id: 'vtc_001',
      name: 'Eiffel Express',
      tag: 'EE',
      ownerPlayerId: 'player_001',
      description: 'European freight and escort operations',
      members: [
        { id: 'player_001', username: 'Krabox', role: 'owner' },
        { id: 'player_003', username: 'Rogue', role: 'manager' },
        { id: 'player_004', username: 'Mika', role: 'driver' },
      ],
    },
    {
      id: 'vtc_002',
      name: 'Northwind Logistics',
      tag: 'NW',
      ownerPlayerId: 'player_002',
      description: 'Long haul logistics and team operations',
      members: [
        { id: 'player_002', username: 'Dreiklang', role: 'owner' },
        { id: 'player_005', username: 'Gustav', role: 'driver' },
      ],
    },
  ];

  findAll() {
    return this.vtcs;
  }

  findById(id: string) {
    return this.vtcs.find((vtc) => vtc.id === id) ?? null;
  }
}
