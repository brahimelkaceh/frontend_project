import UserBadge from "./UserBadge";

const UserInfo = ({name,role}) => {
    
  return (<div>My name is {name} ans my Role is <UserBadge role={role}/></div>
   
       
  )
}

export default UserInfo;


