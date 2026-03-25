import React from 'react'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import UserCard from '../../components/UserCard/UserCard';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
const USERS = [
  { id: 1, name: 'Sarah Johnson', role: 'Admin' },
  { id: 2, name: 'John Smith', role: 'User' },
  { id: 3, name: 'Lisa Chen', role: 'Viewer' },
]

const UserListPage = () => {
    const navigate = useNavigate()
  return (<>

    <Typography variant="h4">
      Users
    </Typography>
    <Stack spacing={2}>
      {USERS.map((user, index) => (
        <>
        <UserCard key={index} id={user.id} name={user.name} role={user.role} />
        <Button onClick={() => navigate(`/users/${user.id}`)}>View</Button>
        </>
      ))}
    </Stack>
  </>
   
  )
}

export default UserListPage