import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const phrases = [
    "Dafuk am I doing with my life?",
    "Dafuk? when life demanded too much",
    "Dafuk? when our wallets were drained",
    "Dafuk? when Biden did shit his pants",
    "Dafuk? when our girlfriends told us they are pregnant"
  ];

  const handleButtonClick = () => {
    window.open('https://jup.ag/swap/SOL-AquEdp1x9sAtBJMXjggNojqADhck9ff5yR12pcK8pump', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white p-4 relative overflow-hidden">
      {/* Arka plan için paw simgesi */}
      <div className="absolute inset-0 bg-paws-hero opacity-10 pointer-events-none"></div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-8 text-center text-[#ff4500] relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dafuk?
      </motion.h1>

      <motion.div
        className="text-xl md:text-2xl max-w-3xl text-center mb-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="mb-6">How many times have you wondered, "Dafuk am I doing with my life?" Well, we've all been there.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {phrases.map((phrase, index) => (
            <motion.div
              key={index}
              className="bg-transparent p-4 rounded-lg cursor-default"
              whileHover={{ scale: 1.05, backgroundColor: '#ff4500' }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {phrase}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-2xl md:text-3xl font-bold mb-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p>Dafuk is a movement</p>
        <p>Dafuk is a cult</p>
        <p>Dafuk is life- though Dafuk is life?</p>
      </motion.div>

      <motion.button
        className="bg-[#ff4500] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#cc3700] transition-colors relative z-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleButtonClick}
      >
        Buy $DAFUK
      </motion.button>

      <motion.div
        className="absolute top-20 right-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-40 h-40 rounded-full border-4 border-[#ff4500] border-dashed relative z-10"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
