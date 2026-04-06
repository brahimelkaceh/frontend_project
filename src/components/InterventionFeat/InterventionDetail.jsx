import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';
import Typography  from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import data from '../../data/interventions-mock-data.json'
import CloseIcon from '@mui/icons-material/Close';

const getDuration = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const diff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
  return diff
}
export default function InterventionDetail({ open, onClose, id }) {
   
  // find the row matching the id
  const row = data.find(i => i.id === id)

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={() => {}}
      sx={{
        '& .MuiDrawer-paper': {
          width: 390,
          margin: '16px',
          borderRadius: '20px',
          height: 'calc(100% - 32px)',
        },
      }}
    >
      <Box sx={{ bgcolor: 'white', p: 3 }}>

        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ bgcolor: '#e3f2fd', color: '#1565c0', borderRadius: '6px' }}>
              <DescriptionIcon />
            </IconButton>
            <Typography fontWeight={600}>Detail Overview</Typography>
          </Box>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Data */}
        {row ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <DetailRow label="Titre"            value={row.title} />
            <DetailRow label="Famille"          value={row.family_display} />
            <DetailRow label="Mode"             value={row.mode_administration_display} />
            <DetailRow label="Dose"             value={row.dose} />
            <DetailRow label="Début"            value={row.start_datetime} />
            <DetailRow label="Fin"              value={row.finish_datetime} />
            <DetailRow label="Durée"            value={getDuration(row.start_datetime, row.finish_datetime)}/>
            <DetailRow label="Statut"           value={row.is_done ? 'Terminé' : row.is_started ? 'En cours' : 'Non démarré'} />
          </Box>
        ) : (
          <Typography color="text.secondary">Aucune donnée</Typography>
        )}

      </Box>
    </SwipeableDrawer>
  )
}

// small reusable row component
const DetailRow = ({ label, value }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="body2" color="text.secondary">{label}</Typography>
    <Typography variant="body2" fontWeight={500}>{value ?? '—'}</Typography>
  </Box>
)