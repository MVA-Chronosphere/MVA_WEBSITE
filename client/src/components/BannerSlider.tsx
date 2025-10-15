import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BannerSliderProps {
  className?: string;
}

const BannerSlider: React.FC<BannerSliderProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/12th and 10th result website post.jpg",
      alt: "12th and 10th Result Website Post"
    },
    {
      src: "/JEE advanced result 2025.jpg",
      alt: "JEE Advanced Result 2025"
    },
    {
      src: "/JEE mains 2 result 2025.jpg",
      alt: "JEE Mains 2 Result 2025"
    },
    {
      src: "/JEE mains website post.jpg",
      alt: "JEE Mains Website Post"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`py-2 md:py-3 lg:py-4 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-2 md:mb-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2 underline decoration-black decoration-2 underline-offset-4">
            Our Latest Results
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating our students' outstanding achievements and academic excellence
          </p>
        </div>

        <div className="relative group">
          {/* Main Slider Container */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden rounded-lg shadow-lg bg-white">
            {/* Image Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-white"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-1.5 md:p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-1.5 md:mt-2 space-x-1.5 md:space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Navigation Hint */}
        <div className="text-center mt-1.5 md:hidden">
          <p className="text-xs text-gray-600">
            Tap arrows or dots to navigate through results
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
