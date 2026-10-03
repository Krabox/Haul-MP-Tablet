import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HaulMPSyncService } from './services/haulmp-sync.service';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Initialize Haul MP Sync Service
  const syncService = app.get(HaulMPSyncService);
  try {
    await syncService.initializeServer('Haul MP Tablet Server', 256);
    console.log('[Bootstrap] Haul MP integration initialized');
  } catch (error) {
    console.warn('[Bootstrap] Haul MP integration failed, running in standalone mode');
  }

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log(`[Bootstrap] Server running on http://localhost:${port}`);
}

bootstrap();
