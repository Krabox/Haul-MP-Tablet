import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

export type JobStatus = 'created' | 'assigned' | 'accepted' | 'in_progress' | 'delivered' | 'cancelled' | 'failed';

export class CreateJobDto {
  playerId: string;
  cargoType: string;
  originCity: string;
  destinationCity: string;
  cargoWeight: number;
  distanceKm: number;
  reward: number;
  trailerType: string;
  dlcId?: string;
  role?: 'driver' | 'escort' | 'support';
}

@Controller('jobs')
export class JobsController {
  @Get()
  getJobs(@Query('status') status?: JobStatus) {
    return {
      jobs: [
        {
          id: 'job_001',
          playerId: 'player_001',
          cargoType: 'Building materials',
          originCity: 'Berlin',
          destinationCity: 'Hamburg',
          cargoWeight: 18000,
          distanceKm: 410,
          reward: 2800,
          trailerType: 'flatbed',
          dlcId: 'dlc_01',
          status: status ?? 'assigned',
        },
      ],
    };
  }

  @Post()
  createJob(@Body() payload: CreateJobDto) {
    return {
      message: 'Job created',
      job: {
        id: 'job_new_001',
        ...payload,
        status: 'created',
      },
    };
  }

  @Get(':id')
  getJobById(@Param('id') id: string) {
    return {
      id,
      cargoType: 'Heavy cargo',
      originCity: 'Dresden',
      destinationCity: 'Munich',
      status: 'in_progress',
    };
  }
}
