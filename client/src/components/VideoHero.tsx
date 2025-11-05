import { Link } from "react-router-dom";

export default function VideoHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="SnapInsta.to_AQPD_CuX1v8L3JeqordNRc1ZP_m91Bx5eRMf5kCra_xf_v7SZ0OBgZWN2-vDB-KhHfGCJXK2zozV4bqCJ5pUVz2CwAHk8Pv1XVySgUQ.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Text Content */}
      <div className="absolute bottom-8 left-4 right-4 lg:left-12 lg:right-auto z-20 max-w-3xl">
        <div className="text-content">
          {/* Main Heading */}
         <h1 className="text-2xl lg:text-5xl xl:text-6xl font-black leading-none mb-6 text-center lg:text-left whitespace-nowrap">
  <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 bg-clip-text text-transparent drop-shadow-2xl">
    Macro Vision Academy
  </span>
</h1>
          
          {/* Content without card background */}
          <div className="mb-6 max-w-2xl mx-auto lg:mx-0">
            {/* Main Description */}
            <p className="text-lg lg:text-m text-white font-medium leading-relaxed mb-4 text-center lg:text-left drop-shadow-2xl">
              Empowering minds through academics, sports, arts & holistic development
            </p>
            
            {/* Admissions Info */}
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-white text-base lg:text-lg font-semibold drop-shadow-lg">
                Admissions 2026:{" "}
                <span className="text-[#fec900] font-bold">4th & 18th Jan</span>
              </p>
              <p className="text-white text-sm lg:text-base drop-shadow-lg">
                Contact:{" "}
                <span className="text-[#fec900] font-bold">93025 11111</span>
                {" | "}
                <span className="text-[#fec900] font-bold">93001 10033</span>
              </p>
            </div>
          </div>
        </div>

        {/* Buttons - Centered on mobile, left on desktop */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
          <Link 
            to="/admissions" 
            className="bg-[#0051a8] hover:bg-[#004080] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base lg:text-lg w-full sm:w-auto text-center"
          >
            Apply Now
          </Link>
          <Link 
            to="/about/our-story" 
            className="bg-white/20 border border-white/60 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold hover:bg-white/30 hover:border-white hover:scale-105 transition-all duration-300 text-base lg:text-lg w-full sm:w-auto text-center drop-shadow-lg"
          >
            Explore MVA
          </Link>
        </div>
      </div>

      {/* Custom styles for consistent visibility */}
      <style>{`
        .text-shadow-2xl {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6);
        }
        
        .drop-shadow-lg {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
        }

        /* Highlight animation for important info */
        @keyframes highlight-pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(254, 201, 0, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(254, 201, 0, 0.6));
          }
        }

        .text-\\[\\#fec900\\] {
          animation: highlight-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}