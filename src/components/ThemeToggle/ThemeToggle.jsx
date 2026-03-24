import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react'


const ThemeToggle = () => {

const [isDark, setIsDark] = useState(false)


const toggleTheme = () => {
        setIsDark(prev => !prev);
    }
    return (
        <>
    <div>ThemeToggle</div>
    
      <button onClick={toggleTheme}>{isDark ? "Switch to light mode ":"Switch to Dark Mode"}</button>
  
  <Card  sx={{ minWidth: 275 ,bgcolor : isDark ?'black':'white'}}>
        <CardContent>
          
          <Typography  sx={{  color : isDark ?'white':'info.main', fontSize: 14 }}>
            Word of the Day
          </Typography>
          
        </CardContent>
      </Card>
  </>
  )
}

export default ThemeToggle