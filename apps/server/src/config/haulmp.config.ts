// Configuration for Haul MP integration
// This connects the Tablet to the Haul MP backend

export const HAULMP_CONFIG = {
  // Server endpoint
  API_URL: process.env.HAULMP_API_URL || 'https://api.haulmp.de',
  
  // Websocket for real-time updates
  WS_URL: process.env.HAULMP_WS_URL || 'wss://ws.haulmp.de',
  
  // Authentication
  API_KEY: process.env.HAULMP_API_KEY || '',
  
  // Server identification
  SERVER_ID: process.env.HAULMP_SERVER_ID || 'default',
  
  // Polling intervals
  JOB_POLL_INTERVAL: 5000, // 5 seconds
  PLAYER_POLL_INTERVAL: 10000, // 10 seconds
  MAP_UPDATE_INTERVAL: 3000, // 3 seconds
  
  // Features
  FEATURES: {
    HEAVY_CARGO: true,
    ESCORT_SYSTEM: true,
    VTC_MANAGEMENT: true,
    MULTIPLAYER_MAP: true,
    RADIO_INTEGRATION: true,
    TELEMETRY_SYNC: true,
    DLC_VALIDATION: true,
  },
  
  // DLC Support
  SUPPORTED_DLCS: [
    'heavy_cargo',
    'going_east',
    'scandinavia',
    'vive_la_france',
    'iberia',
    'baltics',
    'beyond_the_sea',
  ],
};

export const JOB_STATUSES = {
  CREATED: 'created',
  ASSIGNED: 'assigned',
  ACCEPTED: 'accepted',
  IN_PROGRESS: 'in_progress',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  FAILED: 'failed',
};

export const PLAYER_ROLES = {
  DRIVER: 'driver',
  ESCORT: 'escort',
  SUPPORT: 'support',
  MANAGER: 'manager',
  OWNER: 'owner',
};
