# Haul MP Tablet Architecture

## 1. Overview

The tablet system is split into four layers:

1. Game telemetry layer
2. Multiplayer API layer
3. SQL persistence layer
4. Tablet UI layer

The server acts as the single source of truth for rules, jobs, permissions, and VTC state. Telemetry provides live data for the player and vehicle state.

## 2. Core flow

```text
ETS2 / Telemetry -> server listener -> validation -> PostgreSQL -> WebSocket -> Tablet UI
                                              |
                                              +-> jobs / map / VTC / radio / app state
```

## 3. Main modules

### Jobs Module
- create job
- assign job
- accept / decline
- update status
- route sync
- escort assignment

### Players Module
- online/offline status
- current truck
- company and position
- permission checks

### VTC Module
- create VTC
- add/remove members
- assign roles
- job approval pipeline

### Map Module
- live locations
- city and region markers
- distance calculations
- job route overlays

### Radio Module
- station catalogue
- favorites
- live stream metadata
- categories and region filters

### App Store Module
- app categories
- app launchers
- external links or webviews
- login-aware apps like Spotify / Netflix

## 4. Recommended backend endpoints

- GET /health
- GET /players
- GET /jobs
- POST /jobs
- GET /jobs/:id
- GET /vtc
- GET /map/players
- GET /radio/stations
- GET /apps/catalog

## 5. Security requirements

- JWT auth for players
- RBAC for VTC roles
- validate job permissions before changes
- check DLC compatibility before job acceptance
- ensure all external app access is controlled and session-aware

## 6. UI requirements

- dark red-black tablet shell
- large app icons
- card-based job list
- map with live markers
- VTC main screen with members and stats
- radio player with station list
- app store with categories and launch buttons

## 7. Suggested next build steps

1. Add Postgres migrations
2. Add Prisma or TypeORM models
3. Build telemetry listener and parser
4. Add WebSocket events for live player states
5. Build first home screen
6. Add job page and VTC page
7. Launch radio + app store modules

## 8. Goal

The final product should behave like a game-aware tablet control center with a realistic cargo workflow, live map, role-based multiplayer operations, entertainment apps, DLC-aware delivery logic, and server-side synchronization.
