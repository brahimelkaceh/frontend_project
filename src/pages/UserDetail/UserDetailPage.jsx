import React from 'react'
import { useParams } from 'react-router-dom'
import UserCardDetail from '../../components/UserCard/UserCardDetail'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import USERS from '../../data/users';

const UserDetailPage = () => {
const { id } = useParams()
const user = USERS.find(u => u.id === Number(id))
const navigate = useNavigate()

if (!user) return <Typography>User not found.</Typography>

return (
    <>
     <div>UserDetailPage</div>
      <UserCardDetail name={user.name} role={user.role} id={user.id}/>
        <Button onClick={()=>navigate(-1)} variant="contained">Contained</Button>
    </>
   
  )
}

export default UserDetailPage