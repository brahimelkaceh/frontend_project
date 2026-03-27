import React from 'react'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import UserCard from '../../components/UserCard/UserCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'
import { useUsers } from '../../hooks/useUsers'

// TODO: remove this hardcoded array
// TODO: replace with: const { data: users, isLoading, isError, error } = useUsers()
// TODO: handle isLoading — show MUI CircularProgress
// TODO: handle isError — show MUI Alert with error.message
// TODO: handle empty — show Typography "No users found."



const UserListPage = () => {
     
     const navigate = useNavigate()
     const { data: users, isLoading, isError, error } = useUsers() 

if (isLoading) return (
  <Box display="flex" justifyContent="center" mt={4}>
    <CircularProgress />
  </Box>
)

if (isError) return (
  <Alert severity="error">
    Failed to load users: {error.message}
  </Alert>
)
 
if (!users?.length) return (
  <Typography>No users found.</Typography>
)

  return (<>

    <Typography variant="h4">
      Users
    </Typography>
   <Button onClick={() => navigate(`/createuser`)}>+Create User</Button>
      {users.map((user) => (
         <Stack key={user.id}  spacing={2}>
        <UserCard id={user.id} name={user.name} role={user.role} />
        <Button onClick={() => navigate(`/users/${user.id}`)}>View</Button>
            </Stack>
      ))}
  </>
  )
}

export default UserListPage