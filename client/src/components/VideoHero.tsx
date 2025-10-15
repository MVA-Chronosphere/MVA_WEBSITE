import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
      >
        <source src="/CAMPUS short video 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Color overlay (yellow -> green -> blue) for stylistic effect while keeping text readable */}
      <div
        aria-hidden
        className={
          "absolute inset-0 z-10 " +
          // Use a multi-stop gradient with semi-transparent colors so the video is visible underneath
          "bg-gradient-to-b from-yellow-400/50 via-emerald-500/45 to-sky-600/50 " +
          // Blend mode helps the colors sit nicely on top of the video
          "mix-blend-multiply"
        }
        style={{
          // Subtle slow pan animation using background-position; respects reduced motion
          backgroundSize: "200% 200%",
          animation: "mv-gradient-pan 12s ease-in-out infinite",
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-center max-w-5xl leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Welcome to Macro Vision Academy
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-center max-w-3xl text-white/95 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          Empowering minds, nurturing excellence through academics, sports, arts, and holistic development
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Link to="/admissions/procedure">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-10 shadow-xl hover:shadow-2xl transition-all hover:scale-105" data-testid="button-apply-now">
              Apply Now
            </Button>
          </Link>
          <Link to="/about/our-story">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 px-8 md:px-10 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              data-testid="button-explore-mva"
            >
              Explore MVA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Add keyframes for the gradient pan. Tailwind doesn't include these by default, so
// we inject them with a CSS string. This is safe here because the project already
// uses global CSS and PostCSS; if your setup extracts CSS differently you can
// instead move these into `index.css`.
const style = document.createElement("style");
style.innerHTML = `
@keyframes mv-gradient-pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@media (prefers-reduced-motion: reduce) {
  @keyframes mv-gradient-pan { from { background-position: 50% 50%; } to { background-position: 50% 50%; } }
}
`;
document.head.appendChild(style);
