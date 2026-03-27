import { createBrowserRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import UserListPage from '../pages/UserList/UserListPage'
import UserDetailPage from '../pages/UserDetail/UserDetailPage'
import AppLayout from '../components/Layout/AppLayout'
import StepWizard from '../components/StepWizard/StepWizard'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import CreateUserPage from '../components/CreateUser/CreateUserPage'
const router = createBrowserRouter([

  // Public routes — no layout
  { path: '/', element: <HomePage /> },

  { path: '/login', element: <LoginPage/> },
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
      { path: '/loginform', element: <LoginForm/> },
      { path: '/createuser', element: <CreateUserPage/> },
    ]
  }]
}
  

])

export default router