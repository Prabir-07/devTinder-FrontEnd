import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/userSlice';
import { Camera, User, Upload, X } from 'lucide-react';

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    age: user?.age || '',
    about: user?.about || '',
    skills: user?.skills?.join(', ') || '',
  });

  const [profilePhoto, setProfilePhoto] = useState(user?.photoUrl || null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePhotoUpload = async () => {
    const file = fileInputRef.current?.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const photoFormData = new FormData();
      photoFormData.append('photoUrl', file);

      const photoRes = await axios.post(
        'http://localhost:3000/profile/upload-photo',
        photoFormData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      // Update local state
      setProfilePhoto(photoRes.data.photoUrl);
      setPreviewImage(null);

      // Update Redux store with new photo URL
      const updatedUser = {
        ...user,
        photoUrl: photoRes.data.photoUrl
      };
      dispatch(setUser(updatedUser));

      // Update localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Profile photo uploaded successfully!');
    } catch (err) {
      console.error('Photo upload error:', err);
      alert('Failed to upload photo. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelPreview = () => {
    setPreviewImage(null);
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        skills: formData.skills ? formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill) : []
      };

      console.log("Sending payload:", payload);

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
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
          Edit Your Profile
        </h2>

        {/* Profile Photo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full border-3 border-cyan-400/50 p-1 bg-gray-800/50">
              {profilePhoto || previewImage ? (
                <img
                  src={previewImage || profilePhoto}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-700/50 flex items-center justify-center">
                  <User size={48} className="text-gray-400" />
                </div>
              )}
            </div>
            
            {/* Camera Button */}
            <button
              type="button"
              onClick={handleCameraClick}
              disabled={isUploading}
              className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 disabled:scale-100"
            >
              <Camera size={16} />
            </button>
          </div>

          {/* Photo Upload Actions */}
          {previewImage && (
            <div className="flex gap-3 mb-4">
              <button
                type="button"
                onClick={handlePhotoUpload}
                disabled={isUploading}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 disabled:from-gray-600 disabled:to-gray-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300"
              >
                <Upload size={16} />
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>
              
              <button
                type="button"
                onClick={handleCancelPreview}
                disabled={isUploading}
                className="flex items-center gap-2 bg-gray-600/80 hover:bg-gray-500/80 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300"
              >
                <X size={16} />
                Cancel
              </button>
            </div>
          )}

          <p className="text-gray-400 text-sm text-center">
            Click the camera icon to upload your profile photo
          </p>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
            placeholder="React, Node.js, MongoDB, etc."
          />
          <p className="text-gray-400 text-sm mt-1">Separate skills with commas</p>
        </div>

        <div>
          <label className="block text-gray-300 mb-2 font-medium">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-gray-800/60 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
            placeholder="Tell others about yourself, your coding journey, interests..."
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-2xl shadow-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
          >
            Save Changes
          </button>
        </div>

        {/* Photo Upload Guidelines */}
        <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
          <h4 className="text-cyan-400 font-medium mb-2 text-sm">📸 Photo Guidelines</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-400">
            <span>• Max size: 5MB</span>
            <span>• JPG, PNG, GIF</span>
            <span>• Square format preferred</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;