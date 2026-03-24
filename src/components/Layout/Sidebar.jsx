import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'

const linkSx = {
  '&.active': {
    bgcolor: 'action.selected',
  },
}

export default function Sidebar() {
  const items = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/wizard', label: 'Step wizard' },
    { to: '/users', label: 'Users' },
  ]

  return (
    <Box
      component="nav"
      sx={{
        width: 220,
        flexShrink: 0,
        borderRight: 1,
        borderColor: 'divider',
        pt: 2,
      }}
    >
      <Typography variant="overline" sx={{ px: 2, color: 'text.secondary' }}>
        Menu
      </Typography>
      <List dense>
        {items.map(({ to, label }) => (
          <ListItemButton
            key={to}
            component={NavLink}
            to={to}
            sx={linkSx}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}
