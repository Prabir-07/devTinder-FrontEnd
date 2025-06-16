import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import UserCard from './UserCard';
import axios from 'axios';

const Feed = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All Developers');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Remove the setTimeout - it's unnecessary and causes confusion
                const res = await axios.get("http://localhost:3000/feed", {withCredentials: true});
                console.log(res.data);
                setAllUsers(res.data);
            }
            catch (error) {
                console.error('Error fetching users:', error);
            }
            finally {
                // Always set loading to false whether success or error
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    const filterOptions = [
        'All Developers',
        'React',
        'JavaScript',
        'Node.js',
        'Python',
        'age 20-25',
        'age 30-35',
        'age 40-45',
        'Male',
        'Female',
        'Frontend Developers',
        'Backend Developers',
        'Full Stack Developers',
    ];

    const currentUser = allUsers[index];
    
    const handleLike = async () => {
        try {
            const res = await axios.post(`http://localhost:3000/request/send/interested/${currentUser._id}`, {}, {withCredentials: true});
            console.log('Liked user:', currentUser.firstName);
            if(index < allUsers.length - 1) {
                setIndex(index + 1);
            }
        } catch (error) {
            console.error('Error liking user:', error);
        }
    }

    const handlePass = async () => {
        try {
            const res = await axios.post(`http://localhost:3000/request/send/ignored/${currentUser._id}`, {}, {withCredentials: true});
            console.log('Passed user:', currentUser.firstName);
            if(index < allUsers.length - 1) {
                setIndex(index + 1);
            }
        } catch (error) {
            console.error('Error passing user:', error);
        }
    }

    const handleFilterSelect = (filter) => {
        setActiveFilter(filter);
        setFilterDropdownOpen(false);
        console.log('Selected filter:', filter);
    }

    // Show loading animation while fetching data
    if (loading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading your feeds...</p>
                </div>
            </div>
        );
    }

    // Show no users message only after loading is complete and no users found
    if (!loading && allUsers.length === 0) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-slate-400 text-xl">No users found in feed</div>
            </div>
        );
    }

    // Show "all profiles seen" message when user has gone through all profiles
    if (index >= allUsers.length) {
        return (
            <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
                <div className="text-white text-2xl mb-4">🎉 You've seen all profiles!</div>
                <button 
                    onClick={() => setIndex(0)}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg transition-colors font-medium"
                >
                    Start Over
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header with Filter */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-cyan-400 mb-2">Discover Developers</h1>
                        <p className="text-slate-400">Find your perfect coding partner</p>
                    </div>
                    
                    <div className="relative">
                        <button
                            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-600 transition-colors"
                        >
                            <Filter size={16} />
                            <span>{activeFilter}</span>
                            <ChevronDown size={16} className={`transition-transform ${filterDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {filterDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-slate-800 border border-slate-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                                {filterOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleFilterSelect(option)}
                                        className={`w-full text-left px-4 py-2 hover:bg-slate-700 transition-colors ${
                                            activeFilter === option ? 'bg-slate-700 text-cyan-400' : 'text-slate-300'
                                        }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Feed Counter */}
                <div className="text-center mb-6">
                    <div className="text-slate-400">
                        Profile {index + 1} of {allUsers.length}
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2 max-w-md mx-auto">
                        <div 
                            className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((index + 1) / allUsers.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* User Card */}
                <div className="flex justify-center">
                    <UserCard 
                        user={currentUser}
                        onLike={handleLike}
                        onPass={handlePass}
                    />
                </div>
            </div>
        </div>
    );
}

export default Feed;