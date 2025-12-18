import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
      <header className="relative bg-[linear-gradient(to_right,#F4E9E7,#DDF0EC)] px-4 md:px-12 py-16 lg:py-24 overflow-hidden">
        
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-pink-100 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          
          <div className="space-y-6 z-10">
            <span className="inline-block text-[#00cbb8] px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
              Learn & Get Certified
            </span>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#1b1f4e] leading-tight">
              Free Online Courses <br />
              With Certificates & <br />
              Diplomas
            </h1>
            
            <p className="text-gray-500 text-lg max-w-md">
              25 Million Learners. 15 Years. 100%
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

          <div className="relative h-[500px] w-full hidden lg:block">
                <div className="absolute top-10 z-10 left-32 bg-white p-3 rounded-5xl shadow-lg flex items-center gap-3 z-2 animate-bounce-slow">
                  <div>
                    <p className="text-sm font-bold text-[#1b1f4e]">2k+</p>
                    <p className="text-xs text-gray-500">Student</p>
                  </div>
                  <div className="flex -space-x-2">
                      <img src='/src/images/home/users-icon.png' alt="Users"/>
                  </div>
                </div>
            <div className="absolute left-0 bottom-0 w-56 h-100 bg-[#b1aaff] rounded-full overflow-hidden shadow-xl z-10 transform translate-y-4">
               <img 
                 src="/src/images/home/female-student.png" 
                 alt="Student" 
                 className="w-full h-full object-cover"
               />

            </div>

            <div className="absolute right-12 top-0 w-64 h-126 bg-[#2d5da1] rounded-full overflow-hidden shadow-xl z-0">
               <img 
                 src="/src/images/home/male-student.png"
                 alt="Student" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            <div className="absolute bottom-20 right-[-20px] bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-3 z-30">
              
               <div>
                  <p className="text-sm font-bold text-slate-900">5.8k</p>
                  <p className="text-[10px] text-slate-500">Success Courses</p>
               </div>
            </div>

            <div className="absolute top-4 left-20 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-1/2 right-0 w-4 h-4 bg-teal-400 rounded-full"></div>
          </div>
        </div>
      </header>
  );
};
export default Hero;