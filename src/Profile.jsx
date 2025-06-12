import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Camera, Edit3, Calendar, Mail, User, Code, Heart } from 'lucide-react';
import { setUser } from './redux/userSlice';
import { useNavigate } from 'react-router-dom';



const Profile = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.user);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (!profileData && savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    }
  });
  
  if (!profileData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-white text-lg">
        Loading profile...
      </div>
    );
  }

  const handlePhotoUpload = () => {
    // Future implementation for photo upload
    console.log("Photo upload functionality to be implemented");
  };

  const handleEditProfile = () => {
    // Future implementation for edit profile
    navigate("/edit-profile");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 flex items-center justify-center overflow-x-hidden">
      <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row items-start flex-wrap gap-6 sm:gap-8 mb-8 w-full">
            
            {/* Profile Photo Section */}
            <div className="relative group self-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden transition-all duration-300">
                <img
                  // src = {profileData.photoUrl}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISuukVSb_iHDfPAaDKboFWXZVloJW9XXiwGYFab-QwlAYQ3zFsx4fToY9ijcVNU5ieKk&usqp=CAU"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <button
                onClick={handlePhotoUpload}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 group-hover:opacity-100 opacity-75"
              >
                <Camera size={20} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-5 sm:space-y-6 w-full">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-1 sm:mb-2 py-2">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-300 text-base sm:text-lg italic">{profileData.about}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <Calendar className="text-gray-300 mx-auto mb-2" size={20} />
                  <div className="text-2xl font-bold text-white">{profileData.age}</div>
                  <div className="text-xs text-gray-400">Years Old</div>
                </div>
                <div className="bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <Code className="text-gray-300 mx-auto mb-2" size={20} />
                  <div className="text-2xl font-bold text-white">{profileData.skills.length}</div>
                  <div className="text-xs text-gray-400">Skills</div>
                </div>
                <div className="bg-gray-700/50 border border-gray-600/30 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                  <User className="text-gray-300 mx-auto mb-2" size={20} />
                  <div className="text-2xl font-bold text-white capitalize">{profileData.gender}</div>
                  <div className="text-xs text-gray-400">Gender</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-gray-300 mt-2">
                <Mail className="text-gray-300" size={18} />
                <span className="text-sm">{profileData.emailId}</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-3">
              <Code className="text-gray-300" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {profileData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-1 sm:px-5 sm:py-2 rounded-full bg-gray-700 border border-gray-600 text-white text-sm sm:text-base font-medium hover:bg-gray-600 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center gap-3">
              <Heart className="text-gray-300" />
              About Me
            </h3>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 rounded-2xl p-4 sm:p-6 w-full overflow-x-auto">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {profileData.about} I love building innovative solutions and exploring new technologies. 
                My journey in software development has been driven by curiosity and the desire to create 
                meaningful applications that make a difference.
              </p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleEditProfile}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-semibold 
                hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg 
                hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/20"
            >
              <div className="flex items-center gap-3">
                <Edit3 size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Edit Profile</span>
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Profile;
