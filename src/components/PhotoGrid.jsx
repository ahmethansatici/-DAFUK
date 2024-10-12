import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    '/0.jpg', '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg',
    '/8.jpg', '/9.jpg', '/10.jpg', '/11.jpg', '/12.jpg', '/13.jpg', '/14.jpg', '/15.jpg'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPhoto) {
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'Escape') setSelectedPhoto(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const openLightbox = (index) => {
    setSelectedPhoto(photos[index]);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 0.5 } },
  };

  return (
    <div className="p-4 md:p-8 bg-[#EBD3BB] min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800"></h2>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" variants={gridVariants} initial="hidden" animate="show">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer group ${index % 4 === 0 ? 'col-span-2 row-span-2' : ''} ${index % 5 === 1 ? 'col-span-2' : ''} ${index % 5 === 2 ? 'row-span-2' : ''} ${index % 3 === 0 ? 'transform rotate-2' : ''} ${index % 3 === 1 ? 'transform -rotate-2' : ''}`}
            variants={photoVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              style={{ objectFit: 'cover' }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <ZoomIn className="text-white" size={32} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedPhoto}
              alt="Selected photo"
              className="max-w-[90%] max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
            <motion.button
              className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setSelectedPhoto(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={32} />
            </motion.button>
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
              onClick={goToPrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={48} />
            </motion.button>
            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none"
              onClick={goToNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={48} />
            </motion.button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
              {currentIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGrid;
