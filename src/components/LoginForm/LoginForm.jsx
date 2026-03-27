import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField  from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import { USERS_DATA } from '../../data/usersData'
import FormField from '../FormField/FormField'
  import Box from '@mui/material/Box';
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
})





const LoginForm = () => {

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema,
  onSubmit: (values, { setFieldError }) => {
    const match = USERS_DATA.find(
      (u) => u.email === values.email && u.password === values.password
    )
    if (match) {
      console.log('Login successful:', match)
    } else {
      setFieldError('email', 'Invalid email or password')
    }
  },
})




  


  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 2, border: '1px dashed grey' }}>
   <FormField name="email" label="Email" formik={formik} />
<FormField name="password" label="Password" formik={formik} type="password" />
<Button
  fullWidth
  type="submit"
  variant="contained"
  disabled={formik.isSubmitting}
>
  Login
</Button>
    </Box>
  );
}


export default LoginForm

 