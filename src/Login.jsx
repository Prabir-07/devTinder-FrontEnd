import React from 'react'
import {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const res = await axios.post('http://localhost:3000/login', {emailId, password}, {withCredentials : true});
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='flex justify-center my-6'>
        <div className="card card-dash items bg-base-300 w-96">
            <div className="card-body">
                <h2 className="card-title">Login</h2>
                <form className="space-y-4">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                        type="email" 
                        value={emailId} 
                        placeholder="Enter your email" 
                        className="input input-bordered" 
                        required 
                        onChange = {(e) => setEmailId(e.target.value)}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Enter your password" 
                        className="input input-bordered" 
                        required 
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div className="card-actions justify-center">
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;
