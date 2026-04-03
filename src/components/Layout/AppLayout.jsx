import { Outlet } from 'react-router-dom';
import {
  Box, AppBar, Toolbar, IconButton,
  Tooltip, Avatar, Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toggleSidebar } from '../../store/uiSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import AutoBreadcrumb from '../AutoBreadCrumb/AutoBreadCrumb';

const SIDEBAR_WIDTH = 220;

export default function AppLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
  <Box sx={{ display: 'flex', height: '100vh' }}>

    {/* ── Sidebar (full height, left) ── */}
    <Box
      sx={{
        width: sidebarOpen ? SIDEBAR_WIDTH : 0,
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'width 0.22s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <Slide direction="right" in={sidebarOpen} mountOnEnter unmountOnExit>
        <Box sx={{ width: SIDEBAR_WIDTH, height: '100%' }}>
          <SideBar />
        </Box>
      </Slide>
    </Box>

    {/* ── Right column: Navbar + Content ── */}
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>

      {/* Navbar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ px: 2, minHeight: '64px !important', gap: 2 }}>
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            size="small"
            sx={{ color: 'text.secondary' }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>

        

          <Box sx={{ flex: 1 }} />

          <Tooltip title="Logout">
            <IconButton
              onClick={handleLogout}
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }}
            >
              <LogoutOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Avatar sx={{ width: 30, height: 30, bgcolor: 'primary.main', fontSize: 12, ml: 0.5 }}>
            JD
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Main content */}   {/* ← once here, works on every page */}
<Box
  component="main"
  sx={{
    m:0,
    flex:1,
    display:'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '0vh',
    overflowY: 'auto',
    bgcolor: '#f5fdff',
  }}
>

  <Box
    sx={{
      p:5,
      width: '100%',
      maxWidth: { xs: '100%', sm: '600px', md: '800px', lg: '1150px', xl: '1500px' }, 
      mx: 'auto',       
      flexGrow: 1,        
    }}
  >
    <AutoBreadcrumb/>
    
    <Outlet />
  </Box>
</Box>

    </Box>
  </Box>
);
}