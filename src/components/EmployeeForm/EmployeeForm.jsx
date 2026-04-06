
import { FormField } from '../FormField/FormField'
import * as Yup from 'yup'
import  Stack from '@mui/material/Stack'
import { FormControl,MenuItem,Button ,Snackbar,Typography,Divider,Box,FormHelperText} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const validationSchema = Yup.object({
  fullname: Yup.string()
    .min(2, 'Full name must be at least 2 characters')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  job_title: Yup.string()
    .min(3, 'Job Title must be at least 2 characters')
    .required('Job Title is required'),
  phone: Yup.string()
    .required('Phone is required'),
  location: Yup.string()
    .oneOf(['Kenitra', 'Casablanca', 'Tangier'], 'Select an Location')
    .required('Location is required'),
})






const EmployeeForm = ({initialData}) => {
    const navigate = useNavigate()

const [snackbarOpen, setSnackbarOpen] = useState(false)
const formik = useFormik({
  enableReinitialize: true,
 initialValues: {
  fullname: initialData?.fullname || '',
  email: initialData?.email || '',
  job_title: initialData?.job_title || '',
  phone: initialData?.phone || '',
  location: initialData?.location || '',
},
  validationSchema,
 onSubmit: (values, { resetForm }) => {
  const users = JSON.parse(localStorage.getItem("users")) || []

  if (initialData) {
    //  EDIT MODE
    const updatedUsers = users.map(user =>
      user.id === initialData.id
        ? { ...user, ...values }
        : user
    )

    localStorage.setItem("users", JSON.stringify(updatedUsers))
    console.log("User updated")
  } else {
    // CREATE MODE
    const newUser = {
      id: Date.now(),
      ...values,
    }

    localStorage.setItem("users", JSON.stringify([...users, newUser]))
    console.log("User created")

    resetForm()
  }

  setSnackbarOpen(true)
setTimeout(() => {
  navigate('/team-directory')
}, 1500) // wait for snackbar to show then redirect
}
})




  return (
     <Stack spacing={3} component="form" onSubmit={formik.handleSubmit} sx={{ p: 2, border: '1px grey' }}>
       <Typography variant="h6" fontWeight={600}>
    {initialData ? "Edit Employee" : "Create Employee"}
  </Typography>
        <FormField name="fullname" label="Full Name" formik={formik} />
        <FormField name="email" label="email" type="email" formik={formik} />
        <FormField name="job_title" label="Job Title" formik={formik}/>
        <FormField name="phone" label="Phone" formik={formik} type="number" />
        <FormControl fullWidth error={formik.touched.location && Boolean(formik.errors.location)}>
      <InputLabel id="location-label">Location</InputLabel>
       <Select
       labelId="location-label"
       id="location"
       name="location"
       value={formik.values.location}
        onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       label="Location"
  >
    <MenuItem value="Kenitra">Kenitra</MenuItem>
    <MenuItem value="Casablanca">Casablanca</MenuItem>
    <MenuItem value="Tangier">Tangier</MenuItem>
  </Select>
  {formik.touched.location && formik.errors.location && (
    <FormHelperText>{formik.errors.location}</FormHelperText>
  )}
</FormControl>
 
<Divider  sx={{pb:3}}/>
<Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
  <Button onClick={() => navigate(`/team-directory`)}>Cancel</Button>
  <Button
    type="submit"
    variant="contained"
    disabled={formik.isSubmitting}
  >
    {initialData ? "Update Employee" : "Create Employee"}
  </Button>
</Box>
<Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
message={initialData ? "Employee updated successfully!" : "Employee created successfully!"}
/>
    </Stack>

    
  )
}

export default EmployeeForm

location