import React from 'react'
import FormField from '../FormField/FormField'
import * as Yup from 'yup'
import  Stack from '@mui/material/Stack'
import { FormControl,MenuItem,Button ,Snackbar,FormHelperText} from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  phone: Yup.string()
    .required('Phone is required'),
  role: Yup.string()
    .oneOf(['Admin', 'User', 'Viewer'], 'Select a valid role')
    .required('Role is required'),
})






const CreateUserPage = () => {
    const navigate = useNavigate()
const [snackbarOpen, setSnackbarOpen] = useState(false)
const formik = useFormik({
 initialValues: {
  name: '',
  email: '',
  username: '',
  phone: '',
  role: '',
},
  validationSchema,
  onSubmit: (values, { resetForm }) => {
  console.log('New user data:', values)
  resetForm()
  setSnackbarOpen(true)
},
})




  return (
     <Stack spacing={3} component="form" onSubmit={formik.handleSubmit} sx={{ p: 2, border: '1px dashed grey' }}>
        <FormField name="name" label="Name" formik={formik} />
        <FormField name="email" label="email" type="email" formik={formik} />
        <FormField name="username" label="Username" formik={formik}/>
        <FormField name="phone" label="Phone" formik={formik} type="number" />
        <FormControl fullWidth error={formik.touched.role && Boolean(formik.errors.role)}>
      <InputLabel id="role-label">Role</InputLabel>
       <Select
       labelId="role-label"
       id="role"
       name="role"
       value={formik.values.role}
        onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       label="Role"
  >
    <MenuItem value="Admin">Admin</MenuItem>
    <MenuItem value="User">User</MenuItem>
    <MenuItem value="Viewer">Viewer</MenuItem>
  </Select>
  {formik.touched.role && formik.errors.role && (
    <FormHelperText>{formik.errors.role}</FormHelperText>
  )}
</FormControl>
     <Button
  fullWidth
  type="submit"
  variant="contained"
  disabled={formik.isSubmitting}
>
  Create User
</Button>
<Button onClick={() => navigate(`/users`)}>Cancel</Button>
<Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  message="User created successfully!"
/>
    </Stack>
    
  )
}

export default CreateUserPage



//The error only shows after the user leaves the field because of formik.touched, which is set when onBlur={formik.handleBlur} is triggered.

//the field input like when moving to next input won t show any error sign so onblur it validate the input after leaving the input 

//manually sets an error for a specific field. It is useful when validation depends on external logic like server responses or database checks