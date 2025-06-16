import React from 'react';

const RequestCard = ({ user, onAccept, onReject }) => {

    const {firstName, lastName, emailId, skills, age, about } = user.senderId;

    return (
        <div className="bg-gradient-to-r from-slate-800 to-slate-750 rounded-2xl p-6 shadow-xl border border-slate-600/50 w-full hover:shadow-2xl hover:border-cyan-500/30 transition-all duration-300 group">
        <div className="flex items-center gap-6">
            {/* Profile Picture with Glow Effect */}
            <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-1 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-700">
                <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt={firstName + " " + lastName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                </div>
            </div>
            </div>

            {/* User Details with Enhanced Typography */}
            <div className="flex-1 min-w-0">
            <div className="mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent truncate mb-1">
                {firstName + " " + lastName}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <p className="text-slate-400 text-sm truncate">{emailId}</p>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <p className="text-slate-300 text-sm font-medium">{age} years old</p>
                </div>
            </div>

            {/* Enhanced Skills Section */}
            {skills && skills.length > 0 && (
                <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                    <span className="text-cyan-400 text-sm font-semibold">Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 3).map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 text-xs font-medium rounded-full border border-slate-500/50 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        {skill}
                    </span>
                    ))}
                    {skills.length > 3 && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
                        +{skills.length - 3} more
                    </span>
                    )}
                </div>
                </div>
            )}

            {/* About Section */}
            {about && (
                <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 italic">
                    "{about}"
                </p>
                </div>
            )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 ml-6">
            <button
                onClick={() => onAccept?.(user)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Accept
            </button>
            <button
                onClick={() => onReject?.(user)}
                className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-red-500/25 hover:scale-105 transform"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Reject
            </button>
            </div>
        </div>
        </div>
    );
};

export default RequestCard;