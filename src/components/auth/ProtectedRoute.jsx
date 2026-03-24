import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/**
 * Auth guard for protected areas of the app.
 * Renders nested routes (via <Outlet />) only when the user is authenticated.
 * Day 3 Task 1: interns should trace how this wraps layout + pages in the router.
 */
export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
