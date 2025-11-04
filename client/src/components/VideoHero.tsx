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
      <div className="absolute inset-0 bg-black/10 z-10"></div>

      {/* Text Content */}
      <div className="absolute bottom-16 left-12 z-20 max-w-4xl">
        <div className="text-content">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
            <span className="text-white drop-shadow-2xl">
              Welcome to
            </span>
            <br />
            <span className="block mt-4">
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 bg-clip-text text-transparent drop-shadow-2xl">
                Macro Vision Academy
              </span>
            </span>
          </h1>
          
          {/* Very Soft Background for Subheading */}
          <div className="relative mb-8 max-w-2xl">
            <div className="relative bg-black/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 mb-6">
              <p className="text-lg lg:text-xl xl:text-2xl text-white font-medium leading-relaxed">
                Empowering minds, nurturing excellence through academics, sports, arts, and holistic development
              </p>
            </div>
            
            {/* Admissions Info - Now properly aligned */}
            <div className="bg-black/5 backdrop-blur-md rounded-2xl p-6 border border-white/15">
              <div className="text-left">
                <p className="text-white text-lg lg:text-xl font-semibold mb-3">
                  Admissions Open for 2026 — Join Us on{" "}
                  <span className="text-[#fec900] font-bold">4th</span> &{" "}
                  <span className="text-[#fec900] font-bold">18th January</span>
                </p>
                <p className="text-white/90 text-base lg:text-lg">
                  Contact:{" "}
                  <span className="text-[#fec900] font-bold">+91 93025 11111</span>
                  {" , "}
                  <span className="text-[#fec900] font-bold">+91 93001 10033</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons - Now properly positioned */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link 
            to="/admissions" 
            className="bg-[#0051a8] hover:bg-[#004080] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
          >
            Apply Now
          </Link>
          <Link 
            to="/about/our-story" 
            className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold hover:bg-white/20 hover:border-white hover:scale-105 transition-all duration-300 hover:-translate-y-1"
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
        
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        a:hover {
          animation: gentle-float 2s ease-in-out infinite;
        }

        /* Highlight animation for important info */
        @keyframes highlight-pulse {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(254, 201, 0, 0.5);
          }
          50% { 
            text-shadow: 0 0 20px rgba(254, 201, 0, 0.8), 0 0 30px rgba(254, 201, 0, 0.4);
          }
        }

        .text-\\[\\#fec900\\] {
          animation: highlight-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}