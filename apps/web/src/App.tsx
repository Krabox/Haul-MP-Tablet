import { Link, Route, Routes } from 'react-router-dom';
import { appCatalog, jobs, players, radioStations, vtcMembers } from './mockData';

const appIcons = [
  { name: 'VTC', color: '#3b82f6' },
  { name: 'Aufträge', color: '#f59e0b' },
  { name: 'Fahrer', color: '#8b5cf6' },
  { name: 'Kontakte', color: '#10b981' },
  { name: 'Spotify', color: '#22c55e' },
  { name: 'Netflix', color: '#f43f5e' },
  { name: 'YouTube', color: '#ef4444' },
  { name: 'Radio', color: '#60a5fa' },
];

function HomePage() {
  return (
    <div className="page-shell">
      <header className="tablet-header">
        <span>Start</span>
        <span>HaulMP</span>
      </header>

      <section className="app-grid">
        {appIcons.map((app) => (
          <Link key={app.name} to={app.name === 'Aufträge' ? '/jobs' : app.name === 'VTC' ? '/vtc' : app.name === 'Radio' ? '/radio' : app.name === 'Spotify' ? '/apps' : '/'} className="app-icon" style={{ background: app.color }}>
            {app.name}
          </Link>
        ))}
      </section>
    </div>
  );
}

function JobsPage() {
  return (
    <div className="page-shell panel">
      <h2>Fracht-Portal</h2>
      <div className="list-stack">
        {jobs.map((job) => (
          <div key={job.id} className="card">
            <div className="card-header">
              <strong>{job.title}</strong>
              <span className="badge status--assigned">{job.status}</span>
            </div>
            <div className="meta-row">
              <span>{job.cargo}</span>
              <span>{job.weight}</span>
            </div>
            <div className="meta-row">
              <span>{job.distance}</span>
              <span>{job.reward}</span>
            </div>
            <div className="button-row">
              <button className="secondary-btn">Annehmen</button>
              <button className="primary-btn">Zuweisen</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VtcPage() {
  return (
    <div className="page-shell panel">
      <h2>VTC-Portal</h2>
      <div className="vtc-card">
        <div>
          <p className="eyebrow">VTC</p>
          <h3>Eiffel Express</h3>
        </div>
        <div className="badge">Tag: EE</div>
      </div>

      <div className="list-stack">
        {vtcMembers.map((member) => (
          <div key={member.name} className="card compact">
            <div>{member.name}</div>
            <span className="badge">{member.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapPage() {
  return (
    <div className="page-shell panel">
      <h2>Spielerkarte</h2>
      <div className="map-grid">
        <div className="map-marker marker--a">Berlin</div>
        <div className="map-marker marker--b">Hamburg</div>
        <div className="map-marker marker--c">Paris</div>
        <div className="map-marker marker--d">Frankfurt</div>
      </div>
      <div className="legend">
        {players.map((player) => (
          <div key={player.id} className="legend-item">
            <span className="dot" />
            {player.name} · {player.city}
          </div>
        ))}
      </div>
    </div>
  );
}

function RadioPage() {
  return (
    <div className="page-shell panel">
      <h2>Radio</h2>
      <div className="list-stack">
        {radioStations.map((station) => (
          <div key={station.id} className="card compact">
            <div>
              <strong>{station.name}</strong>
              <div className="meta-row small">
                <span>{station.genre}</span>
                <span>{station.stream}</span>
              </div>
            </div>
            <button className="secondary-btn">Öffnen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppStorePage() {
  return (
    <div className="page-shell panel">
      <h2>App Store</h2>
      <div className="list-stack">
        {appCatalog.map((app) => (
          <div key={app.id} className="card compact">
            <div className="app-item">
              <div className="app-badge">{app.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <strong>{app.name}</strong>
                <div className="meta-row small">
                  <span>{app.category}</span>
                  <span>{app.needsAccount ? 'Login' : 'Open'}</span>
                </div>
              </div>
            </div>
            <button className="secondary-btn">Öffnen</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/vtc">VTC</Link>
        <Link to="/map">Map</Link>
        <Link to="/radio">Radio</Link>
        <Link to="/apps">Apps</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/vtc" element={<VtcPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/apps" element={<AppStorePage />} />
      </Routes>
    </div>
  );
}
