import { useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { GraduationCap, Building2, Users, ArrowLeft, ArrowRight, MapPin, Briefcase, Star, Quote, Globe, TrendingUp, Heart, MessageCircle, Share2, ExternalLink, Mail, Lock, User, LogIn } from "lucide-react";

type Alumni = {
  id: string;
  full_name: string;
  image_url: string;
  grad_year?: number | null;
  company?: string | null;
  stream?: string | null;
  position?: string | null;
  location?: string | null;
  industry?: string | null;
  email?: string | null;
  linkedin?: string | null;
  created_at?: string | null;
};

const PAGE_SIZE = 24;

// Enhanced Pie Chart Component with Blue Color Theme
const PieChart = ({ data, colors, title }: { data: { label: string; value: number }[]; colors: string[]; title: string }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">{title}</h3>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="relative w-64 h-64">
          <svg width="256" height="256" viewBox="0 0 256 256" className="transform -rotate-90 drop-shadow-lg">
            {data.map((item, index) => {
              const percentage = item.value;
              const angle = (percentage / 100) * 360;
              const largeArcFlag = angle > 180 ? 1 : 0;

              const x1 = 128 + 128 * Math.cos(currentAngle * Math.PI / 180);
              const y1 = 128 + 128 * Math.sin(currentAngle * Math.PI / 180);
              const x2 = 128 + 128 * Math.cos((currentAngle + angle) * Math.PI / 180);
              const y2 = 128 + 128 * Math.sin((currentAngle + angle) * Math.PI / 180);

              const path = `M 128 128 L ${x1} ${y1} A 128 128 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

              const isActive = activeSegment === index || hoveredSegment === index;

              const segment = (
                <path
                  key={index}
                  d={path}
                  fill={colors[index % colors.length]}
                  stroke="white"
                  strokeWidth={isActive ? 4 : 2}
                  className="cursor-pointer transition-all duration-300"
                  style={{
                    filter: isActive ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' : 'none',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    transformOrigin: 'center'
                  }}
                  onMouseEnter={() => setHoveredSegment(index)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onClick={() => setActiveSegment(activeSegment === index ? null : index)}
                />
              );

              currentAngle += angle;
              return segment;
            })}

            {/* Inner circle for donut effect */}
            <circle cx="128" cy="128" r="60" fill="white" />
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">
                {activeSegment !== null ? data[activeSegment].value : total}%
              </div>
              <div className="text-sm text-gray-600">
                {activeSegment !== null ? data[activeSegment].label : 'Total'}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Legend */}
        <div className="flex-1 space-y-3 min-w-[280px]">
          {data.map((item, index) => {
            const isActive = activeSegment === index || hoveredSegment === index;
            return (
              <div
                key={item.label}
                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${isActive
                    ? 'bg-blue-100 border-blue-300 shadow-md scale-105'
                    : 'bg-gray-50 border-transparent hover:bg-gray-100'
                  }`}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => setActiveSegment(activeSegment === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-5 h-5 rounded-full shadow-sm transition-transform duration-300"
                    style={{
                      backgroundColor: colors[index],
                      transform: isActive ? 'scale(1.3)' : 'scale(1)'
                    }}
                  ></div>
                  <div>
                    <div className="font-semibold text-blue-900">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.value}% of alumni</div>
                  </div>
                </div>
                <div
                  className="text-lg font-bold transition-colors duration-300"
                  style={{ color: colors[index] }}
                >
                  {item.value}%
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Enhanced Bar Chart Component with Blue Colors
const BarChart = ({ data, colors, title }: { data: { label: string; value: number }[]; colors: string[]; title: string }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">{title}</h3>
      <div className="space-y-6">
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100;
          const isHovered = hoveredBar === index;

          return (
            <div
              key={item.label}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-900 text-lg">{item.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-blue-900">{item.value}%</span>
                  <div className="w-24 bg-gray-200 rounded-full h-3 shadow-inner">
                    <div
                      className="h-3 rounded-full transition-all duration-1000 shadow-lg"
                      style={{
                        width: `${item.value}%`,
                        background: `linear-gradient(90deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-200 rounded-2xl h-8 shadow-inner overflow-hidden">
                  <div
                    className="h-8 rounded-2xl transition-all duration-1000 relative group-hover:shadow-xl"
                    style={{
                      width: `${percentage}%`,
                      background: `linear-gradient(90deg, ${colors[index]}, ${colors[(index + 1) % colors.length]})`,
                      boxShadow: isHovered ? `0 8px 25px ${colors[index]}40` : 'none'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20"></div>
                    {isHovered && (
                      <div className="absolute inset-0 bg-white animate-pulse opacity-30"></div>
                    )}
                  </div>
                </div>

                {/* Hover Tooltip */}
                {isHovered && (
                  <div className="absolute top-full left-0 mt-3 bg-blue-900 text-white px-4 py-3 rounded-xl text-sm shadow-2xl border border-blue-400 z-10 animate-in fade-in-0 zoom-in-95">
                    <div className="font-bold text-lg">{item.label}</div>
                    <div className="text-blue-300 font-semibold">{item.value}% of alumni</div>
                    <div className="text-gray-400 text-xs mt-1">Click to explore alumni in this industry</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Enhanced Image With Fallback Component
const ImageWithFallback = ({ src, alt, className, fallbackText, type = "alumni" }: { src: string; alt: string; className: string; fallbackText: string; type?: "alumni" | "company" }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (imgError || !src) {
    return (
      <div className={`${className} ${type === "company"
          ? "bg-gradient-to-br from-blue-900/10 to-blue-900/20 border-2 border-blue-900/30"
          : "bg-gradient-to-br from-blue-900 to-blue-700"
        } flex items-center justify-center text-white font-bold shadow-inner rounded-2xl`}>
        <span className={`${type === "company" ? "text-blue-900 text-2xl" : "text-white text-lg"} font-bold drop-shadow-sm`}>
          {fallbackText ? getInitials(fallbackText) : '?'}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      {imgLoading && (
        <div className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center absolute inset-0 rounded-2xl`}>
          <div className="w-8 h-8 border-3 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${imgLoading ? 'opacity-0' : 'opacity-100'} object-cover transition-opacity duration-300 shadow-inner rounded-2xl`}
        onLoad={() => setImgLoading(false)}
        onError={() => {
          setImgError(true);
          setImgLoading(false);
        }}
        loading="lazy"
      />
    </div>
  );
};

// Stats Counter Component
// Update the AnimatedCounter component to accept className
const AnimatedCounter = ({ value, suffix = "", duration = 2000, className = "" }: { value: number; suffix?: string; duration?: number; className?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className={`font-bold ${className}`}>
      {count}{suffix}
    </span>
  );
};

// Company Logo Component
const CompanyLogo = ({ company }: { company: { name: string; logo: string; url: string } }) => {
  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="bg-white rounded-2xl p-6 hover:shadow-2xl hover:scale-110 transform transition-all duration-500 cursor-pointer border-2 border-gray-200 hover:border-blue-900 shadow-lg hover:shadow-blue-900/20">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <ImageWithFallback
            src={company.logo}
            alt={company.name}
            className="w-full h-full rounded-xl"
            fallbackText={company.name}
            type="company"
          />
          <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-blue-900 text-white p-1 rounded-full">
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        </div>
        <h3 className="font-bold text-blue-900 text-center group-hover:text-blue-700 transition-colors text-sm leading-tight">
          {company.name}
        </h3>
      </div>
    </a>
  );
};

// Alumni Login Modal
const AlumniLoginModal = ({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      onLogin();
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in-0">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-300">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Alumni Portal Login</h2>
            <p className="text-gray-600">Access your exclusive alumni network</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-blue-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-all duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In to Alumni Network
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={onClose}
              className="text-blue-900 hover:text-blue-700 transition-colors font-semibold"
            >
              Not an alumni? Browse public directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AlumniNetwork() {
  const [items, setItems] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [activeChart, setActiveChart] = useState<string>("global");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Blue Color Theme
  const blueColors = {
    dark: '#1e3a8a',    // Dark Blue
    medium: '#2563eb',  // Medium Blue
    light: '#3b82f6',   // Light Blue
    accent: '#60a5fa'   // Accent Blue
  };

  // Enhanced mock data with Blue color theme
  const alumniData = {
    globalDistribution: [
      { label: "North America", value: 35 },
      { label: "Europe", value: 25 },
      { label: "Asia", value: 20 },
      { label: "Australia", value: 12 },
      { label: "Others", value: 8 }
    ],
    occupations: [
      { label: "Technology", value: 40 },
      { label: "Business", value: 25 },
      { label: "Healthcare", value: 15 },
      { label: "Academia", value: 12 },
      { label: "Others", value: 8 }
    ],
    industries: [
      { label: "IT & Software", value: 35 },
      { label: "Finance", value: 20 },
      { label: "Healthcare", value: 15 },
      { label: "Education", value: 12 },
      { label: "Manufacturing", value: 10 },
      { label: "Others", value: 8 }
    ],
    companies: [
      {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png",
        url: "https://google.com"
      },
      {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
        url: "https://microsoft.com"
      },
      {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/320px-Apple_logo_black.svg.png",
        url: "https://apple.com"
      },
      {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png",
        url: "https://amazon.com"
      },
      {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png",
        url: "https://meta.com"
      },
      {
        name: "Tesla",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/320px-Tesla_Motors.svg.png",
        url: "https://tesla.com"
      }
    ],
    careers: [
      "Software Engineer", "Data Scientist", "Product Manager", "Investment Banker",
      "Doctor", "Researcher", "Entrepreneur", "Consultant", "Professor", "Artist"
    ],
    testimonials: [
      {
        name: "Dr. Priya Sharma",
        batch: 2010,
        position: "Senior Surgeon",
        company: "Apollo Hospitals",
        quote: "The foundation from our academy helped me excel in medical school and beyond.",
        image: "/images/alumni/priya.jpg"
      },
      {
        name: "Rahul Verma",
        batch: 2015,
        position: "Tech Lead",
        company: "Google",
        quote: "The foundation in mathematics and problem-solving was instrumental in my tech career.",
        image: "/images/alumni/rahul.jpg"
      },
      {
        name: "Anita Desai",
        batch: 2012,
        position: "Founder & CEO",
        company: "EduTech Solutions",
        quote: "The entrepreneurial spirit was nurtured right from school days.",
        image: "/images/alumni/anita.jpg"
      }
    ]
  };

  const chartColors = {
    global: [blueColors.dark, blueColors.medium, blueColors.light, '#93c5fd', '#dbeafe'],
    occupations: [blueColors.dark, blueColors.medium, blueColors.light, blueColors.accent, '#93c5fd'],
    industries: [blueColors.dark, blueColors.medium, blueColors.light, blueColors.accent, '#60a5fa', '#93c5fd']
  };

  // Fetch paginated list
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError("");

      let query = supabase
        .from("alumni_profiles")
        .select("*", { count: "exact" })
        .order("created_at", { ascending: false });

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, error, count } = await query.range(from, to);
      if (error) {
        setError(error.message);
        setItems([]);
      } else {
        setItems((data || []) as Alumni[]);
        setTotal(count || 0);
      }
      setLoading(false);
    })();
  }, [page]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / PAGE_SIZE)),
    [total]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Alumni Login Modal */}
      <AlumniLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={() => setIsLoggedIn(true)}
      />

      {/* Alumni Detail Modal */}
    {selectedAlumni && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-in fade-in-0">
    <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-300">
      <div className="relative">
        <button
          onClick={() => setSelectedAlumni(null)}
          className="absolute top-6 right-6 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 shadow-lg border border-gray-300"
        >
          <span className="text-xl font-bold text-gray-600">×</span>
        </button>
        
        <div className="p-8">
          <div className="flex flex-col xl:flex-row items-start gap-8">
            {/* Profile Image - Larger and fully visible */}
            <div className="w-full xl:w-2/5 flex justify-center">
              <div className="w-80 h-80 xl:w-96 xl:h-96">
                <ImageWithFallback 
                  src={selectedAlumni.image_url}
                  alt={selectedAlumni.full_name}
                  className="w-full h-full rounded-2xl shadow-2xl object-cover"
                  fallbackText={selectedAlumni.full_name}
                />
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="flex-1 w-full xl:w-3/5">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                {selectedAlumni.full_name}
              </h2>
              
              {/* Key Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedAlumni.position && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-blue-900" />
                      <div className="font-semibold text-blue-900">Position</div>
                    </div>
                    <div className="text-gray-700 pl-8">{selectedAlumni.position}</div>
                  </div>
                )}
                
                {selectedAlumni.company && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-blue-700" />
                      <div className="font-semibold text-blue-900">Company</div>
                    </div>
                    <div className="text-gray-700 pl-8">{selectedAlumni.company}</div>
                  </div>
                )}
                
                {selectedAlumni.grad_year && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                      <div className="font-semibold text-blue-900">Graduation</div>
                    </div>
                    <div className="text-gray-700 pl-8">Batch of {selectedAlumni.grad_year}</div>
                  </div>
                )}
                
                {selectedAlumni.location && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <div className="font-semibold text-blue-900">Location</div>
                    </div>
                    <div className="text-gray-700 pl-8">{selectedAlumni.location}</div>
                  </div>
                )}
                
                {selectedAlumni.stream && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      <div className="font-semibold text-blue-900">Field</div>
                    </div>
                    <div className="text-gray-700 pl-8">{selectedAlumni.stream}</div>
                  </div>
                )}
                
                {selectedAlumni.industry && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <div className="font-semibold text-blue-900">Industry</div>
                    </div>
                    <div className="text-gray-700 pl-8">{selectedAlumni.industry}</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {isLoggedIn ? (
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  {selectedAlumni.linkedin && (
                    <a
                      href={selectedAlumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                    >
                      <ExternalLink className="w-6 h-6" />
                      Connect on LinkedIn
                    </a>
                  )}
                  {selectedAlumni.email && (
                    <a
                      href={`mailto:${selectedAlumni.email}`}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
                    >
                      <Mail className="w-6 h-6" />
                      Send Email
                    </a>
                  )}
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                  <Lock className="w-10 h-10 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Alumni Network Access Required</h3>
                  <p className="text-gray-600 mb-4">Sign in to connect with alumni and access contact information</p>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    Sign In to Alumni Network
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Hero Section with Blue Colors */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-80 h-80 bg-blue-700 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 rounded-full translate-x-1/2 translate-y-1/2 opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/20 transition-all duration-500 cursor-pointer hover:scale-105 shadow-lg">
            <Users className="w-6 h-6" />
            <span className="text-base font-semibold">Alumni Network</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight animate-in fade-in-0 slide-in-from-top-4">
            Our <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Proud Alumni</span> Community
          </h1>
          <p className="text-2xl md:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed opacity-95 font-light">
            Connecting generations of achievers who started their journey at our academy
          </p>

         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
  <div className="bg-[#0051a8] hover:bg-[#004080] text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
    <GraduationCap className="w-6 h-6" />
    <span className="text-lg font-semibold"><AnimatedCounter value={total} suffix="+" /> Alumni Members</span>
  </div>

  {!isLoggedIn && (
    <button
      onClick={() => setIsLoginModalOpen(true)}
      className="bg-gradient-to-r from-blue-300 to-blue-100 text-blue-900 px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
    >
      <Lock className="w-6 h-6" />
      <span className="text-lg font-semibold">Alumni Login Portal</span>
    </button>
  )}
</div>

        </div>
      </section>

      {/* Global Alumni Network Section - Centered */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Global Alumni Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our alumni are making waves across the globe in diverse industries and roles
            </p>
          </div>

          {/* Chart Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              {[
                { id: "global", label: "Global Distribution" },
                { id: "occupations", label: "Occupations" },
                { id: "industries", label: "Industries" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChart(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeChart === tab.id
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-100'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              {activeChart === "global" && (
                <PieChart
                  data={alumniData.globalDistribution}
                  colors={chartColors.global}
                  title="Alumni Based Worldwide"
                />
              )}
              {activeChart === "occupations" && (
                <PieChart
                  data={alumniData.occupations}
                  colors={chartColors.occupations}
                  title="Occupations of Alumni"
                />
              )}
              {activeChart === "industries" && (
                <BarChart
                  data={alumniData.industries}
                  colors={chartColors.industries}
                  title="Alumni Contributing to Various Industries"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">
              Where Our Alumni Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are employed at the world's most innovative and leading companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {alumniData.companies.map((company, index) => (
              <CompanyLogo key={company.name} company={company} />
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Directory Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-900/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Alumni Directory</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isLoggedIn
                ? "Connect with fellow alumni and expand your professional network"
                : "Sign in to access the complete alumni directory and connect with fellow graduates"
              }
            </p>
          </div>

          {!isLoggedIn && (
            <div className="text-center mb-12">
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Sign In to View Alumni Directory
              </button>
            </div>
          )}

          {/* Enhanced Alumni Grid */}
          {loading ? (
            <SkeletonGrid />
          ) : error ? (
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-12 text-center hover:shadow-xl transition-shadow">
              <div className="text-red-600 text-2xl font-black mb-3">Error Loading Alumni</div>
              <div className="text-red-500 text-lg">{error}</div>
            </div>
          ) : items.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center border-2 border-gray-300 hover:shadow-xl transition-shadow">
              <Users className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <div className="text-3xl font-black text-gray-600 mb-3">No alumni found</div>
              <div className="text-gray-500 text-lg">Please check back later for updates</div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {items.map((alumni) => (
                  <AlumniCard
                    key={alumni.id}
                    item={alumni}
                    onSelect={() => setSelectedAlumni(alumni)}
                  />
                ))}
              </div>

              {/* Enhanced Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-6 pt-12">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transform transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                  </button>

                  <div className="flex items-center gap-3">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`w-14 h-14 rounded-2xl border-2 transition-all duration-300 hover:scale-110 text-lg font-semibold ${page === pageNum
                              ? 'bg-gradient-to-br from-blue-900 to-blue-700 text-white border-blue-900 shadow-2xl scale-110'
                              : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-lg hover:shadow-xl'
                            }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                    {totalPages > 5 && (
                      <span className="text-gray-500 px-4 text-lg font-semibold">...</span>
                    )}
                  </div>

                  <span className="text-lg text-gray-600 bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-inner">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transform transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            {isLoggedIn ? 'Welcome to the Alumni Network!' : 'Join Our Thriving Alumni Community'}
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 leading-relaxed">
            {isLoggedIn
              ? 'Make the most of your alumni benefits and connect with fellow graduates'
              : 'Connect with fellow alumni, mentor current students, and unlock new professional opportunities'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-gradient-to-r from-blue-300 to-blue-100 text-blue-900 px-10 py-5 rounded-2xl font-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 text-lg"
                >
                  <LogIn className="w-6 h-6" />
                  Alumni Login Portal
                </button>
                <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-lg">
                  <Users className="w-6 h-6" />
                  Learn About Benefits
                </button>
              </>
            ) : (
              <button className="bg-gradient-to-r from-blue-300 to-blue-100 text-blue-900 px-10 py-5 rounded-2xl font-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 text-lg">
                <Mail className="w-6 h-6" />
                Update Your Profile
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Alumni Card with Login Protection
function AlumniCard({ item, onSelect }: { item: Alumni; onSelect: () => void }) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-300 hover:shadow-3xl hover:border-blue-900 hover:scale-105 transform transition-all duration-500 group cursor-pointer"
      onClick={onSelect}
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={item.image_url}
          alt={item.full_name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          fallbackText={item.full_name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl">
            <ExternalLink className="w-5 h-5 text-blue-900" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-black text-xl text-blue-900 mb-4 group-hover:text-blue-700 transition-colors line-clamp-1">
          {item.full_name}
        </h3>

        <div className="space-y-3">
          {item.grad_year && (
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-blue-900 flex-shrink-0" />
              <span className="text-gray-700 font-semibold">Batch of {item.grad_year}</span>
            </div>
          )}

          {item.company && (
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
              <span className="text-gray-700 font-semibold truncate">{item.company}</span>
            </div>
          )}

          {item.position && (
            <div className="flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-semibold truncate">{item.position}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Enhanced Skeleton Grid
function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow border-2 border-gray-300"
        >
          <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-400"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}