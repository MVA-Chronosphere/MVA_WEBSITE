import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function VideoHero() {
  const words = ["Academics", "Innovation", "Sports", "Arts"];
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="SnapInsta.to_AQPD_CuX1v8L3JeqordNRc1ZP_m91Bx5eRMf5kCra_xf_v7SZ0OBgZWN2-vDB-KhHfGCJXK2zozV4bqCJ5pUVz2CwAHk8Pv1XVySgUQ.mp4"
          type="video/mp4"
        />
      </video>

      {/* ✨ Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* 🪩 Text Content (Left Bottom - Improved Layout) */}
      <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 lg:bottom-12 lg:left-12 z-20 w-[90%] max-w-2xl text-left">
        {/* Animated Tagline */}
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight sm:leading-relaxed mb-4 sm:mb-6">
          Empowering minds through{" "}
          <span key={i} className="font-bold text-white fade-in inline-block min-w-[10px]">
            {words[i]}
          </span>
          , Values & Holistic Development
        </p>

        {/* Admission Info */}
        <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 space-y-1">
          <div>
            Admissions 2026:{" "}
            <span className="text-[#fec900] font-bold glow-pulse">
              4th & 18th Jan
            </span>
          </div>
          <div className="text-sm sm:text-base md:text-lg font-normal">
            Contact:{" "}
            <span className="text-[#fec900] font-semibold">93025 11111</span> |{" "}
            <span className="text-[#fec900] font-semibold">93001 10033</span>
          </div>
        </div>

        {/* Buttons - Improved Mobile Layout */}
        <div className="flex flex-col-2 xs:flex-row gap-3 sm:gap-4 items-start">
          <Link
            to="/admissions"
            className="bg-[#0051a8] hover:bg-[#004080] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center min-w-[120px] sm:min-w-[140px] flex items-center justify-center"
          >
            Apply Now
          </Link>
          <Link
            to="/about/our-story"
            className="bg-white/20 backdrop-blur-sm border border-white/50 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold hover:bg-white/30 hover:border-white hover:scale-105 transition-all duration-300 text-sm sm:text-base text-center min-w-[120px] sm:min-w-[140px] flex items-center justify-center"
          >
            Explore MVA
          </Link>
        </div>
      </div>

      {/* ✨ Enhanced Style Animations */}
      <style>{`
        .fade-in {
          animation: fadeIn 800ms ease-in-out forwards;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(8px) scale(0.95); }
          50% { opacity: 0.5; transform: translateY(4px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .glow-pulse {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 8px rgba(254,201,0,0.4),
                         0 0 12px rgba(254,201,0,0.2); 
          }
          50% { 
            text-shadow: 0 0 16px rgba(254,201,0,0.8),
                         0 0 24px rgba(254,201,0,0.4); 
          }
        }
      `}</style>
    </div>
  );
}