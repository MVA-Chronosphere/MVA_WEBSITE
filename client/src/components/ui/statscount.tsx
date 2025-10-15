"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCountProps {
  stats: Stat[];
  title?: string;
  showDividers?: boolean;
  className?: string;
}

const StatsCount: React.FC<StatsCountProps> = ({
  stats,
  title,
  showDividers = false,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "py-12 md:py-16 lg:py-20 bg-background",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sans inline-block">
              {title}
              <div className="w-full h-1 bg-black mt-2"></div>
            </h2>
          </div>
        )}

        <div className="space-y-4 md:space-y-6">
          {/* First row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {stats.slice(0, 4).map((stat, index) => (
              <StatCard key={index} stat={stat} isVisible={isVisible} index={index} />
            ))}
          </div>
          
          {/* Second row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
            {stats.slice(4, 8).map((stat, index) => (
              <StatCard key={index + 4} stat={stat} isVisible={isVisible} index={index + 4} />
            ))}
          </div>
          
          {/* Third row - 2 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 max-w-sm md:max-w-md">
              {stats.slice(8, 10).map((stat, index) => (
                <StatCard key={index + 8} stat={stat} isVisible={isVisible} index={index + 8} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  stat: Stat;
  isVisible: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isVisible, index }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const delay = index * 100;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;

    setTimeout(() => {
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);
  }, [isVisible, stat.value, index]);

  // Determine background size based on card index
  const backgroundSize = index < 8 ? '40%' : '60%';

  return (
    <div className="text-center p-3 md:p-4 bg-white border-2 border-blue-900 hover:bg-blue-50 transition-all duration-300 hover:scale-105 min-h-[100px] md:min-h-[120px] lg:min-h-[130px] flex flex-col justify-center relative overflow-hidden"
         style={{ borderRadius: "20px 0 20px 0" }}>
      {/* Blue corner shadows */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-blue-200 to-transparent opacity-60"></div>
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-200 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-200 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-blue-200 to-transparent opacity-60"></div>
      
      {/* Background logo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/mva-logo 2.png')",
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          filter: 'blur(0.5px)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-1 md:mb-2">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 font-sans block leading-tight">
            {count}
            {stat.suffix && (
              <span className="text-blue-800">{stat.suffix}</span>
            )}
          </span>
        </div>
        <div className="text-xs sm:text-sm md:text-base text-gray-700 font-sans leading-tight whitespace-pre-line">
          {stat.label.split('\n').map((line, index) => (
            <div key={index} className={index === 0 ? "font-bold" : "font-normal"}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCount;