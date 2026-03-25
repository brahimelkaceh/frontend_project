import { Outlet, Link } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

      {/* Navbar — sits at the top */}
      <nav style={{
        background: '#1e1e2e',
        color: 'white',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>MyApp</span>
      </nav>

      {/* Below navbar: sidebar + main content side by side */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Sidebar */}
        <aside style={{
          width: '200px',
          background: '#f4f4f5',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
        </aside>

        {/* Main content — this is where Outlet renders your page */}
        <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          <Outlet />
        </main>

      </div>
    </div>
  )
}