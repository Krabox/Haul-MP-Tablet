const apps = [
  { name: 'VTC', color: '#1d4ed8' },
  { name: 'Aufträge', color: '#f59e0b' },
  { name: 'Fahrer', color: '#8b5cf6' },
  { name: 'Kontakte', color: '#10b981' },
  { name: 'Spotify', color: '#22c55e' },
  { name: 'Netflix', color: '#f43f5e' },
  { name: 'YouTube', color: '#ef4444' },
  { name: 'Radio', color: '#3b82f6' },
];

export default function App() {
  return (
    <div className="tablet-shell">
      <header className="tablet-header">
        <div>Start</div>
        <div>HaulMP</div>
      </header>

      <main className="app-grid">
        {apps.map((app) => (
          <button key={app.name} className="app-icon" style={{ background: app.color }}>
            {app.name}
          </button>
        ))}
      </main>
    </div>
  );
}
