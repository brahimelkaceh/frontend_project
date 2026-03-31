import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import UserListPage from '../pages/UserList/UserListPage'
import UserDetailPage from '../pages/UserDetail/UserDetailPage'
import AppLayout from '../components/Layout/AppLayout'
import StepWizard from '../components/StepWizard/StepWizard'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import EmployeeListPage from '../pages/EmployeeListPage/EmployeeListPage'
import EmployeeDetailPage from '../pages/EmployeeDetailPage/EmployeeDetailPage'
const router = createBrowserRouter([

  // Public routes — no layout
  

  { path: '/', element: <LoginPage/> },
  // Pages that use the layout (navbar + sidebar)
  {
    element: <ProtectedRoute />,
    children: [
      {
    
    element: <AppLayout />,
    children: [
      { path: '/wizard', element: <StepWizard /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/users', element: <UserListPage /> },
      { path: '/users/:id', element: <UserDetailPage/> },
      { path: '/themetoogle', element: <ThemeToggle/> },
      { path: '/team-directory', element: <EmployeeListPage/> },
      { path: '/team-directory/:id' , element: <EmployeeDetailPage/> },
      
    ]
  }]
}
  

])

export default router