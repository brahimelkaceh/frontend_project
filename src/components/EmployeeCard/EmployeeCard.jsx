import { Avatar, Box, Card, CardActionArea, Chip, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
const EmployeeCard = ({ employee, onClick }) => {
  const fullname = employee.fullname ?? ''
  //const lastName = employee.user?.last_name ?? ''
  const initials = `${fullname[0] ?? ''}`.toUpperCase()
  const fullName = `${fullname}`.trim() || 'Unknown'

  return (
    <Card
      sx={{
        height: '100%',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
          transform: 'translateY(-2px)',
          borderColor: 'primary.main',
        },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p:2,
           
        }}
      >
        {/* Avatar */}
        <Avatar
          src={employee.avatar || undefined}
          sx={{
            width: 72,
            height: 72,
            mb: 2,
            fontSize: 22,
            fontWeight: 600,
            bgcolor: 'primary.main',
          }}
        >
          {!employee.avatar && initials}
        </Avatar>

        {/* Name */}
        <Typography
          variant="subtitle1"
          fontWeight={600}
          textAlign="center"
          sx={{ lineHeight: 1.3, mb: 0.5 }}
        >
          {fullName}
        </Typography>

        {/* Job title */}
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mb: 1.5, minHeight: 40 }}
        >
          {employee.job_title || '—'}
        </Typography>

        {/* Location */}
        {employee.location?.city && (
          <Box display="flex" alignItems="center" gap={0.5} mb={1.5}>
            <LocationOnIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
            <Typography variant="caption" color="text.disabled">
              {employee.location.city}
            </Typography>
          </Box>
        )}

      </CardActionArea>
    </Card>
  )
}

export default EmployeeCard