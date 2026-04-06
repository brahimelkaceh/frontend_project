import React from 'react'
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'
import { useNavigate } from 'react-router-dom'
import Box  from '@mui/system/Box'
import  Typography  from '@mui/material/Typography'
import Button  from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DepartementForm from '../../components/DepartmentsForm/DepartmentsForm'
const DepartmentCreate = () => {

  const navigate = useNavigate()
  return (<>
     <Box sx={{ mb: 4 }}>
           <Button startIcon={<ArrowBackIcon />}  onClick={() => navigate('/departments')}  sx={{ mb: 3, color: 'text.secondary' }}>Back to Departments</Button>
          </Box>
    <DepartementForm/>
    </>
  )
}

export default DepartmentCreate