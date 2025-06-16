import React from 'react';

const UserCard = ({ user, onLike, onPass }) => {
  const { firstName, lastName, emailId, skills, age, gender, about } = user;

  return (
    <div className="bg-slate-800 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 p-6 m-4 max-w-sm border border-slate-700 hover:border-cyan-400/50 transform hover:-translate-y-2 hover:scale-105">
      {/* Header Section */}
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg border border-slate-600">
            {firstName?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-4 h-4 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-2xl font-bold text-cyan-400 mb-1">{firstName + " " + lastName || 'Unknown User'}</h3>
          <p className="text-slate-400 text-sm">{emailId || 'No email provided'}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600">
          <div className="text-lg font-bold text-white">{age || 'N/A'}</div>
          <div className="text-xs text-slate-400">Years Old</div>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600">
          <div className="text-lg font-bold text-white">{skills?.length || 0}</div>
          <div className="text-xs text-slate-400">Skills</div>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600">
          <div className="text-lg font-bold text-cyan-400">{gender || 'N/A'}</div>
          <div className="text-xs text-slate-400">Gender</div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <svg className="w-4 h-4 text-slate-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
          </svg>
          <h4 className="text-sm font-semibold text-slate-300">Technical Skills</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills && skills.length > 0 ? (
            skills.slice(0, 6).map((skill, index) => (
              <span
                key={index}
                className="bg-slate-700 text-slate-300 px-3 py-1 rounded-lg text-xs font-medium border border-slate-600 hover:bg-slate-600 hover:border-cyan-400/50 transition-all duration-200"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-slate-500 text-xs italic">No skills listed</span>
          )}
          {skills && skills.length > 6 && (
            <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium border border-cyan-400/30">
              +{skills.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <div className="flex items-center mb-3">
          <svg className="w-4 h-4 text-slate-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
          </svg>
          <h4 className="text-sm font-semibold text-slate-300">About Me</h4>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          {about || 'No description available'}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={onPass}
          className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
        >
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            Pass
          </span>
        </button>
        <button 
          onClick={onLike}
          className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-slate-900 py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-cyan-400/25 transform hover:scale-105"
        >
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            Like
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;