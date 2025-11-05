// FileName: SportsCompetitionHighlights.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Medal, Award, Users, ZoomIn, Calendar, MapPin, Star } from "lucide-react";

const SportsCompetitionHighlights: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [imageLoading, setImageLoading] = useState<{[key: string]: boolean}>({});

  // Competition data
  const competitionImages = [
    {
      id: 1,
      title: "CBSE Cluster West Zone - Athletics Championship",
      category: "Athletics",
      date: "March 15, 2025",
      location: "Delhi Sports Complex",
      description: "Our athletes showcased exceptional performance in track and field events, securing multiple qualifications for national level competitions.",
      achievements: ["4 Gold Medals", "6 Silver Medals", "4 Bronze Medals", "12 National Qualifiers"],
      images: [
        "DSC04001.webp",
      ],
      videos: []
    },
    {
      id: 2,
      title: "National Kabaddi Tournament - Qualifiers",
      category: "Kabaddi",
      date: "February 22, 2025",
      location: "Indoor Stadium, Mumbai",
      description: "Dominant performance by both boys and girls teams, with exceptional raiding and defensive strategies.",
      achievements: ["2 Gold Medals (U-14 Boys & Girls)", "1 Silver Medal (U-17 Girls)", "1 Bronze Medal (U-17 Boys)"],
      images: [
        "DSC04086.webp",
      ],
      videos: []
    },
    {
      id: 3,
      title: "Inter-School Table Tennis Championship",
      category: "Table Tennis",
      date: "January 18, 2025",
      location: "School Sports Complex",
      description: "Precision and skill on display as our table tennis players competed against top schools in the region.",
      achievements: ["1 Bronze Medal", "National Qualification", "Best Emerging Player Award"],
      images: [
        "DSC04056.webp"
      ],
      videos: []
    },
    {
      id: 4,
      title: "State Level Yogasana Competition",
      category: "Yogasana",
      date: "December 10, 2024",
      location: "Yoga Center, Bhopal",
      description: "Grace, flexibility, and mental focus showcased in both individual and team yoga performances.",
      achievements: ["1 Bronze Medal (Individual)", "1 Silver Medal (Team)", "Artistic Performance Award"],
      images: [
        "DSC09255.webp",
      ],
      videos: []
    },
    {
      id: 5,
      title: "Relay Races - 4×400m Championship",
      category: "Athletics",
      date: "November 25, 2024",
      location: "School Track Field",
      description: "Teamwork and speed combined as our relay teams demonstrated perfect coordination and timing.",
      achievements: ["1 Gold Medal (U-17, 4×400m)", "1 Silver Medal (U-19, 4×400m)", "Fastest Lap Record"],
      images: [
        "DSC04081.webp"
      ],
      videos: []
    },
    {
      id: 6,
      title: "Annual Sports Award Ceremony",
      category: "Awards",
      date: "April 5, 2025",
      location: "Anhad Anand Auditorium",
      description: "Celebrating the achievements and dedication of our young athletes in a grand ceremony.",
      achievements: ["30+ Medals Distributed", "5 Special Achievement Awards", "Sportsmanship Awards"],
      images: [
        "DSC09314.webp",
        "DSC08148.webp"
      ],
      videos: []
    }
  ];

  const filteredCompetitions = activeCategory === "all" 
    ? competitionImages 
    : competitionImages.filter(competition => competition.category === activeCategory);

  const handleBackToAchievements = () => {
    navigate('/achievements#sports');
  };

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (imageId: string) => {
    setImageLoading(prev => ({ ...prev, [imageId]: false }));
  };

  const handleImageLoadStart = (imageId: string) => {
    setImageLoading(prev => ({ ...prev, [imageId]: true }));
  };

  // Fallback images for different sports categories
  const getFallbackImage = (category: string) => {
    const fallbacks: { [key: string]: string } = {
      Athletics: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      Kabaddi: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "Table Tennis": "https://images.unsplash.com/photo-1611956422829-8ae094d6b0c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      Yogasana: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      Awards: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    };
    return fallbacks[category] || "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
    <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <button
      onClick={handleBackToAchievements}
      className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      Back to Achievements
    </button>
    
    <div className="text-center">
      <div className="flex justify-center items-center gap-4 mb-6">
        <Trophy className="w-12 h-12 text-white-400" />
        <h1 className="text-4xl md:text-5xl font-bold">Sports Competition Highlights</h1>
        <Medal className="w-12 h-12 text-white-400" />
      </div>
      <p className="text-xl text-white/90 max-w-3xl mx-auto">
        Celebrating our athletes' outstanding performances in CBSE Cluster West Zone and national-level competitions
      </p>
    </div>
  </div>
</div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Trophy, label: "Gold Medals", value: "12", color: "bg-gradient-to-br from-yellow-500 to-yellow-600", shadow: "shadow-yellow-200" },
            { icon: Medal, label: "Silver Medals", value: "8", color: "bg-gradient-to-br from-gray-400 to-gray-500", shadow: "shadow-gray-200" },
            { icon: Award, label: "Bronze Medals", value: "6", color: "bg-gradient-to-br from-amber-600 to-amber-700", shadow: "shadow-amber-200" },
            { icon: Users, label: "National Qualifiers", value: "15+", color: "bg-gradient-to-br from-blue-600 to-blue-700", shadow: "shadow-blue-200" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Infosys Style Vertical Layout */}
        <div className="space-y-20">
          {filteredCompetitions.map((competition, index) => (
            <div
              key={competition.id}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Side - Single Image */}
                <div className="lg:w-1/2 relative">
                  <div 
                    className="relative h-72 lg:h-full cursor-pointer group overflow-hidden"
                    onClick={() => openImageModal(competition.images[0])}
                  >
                    {/* Loading Skeleton */}
                    {imageLoading[`${competition.id}-0`] && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <Trophy className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    
                    <img
                      src={competition.images[0]}
                      alt={competition.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      onLoad={() => handleImageLoad(`${competition.id}-0`)}
                      onLoadStart={() => handleImageLoadStart(`${competition.id}-0`)}
                      onError={(e) => {
                        e.currentTarget.src = getFallbackImage(competition.category);
                        handleImageLoad(`${competition.id}-0`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                      <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/30">
                          <ZoomIn className="w-5 h-5" />
                          <span className="font-semibold">Click to Enlarge</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-blue-600" />
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                          {competition.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {competition.title}
                  </h3>

                  <div className="flex items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center gap-2 bg-blue-50 rounded-2xl px-4 py-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{competition.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 rounded-2xl px-4 py-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">{competition.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {competition.description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-4 text-lg flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {competition.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-blue-800 font-medium group-hover:text-blue-900 transition-colors">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Images */}
                  {competition.images.length > 1 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-4 text-lg">More Photos</h4>
                      <div className="flex gap-3 overflow-x-auto pb-4">
                        {competition.images.slice(1).map((image, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all duration-300 hover:scale-105 relative group"
                            onClick={() => openImageModal(image)}
                          >
                            {/* Loading Skeleton */}
                            {imageLoading[`${competition.id}-${index + 1}`] && (
                              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                            )}
                            
                            <img
                              src={image}
                              alt={`${competition.title} ${index + 2}`}
                              className="w-full h-full object-cover"
                              onLoad={() => handleImageLoad(`${competition.id}-${index + 1}`)}
                              onLoadStart={() => handleImageLoadStart(`${competition.id}-${index + 1}`)}
                              onError={(e) => {
                                e.currentTarget.src = getFallbackImage(competition.category);
                                handleImageLoad(`${competition.id}-${index + 1}`);
                              }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Proud of Our Champions!
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our athletes continue to bring glory to Macro Vision Academy through their dedication, 
                sportsmanship, and exceptional performances in national-level competitions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBackToAchievements}
                  className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-3 justify-center group"
                >
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  Back to Sports Achievements
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-6xl max-h-full w-full">
            <div className="flex items-center justify-center h-full">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                onError={(e) => {
                  const category = filteredCompetitions.find(comp => 
                    comp.images.includes(selectedImage)
                  )?.category || "Athletics";
                  e.currentTarget.src = getFallbackImage(category);
                }}
              />
            </div>
            <button
              onClick={closeImageModal}
              className="absolute top-6 right-6 w-14 h-14 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-300 hover:scale-110 text-2xl font-bold backdrop-blur-sm border border-white/20"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Add custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SportsCompetitionHighlights;