-- Telemetry API / DB schema for Haul MP Tablet
-- PostgreSQL

CREATE TABLE players (
  id UUID PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  steam_id VARCHAR(120),
  avatar_url VARCHAR(255),
  vtc_id UUID,
  current_truck_id UUID,
  current_job_id UUID,
  ingame_company VARCHAR(100),
  last_seen_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE trucks (
  id UUID PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES players(id),
  model VARCHAR(120) NOT NULL,
  trailer_id UUID,
  plate VARCHAR(60),
  cargo_weight NUMERIC(12,2),
  fuel_level NUMERIC(5,2),
  speed NUMERIC(8,2),
  current_x NUMERIC(12,6),
  current_y NUMERIC(12,6),
  current_z NUMERIC(12,6),
  status VARCHAR(40),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE jobs (
  id UUID PRIMARY KEY,
  player_id UUID REFERENCES players(id),
  assigned_player_id UUID REFERENCES players(id),
  cargo_type VARCHAR(120),
  origin_city VARCHAR(120),
  destination_city VARCHAR(120),
  cargo_weight NUMERIC(12,2),
  distance_km NUMERIC(10,2),
  reward NUMERIC(12,2),
  status VARCHAR(30) NOT NULL,
  trailer_type VARCHAR(80),
  job_type VARCHAR(40),
  escort_required BOOLEAN DEFAULT FALSE,
  escort_mode VARCHAR(40),
  dlc_id VARCHAR(80),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE job_assignments (
  id UUID PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES jobs(id),
  player_id UUID NOT NULL REFERENCES players(id),
  role VARCHAR(30),
  accepted_at TIMESTAMPTZ,
  declined_at TIMESTAMPTZ,
  status VARCHAR(30),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vtcs (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  owner_player_id UUID NOT NULL REFERENCES players(id),
  tag VARCHAR(10),
  logo_url VARCHAR(255),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE vtc_members (
  id UUID PRIMARY KEY,
  vtc_id UUID NOT NULL REFERENCES vtcs(id),
  player_id UUID NOT NULL REFERENCES players(id),
  role VARCHAR(40),
  joined_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE map_positions (
  id UUID PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES players(id),
  x NUMERIC(12,6),
  y NUMERIC(12,6),
  z NUMERIC(12,6),
  region VARCHAR(120),
  city VARCHAR(120),
  captured_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE apps (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  category VARCHAR(30),
  icon_url VARCHAR(255),
  url VARCHAR(255),
  is_webview BOOLEAN DEFAULT TRUE,
  requires_login BOOLEAN DEFAULT FALSE,
  enabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE radio_stations (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  genre VARCHAR(80),
  stream_url TEXT NOT NULL,
  region VARCHAR(80),
  language VARCHAR(60),
  enabled BOOLEAN DEFAULT TRUE
);

CREATE TABLE dlc_catalog (
  id UUID PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  code VARCHAR(40) NOT NULL,
  description TEXT,
  required_for_jobs BOOLEAN DEFAULT FALSE
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES players(id),
  title VARCHAR(160),
  message TEXT,
  type VARCHAR(40),
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_jobs_player ON jobs(player_id);
CREATE INDEX idx_map_positions_player ON map_positions(player_id);
CREATE INDEX idx_players_vtc ON players(vtc_id);
