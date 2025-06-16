import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Code, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="flex-grow bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Connect with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {" "}Passionate{" "}
              </span>
              Developers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build amazing projects together, grow your professional network, and find your perfect coding companion in the tech community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/signup" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Free
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/feed" 
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                Browse Developers
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-300 text-lg">Developers Connected</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1K+</div>
            <div className="text-gray-300 text-lg">Projects Launched</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
            <div className="text-gray-300 text-lg">Success Rate</div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          How It <span className="text-cyan-400">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Create Your Profile</h3>
            <p className="text-gray-300 text-lg">Showcase your skills, projects, and what you're looking for in a coding partner.</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Discover Developers</h3>
            <p className="text-gray-300 text-lg">Browse through profiles and find developers with complementary skills and interests.</p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Build Together</h3>
            <p className="text-gray-300 text-lg">Connect, collaborate, and create amazing projects that make an impact.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose <span className="text-cyan-400">DevTinder</span>?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
                  <p className="text-gray-300">Our algorithm matches you with developers based on skills, interests, and project goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Verified Profiles</h3>
                  <p className="text-gray-300">All developer profiles are verified to ensure authentic connections and collaborations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Project Management</h3>
                  <p className="text-gray-300">Built-in tools to help you manage projects and track collaboration progress.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
                  <p className="text-gray-300">Join a thriving community of passionate developers who love to build and share.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Sarah Chen</h3>
                  <p className="text-gray-400">Full-stack Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">"DevTinder helped me find the perfect co-founder for my startup. We've built something amazing together!"</p>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Coding Partner?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing projects together.
          </p>
          <Link 
            to="/signup" 
            className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;