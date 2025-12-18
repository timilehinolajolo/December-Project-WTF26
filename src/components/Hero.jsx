import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative bg-[linear-gradient(to_right,#F4E9E7,#DDF0EC)] px-4 md:px-12 py-16 lg:py-24 overflow-hidden">
        
      {/* Background Decorative Blur */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-pink-100 rounded-full blur-3xl -z-10 opacity-50"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <span className="inline-block text-[#00cbb8] px-4 py-1 rounded-full text-sm font-semibold tracking-wide bg-white shadow-sm">
            Learn & Get Certified
          </span>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1b1f4e] leading-tight">
            Free Online Courses <br />
            With Certificates & <br />
            Diplomas
          </h1>
          
          <p className="text-gray-500 text-lg max-w-md">
            25 Million Learners. 15 Years. 100% Free.
          </p>

          <div className="bg-white p-2 rounded-full shadow-lg max-w-md flex items-center mt-8">
            <input 
              type="text" 
              placeholder="What do you want to learn today?" 
              className="flex-1 px-4 py-2 outline-none text-gray-600 bg-transparent"
            />
            <button className="bg-[#00cbb8] p-3 rounded-full text-white hover:bg-[#00b0a0] transition">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right Images Area */}
        <div className="relative h-[500px] w-full hidden lg:block">
            
            {/* Floating 'Student' Badge */}
            <div className="absolute top-10 z-20 left-32 bg-white p-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce-slow">
               <div>
                 <p className="text-sm font-bold text-[#1b1f4e]">2k+</p>
                 <p className="text-xs text-gray-500">Active Students</p>
               </div>
               <div className="flex -space-x-2">
                   {/* User Avatars */}
                   <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-8 h-8 rounded-full border-2 border-white"/>
                   <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-8 h-8 rounded-full border-2 border-white"/>
                   <img src="https://i.pravatar.cc/100?img=8" alt="User" className="w-8 h-8 rounded-full border-2 border-white"/>
               </div>
            </div>

            {/* Left Image (Female Student) */}
            <div className="absolute left-0 bottom-0 w-56 h-96 bg-[#b1aaff] rounded-full overflow-hidden shadow-xl z-10 transform translate-y-4 border-4 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Happy Female Student" 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Right Image (Male Student) */}
            <div className="absolute right-12 top-0 w-64 h-[450px] bg-[#2d5da1] rounded-full overflow-hidden shadow-xl z-0 border-4 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                 alt="Male Student" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            {/* Floating 'Success' Badge */}
            <div className="absolute bottom-20 right-[-20px] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-30">
               <div className="bg-green-100 p-2 rounded-full">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
               </div>
               <div>
                  <p className="text-sm font-bold text-slate-900">5.8k</p>
                  <p className="text-[10px] text-slate-500">Success Stories</p>
               </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-4 left-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/2 right-0 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;