import React, { useState } from 'react';
import { Clock, MapPin, User, Facebook, Twitter, Linkedin, Instagram, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans text-gray-800">
      
      {/* --- TOP BAR (Hidden on Mobile) --- */}
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

      {/* --- MAIN NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 md:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Make sure this path is correct, or use a text fallback if image fails */}
            <img className="w-32" src="/src/images/home/edunity-logo.png" alt="Edunity Logo" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
            <h1 className="text-2xl font-bold text-[#17254E] hidden">Edunity<span className="text-[#00cbb8]">.</span></h1>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <ul className="hidden lg:flex gap-8 font-medium text-[#1b1f4e]">
            <li className="text-[#00cbb8] cursor-pointer">Home</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">About Us</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">Courses</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">Pages</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">Blog</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">Contact</li>
          </ul>

          {/* Desktop Search & CTA (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-4">
            <Search size={20} className="text-gray-500 cursor-pointer hover:text-[#00cbb8]" />
            <button className="bg-[#00cbb8] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#00b0a0] transition shadow-lg shadow-teal-200">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#1b1f4e] focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* This block only shows if isMenuOpen is true */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-4 font-medium text-[#1b1f4e] bg-gray-50 p-4 rounded-lg">
            <li className="text-[#00cbb8] cursor-pointer border-b border-gray-200 pb-2">Home</li>
            <li className="hover:text-[#00cbb8] cursor-pointer border-b border-gray-200 pb-2 transition">About Us</li>
            <li className="hover:text-[#00cbb8] cursor-pointer border-b border-gray-200 pb-2 transition">Courses</li>
            <li className="hover:text-[#00cbb8] cursor-pointer border-b border-gray-200 pb-2 transition">Pages</li>
            <li className="hover:text-[#00cbb8] cursor-pointer border-b border-gray-200 pb-2 transition">Blog</li>
            <li className="hover:text-[#00cbb8] cursor-pointer transition">Contact</li>
            
            {/* Mobile CTA */}
            <div className="pt-2 flex flex-col gap-3">
               <button className="bg-[#00cbb8] text-white w-full py-2.5 rounded-full font-medium hover:bg-[#00b0a0] transition">
                Contact Us
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;