import React from 'react';
import {
  Box, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Typography, Avatar,
  Divider
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DomainIcon from '@mui/icons-material/Domain';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link, useLocation } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ScienceIcon from '@mui/icons-material/Science';
const SIDEBAR_WIDTH = 220;

const navGroups = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard', to: '/dashboard', icon: <DashboardOutlinedIcon fontSize="small" /> },
       { label: 'Employees', to: '/team-directory', icon: <PeopleOutlinedIcon fontSize="small" /> },
       { label: 'Add Employee', to: '/team-directory/create', icon: <PersonAddAltIcon fontSize="small" /> },

        { label: 'Departments', to: '/departments', icon: <DomainIcon fontSize="small" /> },
        { label: 'Add Departments', to: '/departments/create', icon: <DomainAddIcon fontSize="small" /> },
 
        { label: 'Locations', to: '/locations', icon: <LocationOnIcon fontSize="small" /> },
        { label: 'Add Location', to: '/locations/create', icon: <AddLocationAltIcon fontSize="small" /> },
 { label: 'Intervention', to: '/intervention', icon: <ScienceIcon fontSize="small" /> },
     // { label: 'Theme Toggle', to: '/themetoogle', icon: <LightModeOutlinedIcon fontSize="small" /> },
    ],
  },
];

const SideBar = () => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Logo */}
      <Box sx={{ px: 2, py: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Box
            sx={{
              width: 32, height: 32, borderRadius: 1,
              bgcolor: 'primary.dark',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <DashboardOutlinedIcon sx={{ color: 'white', fontSize: 16 }} />
          </Box>
          <Typography fontWeight={500} fontSize={15}>MyApp</Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, px: 1, py: 1, overflowY: 'auto' }}>
        {navGroups.map((group, gi) => (
          <Box key={group.label} sx={{ mb: 1 }}>
            <Typography
              sx={{
                fontSize: 11, fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase', color: 'text.disabled',
                px: 1, py: 0.75,
              }}
            >
              {group.label}
            </Typography>
            <List disablePadding>
              {group.items.map(({ label, to, icon }) => {
                const active = location.pathname === to;
                return (
                  <ListItem key={to} disablePadding sx={{ mb: 0.25 }}>
                    <ListItemButton
                      component={Link}
                      to={to}
                      sx={{
                        borderRadius: 1.5,
                        py: 0.85,
                        px: 1.25,
                        color: active ? 'primary.dark' : 'text.secondary',
                        bgcolor: active ? 'primary.50' : 'transparent',
                        fontWeight: active ? 500 : 400,
                        '&:hover': {
                          bgcolor: active ? 'primary.50' : 'action.hover',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 30,
                          color: active ? 'primary.dark' : 'text.secondary',
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'inherit' }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            {gi < navGroups.length - 1 && <Divider sx={{ my: 0.5 }} />}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default SideBar;