"use client";

import {
  BriefcaseIcon,
  UsersIcon,
  HeartHandshakeIcon,
  GraduationCapIcon,
  LightbulbIcon,
  TargetIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";


export default function CareersPage() {
  const navigate = useNavigate();

  const careerCards = [
    {
      title: "Teaching Positions",
      description:
        "Inspire and mentor the next generation of learners through creativity, dedication, and innovation.",
      details: [
        "Opportunities in Science, Mathematics, English, Computer Science, and Arts",
        "Encourage inquiry-based and experiential learning",
        "Access to modern classrooms and digital tools",
        "Collaborate with educators who share a vision of excellence",
      ],
      icon: <UsersIcon className="w-6 h-6" />,
      variant: "default" as const,
    },
    {
      title: "Administrative Positions",
      description:
        "Lead with vision and integrity to ensure seamless operations and educational excellence.",
      details: [
        "Key roles in HR, Admissions, Finance, and IT",
        "Drive decision-making and process improvement",
        "Foster collaboration across departments",
        "Coordinate school events and day-to-day activities",
      ],
      icon: <BriefcaseIcon className="w-6 h-6" />,
      variant: "secondary" as const,
    },
    {
      title: "Employee Benefits",
      description:
        "We value your contribution and support your growth with comprehensive rewards.",
      details: [
        "Competitive salary structure with performance incentives",
        "Medical and wellness support for employees and families",
        "Annual recognition awards and celebrations",
        "Encouragement for continuous learning",
      ],
      icon: <HeartHandshakeIcon className="w-6 h-6" />,
      variant: "default" as const,
    },
    {
      title: "Professional Growth",
      description:
        "At MVA, every member is encouraged to learn, lead, and evolve in their career journey.",
      details: [
        "Regular workshops and development programs",
        "Mentorship from experienced educators",
        "Opportunities to attend national-level conferences",
        "Access to online certifications and leadership courses",
      ],
      icon: <GraduationCapIcon className="w-6 h-6" />,
      variant: "secondary" as const,
    },
    {
      title: "Work Culture & Environment",
      description:
        "We cultivate a vibrant, inclusive space where innovation meets compassion.",
      details: [
        "Respect, collaboration, and transparency at our core",
        "Freedom to teach creatively and explore ideas",
        "Celebration of cultural, sports, and community events",
        "Positive, supportive, and growth-driven workplace",
      ],
      icon: <LightbulbIcon className="w-6 h-6" />,
      variant: "default" as const,
    },
    {
      title: "Our Vision",
      description:
        "We believe in nurturing minds, building character, and shaping responsible global citizens.",
      details: [
        "Commitment to holistic education — academics, arts, and values",
        "Integration of technology for smarter learning",
        "Continuous improvement through innovation",
        "Join us to make a lasting difference in education",
      ],
      icon: <TargetIcon className="w-6 h-6" />,
      variant: "secondary" as const,
    },
  ];

  const currentOpenings = [
    {
      role: "Senior Mathematics Teacher",
      type: "Full-time • Teaching Position",
      desc: "Experienced Mathematics teacher for grades 9-12 with strong conceptual clarity and innovative pedagogy.",
      tags: ["M.Sc/B.Ed Required", "5+ Years Experience"],
      department: "Academics",
    },
    {
      role: "Sports Coach - Cricket",
      type: "Full-time • Coaching Position",
      desc: "Professional cricket coach to train students and lead our school team to excellence.",
      tags: ["Certified Coach", "3+ Years Experience"],
      department: "Sports",
    },
    {
      role: "Administrative Officer",
      type: "Full-time • Administrative Position",
      desc: "Manage administrative operations, student data, and inter-departmental coordination efficiently.",
      tags: ["MBA/Graduate", "4+ Years Experience"],
      department: "Administration",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/90 to-primary py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-6">
            Careers at MVA
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Join our team of passionate educators and professionals shaping the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MVA fosters a culture of growth, teamwork, and innovation where your passion meets purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {careerCards.map((card, index) => (
              <Card 
                key={index} 
                className={`hover-lift ${
                  card.variant === "secondary" 
                    ? "bg-muted/50 border-muted" 
                    : "bg-background border-border"
                }`}
              >
                <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-6 ${
                    card.variant === "secondary" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {card.description}
                  </p>
                  
                  <ul className="space-y-3 mt-auto">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          card.variant === "secondary" ? "bg-primary" : "bg-muted-foreground"
                        }`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {currentOpenings.map((job, index) => (
              <Card key={index} className="hover-lift border-border">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                          {job.role}
                        </h3>
                        <p className="text-muted-foreground mb-3">{job.type}</p>
                        <Badge variant="secondary" className="text-xs">
                          {job.department}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {job.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button onClick={() => navigate("/contact?topic=career")} className="lg:w-auto w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Don't see the right position?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Send us your resume, and we'll keep you in mind for upcoming opportunities that match your expertise and passion.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                  <SearchIcon className="mr-2 h-5 w-5" />
                  Submit Your Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}