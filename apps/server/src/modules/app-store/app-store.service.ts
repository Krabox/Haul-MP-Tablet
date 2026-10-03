import { Injectable } from '@nestjs/common';

export interface AppEntry {
  id: string;
  name: string;
  category: 'Music' | 'Video' | 'Social' | 'Radio';
  description: string;
  needsAccount: boolean;
  icon: string;
  externalUrl?: string;
}

@Injectable()
export class AppStoreService {
  private catalog: AppEntry[] = [
    {
      id: 'spotify',
      name: 'Spotify',
      category: 'Music',
      description: 'Musik-Streaming für lange Fahrten',
      needsAccount: true,
      icon: 'S',
      externalUrl: 'https://www.spotify.com',
    },
    {
      id: 'youtube-music',
      name: 'YouTube Music',
      category: 'Music',
      description: 'Musik-Streaming und Musikvideos',
      needsAccount: false,
      icon: 'YM',
      externalUrl: 'https://music.youtube.com',
    },
    {
      id: 'soundcloud',
      name: 'SoundCloud',
      category: 'Music',
      description: 'Independent Musik und Mixes',
      needsAccount: false,
      icon: 'SC',
      externalUrl: 'https://www.soundcloud.com',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'Video',
      description: 'Videos und Live-Streams während der Pausen',
      needsAccount: false,
      icon: 'Y',
      externalUrl: 'https://www.youtube.com',
    },
    {
      id: 'twitch',
      name: 'Twitch',
      category: 'Video',
      description: 'Live-Streaming und Gaming',
      needsAccount: false,
      icon: 'T',
      externalUrl: 'https://www.twitch.tv',
    },
    {
      id: 'netflix',
      name: 'Netflix',
      category: 'Video',
      description: 'Filme und Serien',
      needsAccount: true,
      icon: 'N',
      externalUrl: 'https://www.netflix.com',
    },
    {
      id: 'prime-video',
      name: 'Prime Video',
      category: 'Video',
      description: 'Amazon Prime Inhalte',
      needsAccount: true,
      icon: 'PV',
      externalUrl: 'https://www.primevideo.com',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      category: 'Social',
      description: 'Kurze Videos und Content',
      needsAccount: false,
      icon: 'TT',
      externalUrl: 'https://www.tiktok.com',
    },
    {
      id: 'radio',
      name: 'Radio',
      category: 'Radio',
      description: '300+ Radiosender weltweit',
      needsAccount: false,
      icon: 'R',
    },
  ];

  findAll() {
    return this.catalog;
  }

  findById(id: string) {
    return this.catalog.find((app) => app.id === id) ?? null;
  }
}
