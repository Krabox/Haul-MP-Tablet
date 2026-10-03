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
    // Deutschland
    { id: 'rad_001', name: 'Radio 1', genre: 'Pop', streamUrl: 'https://stream.example.com/radio1', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_002', name: 'Truck FM', genre: 'Rock', streamUrl: 'https://stream.example.com/truckfm', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_003', name: 'Antenne Bayern', genre: 'Pop', streamUrl: 'https://stream.example.com/antennebayern', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_004', name: 'RPR 1', genre: 'Hit', streamUrl: 'https://stream.example.com/rpr1', region: 'DE', language: 'DE', enabled: true },
    { id: 'rad_005', name: 'Sunshine Live', genre: 'Dance', streamUrl: 'https://stream.example.com/sunshinelife', region: 'DE', language: 'DE', enabled: true },
    
    // Frankreich
    { id: 'rad_006', name: 'France Inter', genre: 'Talk', streamUrl: 'https://stream.example.com/franceinter', region: 'FR', language: 'FR', enabled: true },
    { id: 'rad_007', name: 'RTL 2', genre: 'Pop', streamUrl: 'https://stream.example.com/rtl2', region: 'FR', language: 'FR', enabled: true },
    { id: 'rad_008', name: 'Europe 1', genre: 'News', streamUrl: 'https://stream.example.com/europe1', region: 'FR', language: 'FR', enabled: true },
    { id: 'rad_009', name: 'Skyrock', genre: 'Urban', streamUrl: 'https://stream.example.com/skyrock', region: 'FR', language: 'FR', enabled: true },
    
    // Skandinavien
    { id: 'rad_010', name: 'P4', genre: 'Pop', streamUrl: 'https://stream.example.com/p4', region: 'SE', language: 'SV', enabled: true },
    { id: 'rad_011', name: 'DR P1', genre: 'Talk', streamUrl: 'https://stream.example.com/drp1', region: 'DK', language: 'DA', enabled: true },
    { id: 'rad_012', name: 'NRK P1', genre: 'Talk', streamUrl: 'https://stream.example.com/nrkp1', region: 'NO', language: 'NO', enabled: true },
    
    // International
    { id: 'rad_013', name: 'Classic FM', genre: 'Classic', streamUrl: 'https://stream.example.com/classicfm', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_014', name: 'BBC Radio 1', genre: 'Pop', streamUrl: 'https://stream.example.com/bbc1', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_015', name: 'Europe Dance', genre: 'Dance', streamUrl: 'https://stream.example.com/europedance', region: 'EU', language: 'EN', enabled: true },
    
    // Add more stations up to 300+
    { id: 'rad_016', name: 'Moto FM', genre: 'Rock', streamUrl: 'https://stream.example.com/motofm', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_017', name: 'Highway Radio', genre: 'Country', streamUrl: 'https://stream.example.com/highway', region: 'EU', language: 'EN', enabled: true },
    { id: 'rad_018', name: 'Truck Jams', genre: 'Rock', streamUrl: 'https://stream.example.com/truckjams', region: 'EU', language: 'EN', enabled: true },
  ];

  findAll() {
    return this.stations;
  }

  findByRegion(region: string) {
    return this.stations.filter((s) => s.region === region || s.region === 'EU');
  }
}
