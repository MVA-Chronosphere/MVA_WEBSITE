import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface WhyChooseCardProps {
  image: string;
  title: string;
  description: string;
  cta: string;
  ctaScrollId?: string;
}

let globalActiveCard = 0;
let globalSetActiveCard: ((idx: number) => void)[] = [];

const WhyChooseCard: React.FC<WhyChooseCardProps & { cardIndex?: number }> = ({
  image,
  title,
  description,
  cta,
  ctaScrollId,
  cardIndex = 0,
}) => {
  const [hovered, setHovered] = useState(false);
  const [activeCard, setActiveCard] = useState(-1);

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only one card active at a time (web and mobile)
  useEffect(() => {
    globalSetActiveCard[cardIndex] = (idx: number) => setActiveCard(idx);
    return () => { globalSetActiveCard[cardIndex] = () => {}; };
  }, [cardIndex]);

  // Show info when this card is the active card. On desktop, also require hover.
  const showInfo = activeCard === cardIndex && (!isMobile ? hovered : true);

  const handleClick = (e: React.MouseEvent) => {
    if (ctaScrollId) {
      e.preventDefault();
      // Scroll to section on the same page
      const el = document.getElementById(ctaScrollId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise, let Link handle navigation
  };

  return (
    <div
      className={
        `relative group w-full aspect-square bg-white rounded-xl overflow-hidden border-2 border-blue-700 shadow-lg flex flex-col items-end justify-end cursor-pointer transition-transform duration-300 hover:scale-105 ` +
        `min-h-[55px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[150px] xl:min-h-[180px] ` +
        `max-w-full ` +
        `mobile:aspect-square mobile:min-h-[16vw] mobile:max-h-[16vw] mobile:max-w-[16vw]`
      }
      style={{ fontFamily: '"Maven Pro", sans-serif' }}
      onMouseEnter={() => { if (!isMobile) { setHovered(true); globalSetActiveCard.forEach(fn => fn(cardIndex)); } }}
      onMouseLeave={() => { if (!isMobile) setHovered(false); }}
      onTouchEnd={(e) => {
        // single tap on mobile: toggle active card. If tapped card is already active -> deactivate.
        // If the touch ended on an interactive element like the CTA button, don't preventDefault
        // so the button's onClick can run and perform navigation.
        if (isMobile) {
          const target = e.target as HTMLElement | null;
          try {
            const interactive = target && (target.closest && (target.closest('button') || target.closest('a')));
            if (interactive) {
              // let the inner interactive element handle the event
              return;
            }
          } catch (err) {
            // defensive: if closest isn't available, fall back to original behavior
          }

          e.preventDefault();
          if (activeCard === cardIndex) {
            globalSetActiveCard.forEach(fn => fn(-1));
          } else {
            globalSetActiveCard.forEach(fn => fn(cardIndex));
          }
        }
      }}
      onClick={() => {
        // desktop click just activates overlay (hover alternative)
        if (!isMobile) {
          globalSetActiveCard.forEach(fn => fn(cardIndex));
        }
      }}
    >
      <img
        src={image}
        alt={title}
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 z-0"
        style={{ opacity: 1, objectFit: 'cover' }}
        draggable={false}
      />
      {/* Info overlay on hover */}
      {/* Overlay info: dark grey, no card shadow, visible on hover (desktop) or tap (mobile) */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center z-20 transition-all duration-500 ease-in-out ${showInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-8'}`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center px-2 pb-2">
          <div className="flex flex-col items-center justify-center flex-grow min-h-[40px]">
            <button
              className="bg-blue-700 text-white font-bold px-3 py-1 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-xs sm:text-xs md:text-sm min-w-[90px] max-w-full whitespace-normal break-words mx-auto mb-2"
              style={{ fontFamily: 'inherit', display: 'block', marginBottom: 8 }}
              tabIndex={showInfo ? 0 : -1}
              onClick={e => {
                e.stopPropagation();
                // Navigation/scroll logic for each card
                if (cardIndex === 0) {
                  // Achievements page (full page)
                  window.location.href = '/achievements';
                } else if (cardIndex === 1) {
                  // World-Class Facilities -> Life at MVA (boarding overview)
                  window.location.href = '/life-at-mva#boarding';
                } else if (cardIndex === 2) {
                  // Expert Teachers -> About Us (leadership section)
                  window.location.href = '/about#leadership';
                } else if (cardIndex === 3) {
                  // Vibrant Hostel Life -> Life at MVA (residential wings)
                  window.location.href = '/life-at-mva#residential-wings';
                } else if (cardIndex === 4) {
                  // Inspiring Infrastructure -> Life at MVA (infrastructure)
                  window.location.href = '/life-at-mva#infrastructure';
                }
              }}
            >
              {cta}
            </button>
            <p className="text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-medium text-white text-center leading-tight break-words whitespace-pre-line tracking-tight" style={{ maxWidth: '98%', letterSpacing: '-0.01em', lineHeight: '1.15' }}>{description}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-neutral-900/70 z-[-1] transition-all duration-500" />
      </div>
      {/* Card heading always visible at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-30 flex justify-center items-end">
        <span
          className="block w-full text-center font-bold text-[0.8rem] sm:text-[0.95rem] md:text-base lg:text-lg px-2 py-2 bg-white/90 text-blue-900 rounded-b-xl shadow-md whitespace-normal break-words leading-tight"
          style={{ fontFamily: 'inherit', textShadow: '0 1px 4px #fff', wordBreak: 'break-word' }}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default WhyChooseCard;
