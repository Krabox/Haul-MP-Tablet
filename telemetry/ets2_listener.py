# Telemetry Service für ETS2 Integration
# Liest Live-Daten aus Euro Truck Simulator 2
# und leitet sie an den Haul MP Server weiter

import socket
import json
import threading
import time
from typing import Dict, Any
from datetime import datetime

class ETS2TelemetryListener:
    """Listens to ETS2 telemetry UDP data and forwards to Haul MP server"""

    def __init__(self, server_host: str = "localhost", server_port: int = 3000, telemetry_port: int = 27500):
        self.server_host = server_host
        self.server_port = server_port
        self.telemetry_port = telemetry_port
        self.running = False
        self.socket = None

    def start(self):
        """Start listening for telemetry data"""
        self.running = True
        threading.Thread(target=self._listen_loop, daemon=True).start()
        print(f"[Telemetry] Listening on port {self.telemetry_port}")

    def stop(self):
        """Stop listening"""
        self.running = False
        if self.socket:
            self.socket.close()

    def _listen_loop(self):
        """Main telemetry listening loop"""
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.socket.bind(('0.0.0.0', self.telemetry_port))
        self.socket.settimeout(1.0)

        while self.running:
            try:
                data, addr = self.socket.recvfrom(4096)
                self._process_telemetry(data)
            except socket.timeout:
                continue
            except Exception as e:
                print(f"[Telemetry] Error: {e}")

    def _process_telemetry(self, raw_data: bytes):
        """Parse and normalize telemetry data"""
        try:
            # Simplified telemetry parsing
            # In real implementation, would use proper binary parsing
            telemetry = self._parse_binary_telemetry(raw_data)
            self._send_to_server(telemetry)
        except Exception as e:
            print(f"[Telemetry] Parse error: {e}")

    def _parse_binary_telemetry(self, raw_data: bytes) -> Dict[str, Any]:
        """Parse binary telemetry from ETS2"""
        # Placeholder - real implementation would parse actual ETS2 binary format
        return {
            "playerId": "player_001",
            "truckModel": "Volvo FH",
            "position": {"x": 52.52, "y": 13.405, "z": 0},
            "city": "Berlin",
            "speed": 78,
            "fuel": 0.85,
            "cargo": 18000,
            "status": "driving",
            "timestamp": datetime.utcnow().isoformat()
        }

    def _send_to_server(self, telemetry: Dict[str, Any]):
        """Send telemetry data to Haul MP server"""
        try:
            import requests
            response = requests.post(
                f"http://{self.server_host}:{self.server_port}/telemetry/update",
                json=telemetry,
                timeout=2
            )
            if response.status_code != 200:
                print(f"[Telemetry] Server error: {response.status_code}")
        except Exception as e:
            print(f"[Telemetry] Send error: {e}")

if __name__ == "__main__":
    listener = ETS2TelemetryListener()
    listener.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        listener.stop()
        print("[Telemetry] Stopped")
