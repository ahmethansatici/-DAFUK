import React, { useState, useEffect } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const setupScrollSpy = () => {
      Events.scrollEvent.register('begin', () => {});
      Events.scrollEvent.register('end', () => {});
      scrollSpy.update();
    };

    window.addEventListener('scroll', handleScroll);
    setupScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  // Add function to scroll to the bottom of the page
  const handleScrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const navItems = [
    { to: 'about', label: 'About' },
    { to: 'fukanomics', label: 'Fukanomics' },
    { to: 'roadmap', label: 'Roadmap' },
    { to: 'how-to-buy', label: 'How to Buy' },
    { to: 'contract', label: 'Contract Adress', action: handleScrollToBottom }, // Call scrollToBottom on click
    { to: 'meme-generator', label: 'Meme Generator', externalLink: 'https://dafuksol.xyz/meme-generator' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#EBD3BB]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div
              onClick={handleScrollToTop}
              className="text-2xl font-bold text-[#ff4500] flex items-center cursor-pointer"
            >
              <img src="/paw.png" alt="Paw logo" className="w-8 h-8 mr-2" />
              $Dafuk
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) =>
                item.externalLink ? (
                  <a
                    key={item.to}
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer text-[#ff4500] hover:bg-[#ff4500]/10"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    onClick={item.action ? item.action : null} // Call scrollToBottom if it's Contract Address
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      activeLink === item.to && activeLink !== '' ? 'text-[#EBD3BB] bg-[#ff4500] shadow-md transform scale-105' : 'text-[#ff4500] hover:bg-[#ff4500]/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-[#ff4500] hover:bg-[#ff4500]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff4500]"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#EBD3BB]/90 backdrop-blur-md">
              {navItems.map((item) =>
                item.externalLink ? (
                  <a
                    key={item.to}
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded-full text-base font-medium transition-all duration-300 cursor-pointer text-[#ff4500] hover:bg-[#ff4500]/10"
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={item.action ? item.action : () => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${
                      activeLink === item.to && activeLink !== '' ? 'text-[#EBD3BB] bg-[#ff4500] shadow-md' : 'text-[#ff4500] hover:bg-[#ff4500]/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
