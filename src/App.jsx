import React from 'react';
import { 
  Clock, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, 
  Search, User, Menu, MoveRight 
} from 'lucide-react';


// ABOUT SECTION
const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE*/}
          <div className="relative">

            <div className="absolute -top-11 -left-4 z-20">
              <img src="/src/images/home/bg-design-green.png"/>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Lady with book Image */}
              <div className="relative rounded-lg overflow-hidden row-span-2 h-full">
                <img 
                  src="/src/images/home/female-student-2.png" 
                  alt="Student holding books" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Experience Image*/}
              <div className="flex flex-col items-center justify-center text-center z-10 relative">
                <img src="/src/images/home/xperience-count.jpg"/>
              </div>

              {/* Ladies Image*/}
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="/src/images/home/two-students.png" 
                  alt="Students sitting together" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE*/}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <div className="w-5 h-5 border border-red-500 transform rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500"></div>
               </div>
               <span className="text-red-500 font-bold tracking-wider uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Benefit From Our Online Learning Expertise Earn <span className="text-red-500">Professional</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            {/* Mission & Vision*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-gray-800 uppercase text-sm mb-2">OUR MISSION:</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Suspendisse ultrices gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 uppercase text-sm mb-2">OUR VISSION:</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Suspendisse ultrices gravida dictum fusce placerat ultricies integer quis auctor elit sed vulputate mi sit.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="group bg-emerald-400 hover:bg-emerald-500 transition-colors text-white font-medium py-3 px-8 rounded-full inline-flex items-center gap-2 shadow-lg shadow-emerald-200">
              Admission Open
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
const EdunityLanding = () => {
  return (
    <div className="font-sans text-gray-800 ">
      
      <div className="bg-[#17254E] text-white text-xs py-3 px-3 md:px-12 hidden md:flex justify-between items-center">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Clock size={14} className="text-[#FE543D]" />
            Working : Monday - Friday 9 am - 5 pm
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-[#FE543D]" />
            Hudson, Wisconsin(WI), 54016
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-2 cursor-pointer hover:text-[#00cbb8] transition">
            <User size={14} className="text-[#FE543D]" />
            Login / Register
          </span>
          <div className="flex gap-3 border-l border-gray-600 pl-4">
            <Facebook size={14} className="cursor-pointer hover:text-[#00cbb8]" />
            <Twitter size={14} className="cursor-pointer hover:text-[#00cbb8]" />
            <Linkedin size={14} className="cursor-pointer hover:text-[#00cbb8]" />
            <Instagram size={14} className="cursor-pointer hover:text-[#00cbb8]" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-22" src="/src/images/home/edunity-logo.png" alt="Edunity Logo"/>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 font-medium text-[#1b1f4e]">
          <li className="text-[#00cbb8] cursor-pointer">Home</li>
          <li className="hover:text-[#00cbb8] cursor-pointer transition">About Us</li>
          <li className="hover:text-[#00cbb8] cursor-pointer transition">Courses</li>
          <li className="hover:text-[#00cbb8] cursor-pointer transition">Pages</li>
          <li className="hover:text-[#00cbb8] cursor-pointer transition">Blog</li>
          <li className="hover:text-[#00cbb8] cursor-pointer transition">Contact</li>
        </ul>

        {/* Search & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Search size={20} className="text-gray-500 cursor-pointer hover:text-[#00cbb8]" />
          <button className="bg-[#00cbb8] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#00b0a0] transition shadow-lg shadow-teal-200">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <Menu className="lg:hidden text-[#1b1f4e]" size={28} />
      </nav>

      {/*HERO SECTION */}
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
      
      {/*rendering AboutSection */}
      <AboutSection />
      
    </div>
  );
};

export default EdunityLanding;