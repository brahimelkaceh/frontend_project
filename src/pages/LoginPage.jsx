
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import api from '../lib/axios'

export default function LoginPage() {
 
  const { login } = useAuth()
  const navigate = useNavigate()

const [username , setUsername] = useState('')
const [password , setPassword] = useState('')
 const [errors, setErrors] = useState({}) // store error messages

async function handleLogin() {
 const newErrors = {}

    // simple validation
    if (!username) newErrors.username = 'Username is required'
    if (!password) newErrors.password = 'Password is required'

    setErrors(newErrors)

    // if there are errors, stop here
    if (Object.keys(newErrors).length > 0) return

    try {
      const response = await api.post("/v1/auth/login/", {
        username,
        password
      })

      login(response.data.access) // or response.data.access
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
      setErrors({ api: 'Invalid credentials or server error' })
    }
  }

  return (
    
       <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',      // center horizontally
        mt: 8,           // margin top
        p: 3,            // padding inside the box
        display: 'flex',
        flexDirection: 'column',
        gap: 2,    // space between items
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" component="h1" textAlign="center">
        Login
      </Typography>

      <TextField  error={!!errors.username}
        helperText={errors.username} label="Username" type="text" variant="outlined" onChange={(e)=>setUsername(e.target.value)} required fullWidth />
      <TextField  error={!!errors.password}
        helperText={errors.password} label="Password" type="password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} required fullWidth />
        {errors.api && (
        <Typography color="error" variant="body2" textAlign="center">
          {errors.api}
        </Typography>
      )}

      <Button variant="contained" onClick={handleLogin} color='primary' fullWidth>
        Login
      </Button>
    </Box>
  )
}