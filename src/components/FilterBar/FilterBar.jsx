import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function FilterBar({
  value,
  onChange,
  icon,
  label = "Select"
}) {
  return (
    <Box sx={{ minWidth: 320 ,p:1 }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select sx={{height:'40px'}} 
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              label={label}
              startAdornment={
                icon && (
                  <InputAdornment position="start">
                    {icon}
                  </InputAdornment>
                )
              }
            />
          }
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}