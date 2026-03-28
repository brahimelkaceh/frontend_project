import { Outlet } from 'react-router-dom'

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar'
import { toggleSidebar } from '../../store/uiSlice'
import { useAppSelector, useAppDispatch } from '../../store/hooks' 
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { setTheme } from '../../store/uiSlice'
import { Button } from '@mui/material';
import SunnyIcon from '@mui/icons-material/Sunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
export default function AppLayout() {




const theme = useAppSelector((state) => state.ui.theme)
const isDark = theme === 'dark'
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen)
const dispatch = useAppDispatch()

return (
    <div style={{ display: 'flex',background:isDark ? 'black' : 'white', flexDirection: 'column', height: '100vh' }}>

      {/* Navbar — sits at the top */}
      <nav style={{
        background: '#1e1e2e',
        color: 'white',
        padding: '0 24px',
        height: '56px',
        display: 'flex',
        alignItems: 'center'

      }}>
 <Button
  onClick={() => dispatch(setTheme(isDark ? 'light' : 'dark'))}
>
  {isDark ? <SunnyIcon/>: <NightlightIcon/>}
</Button>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>MyApp</span>
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