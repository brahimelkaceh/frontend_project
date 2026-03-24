import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
const StepTwo = ({formData,onChange}) => {


  return (<Stack spacing={3}>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Role</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={formData.role}
          label="Role"
          onChange={(e) => onChange("role", e.target.value)}
  >
    <MenuItem value={'Admin'}>Admin</MenuItem>
    <MenuItem value={'User'}>User</MenuItem>
    <MenuItem value={'Viewer'}>Viewer</MenuItem>
  </Select>
</FormControl>


      <TextField
        label="Bio"
        multiline
        rows={4}
        value={formData.bio}
        onChange={(e) => onChange("bio", e.target.value)}
        fullWidth
      />
      </Stack>
  )
}

export default StepTwo;




