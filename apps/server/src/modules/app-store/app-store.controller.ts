import { Controller, Get } from '@nestjs/common';

@Controller('apps')
export class AppStoreController {
  @Get('catalog')
  getCatalog() {
    return {
      categories: [
        { id: 'music', label: 'Music', apps: ['Spotify', 'SoundCloud', 'YouTube Music'] },
        { id: 'video', label: 'Video', apps: ['YouTube', 'Twitch', 'Netflix'] },
        { id: 'social', label: 'Social', apps: ['TikTok'] },
        { id: 'radio', label: 'Radio', apps: ['Radio'] },
      ],
    };
  }
}
