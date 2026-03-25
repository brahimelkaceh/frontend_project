import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
import UserListPage from '../pages/UserList/UserListPage'
import UserDetailPage from '../pages/UserDetail/UserDetailPage'

import AppLayout from '../components/Layout/AppLayout'

const router = createBrowserRouter([

  // Public routes — no layout
  { path: '/', element: <HomePage /> },

  
  // Pages that use the layout (navbar + sidebar)
  {
    element: <AppLayout />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/users', element: <UserListPage /> },
      { path: '/users/:id', element: <UserDetailPage/> },
    ]
  }

])

export default router