interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

// Year number images for backgrounds
const getYearImage = (year: string) => {
  // Create SVG data URL for year number with blue background
  const svg = `
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#2563eb"/>
      <text x="200" y="220" font-family="Arial, sans-serif" font-size="80" font-weight="bold" text-anchor="middle" fill="white">${year}</text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="relative">
        {/* Center Line - Hidden on mobile */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-primary/50 h-full"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative">
                
                {/* Mobile Layout - Stacked */}
                <div className="block sm:hidden">
                  <div className="text-left mb-4">
                    <div 
                      className="text-2xl font-black text-primary drop-shadow-lg inline-block transition duration-200 cursor-pointer hover:text-blue-700 hover:scale-110"
                      style={{
                        textShadow: '2px 2px 0 rgba(37, 99, 235, 0.3), 4px 4px 0 rgba(37, 99, 235, 0.2), 6px 6px 15px rgba(37, 99, 235, 0.4)'
                      }}
                    >
                      {event.year}
                    </div>
                    <div className="text-base font-semibold text-gray-700 mt-1 inline-block border-b-2 border-primary pb-0.5">
                      {event.title}
                    </div>
                  </div>
                  <div className="pl-4">
                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Zigzag */}
                <div className="hidden sm:block">
                  {isEven ? (
                    // Even items: Year and Title on LEFT, Content on RIGHT
                    <div className="flex items-start">
                      {/* Left Side - Year and Title */}
                      <div className="flex-1 flex justify-end pr-8 lg:pr-12">
                        <div className="text-right">
                          <div 
                            className="text-3xl lg:text-4xl xl:text-5xl font-black text-primary drop-shadow-2xl transition duration-200 cursor-pointer hover:text-blue-700 hover:scale-110"
                            style={{
                              textShadow: '2px 2px 0 rgba(37, 99, 235, 0.3), 4px 4px 0 rgba(37, 99, 235, 0.2), 8px 8px 15px rgba(37, 99, 235, 0.4)'
                            }}
                          >
                            {event.year}
                          </div>
                          <div className="text-base lg:text-lg font-semibold text-gray-700 mt-2 inline-block border-b-2 border-primary pb-0.5">
                            {event.title}
                          </div>
                        </div>
                      </div>
                      
                      {/* Center Line Connection */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2"></div>
                      
                      {/* Right Side - Content */}
                      <div className="flex-1 pl-8 lg:pl-12">
                        <div className="pt-2">
                          <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Odd items: Content on LEFT, Year and Title on RIGHT
                    <div className="flex items-start">
                      {/* Left Side - Content */}
                      <div className="flex-1 pr-8 lg:pr-12">
                        <div className="pt-2 text-right">
                          <p className="text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Center Line Connection */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 mt-2"></div>
                      
                      {/* Right Side - Year and Title */}
                      <div className="flex-1 pl-8 lg:pl-12">
                        <div className="text-left">
                          <div 
                            className="text-3xl lg:text-4xl xl:text-5xl font-black text-primary drop-shadow-2xl transition duration-200 cursor-pointer hover:text-blue-700 hover:scale-110"
                            style={{
                              textShadow: '2px 2px 0 rgba(37, 99, 235, 0.3), 4px 4px 0 rgba(37, 99, 235, 0.2), 8px 8px 15px rgba(37, 99, 235, 0.4)'
                            }}
                          >
                            {event.year}
                          </div>
                          <div className="text-base lg:text-lg font-semibold text-gray-700 mt-2 inline-block border-b-2 border-primary pb-0.5">
                            {event.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
