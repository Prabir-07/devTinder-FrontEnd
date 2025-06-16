import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice'; 

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || '',
    about: user?.about || '',
    skills: user?.skills?.join(', ') || '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                    ...formData,
                // Fix skills array conversion
                skills: formData.skills ? formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill) : []
            };

        console.log("Sending payload:", payload); // Debug log

        const res = await axios.put(
        'http://localhost:3000/profile/edit',
        payload,
        {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json'
            }
        }
    );


      const updatedUser = res.data;

      dispatch(setUser(updatedUser));

      localStorage.setItem('user', JSON.stringify(updatedUser));

      console.log('User updated:', updatedUser);

      alert('Profile updated successfully!');
      navigate('/profile');
    } catch (err) {
        console.error('Full error:', err.response?.data || err.message);
        alert(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 w-full max-w-2xl space-y-6 text-white"
      >
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
          Edit Your Profile
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Skills (comma separated)</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
