import { Typography } from "@mui/material";
import UserBadge from "./UserBadge";

const UserInfo = ({id,name,role}) => {
    
  return (<div>Id : {id} <br/> My name is <Typography variant="body2">{name}</Typography>and my Role is <UserBadge role={role}/></div>
   
       
  )
}

export default UserInfo;


