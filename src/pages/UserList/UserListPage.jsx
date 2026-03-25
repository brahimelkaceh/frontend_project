import React from 'react'
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import UserCard from '../../components/UserCard/UserCard';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import USERS from '../../data/users'

const UserListPage = () => {
    const navigate = useNavigate()
  return (<>

    <Typography variant="h4">
      Users
    </Typography>
   
      {USERS.map((user) => (
         <Stack key={user.id}  spacing={2}>
        <UserCard id={user.id} name={user.name} role={user.role} />
        <Button onClick={() => navigate(`/users/${user.id}`)}>View</Button>
            </Stack>
      ))}

  </>
   
  )
}

export default UserListPage