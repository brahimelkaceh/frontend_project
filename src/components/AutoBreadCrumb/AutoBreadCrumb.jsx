// AutoBreadcrumb.jsx
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const navGroups = [
  { label: 'Dashboard',       to: '/dashboard' },
  { label: 'Employees',       to: '/team-directory' },
  { label: 'Add Employee',    to: '/team-directory/create' },
  { label: 'Departments',     to: '/departments' },
  { label: 'Add Department',  to: '/departments/create' },
  { label: 'Locations',       to: '/locations' },
  { label: 'Add Location',    to: '/locations/create' },
];

export default function AutoBreadcrumb() {
  const { pathname } = useLocation();

  // Build crumbs: match every prefix of the current path
  const segments = pathname.split('/').filter(Boolean);
  const homeCrumb = { label: '', path: '/' };
  const crumbs = segments.map((_, i) => {
    const path = '/' + segments.slice(0, i + 1).join('/');
    const match = navGroups.find(n => n.to === path);
    return { label: match?.label ?? path, path };
  });

 // After
const allCrumbs = [homeCrumb, ...crumbs];
if (crumbs.length === 0) return null;
return (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
    {allCrumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <Box key={crumb.path} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {i > 0 && (
              <NavigateNextIcon sx={{ fontSize: 16, color: 'text.disabled' }} />
            )}
            {isLast ? (
              <Typography fontSize={13} fontWeight={500} color="text.primary">
                {crumb.label}
              </Typography>
            ) : (
              <Typography
                component={Link}
                to={crumb.path}
                fontSize={13}
                color="text.secondary"
                sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                {crumb.label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}