
// InterventionPage.jsx
import { useState } from 'react'
import { Box } from '@mui/material'
import { tabs, tabSec } from '../../data/interventions'
import data from '../../data/interventions-mock-data.json'
import InterventionFilters from '../../components/InterventionFeat/Interventionfilters'
import InterventionTable from '../../components/InterventionFeat/InterventionTable'
import InterventionDetail from '../../components/InterventionFeat/InterventionDetail'
const secKeyMap = {
  occasionnelle: 'is_occasional',
  reguliere:     'is_regular',
  durable:       'is_durable',
}

const InterventionPage = () => {

  // ─── state ───────────────────────────────────────────
  const [lot, setLot]               = useState('')
  const [site, setSite]             = useState('')
  const [activeTab, setActiveTab]   = useState(tabs[0].id)
  const [activeTabSec, setActiveTabSec] = useState(tabSec[0].id)
  const [startedStates, setStartedStates] = useState(
    () => Object.fromEntries(data.map(i => [i.id, i.is_started]))
  )

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const handleViewDetail = (id) => {
    setSelectedId(id)
    setDrawerOpen(true)
  }





  // ─── logic ───────────────────────────────────────────
  const isPreventif = activeTab === 'supplementations_preventives'

  const mainFiltered = data.filter(i => i.is_preventif === isPreventif)

  const filteredData = isPreventif
    ? mainFiltered.filter(i => i[secKeyMap[activeTabSec]])
    : mainFiltered

  // ─── handlers ────────────────────────────────────────
  const handleMainChange = (id) => {
    setActiveTab(id)
    setActiveTabSec(tabSec[0].id) // reset secondary tab
  }

  const handleSecChange = (id) => {
    setActiveTabSec(id)
  }

  const handleToggleStarted = (id) => {
    setStartedStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // ─── render ───────────────────────────────────────────
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
 <InterventionDetail
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        id={selectedId}
      />
      <InterventionFilters
        lot={lot}
        site={site}
        activeTab={activeTab}
        activeTabSec={activeTabSec}
        isPreventif={isPreventif}
        onLotChange={(e) => setLot(e.target.value)}
        onSiteChange={(e) => setSite(e.target.value)}
        onMainChange={handleMainChange}
        onSecChange={handleSecChange}
      />

      <InterventionTable
        rows={filteredData}
        startedStates={startedStates}
        onToggle={handleToggleStarted}
          onViewDetail={handleViewDetail}
      />
    </Box>
  )
}

export default InterventionPage