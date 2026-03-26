import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function UserCardDetail({name,role,id,company,phone}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" >
    User Name:{name}
        </Typography>
        <Typography variant="body1" >
    User Role :{role}
        </Typography>
        <Typography variant="body1" >
    Id : {id}
        </Typography>
            <Typography variant="body1" >
    company :{company}
        </Typography>
        <Typography variant="body1" >
    phone : {phone}
        </Typography>
        
      </CardContent>
     
    </Card>
  );
}
