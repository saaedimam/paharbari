import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import CottageStay from './components/sections/CottageStay';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Footer from './components/sections/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'PaharBari Organics | Eco-Resort & Organic Farm';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Products />
      <CottageStay />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;