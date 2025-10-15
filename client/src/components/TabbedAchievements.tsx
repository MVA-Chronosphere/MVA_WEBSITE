import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AchievementData {
  title: string;
  students: string;
  description: string;
}

const academicAchievements: Record<string, AchievementData[]> = {
  "IIT/JEE": [
    { title: "Top 100 Rank", students: "15 Students", description: "Secured ranks in top 100 nationwide" },
    { title: "IIT Admissions", students: "50+ Students", description: "Admitted to premier IITs across India" },
  ],
  "NEET": [
    { title: "Top Rankers", students: "25 Students", description: "Qualified with excellent ranks" },
    { title: "Medical College Admissions", students: "40+ Students", description: "Admitted to top medical colleges" },
  ],
  "CBSE 10": [
    { title: "100% Pass Rate", students: "All Students", description: "Outstanding results with high distinction" },
  ],
  "CBSE 12": [
    { title: "95%+ Scores", students: "30+ Students", description: "Exceptional performance in board exams" },
  ],
};

export default function TabbedAchievements() {
  const [activeCategory, setActiveCategory] = useState("academics");
  const [activeSubCategory, setActiveSubCategory] = useState("IIT/JEE");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Our Achievements
      </h2>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="academics" data-testid="tab-academics">Academics</TabsTrigger>
          <TabsTrigger value="sports" data-testid="tab-sports">Sports</TabsTrigger>
          <TabsTrigger value="others" data-testid="tab-others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="academics" className="space-y-6">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(academicAchievements).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSubCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSubCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover-elevate"
                }`}
                data-testid={`button-subcategory-${category.toLowerCase().replace(/\//g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicAchievements[activeSubCategory]?.map((achievement, index) => (
              <div
                key={index}
                className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all"
              >
                <h3 className="text-xl font-bold text-card-foreground mb-2">{achievement.title}</h3>
                <p className="text-primary font-semibold mb-2">{achievement.students}</p>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <h3 className="text-xl font-bold text-card-foreground mb-2">National Champions</h3>
              <p className="text-primary font-semibold mb-2">Multiple Teams</p>
              <p className="text-muted-foreground">Gold medals in athletics, cricket, and basketball at national level</p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <h3 className="text-xl font-bold text-card-foreground mb-2">State Championships</h3>
              <p className="text-primary font-semibold mb-2">20+ Medals</p>
              <p className="text-muted-foreground">Outstanding performance across various sports disciplines</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="others" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <h3 className="text-xl font-bold text-card-foreground mb-2">Cultural Competitions</h3>
              <p className="text-primary font-semibold mb-2">15+ Awards</p>
              <p className="text-muted-foreground">Excellence in performing arts, music, and dance competitions</p>
            </div>
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <h3 className="text-xl font-bold text-card-foreground mb-2">Innovation Awards</h3>
              <p className="text-primary font-semibold mb-2">National Recognition</p>
              <p className="text-muted-foreground">Students recognized for innovation in science and technology projects</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
