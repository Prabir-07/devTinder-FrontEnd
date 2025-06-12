import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from './redux/userSlice'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const performLogout = async () => {
      try {
        await axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
        dispatch(clearUser())
        localStorage.removeItem('user')
        alert('Logged out successfully!')
        navigate('/login')
      } catch (error) {
        console.error('Logout failed:', error)
        alert('Logout failed. Please try again.')
      }
    }

    performLogout()
  }, [dispatch, navigate])

  return (
    <div>Logging out</div>
  )
}

export default Logout
