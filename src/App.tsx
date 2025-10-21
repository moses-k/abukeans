import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      
      {/* ✅ This header only holds the toggle */}
      <header className="flex justify-end items-center p-4">
        <ThemeToggle />
      </header>

      {/* ✅ These are your main page sections */}
      <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Projects />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
