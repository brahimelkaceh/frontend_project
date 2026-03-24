import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

/** Public landing route: `/` */
export default function HomePage() {
  return (
    <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Sign in to open the dashboard and the Day 3 exercises.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button component={RouterLink} to="/login" variant="contained">
          Go to login
        </Button>
        <Button component={RouterLink} to="/dashboard" variant="outlined">
          Dashboard (protected)
        </Button>
      </Stack>
    </Box>
  )
}
