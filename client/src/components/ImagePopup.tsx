import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ImagePopupProps {
  src: string;
  alt: string;
  className?: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ src, alt, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageClick = () => {
    if (isMobile) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {/* Main Image */}
      <img 
        src={src}
        alt={alt}
        className={`${className} ${isMobile ? 'cursor-pointer' : ''}`}
        onClick={handleImageClick}
      />

      {/* Popup Modal - Only shows on mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 bg-white hover:bg-gray-100 text-black p-2 rounded-full shadow-lg transition-colors duration-200 z-10"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Popup Image */}
            <div className="bg-white rounded-lg p-2 shadow-2xl max-w-full max-h-full overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto object-contain max-h-[80vh] rounded-lg"
              />
            </div>

            {/* Tap to close hint */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <p className="text-white text-sm text-center bg-black bg-opacity-50 px-3 py-1 rounded-full">
                Tap outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;