# Haul MP Tablet – Phase 2

## Ziel
Die zweite Entwicklungsphase erweitert das Projekt von der reinen Architektur in eine lauffähige Backend- und UI-Grundlage für:
- Auftragsverwaltung
- Spieler- und VTC-Modelle
- Karte mit Live-Standorten
- Radiosystem
- App Store
- Schwertransport- und Begleitlogik

## 1. Backend-API Erweiterung

### 1.1 Player API

Endpunkte:
- GET /players
- GET /players/:id
- POST /players
- PATCH /players/:id/status

Beispielantwort:

```json
{
  "id": "player_001",
  "username": "Krabox",
  "steamId": "76561198000000000",
  "vtcId": "vtc_001",
  "online": true,
  "currentCity": "Berlin",
  "truckModel": "Volvo FH",
  "lastSeenAt": "2026-10-03T12:00:00Z"
}
```

### 1.2 Job API

Endpunkte:
- GET /jobs
- GET /jobs/:id
- POST /jobs
- PATCH /jobs/:id/status
- POST /jobs/:id/assign
- POST /jobs/:id/accept

Job Status:
- created
- assigned
- accepted
- in_progress
- delivered
- cancelled
- failed

### 1.3 VTC API

Endpunkte:
- GET /vtc
- GET /vtc/:id
- POST /vtc
- POST /vtc/:id/members
- PATCH /vtc/:id/members/:playerId/role

### 1.4 Map API

Endpunkte:
- GET /map/players
- GET /map/players/:id
- GET /map/jobs

### 1.5 Radio API

Endpunkte:
- GET /radio/stations
- GET /radio/stations/:id
- POST /radio/favorites

### 1.6 App Store API

Endpunkte:
- GET /apps/catalog
- GET /apps/:id
- POST /apps/:id/launch

## 2. Datenbankmodell für die zweite Phase

### players
- id
- username
- steam_id
- avatar_url
- vtc_id
- current_truck_id
- current_job_id
- current_city
- status
- last_seen_at

### jobs
- id
- player_id
- assigned_player_id
- cargo_type
- origin_city
- destination_city
- status
- role
- escort_required
- escort_mode
- trailer_type
- dlc_id
- reward
- created_at
- updated_at

### vtcs
- id
- name
- tag
- owner_player_id
- description
- created_at

### job_assignments
- id
- job_id
- player_id
- role
- status
- accepted_at

### map_positions
- id
- player_id
- x
- y
- z
- city
- region
- captured_at

### radio_stations
- id
- name
- genre
- stream_url
- region
- language
- enabled

## 3. Schwertransport- und Begleitlogik

### Anforderungen
Wenn ein Auftrag als Schwertransport markiert ist:
- Fahrer kann wählen, ob er selbst fährt
- oder nur als Begleitfahrzeug mitfährt
- oder als Support/Rolle in der Fahrzeuggruppe arbeitet

### Logik

```ts
type JobRole = 'driver' | 'escort' | 'support';

type EscortMode = 'self' | 'companion' | 'relay';

interface HeavyCargoJob {
  id: string;
  type: 'heavy_cargo';
  escortRequired: boolean;
  escortMode: EscortMode;
  allowedRoles: JobRole[];
  assignedPlayers: Array<{ playerId: string; role: JobRole }>; 
}
```

### Regeln
- Spieler mit `driver` Rolle kann LKW steuern
- Spieler mit `escort` Rolle kann im Begleitfahrzeug mitlaufen
- Spieler mit `support` Rolle kann nur Logistik / Route / Status prüfen
- Auftrag darf nur dann als bestätigt gelten, wenn mindestens ein gültiger `driver` existiert
- Bei `escortRequired=true` muss ein Begleitfahrzeug verifiziert sein

## 4. UI Phase 2

### 4.1 Hauptseite
- Startscreen mit App-Icons
- VTC
- Aufträge
- Fahrer
- Kontakte
- Browser
- App Store
- Spotify
- Netflix
- Radio

### 4.2 Fracht-Portal
Komponenten:
- Job-Liste
- Job-Karte
- Fahrerdetails
- Frachtdetails
- Statusbadge
- Button: Annehmen / Ablehnen / Starten / Liefen

### 4.3 VTC-Portal
Komponenten:
- Mitgliederliste
- Teamstatistiken
- Auftragslog
- Fahrzeugpark
- E-Mail/Kommunikationsbereich

### 4.4 Radio-System
- Senderliste
- Genre-Kategorien
- Favoriten
- Lautstärke
- regelmäßige Suche nach senderId
- Mehr als 300 Sender als Datenbank oder Feed-Konfiguration

### 4.5 App Store
- Kategorien: Music, Video, Social, Radio
- App-Karten mit Icon, Name, Beschreibung, Status
- Launcher-Funktion

## 5. Telemetry-Integration

### Anforderungen
- Spielstatus-Live-Events von ETS2
- Position, Speed, Cargo, Truck, Trailer, City, Route
- Server-Update mit WebSocket-Propagation

### Beispiel-Event

```json
{
  "type": "player.position",
  "playerId": "player_001",
  "x": 52.521,
  "y": 13.405,
  "z": 0,
  "city": "Berlin",
  "speed": 78,
  "truckModel": "Volvo FH",
  "timestamp": "2026-10-03T12:00:00Z"
}
```

## 6. DLC / SCS Integration

Wichtige Anforderungen:
- DLC muss an den Job gebunden sein
- Job kann nur im gültigen Gameplay-Kontext gestartet werden
- `dlc_id` muss in der Datenbank mit einem katalogisierten Eintrag verknüpft sein

Beispiel-DLC-Liste:
- heavy_cargo
- going_east
- scandinavia
- vive_la_france
- iberia

### Job-Berechtigungscheck

```ts
const hasDlcAccess = (player: Player, dlcId: string) => {
  return player.dlcAccess.includes(dlcId);
};
```

## 7. Nächste Aufgaben

### Umsetzung in Code
1. `apps/server/src/modules/jobs/jobs.service.ts`
2. `apps/server/src/modules/players/players.service.ts`
3. `apps/server/src/modules/vtc/vtc.service.ts`
4. `apps/server/src/modules/map/map.service.ts`
5. `apps/server/src/modules/radio/radio.service.ts`
6. `apps/web/src/pages/JobsPage.tsx`
7. `apps/web/src/pages/VtcPage.tsx`
8. `apps/web/src/pages/AppStorePage.tsx`
9. `apps/web/src/pages/MapPage.tsx`

## 8. Fazit

Die zweite Phase macht das Projekt von einem reinen Architektur-Dokument zu einer realen Anwendungsvorlage mit echten Datenmodellen, API-Strukturen, Telemetry-Handling und Tablet-UI-Skeletons.

Damit ist die Grundlage geschaffen, um im nächsten Schritt die eigentliche Server-Logik und die erste interaktive Tablet-Oberfläche lauffähig zu machen.
