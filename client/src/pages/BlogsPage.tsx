import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
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
            <TabsTrigger value="parenting" data-testid="tab-parenting">Parenting</TabsTrigger>
            <TabsTrigger value="students" data-testid="tab-students">Students</TabsTrigger>
            <TabsTrigger value="teachers" data-testid="tab-teachers">Teachers</TabsTrigger>
            <TabsTrigger value="tech" data-testid="tab-tech">Tech in Ed</TabsTrigger>
          </TabsList>

          <TabsContent value="parenting" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">📚</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Parenting Tips</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Building Study Habits in Children</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Practical strategies to help your child develop effective study routines and time management skills.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>

              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">🧠</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Parenting Tips</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Supporting Your Child's Mental Health</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Understanding and addressing the emotional needs of children in today's competitive environment.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>

              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">🎯</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Parenting Tips</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Balancing Academics and Extracurriculars</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    How to help your child excel in studies while pursuing their passions and interests.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">🌟</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Student Stories</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">From MVA to IIT: A Journey of Perseverance</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Read how dedication and hard work helped our student achieve their IIT dream.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>

              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">🏆</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Student Stories</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">National Sports Champion Shares Tips</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Insights from our national-level athlete on balancing sports and academics.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">✏️</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Article by Teacher</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Innovative Teaching Methods for Mathematics</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    How we make complex mathematical concepts simple and engaging for students.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>

              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">💡</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Article by Teacher</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">The Art of Effective Communication</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Building strong teacher-student relationships through better communication.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>
            </div>
          </TabsContent>

          <TabsContent value="tech" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">💻</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Tech in Education</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Digital Learning: The Future is Here</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    How we integrate technology to enhance the learning experience at MVA.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>

              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover-elevate transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">Tech in Education</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">AI in Education: Opportunities & Challenges</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Exploring how artificial intelligence is reshaping modern education.
                  </p>
                  <button className="text-primary font-medium text-sm hover:underline">Read More →</button>
                </div>
              </article>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
