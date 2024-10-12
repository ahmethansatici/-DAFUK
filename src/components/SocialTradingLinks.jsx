import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdKeyboardArrowUp } from 'react-icons/md';

const SocialTradingLinks = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-3">
      <a href="https://t.me/dafukportal" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full bg-[#ff4500] text-white transition-transform transform hover:scale-110 hover:bg-opacity-80">
        <FaTelegramPlane size={24} />
      </a>
      <a href="https://x.com/DafukonSolana" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full bg-[#ff4500] text-white transition-transform transform hover:scale-110 hover:bg-opacity-80">
        <img src="/xlogo.png" alt="X Logo" className="w-8 h-8" /> {/* X logosu */}
      </a>
      <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full bg-[#ff4500] text-white transition-transform transform hover:scale-110 hover:bg-opacity-80">
        <img src="/dexscreneer-logo.png" alt="DexScreener Logo" className="w-8 h-8" />
      </a>
      <a href="https://www.dextools.io/app/en/hot-pairs" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-12 h-12 rounded-full bg-[#ff4500] text-white transition-transform transform hover:scale-110 hover:bg-opacity-80">
        <img src="/dextools-logo.png" alt="DexTools Logo" className="w-8 h-8" />
      </a>
      {/* Back to Top butonu */}
      <button
        onClick={scrollToTop}
        className="flex justify-center items-center w-12 h-12 rounded-full bg-[#ff4500] text-white transition-transform transform hover:scale-110 hover:bg-opacity-80 mt-96"
      >
        <MdKeyboardArrowUp size={24} />
      </button>
    </div>
  );
};

export default SocialTradingLinks;
