import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsFilter({ tabs = [], onChange, defaultId }) {
  const [value, setValue] = React.useState(defaultId ?? tabs[0]?.id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange?.(newValue); 
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      {tabs.map((tab) => (
        <Tab key={tab.id} label={tab.label} value={tab.id} />
      ))}
    </Tabs>
  );
}