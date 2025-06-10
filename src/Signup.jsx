import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        password: '',
        skills: '',
        gender: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const { skills, ...rest } = formData;
            const updatedData = {
                ...rest,
                skills: skills.split(',').map(skill => skill.trim()),
            };

            // eslint-disable-next-line no-unused-vars
            const res = await axios.post('http://localhost:3000/signup', updatedData, {withCredentials: true});

            console.log('Signup data:', updatedData);

        } catch (error) {
            console.error('Signup error:', error);
        }
    };


 return (
    <div className="flex justify-center items-center min-h-screen bg-base-100 text-white">
      <div className="bg-[#101115] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6">Signup</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Skills <span className="text-xs text-gray-400">(comma separated)</span></label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g. React, Node.js, MongoDB"
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-[#1f2025] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSignup}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
