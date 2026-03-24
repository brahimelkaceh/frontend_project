import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
const StepOne = ({formData,onChange}) => {
    
  return (
    <Stack spacing={3}>
      <TextField    value={formData.name}
        onChange={(e) => onChange("name", e.target.value)} autoComplete="name" id="outlined-basic" label="Name" variant="outlined"/>
       <TextField
      required
      id="outlined-email-input"
      label="Email Address"
      type="email" 
      autoComplete="email"
      variant="outlined"
          value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
      fullWidth 
    />
    </Stack>
  );
}

export default StepOne