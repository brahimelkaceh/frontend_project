import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import UserBadge from './UserBadge';
import UserInfo from './UserInfo';

const UserCard = ({id ,name,role}) => {

  return (
    <>
     <div>User</div>
  <Card  sx={{ minWidth: 275 }}>
        <CardContent>
          
         <UserInfo id = {id} name={name} role={role?.toLowerCase()}></UserInfo> 
          
        </CardContent>

      </Card>
  </>
  )
}

export default UserCard

