import { Outlet } from 'react-router-dom'
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toggleSidebar } from '../../store/uiSlice'
import { useAppSelector, useAppDispatch } from '../../store/hooks' 
export default function AppLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // clear token
    navigate('/'); // redirect to login page
  };



  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen)
const dispatch = useAppDispatch()

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
          <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* Below navbar: sidebar + main content side by side */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Sidebar */}
        <IconButton onClick={() => dispatch(toggleSidebar())}>
        <MenuIcon />
        </IconButton>
       {sidebarOpen && <SideBar />}

        {/* Main content — this is where Outlet renders your page */}
        <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          <Outlet />
        </main>

      </div>
    </div>
  )
}