import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoGrid from './components/PhotoGrid';
import About from './components/About';
import Fukanomics from './components/Fukanomics';
import Roadmap from './components/Roadmap';
import HowToBuy from './components/HowToBuy';
import SocialTradingLinks from './components/SocialTradingLinks';
import ContractAdress from './components/ContractAdress';

function App() {
  return (
    <div className="bg-paws-random bg-[#EBD3BB] min-h-screen relative flex flex-col justify-between">
      <Navbar />
      <div className="max-w-5xl mx-auto p-8">
        <Hero />
        <PhotoGrid />
        <About />
        <Fukanomics />
        <Roadmap />
        <HowToBuy />
      </div>
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
        <SocialTradingLinks />
      </div>
      <ContractAdress />
    </div>
  );
}

export default App;
