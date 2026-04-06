// src/pages/DepartmentsList/DepartmentsListPage.jsx
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import AppDataGrid from '../../components/DataGrid/DataGrid'
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog'
import { useDepartements } from '../../hooks/useDepartements'
import { useDeleteDepartement } from '../../hooks/useDepartements'
import DepartmentViewDialog from '../../components/DepartmentsCard/DepartmentCard'
export default function DepartmentsListPage() {
  const [viewOpen, setViewOpen] = useState(false)
const [selectedDepartment, setSelectedDepartment] = useState(null)
const handleViewClick = (row) => {
  setSelectedDepartment(row)
  setViewOpen(true)
}
  const navigate = useNavigate()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const { data, isLoading } = useDepartements()
  console.log(data)
  const { mutate: deleteDepartement } = useDeleteDepartement()

  const departments = data?.results || data || []

  const handleDeleteClick = (id) => {
setSelectedId(id)
 console.log('delete id:', id)
setConfirmOpen(true)
  }

 const handleConfirmDelete = () => {
  const idToDelete = selectedId
  setConfirmOpen(false)
  deleteDepartement(idToDelete, {
    onSuccess: () => {
      setSelectedId(null)
    },
  })
}

  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Department Name', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'manager',
      headerName: 'Manager',
      flex: 1,
      valueGetter: (value, row) => row.manager?.id || '—',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex" gap={0.5}>
          <Tooltip title="View">
           
  <IconButton
    size="small"
    onClick={() => handleViewClick(params.row)}
  >
    <VisibilityIcon fontSize="small" />
  </IconButton>
</Tooltip>
        
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => navigate(`/departments/edit/${params.row.id}`)}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              color="error"
              onClick={() => {console.log('row:', params.row) 
                handleDeleteClick(params.row.id)}}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <DepartmentViewDialog
  open={viewOpen}
  onClose={() => setViewOpen(false)}
  department={selectedDepartment}
/>
        </Box>
      ),
    },
  ]

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h6" fontWeight={700}>
          Departments
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/departments/create')}
        >
          New Department
        </Button>
      </Box>

      <AppDataGrid
        rows={departments}
        columns={columns}
        isLoading={isLoading}
      />

      <ConfirmationDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  )
}