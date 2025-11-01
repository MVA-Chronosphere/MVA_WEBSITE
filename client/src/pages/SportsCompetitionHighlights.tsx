// FileName: SportsCompetitionHighlights.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Medal, Award, Users, ZoomIn, Play, Calendar, MapPin, ExternalLink } from "lucide-react";

const SportsCompetitionHighlights: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

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
        "/sports-competitions/athletics-1.jpg",
        "/sports-competitions/athletics-2.jpg",
        "/sports-competitions/athletics-3.jpg"
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
        "/sports-competitions/kabaddi-1.jpg",
        "/sports-competitions/kabaddi-2.jpg",
        "/sports-competitions/kabaddi-3.jpg"
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
        "/sports-competitions/table-tennis-1.jpg",
        "/sports-competitions/table-tennis-2.jpg"
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
        "/sports-competitions/yogasana-1.jpg",
        "/sports-competitions/yogasana-2.jpg"
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
        "/sports-competitions/relay-1.jpg",
        "/sports-competitions/relay-2.jpg"
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
        "/sports-competitions/ceremony-1.jpg",
        "/sports-competitions/ceremony-2.jpg",
        "/sports-competitions/ceremony-3.jpg"
      ],
      videos: []
    }
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Competitions", count: competitionImages.length },
    { id: "Athletics", name: "Athletics", count: competitionImages.filter(c => c.category === "Athletics").length },
    { id: "Kabaddi", name: "Kabaddi", count: competitionImages.filter(c => c.category === "Kabaddi").length },
    { id: "Table Tennis", name: "Table Tennis", count: competitionImages.filter(c => c.category === "Table Tennis").length },
    { id: "Yogasana", name: "Yogasana", count: competitionImages.filter(c => c.category === "Yogasana").length },
    { id: "Awards", name: "Awards", count: competitionImages.filter(c => c.category === "Awards").length }
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-16">
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
              <Trophy className="w-12 h-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Sports Competition Highlights</h1>
              <Medal className="w-12 h-12 text-yellow-400" />
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Celebrating our athletes' outstanding performances in CBSE Cluster West Zone and national-level competitions
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Trophy, label: "Gold Medals", value: "12", color: "bg-yellow-500" },
            { icon: Medal, label: "Silver Medals", value: "8", color: "bg-gray-500" },
            { icon: Award, label: "Bronze Medals", value: "6", color: "bg-amber-600" },
            { icon: Users, label: "National Qualifiers", value: "15+", color: "bg-blue-600" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.name}
                <span className={`text-sm px-2 py-1 rounded ${
                  activeCategory === category.id 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Competition Gallery */}
        <div className="space-y-12">
          {filteredCompetitions.map((competition) => (
            <section 
              key={competition.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Competition Header */}
              <div className="bg-blue-700 text-white p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-yellow-300" />
                      <span className="text-yellow-300 font-semibold">{competition.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{competition.title}</h2>
                    <div className="flex flex-wrap gap-4 text-white/90">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{competition.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{competition.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <h4 className="font-semibold mb-2 text-yellow-300">Achievements</h4>
                    <div className="space-y-1">
                      {competition.achievements.slice(0, 3).map((achievement, idx) => (
                        <div key={idx} className="text-sm text-white/90">• {achievement}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Content */}
              <div className="p-6">
                <p className="text-gray-700 text-lg mb-6">
                  {competition.description}
                </p>

                {/* Images */}
                {competition.images.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h4>
                    <div className={`grid gap-4 ${
                      competition.images.length === 1 ? 'grid-cols-1' :
                      competition.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}>
                      {competition.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                          onClick={() => openImageModal(image)}
                        >
                          <img
                            src={image}
                            alt={`${competition.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-end p-4">
                            <div className="text-white opacity-0 hover:opacity-100 transition-opacity">
                              <div className="font-semibold">Click to enlarge</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 mb-8">
          <div className="bg-blue-600 rounded-xl p-8 text-white shadow-lg">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proud of Our Champions!
            </h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Our athletes continue to bring glory to Macro Vision Academy through their dedication, 
              sportsmanship, and exceptional performances in national-level competitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBackToAchievements}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Sports Achievements
              </button>
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
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SportsCompetitionHighlights;