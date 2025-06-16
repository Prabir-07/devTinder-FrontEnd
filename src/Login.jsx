import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setUser } from './redux/userSlice';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!emailId || !password) {
            setError('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        setError('');
        
        try {
            const res = await axios.post('http://localhost:3000/login', {emailId, password}, {withCredentials : true});
            
            if(res.status == 200){
                dispatch(setUser(res.data));
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/feed');
            }
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }

  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-200px)] px-4 py-8'>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-md p-8">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LogIn className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-400">Sign in to your DevTinder account</p>
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-6">
                    <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
            )}

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="email" 
                            value={emailId} 
                            placeholder="Enter your email" 
                            className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200" 
                            required 
                            onChange = {(e) => setEmailId(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="Enter your password" 
                            className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200" 
                            required 
                            onChange = {(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                </div>

                <button 
                    type="button" 
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                        isLoading 
                            ? 'bg-gray-600 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                    }`}
                    onClick={handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Signing In...
                        </div>
                    ) : (
                        'Sign In'
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login;