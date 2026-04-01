// src/pages/EmployeeList/EmployeeListPage.jsx
import { useState } from 'react'
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
import { useEmployees } from '../../hooks/useEmployees'
import { useLocations } from '../../hooks/useLocations' // your custom hook

export default function EmployeeListPage() {
const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen)


  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [debouncedSearch] = useDebounce(searchInput, 400)

  // Build filters object dynamically
  const filters = {
    ...(debouncedSearch && { search: debouncedSearch }),
    ...(locationFilter && { location: locationFilter }),
  }

  // Fetch employees & locations
  const { data, isLoading, isError, refetch } = useEmployees(filters)
  const { data: locations } = useLocations()

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
     
        <Typography variant="body1" color="text.secondary">
          {data?.count ?? 0} people · find anyone in the team
        </Typography>
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
        {/* Search Input */}
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

        {/* Location Filter */}
        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            label="Location"
          >
            <MenuItem value="">All locations</MenuItem>
            {locations?.results?.map((loc) => (
              <MenuItem key={loc.id} value={loc.id}>
                {loc.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Clear Button */}
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
      {isError ? (
        <Box textAlign="center" py={8}>
          <Typography color="error" gutterBottom>
            Failed to load employees.
          </Typography>
          <Button variant="outlined" onClick={() => refetch()}>
            Try again
          </Button>
        </Box>
      ) : !isLoading && data?.results?.length === 0 ? (
        // Empty State
        <Box textAlign="center" py={10} sx={{ color: 'text.secondary' }}>
          <PeopleOutlineIcon sx={{ fontSize: 56, mb: 2, opacity: 0.3 }} />
          <Typography variant="h6" gutterBottom>
            No employees found
          </Typography>
          <Typography variant="body2">
            Try adjusting your search or clearing the filters
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Card sx={{ borderRadius: 3, p: 3, height: 240 }}>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={1.5}>
                      <Skeleton variant="circular" width={72} height={72} />
                      <Skeleton variant="text" width="60%" height={24} />
                      <Skeleton variant="text" width="80%" height={20} />
                      <Skeleton variant="text" width="40%" height={18} />
                    </Box>
                  </Card>
                </Grid>
              ))
            : data?.results?.map((employee) => (
                <Grid item xs={12} sm={6} md={sidebarOpen ? 4 : 3} lg={sidebarOpen ? 3 : 2} key={employee.id}>
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