import React, { useState, useEffect } from 'react';
import { Users, Mail, Calendar, Code, Heart, MessageCircle } from 'lucide-react';
import axios from 'axios';


const MyConnections = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

        const fetchConnections = async () => {
            try {
                const res = await axios.get("http://localhost:3000/user/connections", {withCredentials : true});
                setConnections(res.data.connections);
                console.log(res.data.connections);
            } catch (error) {
                console.log("Error fetching connections: ", error);
            }
        }
        
        fetchConnections();
        setLoading(false);

    }, 1000);
  }, []);

  const handleMessage = (connection) => {
    console.log('Message:', connection.firstName);
    // Implement message functionality
  };

  const handleViewProfile = (connection) => {
    console.log('View Profile:', connection.firstName);
    // Implement view profile functionality
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your connections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2 flex items-center justify-center gap-3">
            <Users className="h-8 w-8" />
            My Connections
          </h1>
          <p className="text-gray-400">Your coding partners and professional network</p>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full">
            <Heart className="h-4 w-4 text-red-400" />
            <span className="text-gray-300">{connections.length} Connections</span>
          </div>
        </div>

        {/* Connections Grid */}
        {connections.length === 0 ? (
          <div className="text-center py-16">
            <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No connections yet</h3>
            <p className="text-gray-500">Start swiping to find your perfect coding partners!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {connections.map((connection) => (
              <div
                key={connection._id}
                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Profile Image and Basic Info */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 lg:w-80">
                    <div className="relative">
                      <img
                        src={connection.photoUrl}
                        alt={`${connection.firstName} ${connection.lastName}`}
                        className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-800"></div>
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-cyan-400">
                        {connection.firstName} {connection.lastName}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{connection.emailId}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-cyan-400" />
                          <span>{connection.age} years</span>
                        </div>
                        {connection.gender && (
                          <div className="bg-slate-700 px-2 py-1 rounded-full">
                            {connection.gender}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Details and Skills */}
                  <div className="flex-1 space-y-4">
                    {/* About */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-cyan-400" />
                        About
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {connection.about || 'No description provided'}
                      </p>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-cyan-400" />
                        Technical Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {connection.skills && connection.skills.length > 0 ? (
                          connection.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-slate-600"
                            >
                              {skill}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500 text-sm">No skills listed</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row lg:flex-col gap-3 lg:w-32">
                    <button
                      onClick={() => handleMessage(connection)}
                      className="flex-1 lg:flex-none bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="hidden lg:inline">Message</span>
                    </button>
                    <button
                      onClick={() => handleViewProfile(connection)}
                      className="flex-1 lg:flex-none bg-slate-700 hover:bg-slate-600 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyConnections;