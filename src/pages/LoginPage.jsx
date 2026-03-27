import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm/LoginForm'
export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleLogin() {
    login({ name: 'Demo User', email: 'demo@example.com' })
    navigate('/dashboard')
  }

  return (
    <div style={{ padding: '60px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Login</h1>
 <LoginForm/>
      <button onClick={handleLogin} style={{ padding: '10px 24px', marginTop: '16px' }}>
        Sign in
      </button>
    </div>
  )
}