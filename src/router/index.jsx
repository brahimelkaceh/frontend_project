import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'
//import UserListPage from '../pages/UserList/UserListPage'
//import UserDetailPage from '../pages/UserDetail/UserDetailPage'
import AppLayout from '../components/Layout/AppLayout'
import StepWizard from '../components/StepWizard/StepWizard'
import ProtectedRoute from '../components/auth/ProtectedRoute'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'
import EmployeeListPage from '../pages/EmployeeListPage/EmployeeListPage'
//import EmployeeDetailPage from '../pages/EmployeeDetailPage/EmployeeDetailPage'
//import EmployeeForm from '../components/EmployeeForm/EmployeeForm'
import EmployeeDetailPageLS from '../pages/EmployeeDetailPage/EmployeeDetailPageLS'
import EmployeeListPageLS from '../pages/EmployeeListPage/EmployeeListPageLS'
import EmployeeCreatePage from '../pages/EmployeeCrud/EmployeeCreatePage'
import EmployeeEditPage from '../pages/EmployeeCrud/EmployeeEditPage'
import DepartmentCreate from '../pages/DepartmentsCrud/DepartmentCreate'
import DepartmentsListPage from '../pages/Departments/DepartmentList'
import DepartmentEdit from '../pages/DepartmentsCrud/DepratmentsEdit'
import Loactions from '../pages/Locations/Loactions'
import LocationCrud from '../pages/LocationCrud/LocationCrud'
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
         { path: '/users', element: <EmployeeListPageLS /> },
         { path: '/users/:id', element: <EmployeeListPageLS/> },
         { path: '/themetoogle', element: <ThemeToggle/> },
       //{ path: '/team-directory', element: <EmployeeListPage/> },
      // { path: '/team-directory/:id' , element: <EmployeeDetailPage/> },
         { path: '/team-directory/:id' , element: <EmployeeDetailPageLS/> },
         { path: '/team-directory/create' , element: <EmployeeCreatePage/> },
         { path: '/team-directory/edit/:id' , element: <EmployeeEditPage/> },
         { path: '/team-directory' , element: <EmployeeListPageLS/> },
         { path: '/departments' , element: <DepartmentsListPage/> },
         { path: '/departments/create' , element: <DepartmentCreate/> },   
         { path: '/departments/edit/:id' , element: <DepartmentEdit/> },
         { path: '/locations' , element: <Loactions/> },   
         { path: '/locations/create' , element: <LocationCrud/> },
        ]
  }]
}
  

])

export default router