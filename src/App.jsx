import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Resume from './components/sections/Resume';

import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Hackathons from './components/sections/Hackathons';
import Research from './components/sections/Research';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Navbar />
        
        <main className="pt-20"> {/* Add padding top for fixed navbar */}
          <Hero />
          
          <About />
          
          <Resume />

          <Education />

          <Skills />

          <Projects />

          <Certifications />

          <Achievements />

          <Experience />

          <Hackathons />

          <Research />

          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
