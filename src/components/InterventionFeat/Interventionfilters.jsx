// InterventionFilters.jsx
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart'
import TabsFilter from '../TabsFilter/TabsFilter'
import FilterBar from '../FilterBar/FilterBar'
import HouseSidingIcon from '@mui/icons-material/HouseSiding'
import InventoryIcon from '@mui/icons-material/Inventory'
import { tabs, tabSec } from '../../data/interventions'

const InterventionFilters = ({
  lot,               // current lot value
  site,              // current site value
  activeTab,         // which main tab is active
  activeTabSec,      // which secondary tab is active
  isPreventif,       // should we show secondary tabs?
  onLotChange,       // tell page lot changed
  onSiteChange,      // tell page site changed
  onMainChange,      // tell page main tab changed
  onSecChange,       // tell page secondary tab changed
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

      {/* lot + site inputs */}
      <Box sx={{ display: 'flex', bgcolor: 'white', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', border: '1px solid #45b1ff', borderRadius: '10px' }}>
        <FilterBar value={lot}  onChange={onLotChange}  icon={<HouseSidingIcon />} label="Lot" />
        <FilterBar value={site} onChange={onSiteChange} icon={<InventoryIcon />}   label="Site" />
      </Box>

      {/* main tabs */}
      <Box sx={{ height: '45px', display: 'flex', bgcolor: 'white', p: 1, justifyContent: 'space-between', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
        <TabsFilter tabs={tabs} value={activeTab} onChange={onMainChange} />
        <Button variant="contained" endIcon={<AddIcon />}>Ajouter</Button>
      </Box>

      {/* secondary tabs — only when preventif */}
      {isPreventif && (
        <Box sx={{ height: '45px', display: 'flex', bgcolor: 'white', p: 1, justifyContent: 'space-between', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)', borderRadius: '10px' }}>
          <TabsFilter tabs={tabSec} value={activeTabSec} onChange={onSecChange} />
          <Button sx={{ border: 1 }}><StackedLineChartIcon /></Button>
        </Box>
      )}

    </Box>
  )
}

export default InterventionFilters