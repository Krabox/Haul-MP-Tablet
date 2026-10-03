import { Injectable } from '@nestjs/common';

export interface RadioStation {
  id: string;
  name: string;
  genre: string;
  streamUrl: string;
  region: string;
  language: string;
  enabled: boolean;
}

@Injectable()
export class RadioService {
  private stations: RadioStation[] = [
    { id: 'rad_001', name: 'Radio 1', genre: 'Pop', streamUrl: 'https://example.com/live/1', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_002', name: 'Classic FM', genre: 'Classic', streamUrl: 'https://example.com/live/2', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_003', name: 'Truck FM', genre: 'Road', streamUrl: 'https://example.com/live/3', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_004', name: 'Europe Dance', genre: 'Dance', streamUrl: 'https://example.com/live/4', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_005', name: 'Metro Hits', genre: 'Hits', streamUrl: 'https://example.com/live/5', region: 'FR', language: 'FR', enabled: true },
  ];

  findAll() {
    return this.stations;
  }
}
