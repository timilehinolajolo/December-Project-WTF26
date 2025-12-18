import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features } from './components/Features';
import About from './components/About';
import { Courses } from './components/Courses';
import { Stats } from './components/Stats';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Courses />
      <Stats />
    </div>
  );
}
export default App;