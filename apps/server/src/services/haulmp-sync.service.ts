import { Injectable } from '@nestjs/common';
import { JobsService } from '../modules/jobs/jobs.service';
import haulmpClient from './haulmp-client';

@Injectable()
export class HaulMPSyncService {
  constructor(private jobsService: JobsService) {}

  /**
   * Sync completed job to Haul MP backend
   */
  async syncJobCompletion(jobId: string, playerId: string) {
    const job = this.jobsService.findById(jobId);
    if (!job) {
      console.warn(`[HaulMP Sync] Job not found: ${jobId}`);
      return null;
    }

    try {
      const result = await haulmpClient.submitJobCompletion(
        jobId,
        playerId,
        job.reward,
        job.distanceKm,
      );
      console.log(`[HaulMP Sync] Job ${jobId} synced successfully`);
      return result;
    } catch (error) {
      console.error(`[HaulMP Sync] Failed to sync job ${jobId}:`, error);
      throw error;
    }
  }

  /**
   * Fetch available jobs from Haul MP backend
   */
  async fetchJobsFromHaulMP(filters?: any) {
    try {
      const jobs = await haulmpClient.fetchJobs(filters);
      console.log(`[HaulMP Sync] Fetched ${jobs.length} jobs from Haul MP`);
      return jobs;
    } catch (error) {
      console.error('[HaulMP Sync] Failed to fetch jobs:', error);
      throw error;
    }
  }

  /**
   * Initialize server connection with Haul MP
   */
  async initializeServer(serverName: string, maxPlayers: number) {
    try {
      const result = await haulmpClient.registerServer(serverName, maxPlayers);
      console.log('[HaulMP Sync] Server registered with Haul MP');
      return result;
    } catch (error) {
      console.error('[HaulMP Sync] Failed to register server:', error);
      throw error;
    }
  }
}
