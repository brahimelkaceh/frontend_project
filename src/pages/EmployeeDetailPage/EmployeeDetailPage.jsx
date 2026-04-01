import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEmployee } from '../../hooks/useEmployee'
import { Box,Button,Typography,Skeleton,Grid } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const EmployeeDetailPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { data: employee, isLoading, isError,refetch } = useEmployee(id)



return (
    <>
      <Box>
        <Button startIcon={<ArrowBackIcon />}  onClick={() => navigate('/team-directory')}  sx={{ mb: 3, color: 'text.secondary' }}>Back to Directory</Button>

     {/* Avatar overlapping the banner */}
     {isError ? (
        <Box textAlign="center" py={8}>
          <Typography color="error" gutterBottom>
            Failed to load employee.
          </Typography>
          <Button variant="outlined" onClick={() => refetch()}>
            Try again
          </Button>
        </Box>
      ) :
         isLoading ? (
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
  
):(<>
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
  {/* Colored banner at the top of the card */}
  <Box
    sx={{
      height: 100,
      bgcolor: 'primary.main',
      borderRadius: '16px 16px 0 0',
      opacity: 0.15,
    }}
  />

    
      
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    sx={{ mt: -6, pb: 3, px: 3 }}
  >
    <Avatar
      src={employee?.avatar || undefined}
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
      {!employee?.avatar &&
        `${employee?.user?.first_name?.[0] ?? ''}${employee?.user?.last_name?.[0] ?? ''}`}
    </Avatar>

    <Typography variant="h5" fontWeight={700} textAlign="center">
      {employee?.user?.first_name} {employee?.user?.last_name}
    </Typography>

    <Typography variant="body1" color="text.secondary" textAlign="center" mt={0.5}>
      {employee?.job_title}
    </Typography>

    {employee?.location?.city && (
      <Box display="flex" alignItems="center" gap={0.5} mt={1}>
        <LocationOnIcon fontSize="small" color="disabled" />
        <Typography variant="body2" color="text.disabled">
          {employee.location.city}
          {employee.location.office_building && ` · ${employee.location.office_building}`}
        </Typography>
      </Box>
    )}
  </Box>
</Card>
<Grid container spacing={3}>
  <Grid item xs={12} md={5}>
    <Card sx={{ borderRadius: 3, boxShadow: 'none', border: '1px solid', borderColor: 'divider', p: 3 }}>
      <Typography variant="overline" color="text.secondary" fontWeight={600}>
        Contact
      </Typography>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        {employee?.email && (
          <Box display="flex" alignItems="center" gap={1.5}>
            <EmailIcon fontSize="small" color="action" />
            <Typography variant="body2">{employee.email}</Typography>
          </Box>
        )}
        {employee?.phone && (
          <Box display="flex" alignItems="center" gap={1.5}>
            <PhoneIcon fontSize="small" color="action" />
            <Typography variant="body2">{employee.phone}</Typography>
          </Box>
        )}
        {employee?.location?.floor_suite && (
          <Box display="flex" alignItems="center" gap={1.5}>
            <BusinessIcon fontSize="small" color="action" />
            <Typography variant="body2">{employee.location.floor_suite}</Typography>
          </Box>
        )}
      </Box>
    </Card>
  </Grid>

  {/* About / Bio */}
  <Grid item xs={12} md={7}>
    <Card sx={{ borderRadius: 3, boxShadow: 'none', border: '1px solid', borderColor: 'divider', p: 3, height: '100%' }}>
      <Typography variant="overline" color="text.secondary" fontWeight={600}>
        About
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={2} lineHeight={1.8}>
        {employee?.bio || 'No bio available.'}
      </Typography>
    </Card>
  </Grid>
</Grid>

</>



    )}

    
    </Box>
      <Button variant="outlined"   onClick={() => navigate(`/team-directory/delete/${employee.id}`)} startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" onClick={() => navigate(`/team-directory/edit/${employee.id}`)}  endIcon={<EditIcon />}>
  Edit
</Button>
    </>
  )
}

export default EmployeeDetailPage