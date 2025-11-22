import React from 'react';
import Hero from './components/Hero';
import Bootcamps from './components/Bootcamps';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Bootcamps />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;

