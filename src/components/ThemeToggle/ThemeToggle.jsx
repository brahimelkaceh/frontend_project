import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setTheme } from '../../store/uiSlice'


const ThemeToggle = () => {

const theme = useAppSelector((state) => state.ui.theme)
const dispatch = useAppDispatch()
const isDark = theme === 'dark'


    return (
        <>
    <div>ThemeToggle</div>
    
    <Button
  onClick={() => dispatch(setTheme(isDark ? 'light' : 'dark'))}
>
  {isDark ? 'Switch to Light' : 'Switch to Dark'}
</Button>
  
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