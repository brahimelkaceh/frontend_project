import React from 'react'
import { useParams } from 'react-router-dom'
import UserCardDetail from '../../components/UserCard/UserCardDetail'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { useUser } from '../../hooks/useUser'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
const UserDetailPage = () => {
const { id } = useParams()
// TODO: remove this hardcoded array and find logic
// TODO: replace with: const { data: user, isLoading, isError } = useUser(id)
// TODO: handle isLoading — show MUI CircularProgress
// TODO: handle isError — show MUI Alert "User not found or failed to load."
// TODO: add these extra fields from the API: user.email, user.phone, user.company.name
 const { data: user, isLoading, isError } = useUser(id)

const navigate = useNavigate()


if (isLoading) return (
  <Box display="flex" justifyContent="center" mt={4}>
    <CircularProgress />
  </Box>
)

if (isError) return (
  <Alert severity="error">
    Failed to load users: {isError.message}
  </Alert>
)
 


if (!user) return <Typography>User not found.</Typography>

return (
    <>
     <div>UserDetailPage</div>
      <UserCardDetail name={user.name} role={user.role} id={user.id} company={user.company.name} phone={user.phone} />
        <Button onClick={()=>navigate(-1)} variant="contained">Contained</Button>
    </>
   
  )
}

export default UserDetailPage