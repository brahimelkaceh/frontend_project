import React from 'react'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import { useNavigate } from 'react-router-dom'
import Box  from '@mui/system/Box'
import  Typography  from '@mui/material/Typography'
import Button  from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const EmployeeCreatePage = () => {

  const navigate = useNavigate()
  return (<>
     <Box sx={{ mb: 4 }}>
           <Button startIcon={<ArrowBackIcon />}  onClick={() => navigate('/team-directory')}  sx={{ mb: 3, color: 'text.secondary' }}>Back to Directory</Button>
          </Box>
    <EmployeeForm/>
    </>
  )
}

export default EmployeeCreatePage