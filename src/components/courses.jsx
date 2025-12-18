import React from 'react';
import { Star, BookOpen, Clock, Users, ShoppingCart, ArrowRight } from 'lucide-react';

// Sample Data with working Unsplash images
const courses = [
  {
    id: 1,
    category: 'Development',
    rating: 4.7,
    title: 'It Statistics Data Science And Business Analysis',
    lessons: 10,
    duration: '19h 30m',
    students: '20+',
    instructor: 'Angela',
    role: 'Development',
    price: 60,
    oldPrice: 120,
    imageSrc: 'https://images.unsplash.com/photo-1529429612779-c8e40df2f5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    instructorImg: 'https://i.pravatar.cc/150?u=1',
  },
  {
    id: 2,
    category: 'Design',
    rating: 4.5,
    title: 'Web Design & Mobile App Design Course',
    lessons: 12,
    duration: '14h 20m',
    students: '45+',
    instructor: 'John',
    role: 'Design',
    price: 50,
    oldPrice: 100,
    imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    instructorImg: 'https://i.pravatar.cc/150?u=5',
  },
  {
    id: 3,
    category: 'Marketing',
    rating: 4.8,
    title: 'Digital Marketing Masterclass 2024',
    lessons: 15,
    duration: '22h 15m',
    students: '80+',
    instructor: 'Sarah',
    role: 'Marketing',
    price: 75,
    oldPrice: 150,
    imageSrc: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    instructorImg: 'https://i.pravatar.cc/150?u=9',
  },
];

export const Courses = () => {
  return (
    <section className="relative w-full py-20 bg-gray-50 overflow-hidden">
      {/* Background Doodle Placeholder */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         {/* If you have a local image, uncomment below: */}
         {/* <img src="/src/images/doodle-bg.png" className="w-full h-full object-cover" /> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
              Top Popular Course
            </h4>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Check Out Educate Features <br /> Win Any Exam
            </h2>
          </div>
          
          <button className="flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300">
            Browse Edunity Courses
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col group"
            >
              
              <div className="relative mb-5">
                <div className="relative h-56 w-full rounded-2xl overflow-hidden">
                  <img 
                    src={course.imageSrc} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                
                <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wide">
                  {course.category}
                </span>
              </div>

              <div className="flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-slate-500 text-sm ml-1">({course.rating})</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                  {course.title}
                </h3>

                {/* Meta Data */}
                <div className="flex items-center justify-between text-slate-500 text-xs mb-5 font-medium">
                  <div className="flex items-center gap-1.5">
                    <BookOpen size={14} className="text-red-500" />
                    <span>Lesson {course.lessons}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-amber-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-blue-500" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Dotted Divider */}
                <div className="border-t border-dashed border-gray-200 w-full my-1"></div>

                <div className="pt-5 mt-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={course.instructorImg} 
                      alt={course.instructor} 
                      className="w-10 h-10 rounded-full object-cover bg-gray-200"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-800">By {course.instructor}</p>
                      <p className="text-xs text-slate-500">In {course.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-slate-800">${course.price}</span>
                      <span className="text-sm text-slate-400 line-through decoration-slate-400">${course.oldPrice}</span>
                    </div>
                    <button className="flex items-center gap-1 text-slate-700 font-semibold text-sm hover:text-primary transition-colors">
                      <ShoppingCart size={16} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};