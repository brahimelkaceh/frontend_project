// src/components/AppDataGrid/AppDataGrid.jsx
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'

const AppDataGrid = ({ rows = [], columns = [], isLoading = false }) => {
  return (
    <Paper sx={{ width: '100%', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={isLoading}
        initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
        pageSizeOptions={[5, 10, 25]}
        disableRowSelectionOnClick
        sx={{
          border: 0,
          borderRadius: 3,
          // ✅ this forces all cells to center vertically
          '& .MuiDataGrid-cell': {
            display: 'flex',
            alignItems: 'center',
          },
        }}
      />
    </Paper>
  )
}

export default AppDataGrid