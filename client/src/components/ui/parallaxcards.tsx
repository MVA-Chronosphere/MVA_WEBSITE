"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ParallaxCard {
  lightBg: string;
  darkBg: string;
  content: React.ReactNode;
}

interface ParallaxCardsProps {
  cards: ParallaxCard[];
}

export default function ParallaxCards({ cards }: ParallaxCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.05;
        const scale = useTransform(
          scrollYProgress,
          [index * 0.25, 1],
          [1, targetScale]
        );

        return (
          <motion.div
            key={index}
            style={{ scale }}
            className="sticky top-16 md:top-20 mb-6 md:mb-8 lg:mb-12"
          >
            <Card
              className={`min-h-[450px] sm:min-h-[500px] md:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] w-full rounded-lg overflow-hidden ${card.lightBg} ${card.darkBg} shadow-lg ${
                card.lightBg.includes('bg-white') ? 'border-2 border-[#0055A4]' : 'border-2 border-white'
              }`}
            >
              <div className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 h-full flex flex-col">
                {card.content}
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}