// InterventionTable.jsx
import AppDataGrid from '../DataGrid/DataGrid'
import { getInterventionColumns } from './interventionColumns'
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog'
import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'

const InterventionTable = ({ rows, startedStates, onToggle }) => {


  const columns = useMemo(
    () => getInterventionColumns(startedStates, onToggle),
    [startedStates, onToggle]
  )


  return (
    <Box>
      {rows.length === 0 ? (
        <Box textAlign="center" py={6}>
          <Typography variant="body2" color="text.secondary">
            Aucune intervention dans cette catégorie
          </Typography>
        </Box>
      ) : (
        <AppDataGrid rows={rows} columns={columns} isLoading={false} />
      )}

      
    </Box>
  )
}

export default InterventionTable