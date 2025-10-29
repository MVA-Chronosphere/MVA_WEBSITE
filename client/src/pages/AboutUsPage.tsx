import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Timeline from "@/components/Timeline";
import VideoEmbed from "@/components/VideoEmbed";

const timelineEvents = [
  {
    year: "1991",
    title: "The First Spark",
    description: "The journey began with Sonu Coaching Classes, founded by Mr. Anand Prakash Chouksey to ignite the potential of students preparing for competitive exams in Burhanpur."
  },
  {
    year: "1998",
    title: "Birth of a Vision",
    description: "A revolutionary idea took shape with the launch of 'New Vision,' which masterfully integrated competitive exam preparation directly into the state board school curriculum."
  },
  {
    year: "2002",
    title: "The Academy Awakens",
    description: "Macro Vision Academy was established as a premier CBSE residential school, dedicated to preparing students for national and international exams while fostering their holistic development."
  },
  {
    year: "2009",
    title: "Paving the Way",
    description: "A landmark moment! Our first 12th-grade batch graduated, with a brilliant young woman making history by securing a coveted spot in IIT Delhi through the JEE."
  },
  {
    year: "2015",
    title: "An Apple Partnership",
    description: "In a milestone collaboration, Macro Vision was distinguished as India's first residential 'Apple Distinguished School,' marking a new era of technology-infused education."
  },
  {
    year: "2022",
    title: "The Grand Stage",
    description: "The family grew with the launch of Macro Vision School in Khandwa. The same year, we unveiled the Anhad Anand Auditorium, one of the world's largest school auditoriums."
  },
  {
    year: "2025",
    title: "The Tech Leap",
    description: "Celebrating a historic All India Rank of 30 in JEE-Mains, MVA pushed the boundaries of innovation by launching Chronosphere—India's first school-based futuristic technology lab."
  }
];

export default function AboutUsPage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for smooth scrolling to sections
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    // Handle mobile touch interactions for flip cards
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;

    const handleTouchStart = (event: Event) => {
      const touchEvent = event as TouchEvent;
      if (window.innerWidth <= 768) {
        const touch = touchEvent.touches[0];
        touchStartY = touch.clientY;
        touchStartX = touch.clientX;
        touchStartTime = Date.now();
      }
    };

    const handleTouchEnd = (event: Event) => {
      const touchEvent = event as TouchEvent;
      if (window.innerWidth <= 768) {
        const touch = touchEvent.changedTouches[0];
        const touchEndY = touch.clientY;
        const touchEndX = touch.clientX;
        const touchEndTime = Date.now();
        
        const deltaY = Math.abs(touchEndY - touchStartY);
        const deltaX = Math.abs(touchEndX - touchStartX);
        const deltaTime = touchEndTime - touchStartTime;
        
        // Only flip if it's a quick tap (not a scroll)
        // and the movement is minimal
        if (deltaTime < 300 && deltaY < 10 && deltaX < 10) {
          event.preventDefault();
          const target = event.currentTarget as HTMLElement;
          
          // Check if this card is already flipped
          const isCurrentlyFlipped = target.classList.contains('flipped');
          
          // First, remove 'flipped' class from all cards
          const allFlipCards = document.querySelectorAll('.flip-card');
          allFlipCards.forEach(card => {
            card.classList.remove('flipped');
          });
          
          // If the tapped card wasn't previously flipped, flip it
          // If it was flipped, leave it unflipped (return to front)
          if (!isCurrentlyFlipped) {
            target.classList.add('flipped');
          }
        }
      }
    };

    const handleClick = (event: Event) => {
      // Only handle click events on desktop (not mobile)
      if (window.innerWidth > 768) {
        // Let desktop hover work normally, no click handling needed
        return;
      }
    };

    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
      card.addEventListener('touchstart', handleTouchStart, { passive: true });
      card.addEventListener('touchend', handleTouchEnd);
      card.addEventListener('click', handleClick);
    });

    // Cleanup event listeners
    return () => {
      flipCards.forEach(card => {
        card.removeEventListener('touchstart', handleTouchStart);
        card.removeEventListener('touchend', handleTouchEnd);
        card.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen font-['Maven_Pro',_sans-serif]">
      <div className="bg-gradient-to-r from-primary via-[#0055A4] to-[#1E88E5] text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">About Macro Vision Academy</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
            Empowering minds, nurturing excellence through holistic education since 1995
          </p>
        </div>
      </div>

      <section className="py-8 sm:py-12 lg:py-16 bg-background" id="our-story">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center underline decoration-2 underline-offset-4">Our Journey</h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-stretch min-h-[700px] lg:min-h-[600px] border-2 border-blue-900 rounded-lg bg-white/70 backdrop-blur-sm">
            {/* Left Side - Vision and Mission */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 lg:p-8 xl:p-12 space-y-8 lg:space-y-10">
              {/* Vision */}
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] underline decoration-2 underline-offset-4">
                  VISION
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-['Maven_Pro']">
                  To be a centre of excellence that transforms young minds into confident, 
                  compassionate, and innovative leaders who shape a better world as exemplary 
                  global citizens.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* Mission */}
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] underline decoration-2 underline-offset-4">
                  MISSION
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-['Maven_Pro']">
                  "We strive to shape ethical passionate and visionary individuals who, with 
                  confidence and dedication, transform society – empowered by modern technology 
                  and guided by expert mentors."
                </p>
              </div>
            </div>

            {/* Center Slanting Line - Only visible on large screens */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-10">
              <div className="w-1 h-full bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 transform skew-x-12 origin-center"></div>
            </div>

            {/* Mobile Divider */}
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 my-8"></div>

            {/* Right Side - Values */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 lg:p-8 xl:p-12 lg:pl-16 xl:pl-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] mb-6 lg:mb-8 underline decoration-2 underline-offset-4">
                VALUES
              </h2>
              
              <div className="space-y-4 lg:space-y-6">
                {/* Respect for Time */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro']">
                      Respect for Time - Valuing Time
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                      Actively Managing and honouring every moment
                    </p>
                  </div>
                </div>

                {/* Excellence & Refinement */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro']">
                      Excellence & Refinement - Striving for Excellence
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                      Continuously improving and bringing out the best.
                    </p>
                  </div>
                </div>

                {/* Humility */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro']">
                      Humility - Practicing Humility
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                      Leading with respect and a humble heart.
                    </p>
                  </div>
                </div>

                {/* Inclusiveness */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro']">
                      Inclusiveness - Fostering Inclusion
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                      Creating space where everyone feels valued.
                    </p>
                  </div>
                </div>

                {/* Integrity */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro']">
                      Integrity - Living with Integrity
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                      Being honest, ethical, and true to values
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background" id="founders-vision">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">Founder's Vision</h2>
          <VideoEmbed 
            title="Message from Our Founders - Anand Sir and Manjusha Mam"
            description="Hear directly from our visionary founders about their dream of creating an institution that transforms lives through education."
          />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30" id="our-society">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 font-['Maven_Pro'] underline decoration-2 underline-offset-4">
              Our Society
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3 font-['Maven_Pro']">
              ANAND EDUCATIONAL, TECHNICAL & VOCATIONAL SOCIETY
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold font-['Maven_Pro']">
              Serving Society with Innovation, Excellence and Heart
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* Vision */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3v18h18v-2H5V3H3zm4 12h2v2H7v-2zm0-4h2v2H7v-2zm0-4h2v2H7v-2zm4 8h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2v-2zm4 8h2v2h-2v-2zm0-4h2v2h-2v-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 font-['Maven_Pro']">
                  Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
                To responsibly and ethically apply innovation across all spheres, uphold global quality 
                standards in every endeavor, and contribute meaningfully to the advancement of society.
              </p>
            </div>

            {/* Mission */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 font-['Maven_Pro']">
                  Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
                To serve society with a dedicated, honest, hardworking, and skilled team by delivering 
                high-quality and ethical education, healthcare, and skill development services, thereby 
                contributing to the holistic upliftment of communities.
              </p>
            </div>
          </div>

          {/* Our Story */}
          <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            {/* Top-Left L-Border */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
            <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
            {/* Bottom-Right L-Border */}
            <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
            <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 font-['Maven_Pro']">
                Our Story
              </h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
                Anand Educational Technical and Vocational Society initiated in 1998 with the aim of imparting 
                quality education, developing educational awareness, training the students for various competitive 
                exams, and skill-oriented courses for shaping the future of India.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
                Our initial step was with the inception of New Vision Hr. Sec. School [Affiliate to M.P. Board, Bhopal]. 
                The efficient and devoted staff members have been successful in setting and maintaining high standards 
                and new trends in the field of education. The untiring efforts of our scholars resulted in unimaginable 
                and first-rate outcomes, which we have proved with our excellent results. Making New Vision the best 
                school of State Board within three year of its making. With the core objective to impart a metropolitan 
                standard of education, Macro Vision Academy was started in the 2002-2003 session [Affiliated to C.B.S.E., New Delhi].
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Our Ventures */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2V9h-2V7h8v12z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 font-['Maven_Pro']">
                  Our Ventures
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    All is Well Multispecialty Hospital
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    NaCl Restaurant
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Sir Taj Farms and Training Centre
                  </p>
                </div>
              </div>
            </div>

            {/* Our Pillars */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.28-1.74-2.46-1.74s-2.12.72-2.46 1.74L12.5 16H15v6h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63C7.12 7.35 6.18 6.63 5 6.63s-2.12.72-2.46 1.74L0 16h2.5v6h5z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 font-['Maven_Pro']">
                  Our Pillars
                </h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    President, Mrs. Manjusha Chouksey
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Vice-President, Mr. Sudhir Mahajan
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Secretary, Mr. Anand Prakash Chouksey
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Joint Secretary, Mrs. Vandana Patel
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Treasurer, Mr. Kabir Chouksey
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Member, Mrs. Devanshi Chouksey
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                  <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro']">
                    Member, Ms. Antra Chouksey
                  </p>
                </div>
              </div>
            </div>

            {/* Our Future Plans */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-8 md:col-span-2 lg:col-span-1">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 font-['Maven_Pro']">
                  Our Future Plans
                </h3>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1">➤</div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-['Maven_Pro']">
                  In order to further expand our vision for comprehensive medical care and silver highly 
                  skilled professionals, The Society further plans for a separate block for Oncology 
                  (Cancer Department) by 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30" id="leadership">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-['Maven_Pro'] underline decoration-black-900 decoration-2 underline-offset-4">Our Leadership</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
              At Macro Vision Academy, strong leadership is the foundation of our success. Guided by our Founder's vision to transform 
              education in Burhanpur and led by an experienced academic team, we ensure that every child receives world-class learning 
              with values at its core.
            </p>
          </div>
          
          {/* Founders Row */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-5xl mx-auto">
            {/* Anand Prakash Chouksey */}
            <div className="flip-card h-72 sm:h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Anand sir.png" 
                    alt="Mr. Anand Prakash Chouksey" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Anand Prakash Chouksey</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Founder & Chairman</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      30+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Anand Prakash Chouksey</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Founder & Chairman</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Our leadership is headed by Mr. Anand Prakash Chouksey, a man of vision whose life's work reflects unwavering commitment to education, healthcare, and community development. Recently honored with the 25th International Mother Teresa Award. From age 15, he chose teaching over engineering, established Sonu Coaching Classes, and founded New Vision School. He founded Macro Vision Academy in 2002–03, which grew into a top CBSE school. In 2017, he established the All is Well Multispeciality Hospital. Through education and healthcare, he has dedicated his life to empowering people and shaping a brighter future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manjusha Chouksey */}
            <div className="flip-card h-72 sm:h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/manjusha mam.png" 
                    alt="Mrs. Manjusha Chouksey" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Manjusha Chouksey</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Founder & Academic Director</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      20+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Manjusha Chouksey</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Founder & Academic Director</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mrs. Manjusha Chouksey, President of Anand Educational Technical and Vocational Society, is a woman of vision, wisdom, and inspiration. A Gold Medalist in Botany (M.Sc.), she began as a Biology teacher and became Founder of Macro Vision Academy. For over two decades, she has been the guiding force behind MVA's success. Known as Manju Ma'am, she leads the competitive exam wing and is admired for innovative teaching methods and mentorship. Her workshops including Mid-Brain Activation have touched thousands of students. Honored with Times Women Achievers Award in 2023, she continues to inspire generations to strive for excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kabir Chouksey */}
            <div className="flip-card h-72 sm:h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Mr. Kabir Chouksey.png" 
                    alt="Mr. Kabir Chouksey" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Kabir Chouksey</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Director</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      8+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Kabir Chouksey</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Director</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mr. Kabir Chouksey, Director of Macro Vision Academy and All is Well Multispeciality Hospital, represents next-generation leadership. Serving as Treasurer for over eight years, his role has been instrumental in transforming both institutions. He's the visionary behind Chronosphere Innovation Lab with Coding Labs, AI & ML Labs, Advanced Robotics. A graduate of Australian National University on full scholarship, he founded Sir Taj Farms Training Centre in 2018. During the pandemic, he demonstrated fearlessness ensuring quality healthcare. At a young age, he embodies innovation, decisiveness, and passion, preparing students to lead, innovate, and serve society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Devanshi Chouksey */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Mrs. Devanshi Chouksey.png" 
                    alt="Ms. Devanshi Chouksey" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1 font-['Maven_Pro']">Mrs. Devanshi Chouksey</h3>
                    <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base font-['Maven_Pro']">Director</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-['Maven_Pro'] font-semibold">
                      4+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Devanshi Chouksey</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Director</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc, M.Sc (Ireland), PGD & PGC
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      With 4+ years of experience in educational administration, Mrs. Chouksey brings innovative approaches to academic excellence and student development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Antra Chouksey */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Ms. Antra Chouksey.png" 
                    alt="Ms. Antra Chouksey" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1 font-['Maven_Pro']">Ms. Antra Chouksey</h3>
                    <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base font-['Maven_Pro']">Education Development Manager</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-['Maven_Pro'] font-semibold">
                      3 Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Ms. Antra Chouksey</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Education Development Manager</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.A EdTech (UK), B.Sc (USA)
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Ms. Chouksey spearheads educational development initiatives with 3+ years of experience in curriculum design and educational technology integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jasvir Singh Parmar */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Mr. Jasvir Singh Parmar.png" 
                    alt="Mr. Jasvir Singh Parmar" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1 font-['Maven_Pro']">Mr. Jasvir Singh Parmar</h3>
                    <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base font-['Maven_Pro']">Principal</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-['Maven_Pro'] font-semibold">
                      32 Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Jasvir Singh Parmar</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Principal</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.A (Lit) & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mr. Parmar brings 32+ years of educational leadership, dedicated to fostering academic excellence and character development in students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Monika Agrawal */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Mrs. Monika Agrawal.png"
                    alt="Mrs. Monika Agrawal"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1 font-['Maven_Pro']">Mrs. Monika Agrawal</h3>
                    <p className="text-blue-900 font-medium mb-1 text-sm sm:text-base font-['Maven_Pro']">Vice-Principal</p>
                    <p className="text-blue-900 text-xs sm:text-sm font-['Maven_Pro'] font-semibold">
                      25 Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Monika Agrawal</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Vice-Principal</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc. (Chemistry) & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mrs. Agrawal brings 25+ years of experience in academic administration and educational leadership, specializing in science education and student mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Wing Section */}
      <section className="py-12 sm:py-16 bg-muted/30" id="senior-wing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-['Maven_Pro'] underline decoration-black-900 decoration-2 underline-offset-4">Senior Wing</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
              Our experienced senior faculty members bring decades of expertise and dedication to ensure academic excellence and holistic development of our students.
            </p>
          </div>
          
          {/* First Row - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Vijay Sukhwani */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Vijay Sukhwani.png" 
                    alt="Vijay Sukhwani" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Vijay Sukhwani</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Chief Technical Officer Group</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      20+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Vijay Sukhwani</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Chief Technical Officer Group</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc (Mathematics) & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      With 20+ years of experience in technical education and mathematics, Mr. Sukhwani leads our technical initiatives and ensures innovative teaching methodologies across the institution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Santosh Siloriya */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Dr. Santosh Siloriya.png" 
                    alt="Dr. Santosh Siloriya" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-dr-santosh"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Dr. Santosh Siloriya</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Head of Biology Department</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      22+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Dr. Santosh Siloriya</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Head of Biology Department</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> BAMS
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Dr. Siloriya brings 22+ years of expertise in biological sciences and medical education, leading our biology department with innovative teaching methods and research-oriented approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neha Suri */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Neha Suri.png" 
                    alt="Neha Suri" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-neha-suri"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Neha Suri</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Head of Commerce Department</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      20+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Neha Suri</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Head of Commerce Department</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Com, MBA & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      With 20+ years in commerce education, Ms. Suri combines academic excellence with practical business insights to prepare students for modern commercial challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Arun Sharma */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img 
                    src="/Leadership img/Dr. Arun Sharma.png" 
                    alt="Dr. Arun Sharma" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-dr-arun"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Dr. Arun Sharma</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Chief Residential Warden</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      23+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Dr. Arun Sharma</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Chief Residential Warden</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.P.Ed & Ph.D
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Dr. Sharma oversees residential facilities with 23+ years of experience, ensuring a safe, nurturing environment that promotes holistic student development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - 3 Cards (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Pratibha Nair */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Pratibha Nair.png"
                    alt="Pratibha Nair"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-pratibha"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Pratibha Nair</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Deputy Principal Divine</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      22+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Pratibha Nair</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Deputy Principal Divine</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc. Zoology, PGD & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Ms. Nair brings 22+ years of educational leadership, specializing in life sciences and academic administration with a focus on student-centered learning approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ashay Tandon */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Ashay Tandon.png"
                    alt="Ashay Tandon"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-ashay"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Ashay Tandon</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      14+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Ashay Tandon</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Tech & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mr. Tandon coordinates academic programs with 14+ years of technical and educational expertise, ensuring seamless integration of technology in learning processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Pradeep Kumar Singh */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Dr. Pradeep Kumar Singh.png"
                    alt="Dr. Pradeep Kumar Singh"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90 leader-dr-pradeep"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Dr. Pradeep Kumar Singh</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      14+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Dr. Pradeep Kumar Singh</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc, B.Ed & PHD
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Dr. Singh coordinates academic excellence with 14+ years of research and teaching experience, focusing on innovative pedagogical approaches and curriculum development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Spacer so the 2nd row uses the same 4-column layout as the first row on large screens */}
            <div aria-hidden="true" className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Middle Wing Section */}
      <section className="py-12 sm:py-16 bg-background" id="middle-wing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-['Maven_Pro'] underline decoration-black-900 decoration-2 underline-offset-4">Middle Wing</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
              Our dedicated middle wing faculty brings exceptional expertise and commitment to nurture young minds during their crucial developmental years.
            </p>
          </div>
          
          {/* Middle Wing Row - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Vibha Jetly */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Vibha Jetly.png"
                    alt="Vibha Jetly"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Vibha Jetly</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Deputy Principal Petals</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      23+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Vibha Jetly</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Deputy Principal Petals</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.A Sociology & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      With 23+ years of experience in educational leadership, Ms. Jetly brings expertise in sociology and educational development to guide our middle wing students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sonia Chhabra */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Sonia Chhabra.png"
                    alt="Sonia Chhabra"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Sonia Chhabra</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      10+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Sonia Chhabra</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.Sc (Mathematics) & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Ms. Chhabra coordinates academic programs with 10+ years of expertise in mathematics education, ensuring excellence in STEM learning for middle wing students.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jaiki Khatri */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Jaiki Khatri.png"
                    alt="Jaiki Khatri"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Jay Khatri</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      17+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Jay Khatri</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Academic Coordinator</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> MCA
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mr. Khatri brings 17+ years of technology and computer applications expertise, leading digital education initiatives and academic coordination for middle wing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaurav Chhabra */}
            <div className="flip-card h-64 sm:h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                  <img
                    src="/Leadership img/Gaurav Chhabra.png"
                    alt="Gaurav Chhabra"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mr. Gaurav Chhabra</h3>
                    <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Head of Training and Development</p>
                    <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                      24+ Years Experience
                    </p>
                  </div>
                </div>
                {/* Back */}
                <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                  <div className="h-full overflow-y-auto">
                    <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mr. Gaurav Chhabra</h3>
                    <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Head of Training and Development</p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                      <strong>Qualification:</strong> M.A, MBA & B.Ed
                    </p>
                    <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                      Mr. Chhabra leads training and development with 24+ years of experience, combining business acumen with educational expertise to enhance teaching methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junior Wing Section */}
      <section className="py-12 sm:py-16 bg-background" id="junior-wing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-['Maven_Pro'] underline decoration-black-900 decoration-2 underline-offset-4">Junior Wing</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
              Our experienced junior wing faculty provides nurturing guidance and foundational learning experiences for our youngest learners.
            </p>
          </div>
          
          {/* Junior Wing Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl w-full">
              {/* Sheetal Popli */}
              <div className="flip-card h-64 sm:h-72">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                    <img
                      src="/Leadership img/Sheetal Popli.png"
                      alt="Sheetal Popli"
                      className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Sheetal Popli</h3>
                      <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Deputy Principal Mantra</p>
                      <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                        24+ Years Experience
                      </p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                    <div className="h-full overflow-y-auto">
                      <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Sheetal Popli</h3>
                      <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Deputy Principal Mantra</p>
                      <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                        <strong>Qualification:</strong> M.A & B.Ed
                      </p>
                      <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                        With 24+ years of experience in educational leadership, Ms. Popli brings expertise in arts and education to guide our junior wing students with care and dedication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fatima Syed */}
              <div className="flip-card h-64 sm:h-72">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-card border-4 border-blue-900 rounded-lg overflow-hidden relative">
                    <img
                      src="/Leadership img/Fatima Syed.png"
                      alt="Fatima Syed"
                      className="absolute inset-0 w-full h-full object-cover object-center scale-90"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-2 sm:p-3 h-1/3">
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 font-['Maven_Pro']">Mrs. Fatima Syed</h3>
                      <p className="text-blue-900 font-medium mb-1 text-xs sm:text-sm font-['Maven_Pro']">Academic Coordinator</p>
                      <p className="text-blue-900 text-xs font-['Maven_Pro'] font-semibold">
                        16+ Years Experience
                      </p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back bg-card border border-card-border rounded-lg p-2 sm:p-3 overflow-hidden">
                    <div className="h-full overflow-y-auto">
                      <h3 className="text-xs sm:text-sm font-bold text-card-foreground mb-2 font-['Maven_Pro']">Mrs. Fatima Syed</h3>
                      <p className="text-primary font-medium mb-2 text-xs font-['Maven_Pro']">Academic Coordinator</p>
                      <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro'] mb-2">
                        <strong>Qualification:</strong> B.Com (Comp) & D.El.Ed
                      </p>
                      <p className="text-muted-foreground text-xs leading-tight font-['Maven_Pro']">
                        Ms. Syed coordinates academic programs with 16+ years of expertise in commerce and elementary education, ensuring quality learning experiences for junior wing students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Image loading optimizations for leadership section */
        #leadership .flip-card img {
          /* Performance optimizations */
          contain: layout style paint;
          content-visibility: auto;
          transform: translateZ(0); /* Hardware acceleration */
        }
        
        /* Preload critical images */
        #leadership .flip-card:nth-child(-n+3) img {
          content-visibility: visible; /* Ensure first 3 images are immediately visible */
        }
        
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          will-change: transform;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.4s ease-in-out;
          transform-style: preserve-3d;
          will-change: transform;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          will-change: transform;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
          border: 4px solid #1e3a8a !important; /* Blue-900 border like front cards */
        }

        /* Mobile optimizations for better performance */
        @media (max-width: 768px) {
          .flip-card {
            perspective: 800px;
          }
          
          .flip-card-inner {
            transition: transform 0.3s ease-out;
          }
          
          .flip-card-front, .flip-card-back {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          
          .flip-card-back {
            transform: rotateY(180deg) translateZ(0);
            -webkit-transform: rotateY(180deg) translateZ(0);
            border: 4px solid #1e3a8a !important; /* Blue-900 border for mobile */
          }
          
          /* Optimize rendering on mobile */
          .flip-card-back .h-full {
            contain: layout style paint;
          }
        }
        
        /* Custom height for Leadership Team Row cards */
        #leadership .grid:last-child .flip-card {
          height: 16rem; /* h-64 */
        }
        
        @media (min-width: 640px) {
          #leadership .grid:last-child .flip-card {
            height: 18rem; /* sm:h-72 */
          }
        }
        
        @media (max-width: 768px) {
          .flip-card {
            height: 20rem; /* Increased height for better mobile visibility */
            margin-bottom: 1rem; /* Add spacing between cards */
          }
          
          .flip-card-inner {
            transition: transform 0.3s ease-out;
          }
          
          .flip-card-front, .flip-card-back {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }
          
          .flip-card-back {
            transform: rotateY(180deg) translateZ(0);
            -webkit-transform: rotateY(180deg) translateZ(0);
          }
          
          /* Ensure images are properly contained on mobile */
          .flip-card img {
            object-fit: cover !important; /* Force cover for consistent image display */
            max-width: 100%;
            max-height: 100%;
            /* Image performance optimizations */
            will-change: transform;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            transform: translateZ(0); /* Force hardware acceleration */
          }
          
          /* Specific mobile scaling for leadership images */
          #leadership .flip-card img {
            transform: none !important;
            object-fit: cover !important; /* Fill card area while keeping center */
            object-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
          
          /* Increase card height for leadership on mobile */
          #leadership .flip-card {
            height: 22rem !important; /* Increased height for better image space */
          }
          
          /* Senior/Middle/Junior Wing mobile adjustments */
          #senior-wing .flip-card img,
          #middle-wing .flip-card img,
          #junior-wing .flip-card img {
            transform: none !important;
            object-fit: cover !important;
            object-position: center center !important;
            width: 100% !important;
            height: 100% !important;
          }

          #senior-wing .flip-card .absolute.bottom-0 {
            height: auto !important; /* Auto height for consistent text display */
            padding: 0.25rem !important; /* Reduce padding */
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          
          /* Middle Wing mobile adjustments */
          #middle-wing .flip-card img {
            transform: scale(0.85) !important;
            object-fit: cover !important;
          }
          
          #middle-wing .flip-card .absolute.bottom-0 {
            height: auto !important;
            padding: 0.25rem !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          
          /* Junior Wing mobile adjustments */
          #junior-wing .flip-card img {
            transform: scale(0.85) !important;
            object-fit: cover !important;
          }
          
          #junior-wing .flip-card .absolute.bottom-0 {
            height: auto !important;
            padding: 0.25rem !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          
          /* Universal text sizing for all sections on mobile */
          .flip-card h3 {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
            margin-bottom: 0.125rem !important;
            font-weight: 700 !important;
          }
          
          .flip-card p {
            font-size: 0.625rem !important; /* smaller than text-xs */
            line-height: 0.875rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          /* Fix text area for leadership team cards on mobile */
          #leadership .grid:last-child .flip-card .absolute.bottom-0 {
            height: auto !important; /* Auto height for consistent text display */
            padding: 0.25rem !important; /* Reduce padding */
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }
          
          /* Adjust text sizes for leadership cards on mobile */
          #leadership .grid:last-child .flip-card h3 {
            font-size: 0.75rem !important; /* text-xs */
            line-height: 1rem !important;
            margin-bottom: 0.125rem !important;
            font-weight: 700 !important;
          }
          
          #leadership .grid:last-child .flip-card p {
            font-size: 0.625rem !important; /* smaller than text-xs */
            line-height: 0.875rem !important;
            margin-bottom: 0.125rem !important;
          }
          
          /* Optimize rendering on mobile */
          .flip-card-back .h-full {
            contain: layout style paint;
          }
          
          /* Mobile touch functionality */
          .flip-card.flipped .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          /* Touch interaction improvements for mobile */
          .flip-card {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg); /* Default hover behavior */
          }
          
          @media (max-width: 768px) {
            .flip-card:hover .flip-card-inner {
              transform: none; /* Disable hover on mobile */
            }
            
            .flip-card.flipped .flip-card-inner {
              transform: rotateY(180deg) !important;
            }
            
            /* Add touch feedback */
            .flip-card:active {
              transform: scale(0.98);
              transition: transform 0.1s ease;
            }
          }

          /* Enforce uniform card heights across sections to avoid row mismatches */
          /* Mobile first: a consistent taller card for readability */
          .flip-card {
            height: 22rem !important; /* mobile uniform height */
          }

          /* Small screens and up: slightly smaller but uniform */
          @media (min-width: 640px) {
            .flip-card {
              height: 18rem !important; /* matches sm:h-72 */
            }
          }

          /* Large screens and up: set a consistent height that fits the layout */
          @media (min-width: 1024px) {
            .flip-card {
              height: 20rem !important; /* visually balanced with founders row */
            }
          }
        }
      `}</style>

      <style>{`
        /* Senior wing specific: enforce same flip-card heights as global overrides so rows match */
        #senior-wing .flip-card { height: 22rem !important; }
        @media (min-width: 640px) { #senior-wing .flip-card { height: 18rem !important; } }
        @media (min-width: 1024px) { #senior-wing .flip-card { height: 20rem !important; } }
      `}</style>

      <style>{`
        /* Final overrides: enforce uniform flip-card heights and image handling
           Placed at the end to override earlier rules with !important where needed. */

        /* Mobile-first uniform heights */
        .flip-card {
          height: 22rem !important; /* mobile uniform height */
        }

        /* Small screens and up */
        @media (min-width: 640px) {
          .flip-card {
            height: 18rem !important; /* matches sm:h-72 */
          }
        }

        /* Large screens and up */
        @media (min-width: 1024px) {
          .flip-card {
            height: 20rem !important; /* visually balanced */
          }
        }

        /* Ensure images fill their card but center by default */
        #senior-wing .flip-card img,
        #middle-wing .flip-card img,
        #junior-wing .flip-card img,
        #leadership .flip-card img {
          object-fit: cover !important;
          object-position: center center !important;
          width: 100% !important;
          height: 100% !important;
          transform: none !important;
        }

      /* Specific fixes for the images the user reported as cropped on mobile.
        Use object-position: center top so the faces/head area is visible when cropped. */
        /* Per-image nudges: adjust Y offsets so faces are more visible when the image is cropped
           on narrow/mobile viewports. These values are conservative; adjust further if needed. */
        img.leader-dr-santosh { object-position: 50% 22% !important; }
        img.leader-neha-suri { object-position: 50% 18% !important; }
        img.leader-dr-arun { object-position: 50% 20% !important; }
        img.leader-pratibha { object-position: 50% 24% !important; }
        img.leader-ashay { object-position: 50% 28% !important; }
        img.leader-dr-pradeep { object-position: 50% 26% !important; }

        /* Remove any section-specific scaling that might still be present by overriding it */
        #middle-wing .flip-card img,
        #junior-wing .flip-card img {
          transform: none !important;
        }
      `}</style>

      <section className="py-12 sm:py-16 bg-muted/30" id="knowledge-partners">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 font-['Maven_Pro'] underline decoration-2 underline-offset-4">
              Our Knowledge Partners
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
              We are proud to collaborate with esteemed organizations that enhance our educational excellence and credibility.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {/* Central Board of Secondary Education */}
            <div className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group">
              <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                <img 
                  src="/cbse-logo.png" 
                  alt="CBSE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight">
                Central Board of Secondary Education
              </h3>
            </div>

            {/* Apple Distinguished School */}
            <div className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group">
              <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                <img 
                  src="/apple school.png" 
                  alt="Apple Distinguished School Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight">
                Apple Distinguished School
              </h3>
            </div>

            {/* Boarding School Association of India */}
            <div className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group">
              <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                <img 
                  src="/Boarding School Association of India.png" 
                  alt="Boarding School Association of India Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight">
                Boarding School Association of India
              </h3>
            </div>

            {/* FSSAI Accreditation */}
            <div className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group">
              <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                <img 
                  src="/FSSAI Accreditation.jpg" 
                  alt="FSSAI Accreditation Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight">
                FSSAI Accreditation
              </h3>
            </div>

            {/* Innoventure */}
            <div className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group">
              <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                <img 
                  src="/Innoventure.jpeg" 
                  alt="Innoventure Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight">
                Innoventure
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background" id="community-csr">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 sm:mb-12 text-center">Community and CSR</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
            <p className="mb-4 text-sm sm:text-base">
              At Macro Vision Academy, we believe in giving back to society and nurturing responsible citizens. 
              Our Community Service and Corporate Social Responsibility initiatives engage students in meaningful 
              projects that create positive social impact.
            </p>
            <p className="text-sm sm:text-base">
              From educational outreach programs to environmental conservation activities, we encourage our students 
              to actively participate in community development and understand their role in building a better world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
