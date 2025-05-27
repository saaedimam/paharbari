import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { OurFarm } from './components/sections/OurFarm';
import { EcoEscape } from './components/sections/EcoEscape';
import { BeeHive } from './components/sections/BeeHive';
import { Investment } from './components/sections/Investment';
import { ContactForm } from './components/sections/ContactForm';
import { Gallery } from './components/sections/Gallery';
import { Revenue } from './components/sections/Revenue';

function App() {
  return (
    <div className="font-body text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <OurFarm />
        <EcoEscape />
        <BeeHive />
        <Investment />
        <ContactForm />
        <Gallery />
        <Revenue />
      </main>
      <Footer />
    </div>
  );
}

export default App;