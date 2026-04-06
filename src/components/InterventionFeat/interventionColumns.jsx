import InterventionActions from "./InterventionActions"
import { Box, Typography } from '@mui/material'

// outside the array
const getDuration = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
  return diff
}

export const getInterventionColumns = (startedStates, onToggle, onViewDetail) => [
  {
    field: 'date',
    headerName: 'DATE',
    flex: 2,
    width: 560,
    renderCell: (params) => {  // curly brace not parenthesis
      const duration = getDuration(params.row.start_datetime, params.row.finish_datetime)
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, bgcolor: '#f0f0f0', borderRadius: '20px', px: 1.5, py: 0.4 }}>
            <Typography variant="caption" fontWeight={500} color="text.secondary">
              {params.row.start_datetime}
            </Typography>
            <Typography variant="caption" color="text.disabled">→</Typography>
            <Typography variant="caption" fontWeight={500} color="text.secondary">
              {params.row.finish_datetime}
            </Typography>
          </Box>

          <Box sx={{ bgcolor: '#fff3e0', color: '#ff9800', borderRadius: '12px', px: 1.2, py: 0.3, fontWeight: 700, fontSize: '0.75rem', display: 'flex', alignItems: 'center', height: '20px' }}>
            {duration} jours
          </Box>
        </Box>
      )
    }
  },
  { field: 'title',                       headerName: 'TITRE',                flex: 1 },
  { field: 'family_display',              headerName: 'FAMILLE',              flex: 1 },
  { field: 'mode_administration_display', headerName: 'MODE D ADMINISTRATION', flex: 1 },
  { field: 'dose',                        headerName: 'DOSE',                 width: 90 },
  {
    field: 'actions',
    headerName: 'ACTIONS',
    width: 180,
    sortable: false,
    renderCell: (params) => (
      <InterventionActions
        id={params.row.id}
        is_done={params.row.is_done}
        is_started={startedStates[params.row.id] ?? params.row.is_started}
        onToggle={onToggle}
        isClicked={() => onViewDetail(params.row.id)}
      />
    )
  }
]