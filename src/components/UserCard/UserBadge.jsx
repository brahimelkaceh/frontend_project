import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
const UserBadge = ({role}) => {

  let color = "default";
  let label = "Viewer";

  if (role == "admin") {
    color = "primary";
    label = "Admin";
  } else if (role == "user") {
    color = "success";
    label = "User";
  }

  return (
   <Stack direction="row" spacing={1}>
      <Chip color={color} label={label} />
    </Stack>
  )
}

export default UserBadge



