import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../components/Layout/AppLayout'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import StepWizard from '../components/StepWizard/StepWizard'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import HomePage from '../pages/Home/HomePage'
import LoginPage from '../pages/Login/LoginPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'

/**
 * Central route configuration — Day 3 Task 1: read this file top to bottom before changing anything.
 *
 * Day 3 Tasks 2–4: add UserListPage and UserDetailPage, then register (above the `*` route):
 *   { path: '/users', element: <UserListPage /> }
 *   { path: '/users/:id', element: <UserDetailPage /> }
 * inside the AppLayout `children` array — if you add them after `path: '*'`, they will never match.
 */
export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/wizard', element: <StepWizard /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])
