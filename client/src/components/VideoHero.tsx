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
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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

      {/* ✨ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

      {/* 🪩 Text Content (Centered Vertically & Horizontally) */}
      <div className="relative z-20 w-[90%] md:w-[70%] lg:w-[55%] text-center flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-black leading-tight mb-4">
          <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 bg-clip-text text-transparent drop-shadow-2xl">
            Macro Vision Academy
          </span>
        </h1>

        {/* Animated Tagline */}
        <p className="text-white text-base md:text-lg font-medium leading-relaxed mb-5">
          Empowering minds through{" "}
          <span key={i} className="font-semibold text-white/90 fade-in">
            {words[i]}
          </span>
          , Values & Holistic Development
        </p>

        {/* Admission Info */}
        <div className="text-white text-sm md:text-base font-semibold mb-5">
          Admissions 2026:{" "}
          <span className="text-[#fec900] font-extrabold glow-pulse">
            4th & 18th Jan
          </span>
          <br />
          <span className="text-xs md:text-sm font-normal">
            Contact:{" "}
            <span className="text-[#fec900] font-bold">93025 11111</span> |{" "}
            <span className="text-[#fec900] font-bold">93001 10033</span>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <Link
            to="/admissions"
            className="bg-[#0051a8] hover:bg-[#004080] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm md:text-base text-center"
          >
            Apply Now
          </Link>
          <Link
            to="/about/our-story"
            className="bg-white/15 border border-white/40 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-white/25 hover:border-white hover:scale-105 transition-all duration-300 text-sm md:text-base text-center"
          >
            Explore MVA
          </Link>
        </div>
      </div>

      {/* ✨ Style Animations */}
      <style>{`
        .fade-in {
          animation: fadeIn 600ms ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .glow-pulse {
          animation: glow 2s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 6px rgba(254,201,0,0.35); }
          50% { text-shadow: 0 0 14px rgba(254,201,0,0.65); }
        }
      `}</style>
    </div>
  );
}
