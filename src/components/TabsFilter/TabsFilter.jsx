import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';






export default function TabsFilter({ tabs = [], value, onChange }) {

  const handleChange = (event, newValue) => {
    onChange?.(newValue)  // just tell the parent, nothing else
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      {tabs.map(tab => (
        <Tab key={tab.id} label={tab.label} value={tab.id} />
      ))}
    </Tabs>
  )
}