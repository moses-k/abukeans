import React from 'react';
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
    <div className="App">
     <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Projects />
      {/* <Testimonials /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

