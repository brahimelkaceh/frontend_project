import React from 'react'
import {Link } from 'react-router-dom'
const SideBar = () => {
  return (
      <aside style={{
          width: '200px',
          background: '#f4f4f5',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/users">Users</Link>
          <Link to="/themetoogle">ThemeToogle</Link>
          <Link to="/wizard">Step Wizard</Link>
        </aside>
  )
}

export default SideBar