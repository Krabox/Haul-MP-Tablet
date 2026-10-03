import { Module } from '@nestjs/common';
import { JobsModule } from './modules/jobs/jobs.module';
import { PlayersModule } from './modules/players/players.module';
import { VtcModule } from './modules/vtc/vtc.module';
import { MapModule } from './modules/map/map.module';
import { RadioModule } from './modules/radio/radio.module';
import { AppStoreModule } from './modules/app-store/app-store.module';
import { TelemetryModule } from './modules/telemetry/telemetry.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    JobsModule,
    PlayersModule,
    VtcModule,
    MapModule,
    RadioModule,
    AppStoreModule,
    TelemetryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
