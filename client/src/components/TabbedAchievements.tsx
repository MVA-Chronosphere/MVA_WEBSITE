import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Medal, Trophy, Award, Star, Target, Globe, Users, BookOpen } from "lucide-react";

interface AchievementData {
  title: string;
  count: string;
  description: string;
  icon?: React.ReactNode;
}

const academicAchievements: Record<string, AchievementData[]> = {
  "CBSE Class 10": [
    { 
      title: "Outstanding Performance", 
      count: "122 Students", 
      description: "Scored above 90% in CBSE Class 10 (2025)",
      icon: <BookOpen className="w-6 h-6" />
    },
    { 
      title: "90%+ Achievers", 
      count: "108+ Students", 
      description: "Consistently setting high benchmarks with distinctions",
      icon: <Users className="w-6 h-6" />
    },
  ],
  "CBSE Class 12": [
    { 
      title: "Exceptional Scores", 
      count: "52 Students", 
      description: "Scored above 90% in CBSE Class 12 (2025)",
      icon: <Target className="w-6 h-6" />
    },
    { 
      title: "90%+ in Science & Commerce", 
      count: "20+ Students", 
      description: "Outstanding performance across all streams",
      icon: <Award className="w-6 h-6" />
    },
  ],
  "Global & Other": [
    { 
      title: "Foreign University Selections", 
      count: "71 Students", 
      description: "Admissions to renowned universities in 22+ countries",
      icon: <Globe className="w-6 h-6" />
    },
    { 
      title: "CLAT Qualifiers", 
      count: "27 Students", 
      description: "Successful candidates in Common Law Admission Test",
      icon: <Medal className="w-6 h-6" />
    },
  ],
};

const competitiveAchievements: Record<string, AchievementData[]> = {
  "IIT-JEE": [
    { 
      title: "JEE Advanced Selections", 
      count: "526 Students", 
      description: "Including AIR 3 in prestigious IIT-JEE examination",
      icon: <Trophy className="w-6 h-6" />
    },
    { 
      title: "JEE Main Selections", 
      count: "1,959 Students", 
      description: "Consistent excellence in engineering entrance exams",
      icon: <Target className="w-6 h-6" />
    },
  ],
  "NEET": [
    { 
      title: "NEET Qualifiers", 
      count: "583 Students", 
      description: "Remarkable ranks including top positions in medical entrance",
      icon: <Medal className="w-6 h-6" />
    },
    { 
      title: "Medical College Admissions", 
      count: "124+ Students", 
      description: "Admitted to nation's most prestigious medical colleges",
      icon: <Award className="w-6 h-6" />
    },
  ],
  "CA Foundation": [
    { 
      title: "CA Selections", 
      count: "65 Students", 
      description: "5 All India Rank holders in Chartered Accountancy",
      icon: <Star className="w-6 h-6" />
    },
  ],
};

const sportsAchievements = [
  {
    category: "Table Tennis",
    achievements: ["1 Bronze Medal - Qualified for Nationals"]
  },
  {
    category: "Athletics",
    achievements: [
      "4 Gold Medals - Qualified for Nationals",
      "6 Silver Medals - Qualified for Nationals", 
      "4 Bronze Medals"
    ]
  },
  {
    category: "Kabaddi (CBSE Cluster Tournament)",
    achievements: [
      "2 Gold Medals - Qualified for Nationals (Under-14 Boys & Girls)",
      "1 Silver Medal (Under-17 Girls)",
      "1 Bronze Medal (Under-17 Boys)"
    ]
  },
  {
    category: "Yogasana",
    achievements: [
      "1 Bronze Medal (Individual & Artistic) - Qualified for Nationals",
      "1 Silver Medal (Team)"
    ]
  },
  {
    category: "Relays",
    achievements: [
      "1 Gold Medal (Under-17, 4×400m) - Qualified for Nationals",
      "1 Silver Medal (Under-19, 4×400m)"
    ]
  }
];

export default function TabbedAchievements() {
  const [activeCategory, setActiveCategory] = useState("academics");
  const [activeSubCategory, setActiveSubCategory] = useState("CBSE Class 10");
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['academics', 'sports', 'competitive'].includes(hash)) {
        setIsScrolling(true);
        setActiveCategory(hash);
        
        // Set appropriate subcategory based on the main category
        if (hash === 'academics') {
          setActiveSubCategory('CBSE Class 10');
        } else if (hash === 'competitive') {
          setActiveSubCategory('IIT-JEE');
        }

        // Scroll to the section after a small delay to ensure content is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navbar = document.querySelector('nav.sticky');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
          setIsScrolling(false);
        }, 100);
      }
    };

    // Initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveCategory(value);
    
    // Update URL hash without triggering scroll
    window.history.replaceState(null, '', `/achievements#${value}`);
    
    // Reset subcategory when switching main tabs
    if (value === 'academics') {
      setActiveSubCategory('CBSE Class 10');
    } else if (value === 'competitive') {
      setActiveSubCategory('IIT-JEE');
    }
  };

  // Handle subcategory change
  const handleSubCategoryChange = (category: string) => {
    setActiveSubCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Academic Excellence Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Academic Achievements
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            At Macro Vision Academy, excellence is at the heart of everything we do. We believe every student has the potential to shine, and we're here to guide, inspire, and equip them with the skills and confidence to succeed.
          </p>
          <p>
            Our outstanding results in board and competitive exams reflect our commitment to quality education, innovation, and future readiness. With passionate teachers, a forward-thinking curriculum, and a focus on holistic growth, we prepare students not just for exams—but for life.
          </p>
        </div>
      </div>

      {/* Outstanding Results Summary */}
      <Card className="mb-16 bg-muted/50 border-border">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Outstanding Results Across All Streams
          </h3>
          <p className="text-lg text-center text-muted-foreground mb-8 leading-relaxed">
            At MVA, excellence speaks through results! Our students have consistently delivered exceptional performances across various competitive and academic examinations. With 526 selections in JEE Advanced, 1,959 in JEE Mains, and 583 in NEET, we continue to set new benchmarks in engineering and medical entrances. Our commerce achievers also shined with 65 selections in CA Foundation.
          </p>
          <p className="text-lg text-center text-muted-foreground leading-relaxed">
            In board examinations, 122 students from Class 10 CBSE (2025) and 52 students from Class 12 CBSE (2025) scored above 90%, showcasing our commitment to strong academic foundations. Expanding globally, we proudly celebrate 71 foreign selections, along with 27 successful candidates in CLAT, making us a true hub of academic excellence and all-round achievement.
          </p>
        </CardContent>
      </Card>

      <Tabs value={activeCategory} onValueChange={handleTabChange} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
          <TabsTrigger value="academics" data-testid="tab-academics">Academics</TabsTrigger>
          <TabsTrigger value="sports" data-testid="tab-sports">Sports</TabsTrigger>
          <TabsTrigger value="competitive" data-testid="tab-competitive">Competitive Exams</TabsTrigger>
        </TabsList>

        {/* Academics Tab */}
        <TabsContent value="academics" id="academics" className="space-y-8 scroll-mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Board Examination Highlights</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Year after year, our students set high benchmarks with distinctions and top ranks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(academicAchievements).map((category) => (
              <button
                key={category}
                onClick={() => handleSubCategoryChange(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSubCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicAchievements[activeSubCategory]?.map((achievement, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{achievement.count}</p>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Sports Tab */}
        <TabsContent value="sports" id="sports" className="space-y-8 scroll-mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Sports Achievements</h3>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Macro Vision Academy, excellence isn't just a goal - it's our way of life. Our student's outstanding performances in district, state, and national sports speak volumes about our focus on all-round growth.
              </p>
              <p>
                With expert coaches, modern facilities, and a strong culture of teamwork and discipline, we prepare our athletes to stay calm under pressure and give their best every time. Whether it's on the track or the field, they continue to make us proud, living the Academy's spirit of determination and achievement.
              </p>
            </div>
          </div>

          {/* CBSE Cluster West Zone Call to Action */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-bold">CBSE-Cluster West Zone Competitors</h3>
              </div>
              <p className="text-lg mb-6 opacity-90">
                Proudly representing our school at the highest level of interschool sports competition
              </p>
              <Button 
                variant="secondary" 
                className="bg-background text-foreground hover:bg-background/90 font-semibold"
              >
                View Competition Highlights
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-foreground mb-2">CBSE Sports Performance - 2025</h4>
            <p className="text-muted-foreground">Outstanding achievements across multiple sports disciplines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsAchievements.map((sport, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                    <Medal className="w-5 h-5 mr-2 text-primary" />
                    {sport.category}
                  </h4>
                  <ul className="space-y-2">
                    {sport.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Competitive Exams Tab */}
        <TabsContent value="competitive" id="competitive" className="space-y-8 scroll-mt-24">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Competitive Exam Success</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our students continue to excel in national-level competitive examinations, securing top ranks and admissions to premier institutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(competitiveAchievements).map((category) => (
              <button
                key={category}
                onClick={() => handleSubCategoryChange(category)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSubCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAchievements[activeSubCategory]?.map((achievement, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                      <p className="text-primary font-semibold text-lg">{achievement.count}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                  
                  {/* Additional details for each competitive exam */}
                  {activeSubCategory === "IIT-JEE" && index === 0 && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Our engineering aspirants have consistently excelled at the national level, with 74+ qualifying JEE Main and 63+ clearing JEE Advanced. Their achievements include top national ranks, such as AIR 3 in the prestigious IIT-JEE examination - a testament to their relentless dedication and passion for learning.
                      </p>
                    </div>
                  )}
                  {activeSubCategory === "NEET" && index === 0 && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        With 124+ NEET qualifiers, we take immense pride in celebrating our medical aspirants who have achieved remarkable ranks - including top positions - and earned admission to some of the nation's most prestigious medical colleges. Their success stands as a testament to their unwavering dedication, disciplined effort, and our academy's steadfast commitment to high-quality preparation.
                      </p>
                    </div>
                  )}
                  {activeSubCategory === "CA Foundation" && index === 0 && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        With 5 All India Rank holders and 65+ students successfully qualifying in the highly competitive CA examinations, our commerce achievers have proven that dedication, discipline, and the right guidance can turn even the toughest challenges into milestones of success.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Our Promise Section */}
      <Card className="mt-16 bg-muted/30 border-border">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Promise</h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Macro Vision Academy, every achievement is a celebration of perseverance, talent, and guidance. The accomplishments of our students inspire us to push boundaries, raise standards, and continue creating success stories year after year.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}