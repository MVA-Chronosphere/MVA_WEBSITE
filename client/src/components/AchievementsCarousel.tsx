import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  category: string;
}

const achievements: Achievement[] = [
  {
    title: "100% RESULTS IN CLASS XII CBSE BOARD 2024-2025",
    category: "Academic Excellence",
  },
  {
    title: "122 STUDENTS GOT MORE THAN 90% IN CLASS X CBSE BOARD EXAM 2024-2025",
    category: "Academic Excellence",
  },
  {
    title: "52 STUDENTS GOT MORE THAN 90% IN CLASS XII CBSE BOARD EXAM 2024-2025",
    category: "Academic Excellence",
  },
  {
    title: "100% RESULTS IN CLASS X CBSE BOARD 2024-2025",
    category: "Academic Excellence",
  },
  {
    title: "42 Selection in IIT JEE 2025",
    category: "Engineering Excellence",
  },
];

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Removed automatic timer - carousel only moves when arrows are clicked

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  return (
    <div className="relative bg-gradient-to-br from-primary via-[#0055A4] to-[#1E88E5] py-16 md:py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/achivement bg.JPG')" }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16 underline decoration-white decoration-2 underline-offset-4">
          Our Achievements
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 lg:p-16 h-[280px] md:h-[250px] lg:h-[220px] flex flex-col justify-center shadow-2xl border border-white/20 transition-all duration-500">
            <div className="text-xs md:text-sm font-bold text-white/80 mb-3 uppercase tracking-wider text-center">
              {achievements[currentIndex].category}
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight text-center">
              {achievements[currentIndex].title}
            </h3>
          </div>

          <div className="flex flex-col items-center mt-6 gap-4">
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="bg-white/20 hover:bg-white/40 text-white h-10 w-10 md:h-12 md:w-12 rounded-full backdrop-blur-sm border border-white/30 shadow-lg transition-all hover:scale-110"
                data-testid="button-carousel-previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex justify-center items-center space-x-2">
                {achievements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                    }`}
                    data-testid={`button-carousel-dot-${index}`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="bg-white/20 hover:bg-white/40 text-white h-10 w-10 md:h-12 md:w-12 rounded-full backdrop-blur-sm border border-white/30 shadow-lg transition-all hover:scale-110"
                data-testid="button-carousel-next"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
