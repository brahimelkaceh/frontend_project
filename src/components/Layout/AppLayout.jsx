import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

/**
 * Shared shell for authenticated pages.
 * Child routes render inside <Outlet /> — Navbar/Sidebar are not repeated per page.
 */
export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            overflow: 'auto',
            textAlign: 'left',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
