import { BookOpen, Brain, Target, Star, Trophy, Pencil, Lightbulb, Laptop, Bot } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogsPage() {
  const cardClass =
    "bg-card border border-card-border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300";
  const iconBox =
    "aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-[#0055A4]/10";

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs & Insights</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert perspectives on education, parenting, and student development
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="parenting" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="parenting">Parenting</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="teachers">Teachers</TabsTrigger>
            <TabsTrigger value="tech">Tech in Ed</TabsTrigger>
          </TabsList>

          {/* Parenting */}
          <TabsContent value="parenting" className="space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: BookOpen,
                  title: "Building Study Habits in Children",
                  desc: "Help your child develop effective study routines and time management.",
                },
                {
                  Icon: Brain,
                  title: "Supporting Your Child's Mental Health",
                  desc: "Addressing emotional needs in today's competitive environment.",
                },
                {
                  Icon: Target,
                  title: "Balancing Academics and Extracurriculars",
                  desc: "Help children excel in studies while pursuing passions.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <article key={i} className={cardClass}>
                  <div className={iconBox}>
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-sm text-primary font-medium mb-2">Parenting Tips</div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                    <button className="text-primary font-medium text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Students */}
          <TabsContent value="students" className="space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Star,
                  title: "From MVA to IIT: A Journey of Perseverance",
                  desc: "How dedication helped our student achieve their IIT dream.",
                },
                {
                  Icon: Trophy,
                  title: "National Sports Champion Shares Tips",
                  desc: "Insights on balancing sports and academics from our athlete.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <article key={i} className={cardClass}>
                  <div className={iconBox}>
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-sm text-primary font-medium mb-2">Student Stories</div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                    <button className="text-primary font-medium text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Teachers */}
          <TabsContent value="teachers" className="space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Pencil,
                  title: "Innovative Teaching Methods for Mathematics",
                  desc: "Making complex math concepts simple and engaging.",
                },
                {
                  Icon: Lightbulb,
                  title: "The Art of Effective Communication",
                  desc: "Building strong teacher-student relationships.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <article key={i} className={cardClass}>
                  <div className={iconBox}>
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-sm text-primary font-medium mb-2">Article by Teacher</div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                    <button className="text-primary font-medium text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Tech */}
          <TabsContent value="tech" className="space-y-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  Icon: Laptop,
                  title: "Digital Learning: The Future is Here",
                  desc: "How we integrate technology to enhance learning.",
                },
                {
                  Icon: Bot,
                  title: "AI in Education: Opportunities & Challenges",
                  desc: "Exploring how AI is reshaping modern education.",
                },
              ].map(({ Icon, title, desc }, i) => (
                <article key={i} className={cardClass}>
                  <div className={iconBox}>
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-sm text-primary font-medium mb-2">Tech in Education</div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                    <button className="text-primary font-medium text-sm hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
