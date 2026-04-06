import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import EmployeeForm from '../../components/EmployeeForm/EmployeeForm'

const EmployeeEditPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // 🔐 check token
    const token = localStorage.getItem("token")
    if (!token) {
      navigate("/login")
      return
    }

    // 📦 get users
    const users = JSON.parse(localStorage.getItem("users")) || []

    // 🔍 find user
    const foundUser = users.find(u => u.id === Number(id))

    if (!foundUser) {
      navigate("/users")
      return
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(foundUser)
  }, [id, navigate])

  if (!user) return <p>Loading...</p>

  return <EmployeeForm initialData={user} />
}

export default EmployeeEditPage