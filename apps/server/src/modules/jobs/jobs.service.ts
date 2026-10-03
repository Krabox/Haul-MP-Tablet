import { Injectable } from '@nestjs/common';

export type JobStatus =
  | 'created'
  | 'assigned'
  | 'accepted'
  | 'in_progress'
  | 'delivered'
  | 'cancelled'
  | 'failed';

export type JobRole = 'driver' | 'escort' | 'support';

export interface CreateJobDto {
  playerId: string;
  cargoType: string;
  originCity: string;
  destinationCity: string;
  cargoWeight: number;
  distanceKm: number;
  reward: number;
  trailerType: string;
  dlcId?: string;
  role?: JobRole;
  escortRequired?: boolean;
  escortMode?: 'self' | 'companion' | 'relay';
}

export interface Job {
  id: string;
  playerId: string;
  assignedPlayerId?: string;
  cargoType: string;
  originCity: string;
  destinationCity: string;
  cargoWeight: number;
  distanceKm: number;
  reward: number;
  trailerType: string;
  dlcId?: string;
  role?: JobRole;
  status: JobStatus;
  escortRequired?: boolean;
  escortMode?: 'self' | 'companion' | 'relay';
}

@Injectable()
export class JobsService {
  private jobs: Job[] = [
    {
      id: 'job_001',
      playerId: 'player_001',
      assignedPlayerId: 'player_005',
      cargoType: 'Heavy machinery',
      originCity: 'Berlin',
      destinationCity: 'Hamburg',
      cargoWeight: 18000,
      distanceKm: 410,
      reward: 2800,
      trailerType: 'lowboy',
      dlcId: 'heavy_cargo',
      role: 'driver',
      status: 'assigned',
      escortRequired: true,
      escortMode: 'companion',
    },
    {
      id: 'job_002',
      playerId: 'player_003',
      assignedPlayerId: 'player_002',
      cargoType: 'Construction materials',
      originCity: 'Dresden',
      destinationCity: 'Munich',
      cargoWeight: 12000,
      distanceKm: 520,
      reward: 2400,
      trailerType: 'flatbed',
      dlcId: 'going_east',
      role: 'escort',
      status: 'in_progress',
      escortRequired: false,
      escortMode: 'self',
    },
    {
      id: 'job_003',
      playerId: 'player_004',
      assignedPlayerId: 'player_006',
      cargoType: 'Container freight',
      originCity: 'Frankfurt',
      destinationCity: 'Paris',
      cargoWeight: 16000,
      distanceKm: 610,
      reward: 3200,
      trailerType: 'container',
      dlcId: 'vive_la_france',
      role: 'support',
      status: 'accepted',
      escortRequired: false,
      escortMode: 'relay',
    },
  ];

  findAll(status?: JobStatus) {
    return status ? this.jobs.filter((job) => job.status === status) : this.jobs;
  }

  findById(id: string) {
    return this.jobs.find((job) => job.id === id) ?? null;
  }

  create(jobDto: CreateJobDto) {
    const newJob: Job = {
      id: `job_${Date.now()}`,
      playerId: jobDto.playerId,
      cargoType: jobDto.cargoType,
      originCity: jobDto.originCity,
      destinationCity: jobDto.destinationCity,
      cargoWeight: jobDto.cargoWeight,
      distanceKm: jobDto.distanceKm,
      reward: jobDto.reward,
      trailerType: jobDto.trailerType,
      dlcId: jobDto.dlcId,
      role: jobDto.role ?? 'driver',
      status: 'created',
      escortRequired: jobDto.escortRequired ?? false,
      escortMode: jobDto.escortMode ?? 'self',
    };

    this.jobs.unshift(newJob);
    return newJob;
  }

  updateStatus(id: string, status: JobStatus) {
    const job = this.jobs.find((entry) => entry.id === id);
    if (!job) {
      return null;
    }

    job.status = status;
    return job;
  }
}
