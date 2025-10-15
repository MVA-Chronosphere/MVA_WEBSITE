import React, { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
  swayAmplitude: number;
  swaySpeed: number;
  color: string;
  type: number;
}

const AnimatedLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const leafColors = [
    '#10B981', // emerald-500
    '#059669', // emerald-600
    '#047857', // emerald-700
    '#065F46', // emerald-800
    '#22C55E', // green-500
    '#16A34A', // green-600
  ];

  const leafSVGs = [
    // Leaf type 1
    (color: string, scale: number) => (
      <svg width={24 * scale} height={24 * scale} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z"
          fill={color}
          fillOpacity="0.8"
        />
        <path
          d="M12 2C12 2 16 6 16 12"
          stroke={color}
          strokeWidth="0.5"
          strokeOpacity="0.6"
        />
      </svg>
    ),
    // Leaf type 2
    (color: string, scale: number) => (
      <svg width={22 * scale} height={28 * scale} viewBox="0 0 18 24" fill="none">
        <path
          d="M9 2C9 2 5 8 5 14C5 18 7 20 9 22C11 20 13 18 13 14C13 8 9 2 9 2Z"
          fill={color}
          fillOpacity="0.7"
        />
        <path
          d="M9 2L9 22M5 10C7 12 11 12 13 10"
          stroke={color}
          strokeWidth="0.3"
          strokeOpacity="0.5"
        />
      </svg>
    ),
    // Leaf type 3
    (color: string, scale: number) => (
      <svg width={26 * scale} height={20 * scale} viewBox="0 0 22 16" fill="none">
        <path
          d="M2 8C2 8 6 4 11 4C16 4 20 8 20 8C20 8 16 12 11 12C6 12 2 8 2 8Z"
          fill={color}
          fillOpacity="0.6"
        />
        <path
          d="M2 8L20 8M11 4L11 12"
          stroke={color}
          strokeWidth="0.4"
          strokeOpacity="0.4"
        />
      </svg>
    ),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate initial leaves
    const generateLeaves = () => {
      const newLeaves: Leaf[] = [];
      // Generate 30 leaves total for better coverage
      for (let i = 0; i < 30; i++) {
        let x: number;
        
        // Distribute leaves with emphasis on left and right sides
        if (i < 10) {
          // Left side leaves (0-25%)
          x = Math.random() * 25;
        } else if (i < 20) {
          // Right side leaves (75-100%)
          x = 75 + Math.random() * 25;
        } else {
          // Center area leaves (20-80%)
          x = 20 + Math.random() * 60;
        }
        
        newLeaves.push({
          id: i,
          x: x,
          y: -50 + Math.random() * -150, // Start at different heights for staggered effect
          rotation: Math.random() * 360,
          scale: 0.7 + Math.random() * 1.2, // Increased from 0.4-1.4 to 0.7-1.9
          speed: 0.4 + Math.random() * 1.6, // Slightly adjusted speed range
          swayAmplitude: 1.5 + Math.random() * 5, // More sway variation
          swaySpeed: 0.008 + Math.random() * 0.025,
          color: leafColors[Math.floor(Math.random() * leafColors.length)],
          type: Math.floor(Math.random() * 3),
        });
      }
      setLeaves(newLeaves);
    };

    generateLeaves();
  }, []);

  useEffect(() => {
    if (leaves.length === 0) return;

    const animateLeaves = () => {
      setLeaves(prevLeaves =>
        prevLeaves.map(leaf => {
          let newY = leaf.y + leaf.speed;
          let newX = leaf.x + Math.sin(newY * leaf.swaySpeed) * leaf.swayAmplitude * 0.1;
          let newRotation = leaf.rotation + leaf.speed * 2;

          // Smooth continuous loop - reset leaf when it goes off screen
          if (newY > 120) {
            newY = -30 - Math.random() * 40; // Reset to random height above screen
            // Regenerate position with same distribution logic for seamless loop
            if (leaf.id < 10) {
              // Left side reset with slight variation
              newX = Math.random() * 25;
            } else if (leaf.id < 20) {
              // Right side reset with slight variation
              newX = 75 + Math.random() * 25;
            } else {
              // Center area reset with slight variation
              newX = 20 + Math.random() * 60;
            }
            // Add small random variations to make each loop unique
            newRotation = Math.random() * 360;
          }

          // Keep leaves within responsive bounds for all screen sizes
          if (newX < -10) newX = -10;
          if (newX > 110) newX = 110;

          return {
            ...leaf,
            x: newX,
            y: newY,
            rotation: newRotation,
          };
        })
      );
    };

    const interval = setInterval(animateLeaves, 80); // Slightly faster for smoother animation
    return () => clearInterval(interval);
  }, [leaves.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className="absolute transition-all duration-75 ease-linear"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            transform: `rotate(${leaf.rotation}deg) translate(-50%, -50%)`,
            zIndex: 1,
            willChange: 'transform', // Optimize for animations
          }}
        >
          {leafSVGs[leaf.type](leaf.color, leaf.scale)}
        </div>
      ))}
    </div>
  );
};

export default AnimatedLeaves;