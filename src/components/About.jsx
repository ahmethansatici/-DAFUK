import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="bg-[#EBD3BB] text-[#333] py-24 px-4 overflow-hidden relative" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-extrabold mb-8 font-display">
            About <span className="text-[#ff4500]">$Dafuk</span>
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto font-body">
            Dafuk is more than just a cryptocurrency - it's a state of mind. Born from the collective confusion and exasperation of the crypto community, Dafuk aims to bring humor, unity, and a touch of absurdity to the often chaotic world of digital assets.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        {[...Array(50)].map((_, index) => (
          <Sparkle key={index} />
        ))}
      </motion.div>
    </section>
  );
};

const Sparkle = () => {
  const randomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <motion.div
      className="absolute"
      style={randomPosition()}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: Math.random() * 4,
      }}
    >
      <Sparkles className="text-[#ff4500] opacity-30" size={16} />
    </motion.div>
  );
};

export default AboutSection;