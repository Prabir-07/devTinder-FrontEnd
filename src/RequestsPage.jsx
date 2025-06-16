
import React, { useEffect, useState } from 'react';
import RequestCard from './RequestCard';
import axios from 'axios';

const RequestsPage = () => {
  const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async() => {
            try {
                const response = await axios.get('http://localhost:3000/user/requests/received', { withCredentials: 'true' });
                setRequests(response.data.requests);
                console.log(response.data.requests);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        }

        fetchRequests();
    }, [])


    const handleAccept = async (user) => {
        try {
            const response = await axios.post(`http://localhost:3000/request/review/accepted/${user._id}`, {}, {withCredentials: 'true' });
            setRequests(prev => prev.filter(request => request._id !== user._id));
            console.log('Accepted request from:', user.firstName);
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };

    const handleReject = async (user) => {
        try {
            const response = await axios.post(`http://localhost:3000/request/review/rejected/${user._id}`, {withCredentials: 'true' });
            setRequests(prev => prev.filter(request => request.id !== user.id));
            console.log('Rejected request from:', user.name);
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-b border-slate-600/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Connection Requests
          </h1>
          <p className="text-slate-400 text-lg">
            Review and manage your incoming connection requests
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {requests.length > 0 ? (
          <div className="space-y-6">
            {requests.map((user, index) => (
              <div key={index} className="animate-fadeIn">
                <RequestCard
                  user={user}
                  onAccept={handleAccept}
                  onReject={handleReject}
                />
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-12 h-12 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-2">No Pending Requests</h3>
            <p className="text-slate-400 text-lg">
              You're all caught up! No new connection requests to review.
            </p>
          </div>
        )}
      </div>

      {/* <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style> */}
    </div>
  );
};

export default RequestsPage;