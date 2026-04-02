import { FormField } from '../FormField/FormField'
import * as Yup from 'yup'
import Stack from '@mui/material/Stack'
import {
  Button, Snackbar, Typography, Divider, Box,
  FormControl, InputLabel, Select, MenuItem, FormHelperText
} from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateDepartement, useUpdateDepartement } from '../../hooks/useDepartements'
import { useEmployees } from '../../hooks/useEmployees'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 characters')
    .required('Description is required'),
     manager: Yup.number()
    .required('Manager is required'),
})

const DepartementForm = ({ initialData }) => {
  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const { mutate: createDepartement, isPending: isCreating } = useCreateDepartement()
  const { mutate: updateDepartement, isPending: isUpdating } = useUpdateDepartement()
const { data: employeesData, isLoading: isLoadingEmployees } = useEmployees()
const employees = employeesData?.results || employeesData || []

  const isLoading = isCreating || isUpdating

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
       manager: initialData?.manager?.id || '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (initialData) {
        // EDIT MODE
        updateDepartement(
          { id: initialData.id, data: values },
          {
            onSuccess: () => {
              setSnackbarOpen(true)
              setTimeout(() => navigate('/departments'), 1500)
            },
          }
        )
      } else {
        // CREATE MODE
        createDepartement(values, {
          onSuccess: () => {
            setSnackbarOpen(true)
            resetForm()
            setTimeout(() => navigate('/departments'), 1500)
          },
        })
      }
      console.log(values)
    },
  })

  return (
    <Stack spacing={3} component="form" onSubmit={formik.handleSubmit} sx={{ p: 2 }}>
      <Typography variant="h6" fontWeight={600}>
        {initialData ? 'Edit Department' : 'Create Department'}
      </Typography>

      <FormField name="name" label="Department Name" formik={formik} />
      <FormField name="description" label="Description" formik={formik} multiline rows={3} />

<FormControl fullWidth error={formik.touched.manager && Boolean(formik.errors.manager)}>
  <InputLabel id="manager-label">Manager</InputLabel>
  <Select
    labelId="manager-label"
    id="manager"
    name="manager"
    value={formik.values.manager}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    label="Manager"
    disabled={isLoadingEmployees}
  >
    {isLoadingEmployees ? (
      <MenuItem disabled>Loading...</MenuItem>
    ) : (
     employees.map((emp) => (
  <MenuItem key={emp.id} value={emp.id}>
    {emp.id || `${emp.first_name} ${emp.last_name}`}
  </MenuItem>
))
    )}
  </Select>
  {formik.touched.manager && formik.errors.manager && (
    <FormHelperText>{formik.errors.manager}</FormHelperText>
  )}
</FormControl>

      <Divider />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button onClick={() => navigate('/departments')}>Cancel</Button>
        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
        >
          {isLoading
            ? 'Saving...'
            : initialData
            ? 'Update Department'
            : 'Create Department'}
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={initialData ? 'Department updated successfully!' : 'Department created successfully!'}
      />
    </Stack>
  )
}

export default DepartementForm