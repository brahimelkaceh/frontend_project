import { useState } from 'react'
import FilterBar from '../../components/FilterBar/FilterBar'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import InventoryIcon from '@mui/icons-material/Inventory'
import { Box } from '@mui/system'
import TabsFilter from '../../components/TabsFilter/TabsFilter'
import AddIcon from '@mui/icons-material/Add'
import { Button,Typography,Tooltip,IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AppDataGrid from '../../components/DataGrid/DataGrid'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import ConfirmationDialog from '../../components/ConfirmationDialog/ConfirmationDialog'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { tabs, tabSec, interventions } from '../../data/interventions'

const InterventionPage = () => {
  const [lot, setLot] = useState('')
  const [site, setSite] = useState('')
    const [confirmOpen, setConfirmOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [activeTabSec, setActiveTabSec] = useState(tabSec[0].id)

  const handleFilterChange = (id) => {
    setActiveTab(id)
    console.log('Selected filter:', id)
  }

  const handleSecTabChange = (id) => {
    setActiveTabSec(id)
    console.log('🟧 Sub tab:', id)
  
  }
  



  const columns = [
    {
  field: 'date',
  headerName: 'DATE',
  flex: 2,
  width: '560',
  renderCell: (params) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          bgcolor: '#f0f0f0',
          borderRadius: '20px',
          px: 1.5,
          py: 0.4,

        }}
      >
        <Typography variant="caption" fontWeight={500} color="text.secondary">
          {params.row.dateStart}
        </Typography>
        <Typography variant="caption" color="text.disabled">→</Typography>
        <Typography variant="caption" fontWeight={500} color="text.secondary">
          {params.row.dateEnd}
        </Typography>
      </Box>


      <Box
        sx={{
        bgcolor: '#fff3e0',
          color: '#ff9800',
          borderRadius: '12px',
          px: 1.2,
          py: 0.3,
          fontWeight: 700,
          fontSize: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
      
          height:'20px'
        }}
      >
        {params.row.duration} jours
      </Box>

    </Box>
  ),
},
    { field: 'titre',     headerName: 'TITRE',      flex: 1 },
    { field: 'famille',   headerName: 'FAMILLE',    flex: 1 },
    { field: 'mode',      headerName: 'MODE D ADMINISTRATION',       flex: 1 },
    { field: 'dose',      headerName: 'DOSE',       width: 90 },
    {
      field: 'actions',
      headerName: 'ACTIONS',
      width: '180',
      sortable: false,
      renderCell: () => (
        <Box  sx={{display:"flex",alignContent:'center',alignItems:'center'}} gap={0.5}>
          <Tooltip title="View">
            <IconButton sx={{
        bgcolor: '#fff3e0',
        color: '#ff9800',
        borderRadius: '6px',
        '&:hover': { bgcolor: '#ffe0b2' },
      }} size="small">
              <PlayArrowIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit">
            <IconButton sx={{
        bgcolor: '#fff9c1',
        color: '#ffcf33',
        borderRadius: '6px',
        '&:hover': { bgcolor: '#ffecae' },
      }} size="small">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton sx={{
        bgcolor: '#ffe5e5',
        color: '#ff2d2d',
        borderRadius: '6px',
        '&:hover': { bgcolor: '#f8adad' },
      }} size="small" color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>

     <Tooltip title="Detail">
            <IconButton sx={{
        bgcolor: '#d8f4ff',
        color: '#4fd6ff',
        borderRadius: '6px',
        '&:hover': { bgcolor: '#ade7f8' },
      }} size="small" color="error">
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      

      <Box sx={{ display: 'flex', bgcolor: 'white', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', border: '1px solid #45b1ff', borderRadius: '10px' }}>
        <FilterBar value={lot} onChange={(e) => setLot(e.target.value)} icon={<HouseSidingIcon />} label="Lot" />
        <FilterBar value={site} onChange={(e) => setSite(e.target.value)} icon={<InventoryIcon />} label="Site" />
      </Box>

      <Box sx={{  height:'45px',m:0,display: 'flex', bgcolor: 'white', p:1,justifyContent: 'space-between', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
        <TabsFilter   value={activeTab}  defaultId="supplementations_preventives" tabs={tabs} onChange={handleFilterChange} />
        <Button variant="contained" endIcon={<AddIcon />}>Ajouter</Button>
      </Box>

      <Box sx={{ height:'45px',m:0,display: 'flex',justifyContent:'space-between', bgcolor: 'white', p: 1, boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
        <TabsFilter  value={activeTabSec}  tabs={tabSec} defaultId="occasionnelle" onChange={handleSecTabChange} />
           <Button sx={{border:1}}>
            <StackedLineChartIcon/>
            </Button>
      </Box>

      <Box>
    

    
        <AppDataGrid rows={interventions} columns={columns} isLoading={false} />

        <ConfirmationDialog
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
       
        />

        
      </Box>
    </Box>
  )
}

export default InterventionPage