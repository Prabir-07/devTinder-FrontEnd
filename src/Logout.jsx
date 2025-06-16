import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser } from './redux/userSlice'
import { LogOut, CheckCircle, XCircle } from 'lucide-react'

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [status, setStatus] = useState('logging-out') // 'logging-out', 'success', 'error'
  const [message, setMessage] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        setStatus('logging-out')
        setMessage('Signing you out...')
        
        await axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
        dispatch(clearUser())
        localStorage.removeItem('user')
        
        setStatus('success')
        setMessage('Successfully signed out!')
        
        // Redirect after showing success message
        setTimeout(() => {
          navigate('/login')
        }, 2000)
        
      } catch (error) {
        console.error('Logout failed:', error)
        setStatus('error')
        setMessage('Logout failed. Please try again.')
        
        // Redirect to login even on error after some time
        setTimeout(() => {
          navigate('/login')
        }, 3000)
      }
    }

    performLogout()
  }, [dispatch, navigate])

  const getStatusIcon = () => {
    switch (status) {
      case 'logging-out':
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <LogOut className="w-8 h-8 text-white" />
          </div>
        )
      case 'success':
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        )
      case 'error':
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-8 h-8 text-white" />
          </div>
        )
      default:
        return null
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case 'logging-out':
        return 'text-cyan-400'
      case 'success':
        return 'text-green-400'
      case 'error':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] px-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        {getStatusIcon()}
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {status === 'logging-out' && 'Signing Out'}
          {status === 'success' && 'Goodbye!'}
          {status === 'error' && 'Oops!'}
        </h2>
        
        <p className={`text-lg mb-6 ${getStatusColor()}`}>
          {message}
        </p>
        
        {status === 'logging-out' && (
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
        
        {status === 'success' && (
          <div className="text-sm text-gray-400">
            Redirecting you to login page...
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-sm text-gray-400">
            You will be redirected shortly...
          </div>
        )}
      </div>
    </div>
  )
}

export default Logout;