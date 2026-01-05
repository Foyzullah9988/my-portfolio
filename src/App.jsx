// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './Components/AnimatedBackground ';

/**
 * Main App Component
 * This is the root component that sets up routing and overall layout
 * All routes are defined here with smooth transitions between pages
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
        {/* Animated background for modern visual appeal */}
        <AnimatedBackground />
        
        {/* Navigation bar - fixed at top for easy access */}
        <Navbar />
        
        {/* Main content area with route transitions */}
        <main className="relative z-10">
          <Routes>
            {/* Home route containing all main sections */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            
            {/* Individual project details route */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        
        {/* Footer section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;