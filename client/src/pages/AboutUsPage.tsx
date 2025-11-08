import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Timeline from "@/components/Timeline";
import VideoEmbed from "@/components/VideoEmbed";

// Type Definitions
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface Value {
  title: string;
  description: string;
}

interface MissionVision {
  vision: string;
  mission: string;
  values: Value[];
}

interface Society {
  name: string;
  tagline: string;
  vision: string;
  mission: string;
  story: string[];
  ventures: string[];
  pillars: string[];
  futurePlans: string;
}

interface Person {
  name: string;
  role: string;
  // experience: string;
  image: string;
  description: string;
  qualification?: string;
}

interface KnowledgePartner {
  name: string;
  image: string;
}

interface AboutData {
  timeline: TimelineEvent[];
  missionVision: MissionVision;
  society: Society;
  leadership: {
    founders: Person[];
    leadershipTeam: Person[];
  };
  seniorWing: Person[];
  middleWing: Person[];
  juniorWing: Person[];
  knowledgePartners: KnowledgePartner[];
}

// JSON Data
const aboutData: AboutData = {
  timeline: [
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
      title: "Apple Partnership",
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
      description: "Celebrating a historic All India Rank of 3 in JEE-Advanced, MVA pushed the boundaries of innovation by launching Chronosphere—India's first school-based futuristic technology lab."
    }
  ],
  
  missionVision: {
    vision: "To be a centre of excellence that transforms young minds into confident, compassionate, and innovative leaders who shape a better world as exemplary global citizens.",
    mission: "We strive to shape ethical passionate and visionary individuals who, with confidence and dedication, transform society – empowered by modern technology and guided by expert mentors.",
    values: [
      {
        title: "Respect for Time - Valuing Time",
        description: "Actively Managing and honouring every moment"
      },
      {
        title: "Excellence & Refinement - Striving for Excellence",
        description: "Continuously improving and bringing out the best."
      },
      {
        title: "Humility - Practicing Humility",
        description: "Leading with respect and a humble heart."
      },
      {
        title: "Inclusiveness - Fostering Inclusion",
        description: "Creating space where everyone feels valued."
      },
      {
        title: "Integrity - Living with Integrity",
        description: "Being honest, ethical, and true to values"
      }
    ]
  },

  society: {
    name: "ANAND EDUCATIONAL, TECHNICAL & VOCATIONAL SOCIETY",
    tagline: "Serving Society with Innovation, Excellence and Heart",
    vision: "To responsibly and ethically apply innovation across all spheres, uphold global quality standards in every endeavor, and contribute meaningfully to the advancement of society.",
    mission: "To serve society with a dedicated, honest, hardworking, and skilled team by delivering high-quality and ethical education, healthcare, and skill development services, thereby contributing to the holistic upliftment of communities.",
    story: [
      "Anand Educational Technical and Vocational Society initiated in 1998 with the aim of imparting quality education, developing educational awareness, training the students for various competitive exams, and skill-oriented courses for shaping the future of India.",
      "Our initial step was with the inception of New Vision Hr. Sec. School [Affiliate to M.P. Board, Bhopal]. The efficient and devoted staff members have been successful in setting and maintaining high standards and new trends in the field of education. The untiring efforts of our scholars resulted in unimaginable and first-rate outcomes, which we have proved with our excellent results. Making New Vision the best school of State Board within three year of its making. With the core objective to impart a metropolitan standard of education, Macro Vision Academy was started in the 2002-2003 session [Affiliated to C.B.S.E., New Delhi]."
    ],
    ventures: [
      "All is Well Multispecialty Hospital",
      "NaCl Restaurant",
      "Sir Taj Farms and Training Centre"
    ],
    pillars: [
      "President, Mrs. Manjusha Chouksey",
      "Vice-President, Mr. Sudhir Mahajan",
      "Secretary, Mr. Anand Prakash Chouksey",
      "Joint Secretary, Mrs. Vandana Patel",
      "Treasurer, Mr. Kabir Chouksey",
      "Member, Mrs. Devanshi Chouksey",
      "Member, Ms. Antra Chouksey"
    ],
    futurePlans: "In order to further expand our vision for comprehensive medical care with highly skilled professionals, The Society further plans for a separate block for Oncology (Cancer Department) by 2027"
  },

  leadership: {
    founders: [
      {
        name: "Mr. Anand Prakash Chouksey",
        role: "Founder & Chairman",
        // experience: "30+ Years Experience",
        image: "13.webp",
        description: "Our leadership is headed by Mr. Anand Prakash Chouksey, a man of vision whose life's work reflects unwavering commitment to education, healthcare, and community development. Recently honored with the 25th International Mother Teresa Award. From age 15, he chose teaching over engineering, established Sonu Coaching Classes, and founded New Vision School. He founded Macro Vision Academy in 2002–03, which grew into a top CBSE school. In 2017, he established the All is Well Multispeciality Hospital. Through education and healthcare, he has dedicated his life to empowering people and shaping a brighter future."
      },
      {
        name: "Mrs. Manjusha Chouksey",
        role: "Founder & Academic Director",
        // experience: "20+ Years Experience",
        image: "14.webp",
        description: "Mrs. Manjusha Chouksey, President of Anand Educational Technical and Vocational Society, is a woman of vision, wisdom, and inspiration. A Gold Medalist in Botany (M.Sc.), she began as a Biology teacher and became Founder of Macro Vision Academy. For over two decades, she has been the guiding force behind MVA's success. Known as Manju Ma'am, she leads the competitive exam wing and is admired for innovative teaching methods and mentorship. Her workshops including Mid-Brain Activation have touched thousands of students. Honored with Times Women Achievers Award in 2023, she continues to inspire generations to strive for excellence."
      },
      {
        name: "Mr. Kabir Chouksey",
        role: "Director",
        // experience: "8+ Years Experience",
        image: "15.webp",
        description: "Mr. Kabir Chouksey, Director of Macro Vision Academy and All is Well Multispeciality Hospital, represents next-generation leadership. Serving as Treasurer for over eight years, his role has been instrumental in transforming both institutions. He's the visionary behind Chronosphere Innovation Lab with Coding Labs, AI & ML Labs, Advanced Robotics. A graduate of Australian National University on full scholarship, he founded Sir Taj Farms Training Centre in 2018. During the pandemic, he demonstrated fearlessness ensuring quality healthcare. At a young age, he embodies innovation, decisiveness, and passion, preparing students to lead, innovate, and serve society."
      }
    ],
    leadershipTeam: [
      {
        name: "Mrs. Devanshi Chouksey",
        role: "Director",
        // experience: "4+ Years Experience",
        image: "17.webp",
        qualification: "M.Sc, M.Sc (Ireland), PGD & PGC",
        description: "With 4+ years of experience in educational administration, Mrs. Chouksey brings innovative approaches to academic excellence and student development."
      },
      {
        name: "Ms. Antra Chouksey",
        role: "Education Development Manager",
        // experience: "3 Years Experience",
        image: "16.webp",
        qualification: "M.A EdTech (UK), B.Sc (USA)",
        description: "Ms. Chouksey spearheads educational development initiatives with 3+ years of experience in curriculum design and educational technology integration."
      },
      {
        name: "Mr. Jasvir Singh Parmar",
        role: "Principal",
        // experience: "32 Years Experience",
        image: "03.webp",
        qualification: "M.A (Lit) & B.Ed",
        description: "Mr. Parmar brings 32+ years of educational leadership, dedicated to fostering academic excellence and character development in students."
      },
      {
        name: "Mrs. Monika Agrawal",
        role: "Vice-Principal",
        // experience: "25 Years Experience",
        image: "05.webp",
        qualification: "M.Sc. (Chemistry) & B.Ed",
        description: "Mrs. Agrawal brings 25+ years of experience in academic administration and educational leadership, specializing in science education and student mentorship."
      }
    ]
  },

  seniorWing: [
    {
      name: "Mr. Vijay Sukhwani",
      role: "Chief Technical Officer Group",
      // experience: "20+ Years Experience",
      image: "01.webp",
      qualification: "M.Sc (Mathematics) & B.Ed",
      description: "With 20+ years of experience in technical education and mathematics, Mr. Sukhwani leads our technical initiatives and ensures innovative teaching methodologies across the institution."
    },
    {
      name: "Dr. Santosh Siloriya",
      role: "Head of Biology Department",
      // experience: "22+ Years Experience",
      image: "12.webp",
      qualification: "BAMS",
      description: "Dr. Siloriya brings 22+ years of expertise in biological sciences and medical education, leading our biology department with innovative teaching methods and research-oriented approach."
    },
    {
      name: "Mrs. Neha Suri",
      role: "Head of Commerce Department",
      // experience: "20+ Years Experience",
      image: "09.webp",
      qualification: "M.Com, MBA & B.Ed",
      description: "With 20+ years in commerce education, Mrs. Suri combines academic excellence with practical business insights to prepare students for modern commercial challenges."
    },
    {
      name: "Mrs. Pratibha Nair",
      role: "Deputy Principal Divine",
      // experience: "20+ Years Experience",
      image: "pratibha ma'am.webp",
      qualification: "M.Sc. Zoology, PGD & B.Ed",
      description: "Mrs. Pratibha Nair serves as the Deputy Principal with 22 years of experience, blending academic excellence with leadership proficiency to foster a culture of learning and holistic development."
    },
    {
      name: "Mr. Ashay Tandon",
      role: "Academic Coordinator",
      // experience: "20+ Years Experience",
      image: "ashya toandan.webp",
      qualification: "M.Tech & B.Ed",
      description: "Mr. Ashay Tandon serves as the Academic Coordinator with 14 years of experience, integrating technological expertise with educational insight to enhance academic planning and instructional effectiveness."
    },
    {
      name: "Dr.Pradeep Kumar Singh",
      role: "Academic Coordinator",
      // experience: "20+ Years Experience",
      image: "pradeep.webp",
      qualification: "M.Sc, B.Ed & PHD",
      description: "Dr. Pradeep Kumar Singh serves as the Academic Coordinator with 14 years of experience, combining scholarly expertise and educational leadership to promote academic excellence and effective teaching practices."
    },
    {
      name: "Dr. Arun Sharma",
      role: "Chief Residential Warden",
      // experience: "23+ Years Experience",
      image: "04.webp",
      qualification: "M.P.Ed & Ph.D",
      description: "Dr. Sharma oversees residential facilities with 23+ years of experience, ensuring a safe, nurturing environment that promotes holistic student development."
    }
  ],

  middleWing: [
    {
      name: "Mrs. Vibha Jetly",
      role: "Deputy Principal Petals",
      // experience: "23+ Years Experience",
      image: "02.webp",
      qualification: "M.A Sociology & B.Ed",
      description: "With 23+ years of experience in educational leadership, Mrs. Jetly brings expertise in sociology and educational development to guide our middle wing students."
    },
    {
      name: "Mrs. Sonia Chhabra",
      role: "Academic Coordinator",
      // experience: "10+ Years Experience",
      image: "11.webp",
      qualification: "M.Sc (Mathematics) & B.Ed",
      description: "Mrs. Chhabra coordinates academic programs with 10+ years of expertise in mathematics education, ensuring excellence in STEM learning for middle wing students."
    },
    {
      name: "Mr. Jay Khatri",
      role: "Academic Coordinator",
      // experience: "17+ Years Experience",
      image: "06.webp",
      qualification: "MCA",
      description: "Mr. Khatri brings 17+ years of technology and computer applications expertise, leading digital education initiatives and academic coordination for middle wing."
    },
    {
      name: "Mr. Gaurav Chhabra",
      role: "Head of Training and Development",
      // experience: "24+ Years Experience",
      image: "07.webp",
      qualification: "M.A, MBA & B.Ed",
      description: "Mr. Chhabra leads training and development with 24+ years of experience, combining business acumen with educational expertise to enhance teaching methodologies."
    }
  ],

  juniorWing: [
    {
      name: "Mrs. Sheetal Popli",
      role: "Deputy Principal Mantra",
      // experience: "24+ Years Experience",
      image: "10.webp",
      qualification: "M.A & B.Ed",
      description: "With 24+ years of experience in educational leadership, Mrs. Popli brings expertise in arts and education to guide our junior wing students with care and dedication."
    },
    {
      name: "Mrs. Fatima Syed",
      role: "Academic Coordinator",
      // experience: "16+ Years Experience",
      image: "08.webp",
      qualification: "B.Com (Comp) & D.El.Ed",
      description: "Mrs. Syed coordinates academic programs with 16+ years of expertise in commerce and elementary education, ensuring quality learning experiences for junior wing students."
    }
  ],

  knowledgePartners: [
    {
      name: "Central Board of Secondary Education",
      image: "/cbse-logo.webp"
    },
    {
      name: "Apple Distinguished School",
      image: "/apple school.webp"
    },
    {
      name: "Boarding School Association of India",
      image: "/Boarding School Association of India.webp"
    },
    {
      name: "FSSAI Accreditation",
      image: "/FSSAI Accreditation.jpg"
    },
    {
      name: "Innoventure",
      image: "/Innoventure.jpeg"
    }
  ]
};

// Reusable Components
interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = "" }) => (
  <div className={`text-center mb-8 sm:mb-12 ${className}`}>
    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 font-['Maven_Pro'] underline decoration-2 underline-offset-4">
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-['Maven_Pro']">
        {description}
      </p>
    )}
  </div>
);

interface FlipCardProps {
  person: Person;
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ person, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card w-full ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner w-full ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Full Background Image */}
        <div className="flip-card-front bg-white rounded-2xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 group w-full h-full">
          {/* Full Background Image Container */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={person.image} 
              alt={person.name} 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-person.jpg';
              }}
            />
            {/* Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white z-10">
            <div className="">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 font-['Maven_Pro'] leading-tight group-hover:text-blue-200 transition-colors duration-300">
                {person.name}
              </h3>
              <p className="text-blue-200 font-semibold mb-2 text-base sm:text-lg font-['Maven_Pro'] leading-tight">
                {person.role}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden w-full h-full">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
          </div>
          
          <div className="relative h-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-['Maven_Pro'] leading-tight">
              {person.name}
            </h3>
            <p className="text-blue-200 font-semibold mb-3 text-sm sm:text-base font-['Maven_Pro'] leading-tight">
              {person.role}
            </p>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {person.qualification && (
                <p className="text-blue-100 text-xs sm:text-sm font-['Maven_Pro'] leading-tight mb-3">
                  <strong className="text-white">Qualification:</strong> {person.qualification}
                </p>
              )}
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed font-['Maven_Pro']">
                {person.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LeadershipGridProps {
  people: Person[];
  columns?: string;
}

const LeadershipGrid: React.FC<LeadershipGridProps> = ({ people, columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" }) => (
  <div className={`grid ${columns} gap-4 sm:gap-6 md:gap-8`}>
    {people.map((person, index) => (
      <FlipCard key={index} person={person} className="w-full" />
    ))}
  </div>
);

interface InfoCardProps {
  title: string;
  content: string | string[] | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, icon, className = "" }) => (
  <div className={`relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 hover:scale-105 ${className}`}>
    {/* Top-Left L-Border */}
    <div className="absolute top-0 left-0 w-24 h-1 bg-blue-900"></div>
    <div className="absolute top-0 left-0 w-1 h-24 bg-blue-900"></div>
    {/* Bottom-Right L-Border */}
    <div className="absolute bottom-0 right-0 w-24 h-1 bg-blue-900"></div>
    <div className="absolute bottom-0 right-0 w-1 h-24 bg-blue-900"></div>
    
    <div className="flex items-center mb-4 sm:mb-6">
      <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mr-4 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 font-['Maven_Pro']">
        {title}
      </h3>
    </div>
    
    {typeof content === 'string' ? (
      <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
        {content}
      </p>
    ) : Array.isArray(content) ? (
      <div className="space-y-4">
        {content.map((item, index) => (
          <p key={index} className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
            {item}
          </p>
        ))}
      </div>
    ) : (
      <div className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-['Maven_Pro']">
        {content}
      </div>
    )}
  </div>
);

// Specialized components for list content
const VenturesList: React.FC<{ ventures: string[] }> = ({ ventures }) => (
  <div className="space-y-3 sm:space-y-4">
    {ventures.map((venture, index) => (
      <div key={index} className="flex items-start space-x-3 group">
        <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1 group-hover:scale-110 transition-transform duration-200">➤</div>
        <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro'] group-hover:text-blue-900 transition-colors duration-200">{venture}</p>
      </div>
    ))}
  </div>
);

const PillarsList: React.FC<{ pillars: string[] }> = ({ pillars }) => (
  <div className="space-y-2 sm:space-y-3">
    {pillars.map((pillar, index) => (
      <div key={index} className="flex items-start space-x-3 group">
        <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1 group-hover:scale-110 transition-transform duration-200">➤</div>
        <p className="text-sm sm:text-base text-gray-700 font-['Maven_Pro'] group-hover:text-blue-900 transition-colors duration-200">{pillar}</p>
      </div>
    ))}
  </div>
);

export default function AboutUsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen font-['Maven_Pro',_sans-serif]">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering minds, nurturing excellence through holistic education since 1995
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-8 sm:py-12 lg:py-16 bg-background" id="our-story">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Journey" />
          <Timeline events={aboutData.timeline} />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-blue-100" id="mission-vision">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-stretch min-h-[700px] lg:min-h-[600px] border-2 border-blue-900 rounded-lg bg-white/70 backdrop-blur-sm">
            {/* Left Side - Vision and Mission */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 lg:p-8 xl:p-12 space-y-8 lg:space-y-10">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] underline decoration-2 underline-offset-4">
                  VISION
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-['Maven_Pro']">
                  {aboutData.missionVision.vision}
                </p>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] underline decoration-2 underline-offset-4">
                  MISSION
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed font-['Maven_Pro']">
                  {aboutData.missionVision.mission}
                </p>
              </div>
            </div>

            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 z-10">
              <div className="w-1 h-full bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 transform skew-x-12 origin-center"></div>
            </div>

            <div className="lg:hidden w-full h-px bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 my-8"></div>

            {/* Right Side - Values */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 lg:p-8 xl:p-12 lg:pl-16 xl:pl-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 tracking-wide font-['Maven_Pro'] mb-6 lg:mb-8 underline decoration-2 underline-offset-4">
                VALUES
              </h2>
              
              <div className="space-y-4 lg:space-y-6">
                {aboutData.missionVision.values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-200">
                    <div className="flex-shrink-0 text-blue-900 text-lg font-bold mt-1 group-hover:scale-110 transition-transform duration-200">➤</div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-900 font-['Maven_Pro'] group-hover:text-blue-800 transition-colors duration-200">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-['Maven_Pro']">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-12 sm:py-16 bg-background" id="founders-vision">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Founder's Vision" />
          
          {/* Video Player */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">
              <div className="aspect-video w-full">
                <video
                  className="w-full h-full object-cover"
                  controls
                  // poster="/founder-poster.jpg" // Optional: add a poster image
                  preload="metadata"
                >
                  <source src="founderswords.webm" type="video/webm" />
                  <source src="foundermessage.mp4" type="video/mp4" /> {/* Optional: add MP4 fallback */}
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Message from Our Founders - Anand Sir and Manjusha Ma'am
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Hear directly from our visionary founders about their dream of creating an institution that transforms lives through education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Society */}
      <section className="py-12 sm:py-16 bg-muted/30" id="our-society">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Our Society"
            description={aboutData.society.tagline}
          />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <InfoCard 
              title="Vision"
              content={aboutData.society.vision}
              icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3v18h18v-2H5V3H3zm4 12h2v2H7v-2zm0-4h2v2H7v-2zm0-4h2v2H7v-2zm4 8h2v2h-2v-2zm0-4h2v2h-2v-2zm0-4h2v2h-2v-2zm4 8h2v2h-2v-2zm0-4h2v2h-2v-2z"/></svg>}
            />
            <InfoCard 
              title="Mission"
              content={aboutData.society.mission}
              icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>}
            />
          </div>

          <InfoCard 
            title="Our Story"
            content={aboutData.society.story}
            icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>}
            className="mb-8 sm:mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <InfoCard 
              title="Our Ventures"
              content={<VenturesList ventures={aboutData.society.ventures} />}
              icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2V9h-2V7h8v12z"/></svg>}
            />
            <InfoCard 
              title="Our Pillars"
              content={<PillarsList pillars={aboutData.society.pillars} />}
              icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.28-1.74-2.46-1.74s-2.12.72-2.46 1.74L12.5 16H15v6h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63C7.12 7.35 6.18 6.63 5 6.63s-2.12.72-2.46 1.74L0 16h2.5v6h5z"/></svg>}
            />
            <InfoCard 
              title="Our Future Plans"
              content={aboutData.society.futurePlans}
              icon={<svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 bg-muted/30" id="leadership">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Our Leadership"
            description="At Macro Vision Academy, strong leadership is the foundation of our success. Guided by our Founder's vision to transform education in Burhanpur and led by an experienced academic team, we ensure that every child receives world-class learning with values at its core."
          />
          
          {/* Founders */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-5xl mx-auto">
            {aboutData.leadership.founders.map((founder, index) => (
              <div key={index} className="w-full">
                <FlipCard person={founder} />
              </div>
            ))}
          </div>

          {/* Leadership Team */}
          <LeadershipGrid people={aboutData.leadership.leadershipTeam} />
        </div>
      </section>

          {/* Senior Wing */}
      <section className="py-12 sm:py-16 bg-muted/30" id="senior-wing">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Senior Wing"
            description="Our experienced senior faculty members bring decades of expertise and dedication to ensure academic excellence and holistic development of our students."
          />
          
          {/* First Row - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-5xl mx-auto">
            {aboutData.seniorWing.slice(0, 3).map((person, index) => (
              <div key={index} className="w-full">
                <FlipCard person={person} />
              </div>
            ))}
          </div>

          {/* Second Row - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aboutData.seniorWing.slice(3).map((person, index) => (
              <div key={index} className="w-full">
                <FlipCard person={person} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Wing */}
      <section className="py-12 sm:py-16 bg-background" id="middle-wing">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Middle Wing"
            description="Our dedicated middle wing faculty brings exceptional expertise and commitment to nurture young minds during their crucial developmental years."
          />
          <LeadershipGrid people={aboutData.middleWing} columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Junior Wing */}
      <section className="py-12 sm:py-16 bg-background" id="junior-wing">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Junior Wing"
            description="Our experienced junior wing faculty provides nurturing guidance and foundational learning experiences for our youngest learners."
          />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl w-full">
              {aboutData.juniorWing.map((person, index) => (
                <FlipCard key={index} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Partners */}
      <section className="py-12 sm:py-16 bg-muted/30" id="knowledge-partners">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Our Knowledge Partners"
            description="We are proud to collaborate with esteemed organizations that enhance our educational excellence and credibility."
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {aboutData.knowledgePartners.map((partner, index) => (
              <div key={index} className="bg-white border-2 border-blue-900 rounded-lg p-1 sm:p-2 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[110px] group hover:scale-105 hover:border-blue-700">
                <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center mb-1">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} Logo`} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-logo.png';
                    }}
                  />
                </div>
                <h3 className="text-[9px] sm:text-[10px] font-bold text-blue-900 text-center mb-1 font-['Maven_Pro'] leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community and CSR */}
      <section className="py-12 sm:py-16 bg-background" id="community-csr">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Community and CSR" />
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

      {/* Styles */}
      <style>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
          cursor: pointer;
          height: 400px; /* Fixed height for mobile */
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .flip-card-inner.flipped {
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
          border-radius: 1rem;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Custom scrollbar for back content */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        /* Mobile-specific fixes */
        @media (max-width: 768px) {
          .flip-card {
            height: 350px !important; /* Slightly reduced height for mobile */
          }
          
          .flip-card-front img {
            object-fit: cover !important;
            object-position: top center !important; /* Ensure faces are visible */
          }
        }

        /* Keep desktop heights as they were */
        @media (min-width: 769px) {
          .flip-card {
            height: 480px; /* Original desktop height */
          }
        }

        @media (min-width: 1024px) {
          .flip-card {
            height: 520px; /* Original desktop height */
          }
        }
      `}</style>
    </div>
  );
}