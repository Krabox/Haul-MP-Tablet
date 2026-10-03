# Haul MP Tablet — Roadmap

## Phase 1: Grundlagen
- Projektstruktur vorbereiten
- Backend, Frontend und DB trennen
- Authentifizierung für Spieler definieren
- Telemetry-Connector einbauen
- Statusdaten normalisieren

## Phase 2: Jobs & Map
- Auftragsmodell definieren
- Status-Fluss erstellen
- Positionsdaten modellieren
- Karten-Marker einbauen
- Job- und Map-UI erstellen

## Phase 3: Multiplayer
- VTC-Modelle definieren
- Mitgliederverwaltung
- Rollen- und Rechteprüfung
- Auftrags-Invitation und Annahme
- Begleit und Fahrerlogik

## Phase 4: Apps & Media
- App Store strukturieren
- Webview-Container integrieren
- Spotify / YouTube / Twitch / Netflix Platzhalter anlegen
- Radio-Station-Listen einbauen

## Phase 5: DLC & Release
- DLC-Catalog definieren
- Job-Berechtigungen abhängig vom DLC prüfen
- Fehler- und State-Handling abschließen
- UI auf Tablet-Design verfeinern
- Deployment vorbereiten

## Technische Liefergegenstände
- API-Endpoints für Spieler, Jobs, VTCs, Radio, Map
- DB-Migrationen
- DTO- und Validation-Layer
- WebSocket-Events
- Tablet-Page-Layout
- Produktions-Config

## Erste Umsetzungsempfehlung
1. Server-Setup
2. Datenbankmodelle
3. Telemetry-Listener
4. Job-State-API
5. Map-API
6. First Tablet Main Screen
7. App Store UI
8. VTC Portal
9. Radio System
10. DLC/Permission layer
