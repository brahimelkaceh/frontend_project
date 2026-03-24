import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/** Public auth route: `/login` — sets demo auth then sends user into the app. */
export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from ?? '/dashboard'

  const handleSignIn = () => {
    login()
    navigate(from, { replace: true })
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper sx={{ p: 4, maxWidth: 400, width: 1 }}>
        <Typography variant="h5" gutterBottom>
          Login (demo)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          This is a minimal auth flow for learning. No real credentials.
        </Typography>
        <Button fullWidth variant="contained" onClick={handleSignIn}>
          Sign in
        </Button>
        <Button
          fullWidth
          sx={{ mt: 1 }}
          component={RouterLink}
          to="/"
        >
          Back to home
        </Button>
      </Paper>
    </Box>
  )
}
