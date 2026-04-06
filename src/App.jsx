import { RouterProvider } from 'react-router-dom'
import router from './router/index'
import AuthProvider from './context/AuthProvider'
export default function App() {
  
  return <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
}