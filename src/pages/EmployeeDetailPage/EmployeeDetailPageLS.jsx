// src/pages/EmployeeDetail/EmployeeDetailPage.jsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, Typography, Grid, Card, Avatar, Skeleton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


const EmployeeDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [employee, setEmployee] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  const fetchEmployee = () => {
    try {
      setIsLoading(true)
      setIsError(false)
      const users = JSON.parse(localStorage.getItem('users')) || []
      const emp = users.find((u) => u.id.toString() === id)
      setEmployee(emp || null)
    } catch {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEmployee()
  }, [id])

  const handleDelete = () => {
    setConfirmOpen(true)
  }

  const handleConfirmDelete = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const filtered = users.filter((u) => u.id.toString() !== id)
    localStorage.setItem('users', JSON.stringify(filtered))
    navigate('/team-directory')
  }

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/team-directory')}
        sx={{ mb: 3, color: 'text.secondary' }}
      >
        Back to Directory
      </Button>

      {isError ? (
        <Box textAlign="center" py={8}>
          <Typography color="error" gutterBottom>
            Failed to load employee.
          </Typography>
          <Button variant="outlined" onClick={fetchEmployee}>
            Try again
          </Button>
        </Box>
      ) : isLoading ? (
        <>
          <Box>
            <Skeleton variant="rounded" height={100} sx={{ borderRadius: 3, mb: 2 }} />
            <Box display="flex" flexDirection="column" alignItems="center" gap={1} mb={3}>
              <Skeleton variant="circular" width={96} height={96} />
              <Skeleton variant="text" width={200} height={32} />
              <Skeleton variant="text" width={140} height={24} />
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Skeleton variant="rounded" height={180} sx={{ borderRadius: 3 }} />
              </Grid>
              <Grid item xs={12} md={7}>
                <Skeleton variant="rounded" height={180} sx={{ borderRadius: 3 }} />
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3} mt={1}>
            {Array.from({ length: 8 }).map((_, i) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                <Card sx={{ borderRadius: 3, p: 3, height: 240 }}>
                  <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
                    <Skeleton variant="circular" width={72} height={72} />
                    <Skeleton variant="text" width="60%" height={24} />
                    <Skeleton variant="text" width="80%" height={20} />
                    <Skeleton variant="text" width="40%" height={18} />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : !employee ? (
        <Box textAlign="center" py={10} sx={{ color: 'text.secondary' }}>
          <Typography variant="h6">Employee not found.</Typography>
          <Button variant="outlined" onClick={() => navigate('/team-directory')}>
            Back to Directory
          </Button>
        </Box>
      ) : (
        <>
          {/* Employee Card */}
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'divider',
              mb: 3,
              overflow: 'visible',
            }}
          >
            <Box
              sx={{
                height: 100,
                bgcolor: 'primary.main',
                borderRadius: '16px 16px 0 0',
                opacity: 0.15,
              }}
            />
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ mt: -6, pb: 3, px: 3 }}>
              <Avatar
                src={employee.avatar || undefined}
                sx={{
                  width: 96,
                  height: 96,
                  fontSize: 32,
                  fontWeight: 700,
                  bgcolor: 'primary.main',
                  border: '4px solid white',
                  boxShadow: 2,
                  mb: 2,
                }}
              >
                {!employee.avatar && `${employee.fullname?.[0] ?? ''}`}
              </Avatar>

              <Typography variant="h5" fontWeight={700} textAlign="center">
                {employee.fullname}
              </Typography>
              <Typography variant="body1" color="text.secondary" textAlign="center" mt={0.5}>
                {employee.job_title}
              </Typography>

              {employee.location && (
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  <LocationOnIcon fontSize="small" color="disabled" />
                  <Typography variant="body2" color="text.disabled">
                    {employee.location}
                  </Typography>
                </Box>
              )}
            </Box>
          </Card>

          <Grid container spacing={3}>
            {/* Contact Info */}
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 3, boxShadow: 'none', border: '1px solid', borderColor: 'divider', p: 3 }}>
                <Typography variant="overline" color="text.secondary" fontWeight={600}>
                  Contact
                </Typography>
                <Box mt={2} display="flex" flexDirection="column" gap={2}>
                  {employee.email && (
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <EmailIcon fontSize="small" color="action" />
                      <Typography variant="body2">{employee.email}</Typography>
                    </Box>
                  )}
                  {employee.phone && (
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <PhoneIcon fontSize="small" color="action" />
                      <Typography variant="body2">{employee.phone}</Typography>
                    </Box>
                  )}
                </Box>
              </Card>
            </Grid>

            {/* About / Bio */}
            <Grid item xs={12} md={7}>
              <Card sx={{ borderRadius: 3, boxShadow: 'none', border: '1px solid', borderColor: 'divider', p: 3 , height: '70%' }}>
                <Typography variant="overline" color="text.secondary" fontWeight={600}>
                  About
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={2} lineHeight={0.8}>
                  {employee.bio || 'No bio available.'}
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Edit / Delete Buttons */}
          <Box mt={3} sx={{display:'flex' ,justifyContent:'space-between'}} gap={2}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              endIcon={<EditIcon />}
              onClick={() => navigate(`/team-directory/edit/${employee.id}`)}
            >
              Edit
            </Button>
          </Box>

          <ConfirmationDialog
            open={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            onConfirm={handleConfirmDelete}
          />
        </>
      )}
    </Box>
  )
}

export default EmployeeDetailPage