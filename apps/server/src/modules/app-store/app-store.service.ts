import { Injectable } from '@nestjs/common';

export interface AppEntry {
  id: string;
  name: string;
  category: 'Music' | 'Video' | 'Social' | 'Radio';
  description: string;
  needsAccount: boolean;
  icon: string;
}

@Injectable()
export class AppStoreService {
  private catalog: AppEntry[] = [
    { id: 'spotify', name: 'Spotify', category: 'Music', description: 'Music streaming', needsAccount: true, icon: 'S' },
    { id: 'youtube-music', name: 'YouTube Music', category: 'Music', description: 'Music streaming', needsAccount: false, icon: 'YT' },
    { id: 'youtube', name: 'YouTube', category: 'Video', description: 'Videos and live streams', needsAccount: false, icon: 'Y' },
    { id: 'twitch', name: 'Twitch', category: 'Video', description: 'Live streams', needsAccount: false, icon: 'T' },
    { id: 'netflix', name: 'Netflix', category: 'Video', description: 'Films and series', needsAccount: true, icon: 'N' },
    { id: 'tiktok', name: 'TikTok', category: 'Social', description: 'Short videos', needsAccount: false, icon: 'TT' },
    { id: 'radio', name: 'Radio', category: 'Radio', description: 'Radio channels', needsAccount: false, icon: 'R' },
  ];

  findAll() {
    return this.catalog;
  }
}
