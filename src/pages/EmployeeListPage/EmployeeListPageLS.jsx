// src/pages/EmployeeList/EmployeeListPage.jsx
import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Card,
  Skeleton
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard'

export default function EmployeeListPage() {
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen)
  const navigate = useNavigate()
  const [employees, setEmployees] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [debouncedSearch] = useDebounce(searchInput, 400)

  // Load employees from localStorage on mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || []
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmployees(storedUsers)
  }, [])

  // Filter employees by search and location
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch =
      !debouncedSearch ||
      emp.fullname.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      emp.job_title.toLowerCase().includes(debouncedSearch.toLowerCase())

    const matchesLocation =
      !locationFilter || emp.location === locationFilter

    return matchesSearch && matchesLocation
  })

  return (
    
    <Box>
      
      {/* Page Header */}
      <Box sx={{ mb: 4,  display:'flex' ,justifyContent:'space-between'}}>
       
        <Typography variant="body1" color="text.secondary">
          {filteredEmployees.length} people · find anyone in the team
        </Typography>
         <Button
  
  type="submit"
  variant="contained"
 onClick={()=>navigate('/team-directory/create')}
>
  Create User
</Button>
      </Box>

      {/* Filter Bar */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          p: 2,
          borderRadius: 2,
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          flexWrap: 'wrap',
        }}
      >
        <TextField
          size="small"
          placeholder="Search by name or job title..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          sx={{ flex: 1, minWidth: 220 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            label="Location"
          >
            <MenuItem value="">All locations</MenuItem>
            {/* Use unique cities from employees */}
            {[...new Set(employees.map(emp => emp.location))].map(city => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {(searchInput || locationFilter) && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              setSearchInput('')
              setLocationFilter('')
            }}
          >
            Clear
          </Button>
        )}
      </Box>

      {/* Employee Grid */}
      {filteredEmployees.length === 0 ? (
  <Box textAlign="center" py={10} sx={{ color: 'text.secondary' }}>
    <PeopleOutlineIcon sx={{ fontSize: 56, mb: 2, opacity: 0.3 }} />
    <Typography variant="h6" gutterBottom>
      No results match your search
    </Typography>
    <Typography variant="body2">
      Try a different name, job title, or location
    </Typography>
  </Box>
): (
        <Grid container spacing={3}>
          {filteredEmployees.map(employee => (
            <Grid
              item
              xs={12}
              sm={6}
              md={sidebarOpen ? 4 : 3}
              lg={sidebarOpen ? 3 : 2}
              key={employee.id}
            >
              <EmployeeCard
                employee={employee}
                onClick={() => navigate(`/team-directory/${employee.id}`)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}