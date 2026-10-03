# Haul MP Tablet – Installation & Setup

## Voraussetzungen

- Node.js 18+
- npm oder yarn
- PostgreSQL 12+
- Redis 6+
- Euro Truck Simulator 2 mit installierten DLCs

## Installation

### 1. Repository klonen

```bash
git clone https://github.com/Krabox/Haul-MP-Tablet.git
cd Haul-MP-Tablet
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env
```

Bearbeite `.env` und füge deine Haul MP API-Daten ein:

```
HAULMP_API_URL=https://api.haulmp.de
HAULMP_API_KEY=dein-api-key
HAULMP_SERVER_ID=dein-server-name
PORT=3000
```

### 4. Datenbank initialisieren

```bash
sudo -u postgres psql
CREATE DATABASE haulmp_tablet;
\q
```

```bash
npm run db:migrate
```

### 5. Server starten

```bash
npm run dev:server
```

Der Server läuft dann auf `http://localhost:3000`

### 6. Frontend starten (in separatem Terminal)

```bash
npm run dev:web
```

Das Frontend öffnet sich dann auf `http://localhost:5173`

## API-Endpunkte

### Health Check
- `GET /health` – Server-Status

### Jobs
- `GET /jobs` – Alle Aufträge abrufen
- `GET /jobs/:id` – Einzelner Auftrag
- `POST /jobs` – Neuen Auftrag erstellen
- `POST /jobs/:id/assign` – Auftrag an Spieler zuweisen
- `POST /jobs/:id/accept` – Auftrag annehmen
- `PATCH /jobs/:id/status` – Status aktualisieren

### Players
- `GET /players` – Alle Spieler
- `GET /players/:id` – Einzelner Spieler
- `PATCH /players/:id/status` – Spieler-Status ändern

### VTC
- `GET /vtc` – Alle VTCs
- `GET /vtc/:id` – Einzelne VTC

### Karte
- `GET /map/players` – Live-Positionen aller Spieler

### Radio
- `GET /radio/stations` – Alle Radiosender
- `GET /radio/stations/region/:region` – Sender nach Region
- `POST /radio/play/:stationId` – Sender starten

### Apps
- `GET /apps/catalog` – App-Katalog
- `GET /apps/:id` – Einzelne App

### Telemetry
- `POST /telemetry/update` – Telemetry-Daten von ETS2

## Haul MP Integration

Das Tablet ist vollständig mit dem Haul MP Backend integriert:

1. **Job-Synchronisierung**: Aufträge werden mit Haul MP synchronisiert
2. **Player-Stats**: Spielerstatistiken werden automatisch hochgeladen
3. **Server-Registrierung**: Der Server registriert sich beim Start bei Haul MP
4. **Echtzeit-Updates**: WebSocket-Verbindung für Live-Events

### Beispiel: Job-Completion-Sync

```typescript
const syncService = app.get(HaulMPSyncService);
await syncService.syncJobCompletion(jobId, playerId);
```

## ETS2 Telemetry Integration

Starte den Telemetry-Listener, um Live-Daten aus ETS2 zu empfangen:

```bash
python telemetry/ets2_listener.py
```

Der Listener:
- Hört auf Port 27500 (UDP)
- Empfängt Echtzeit-Telemetrie-Daten
- Leitet diese an den Server weiter
- Aktualisiert Spielerpositionen und Job-Status

## Features

✅ Fracht-Portal mit Auftragsmanagement
✅ VTC-Verwaltung und Mitgliederverwaltung
✅ Live-Spielerkarte mit Echtzeitpositionen
✅ Schwertransport- und Begleitfahrzeug-System
✅ 300+ Radiosender
✅ App Store mit integrierten Apps (Spotify, Netflix, YouTube, etc.)
✅ DLC-Validierung und Unterstützung
✅ ETS2 Telemetry-Integration
✅ Haul MP Backend-Integration
✅ Job-Synchronisierung mit dem Multiplayer-Server

## Architektur

```
ETS2 Telemetry
      ↓
[Telemetry Listener]
      ↓
[Backend Server]
      ↓
[Haul MP API]
      ↓
[Tablet UI]
      ↓
  Player
```

## Troubleshooting

### Server startet nicht
- Stelle sicher, dass PostgreSQL läuft: `sudo systemctl start postgresql`
- Überprüfe die Datenbank-URL in `.env`

### Haul MP Integration funktioniert nicht
- Prüfe die API-Key in `.env`
- Stelle sicher, dass die Haul MP API erreichbar ist: `curl https://api.haulmp.de/health`

### Telemetry-Daten kommen nicht an
- Überprüfe, ob ETS2 läuft und Telemetry aktiviert ist
- Stelle sicher, dass der Telemetry-Listener läuft
- Prüfe die Firewall auf Port 27500

## Support

Für Fragen und Support: [Haul MP Discord](https://discord.gg/haulmp)

## Lizenz

MIT
