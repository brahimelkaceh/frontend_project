import  TextField  from "@mui/material/TextField"
const FormField = ({ name, label, formik, type = 'text', multiline = false, rows }) => {
  return (
    <TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      type={type}
      multiline={multiline}
      rows={rows}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  )
}

export default FormField