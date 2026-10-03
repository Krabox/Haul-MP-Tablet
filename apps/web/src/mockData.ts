export const jobs = [
  {
    id: 'job_001',
    title: 'Heavy cargo: Berlin → Hamburg',
    status: 'assigned',
    cargo: 'Heavy machinery',
    weight: '18.000 kg',
    distance: '410 km',
    reward: '€2.800',
    role: 'driver',
  },
  {
    id: 'job_002',
    title: 'Construction materials: Dresden → Munich',
    status: 'in_progress',
    cargo: 'Construction materials',
    weight: '12.000 kg',
    distance: '520 km',
    reward: '€2.400',
    role: 'escort',
  },
  {
    id: 'job_003',
    title: 'Container freight: Frankfurt → Paris',
    status: 'accepted',
    cargo: 'Container freight',
    weight: '16.000 kg',
    distance: '610 km',
    reward: '€3.200',
    role: 'support',
  },
];

export const players = [
  { id: 'player_001', name: 'Krabox', city: 'Berlin', truck: 'Volvo FH', online: true },
  { id: 'player_002', name: 'Dreiklang', city: 'Hamburg', truck: 'Scania R', online: true },
  { id: 'player_003', name: 'Rogue', city: 'Paris', truck: 'MAN TGX', online: true },
  { id: 'player_004', name: 'Mika', city: 'Frankfurt', truck: 'Mercedes Actros', online: false },
];

export const vtcMembers = [
  { name: 'Krabox', role: 'Owner' },
  { name: 'Rogue', role: 'Manager' },
  { name: 'Mika', role: 'Driver' },
  { name: 'Sonia', role: 'Support' },
];

export const radioStations = [
  { id: '1', name: 'Radio 1', genre: 'Pop', stream: 'Live', active: true },
  { id: '2', name: 'Truck FM', genre: 'Road', stream: 'Live', active: true },
  { id: '3', name: 'Classic FM', genre: 'Classic', stream: 'Live', active: true },
  { id: '4', name: 'Europe Dance', genre: 'Dance', stream: 'Live', active: true },
  { id: '5', name: 'Metro Hits', genre: 'Hits', stream: 'Live', active: true },
];

export const appCatalog = [
  { id: 'spotify', name: 'Spotify', category: 'Music', description: 'Music streaming', needsAccount: true },
  { id: 'youtube', name: 'YouTube', category: 'Video', description: 'Videos and live streams', needsAccount: false },
  { id: 'twitch', name: 'Twitch', category: 'Video', description: 'Live streams', needsAccount: false },
  { id: 'netflix', name: 'Netflix', category: 'Video', description: 'Films and series', needsAccount: true },
  { id: 'radio', name: 'Radio', category: 'Radio', description: 'Broadcast stations', needsAccount: false },
  { id: 'tiktok', name: 'TikTok', category: 'Social', description: 'Short videos', needsAccount: false },
];
