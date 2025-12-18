import React from 'react';

const About = () => {
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
export default About;