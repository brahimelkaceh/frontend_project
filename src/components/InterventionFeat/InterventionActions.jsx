import { Box } from "@mui/system"
import {Tooltip} from "@mui/material";
import { IconButton } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseIcon from '@mui/icons-material/Pause';
const InterventionActions = ({ id, is_done, is_started, onToggle ,isClicked}) => {


  


  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} gap={0.5}>

      {/* status button — changes based on state */}
      {is_done ? (
        <Tooltip  title="Terminé">
          <span>
            <IconButton sx={{opacity: 0.35, cursor: 'not-allowed', bgcolor: '#e8f5e9', color: '#2e7d32', borderRadius: '6px' }} size="small">
              <CheckCircleIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      ) : is_started ? (
        <Tooltip title="Pause">
          <span>
            <IconButton onClick={() => onToggle(id)} sx={{ bgcolor: '#e3f2fd', color: '#1565c0', borderRadius: '6px' }} size="small">
              <PauseIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      ) : (
        <Tooltip title="Démarrer">
          <span>
            <IconButton onClick={() => onToggle(id)} sx={{ bgcolor: '#fff3e0', color: '#ff9800', borderRadius: '6px' }} size="small">
              <PlayArrowIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      )}

      {/* static buttons — just disabled when done */}
      <Tooltip title={'Modifier'}>
       
          <IconButton disabled={is_done} sx={{ bgcolor: '#fff9c1', color: '#ffcf33', borderRadius: '6px',  }} size="small">
            <EditIcon fontSize="small" />
          </IconButton>
       
      </Tooltip>

      <Tooltip title={'Supprimer'}>
       
          <IconButton disabled={is_done}  sx={{ bgcolor: '#ffe5e5', color: '#ff2d2d', borderRadius: '6px',  }} size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
       
      </Tooltip>

      <Tooltip title={'Détail'}>
       
          <IconButton onClick={isClicked} sx={{ bgcolor: '#d8f4ff', color: '#4fd6ff', borderRadius: '6px',  }} size="small">
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
       
      </Tooltip>

    </Box>
  )
}

export default InterventionActions