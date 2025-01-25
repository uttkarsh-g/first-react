import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/HeroSection';
const App = () => {
  return (
    <main className="h-screen w-full bg-black relative">
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
