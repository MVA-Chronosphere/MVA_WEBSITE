import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Heart, TrendingUp } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at MVA</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our team of passionate educators and contribute to shaping future leaders
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-card-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Growth Opportunities</h3>
              <p className="text-sm text-muted-foreground">
                Professional development and career advancement
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Collaborative Culture</h3>
              <p className="text-sm text-muted-foreground">
                Work with passionate and dedicated professionals
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Work-Life Balance</h3>
              <p className="text-sm text-muted-foreground">
                Supportive environment with comprehensive benefits
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Competitive Salary</h3>
              <p className="text-sm text-muted-foreground">
                Industry-leading compensation packages
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Current Openings</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Senior Mathematics Teacher</h3>
                  <p className="text-muted-foreground">Full-time • Teaching Position</p>
                </div>
                <Button data-testid="button-apply-math-teacher">Apply Now</Button>
              </div>
              <p className="text-muted-foreground mb-4">
                We are looking for an experienced Mathematics teacher for grades 9-12 with strong subject knowledge 
                and innovative teaching methods.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">M.Sc/B.Ed Required</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">5+ Years Experience</span>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Sports Coach - Cricket</h3>
                  <p className="text-muted-foreground">Full-time • Coaching Position</p>
                </div>
                <Button data-testid="button-apply-cricket-coach">Apply Now</Button>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional cricket coach required to train students and lead our cricket team to excellence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">Certified Coach</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">3+ Years Experience</span>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6 hover-elevate transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Administrative Officer</h3>
                  <p className="text-muted-foreground">Full-time • Administrative Position</p>
                </div>
                <Button data-testid="button-apply-admin-officer">Apply Now</Button>
              </div>
              <p className="text-muted-foreground mb-4">
                Manage day-to-day administrative operations, student records, and coordinate with various departments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">MBA/Graduate</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">4+ Years Experience</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-[#0055A4]/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Don't see the right position?</h2>
          <p className="text-muted-foreground mb-6">
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" data-testid="button-submit-resume">Submit Your Resume</Button>
        </section>
      </div>
    </div>
  );
}
