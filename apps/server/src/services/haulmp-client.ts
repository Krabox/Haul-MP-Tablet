import axios from 'axios';
import { HAULMP_CONFIG } from '../config/haulmp.config';

/**
 * HaulMP Integration Client
 * Handles all communication with the Haul MP backend
 */
class HaulMPClient {
  private apiClient = axios.create({
    baseURL: HAULMP_CONFIG.API_URL,
    headers: {
      'Authorization': `Bearer ${HAULMP_CONFIG.API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  /**
   * Submit job completion to Haul MP
   */
  async submitJobCompletion(jobId: string, playerId: string, earnings: number, distance: number) {
    try {
      const response = await this.apiClient.post('/jobs/complete', {
        jobId,
        playerId,
        earnings,
        distance,
        timestamp: new Date().toISOString(),
        serverId: HAULMP_CONFIG.SERVER_ID,
      });
      return response.data;
    } catch (error) {
      console.error('[HaulMP] Job completion error:', error);
      throw error;
    }
  }

  /**
   * Sync player statistics to Haul MP
   */
  async syncPlayerStats(playerId: string, stats: any) {
    try {
      const response = await this.apiClient.post(`/players/${playerId}/stats`, {
        ...stats,
        timestamp: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      console.error('[HaulMP] Stats sync error:', error);
      throw error;
    }
  }

  /**
   * Fetch jobs from Haul MP backend
   */
  async fetchJobs(filters?: any) {
    try {
      const response = await this.apiClient.get('/jobs', { params: filters });
      return response.data;
    } catch (error) {
      console.error('[HaulMP] Fetch jobs error:', error);
      throw error;
    }
  }

  /**
   * Fetch player leaderboard data
   */
  async fetchLeaderboard(limit: number = 100) {
    try {
      const response = await this.apiClient.get('/leaderboard', { params: { limit } });
      return response.data;
    } catch (error) {
      console.error('[HaulMP] Leaderboard error:', error);
      throw error;
    }
  }

  /**
   * Register server with Haul MP
   */
  async registerServer(serverName: string, maxPlayers: number) {
    try {
      const response = await this.apiClient.post('/servers/register', {
        serverId: HAULMP_CONFIG.SERVER_ID,
        serverName,
        maxPlayers,
        features: HAULMP_CONFIG.FEATURES,
        supportedDlcs: HAULMP_CONFIG.SUPPORTED_DLCS,
      });
      return response.data;
    } catch (error) {
      console.error('[HaulMP] Server registration error:', error);
      throw error;
    }
  }
}

export default new HaulMPClient();
