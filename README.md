# Haul MP Tablet

Ein modernes Tablet-Interface für das Haul MP Multiplayer-Projekt in Euro Truck Simulator 2.

## Übersicht

Dieses Repository enthält die erste technische Struktur für ein Tablet mit:
- Fracht-Portal
- VTC-Portal
- Live-Spielerkarte
- Auftrags-Synchronisierung
- Schwertransport-/Begleitlogik
- App Store mit Musik, Video, Browser, Radio und Streaming-Apps
- 300+ Radiosender
- SQL-basierte Datenhaltung
- Telemetry- oder Multiplayer-Backend-Integration

## Projektstruktur

```text
.
├── apps
│   ├── server
│   │   ├── src
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── web
│       ├── src
│       ├── package.json
│       └── tsconfig.json
├── database
│   └── schema.sql
├── docs
│   └── architecture.md
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Stack

- Frontend: React + TypeScript + Vite
- Backend: NestJS + TypeScript
- DB: PostgreSQL
- Cache: Redis
- Telemetry: UDP/TCP listener
- UI: dark red-black tablet theme

## Erste Entwicklungsphasen

1. Server + DB-Modelle
2. Job- und Position-API
3. Telemetry-Listener
4. Tablet-Home-Screen
5. VTC-Portal
6. App Store und Radio
7. DLC-Checks und Rechteverwaltung

## Starten

### Server

```bash
npm install
npm run dev:server
```

### Web-Frontend

```bash
npm run dev:web
```

## Doku

- `docs/architecture.md`
- `database/schema.sql`

## Hinweis

Das Projekt ist derzeit als technische Starter-Architektur aufgebaut und kann als Grundlage für die volle Umsetzung dienen.
