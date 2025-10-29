import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Calendar, 
  ArrowLeft,
  GraduationCap,
  MapPin,
  Building,
  HeartHandshake,
  LogIn,
  Key,
  UserCheck,
  Award,
  BookOpen,
  Mail,
  Phone,
  User,
  MapPin as MapPinIcon,
  Eye,
  EyeOff,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

export default function AlumniPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Handle hash navigation on component mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with 5000+ alumni across 25+ countries"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Community Forum",
      description: "Engage in meaningful discussions and collaborations"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Career Growth",
      description: "Exclusive job opportunities and mentorship programs"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Events & Reunions",
      description: "Annual reunions, webinars, and networking events"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Mentorship",
      description: "Guide current students and young alumni"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Give Back",
      description: "Support scholarships and student development"
    }
  ];

  const events = [
    {
      title: "MVA Alumni Event 2025",
      association: "In association with Chronosphere",
      description: "The 2025 MVA Alumni Event brought together alumni, students, and faculty for an inspiring afternoon of learning and connection.",
      speaker: {
        name: "Mehul Shah",
        role: "Senior Manager at Bain & Company",
        experience: "6 years in management consulting",
        education: "IIT Bombay alumnus"
      },
      takeaways: [
        "Leadership and decision-making in real-world contexts",
        "Energy transition and sustainability trends",
        "Global consulting lessons and transformation stories",
        "Career growth through resilience and continuous learning"
      ],
      highlight: "The event concluded with a lively Q&A, where participants discussed consulting, innovation, and career strategies."
    },
    {
      title: "Salil Kolhe MVA Alumni Event 2025",
      description: "Macro Vision Academy hosted an inspiring interactive session with Salil Kolhe (MVA Batch 2013–14 | IIT Roorkee 2014–18), an entrepreneur and innovator.",
      speaker: {
        name: "Salil Kolhe",
        role: "Entrepreneur and Innovator",
        experience: "7+ years in business and strategy across startups",
        education: "IIT Roorkee"
      },
      takeaways: [
        "Startup realities: from idea to execution",
        "Building innovation-driven teams",
        "Lessons from scaling early ventures",
        "Future of AI and entrepreneurship in India",
        "Staying adaptable in the startup ecosystem"
      ],
      highlight: "The session was filled with engaging discussions, curiosity, and inspiration as students and faculty interacted with Salil."
    }
  ];

  const LoginForm = () => (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="loginEmail" className="text-white">Email</Label>
        <Input
          id="loginEmail"
          type="email"
          placeholder="your.email@example.com"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="loginPassword" className="text-white">Password</Label>
        <div className="relative">
          <Input
            id="loginPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="bg-white/90 border-white/20 pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-white/20" />
          <span className="text-white text-sm">Remember me</span>
        </Label>
        <Button variant="ghost" className="text-white text-sm p-0 h-auto">
          Forgot Password?
        </Button>
      </div>

      <Button 
        type="submit"
        className="w-full bg-white text-primary hover:bg-white/90 h-12 text-lg font-semibold"
      >
        <LogIn className="w-5 h-5 mr-2" />
        Login to Portal
      </Button>

      <div className="text-center">
        <p className="text-white/80 text-sm">
          Don't have an account?{" "}
          <Button 
            variant="ghost" 
            className="text-white underline p-0 h-auto"
            onClick={() => setIsLogin(false)}
          >
            Register here
          </Button>
        </p>
      </div>
    </form>
  );

  const RegistrationForm = () => (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            className="bg-white/90 border-white/20"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            className="bg-white/90 border-white/20"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 9876543210"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="batchYear" className="text-white">Batch Year</Label>
        <Input
          id="batchYear"
          placeholder="2010"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentLocation" className="text-white">Current Location</Label>
        <Input
          id="currentLocation"
          placeholder="City, Country"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="profession" className="text-white">Current Profession</Label>
        <Input
          id="profession"
          placeholder="Software Engineer"
          className="bg-white/90 border-white/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-white">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="bg-white/90 border-white/20 pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <Button 
        type="submit"
        className="w-full bg-white text-primary hover:bg-white/90 h-12 text-lg font-semibold"
      >
        Register Now
      </Button>

      <div className="text-center">
        <p className="text-white/80 text-sm">
          Already have an account?{" "}
          <Button 
            variant="ghost" 
            className="text-white underline p-0 h-auto"
            onClick={() => setIsLogin(true)}
          >
            Login here
          </Button>
        </p>
      </div>
    </form>
  );

  // Function to handle navigation with hash
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without page reload
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section with Login */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary text-primary-foreground py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:60px_60px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Welcome, Alumni!</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Reconnect. Reflect. Relive.
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed mb-6">
                Join our Alumni Network and stay connected with your roots.
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Alumni Network - A community for growth, memories, and meaningful connections beyond the classroom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => handleNavClick('alumni-connect')}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg font-semibold px-8 py-3 rounded-xl"
                >
                  Explore Network
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  onClick={() => handleNavClick('update-contact')}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 text-lg font-semibold px-8 py-3 rounded-xl"
                >
                  Update Contact
                </Button>
              </div>
            </div>

            {/* Login/Registration Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  {isLogin ? "Welcome Back!" : "Join Our Network"}
                </h3>
                <p className="text-primary-foreground/80">
                  {isLogin ? "Login to your alumni portal" : "Register for exclusive alumni access"}
                </p>
              </div>
              
              {isLogin ? <LoginForm /> : <RegistrationForm />}
            </div>
          </div>
        </div>
      </section>

      {/* Update Contact Information */}
      <section id="update-contact" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Update Your Contact Information
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Keeping your contact details up to date helps us ensure you never miss important school news, upcoming events, or special opportunities for Alumni. With your most current information, we can share updates about academic schedules and important announcements right when they happen.
                </p>
                <p>
                  Updating your details only takes a few minutes, but it makes a big difference. You'll receive timely reminders, invitations to school programs, and notifications about new initiatives-all designed to keep you connected and involved in school life.
                </p>
                <p>
                  Click here to update your information today, and we'll make sure you stay informed about all the exciting happenings at school. Stay connected, stay engaged, and never miss a refreshing school moment!
                </p>
              </div>
              <Button className="mt-6 bg-primary hover:bg-primary/90">
                Update Information
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <div className="text-center">
                <UserCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Keep Your Profile Updated</h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Receive event invitations
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Get alumni news updates
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Career advancement alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Connect Portal */}
      <section id="alumni-connect" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Alumni Connect Portal
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Stay connected to the community that shaped your journey and continues to inspire your success beyond the classroom. Our Alumni Connect Portal is your exclusive space where memories meet opportunities and connections grow into lifelong collaborations.
                </p>
                <p>
                  Join a vibrant network of former students who share your experiences, values, and aspirations. Whether you want to expand your professional circle, explore career opportunities, or give back through mentorship, this is the place to do it. Network, learn, and reconnect-all in one space designed to help you grow, share, and stay part of the Macro Vision Academy family.
                </p>
                <p>
                  Join today and stay part of the ever-growing legacy of our school's community. Together, we can celebrate milestones, inspire the next generation, and continue building bonds that last a lifetime.
                </p>
              </div>
              <Button className="mt-6 bg-primary hover:bg-primary/90">
                Join Portal Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Portal Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From inspiring professional workshops to unforgettable social gatherings, our alumni events create countless opportunities to reconnect, grow, and celebrate the shared experiences that shaped your journey.
            </p>
          </div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                      {event.association && (
                        <p className="text-primary font-semibold mb-4">{event.association}</p>
                      )}
                      <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">About the Speaker</h4>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <p className="font-semibold text-foreground">{event.speaker.name}</p>
                          <p className="text-sm text-muted-foreground">{event.speaker.role}</p>
                          <p className="text-sm text-muted-foreground">{event.speaker.experience}</p>
                          <p className="text-sm text-primary">{event.speaker.education}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Takeaways</h4>
                      <ul className="space-y-2 mb-6">
                        {event.takeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                        <h4 className="font-semibold text-foreground mb-2">
                          {event.title.includes("Salil") ? "Event Recap" : "Closing Moment"}
                        </h4>
                        <p className="text-sm text-muted-foreground">{event.highlight}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't miss out-stay tuned here for the latest updates on upcoming alumni events, volunteer opportunities, and ways to contribute to the school's legacy.
            </p>
            <Button variant="outline">
              View All Events
              <Calendar className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Visits and Reunions */}
      <section id="campus-visit" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Campus Visits and Reunions
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We're always delighted to welcome you home. Your bond with Macro Vision Academy doesn't end at graduation-it grows stronger each time you return to the place where your dreams and friendships began.
            </p>
            <p>
              Whether you're visiting to reconnect with teachers, stroll through familiar hallways, or relive the campus spirit, every visit brings a sense of belonging and pride. Our annual alumni reunions are among our most cherished traditions, uniting graduates across generations to celebrate memories, achievements, and lifelong friendships. It's more than a reunion-it's a celebration of our shared journey.
            </p>
            <p>
              Stay connected through our official social media channels for updates on reunions, campus visits, and alumni achievements. No matter where life takes you, Macro Vision Academy will always be your home-a place to reconnect, celebrate, and continue being part of our vibrant alumni family.
            </p>
          </div>
          <Button className="mt-8 bg-primary hover:bg-primary/90">
            Plan Your Visit
            <MapPin className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Alumni Showcase */}
      <section id="showcase" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Alumni Showcase</h2>
            <p className="text-xl text-muted-foreground">
              Celebrating the achievements of our distinguished alumni
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Alumni Name</h3>
                  <p className="text-sm text-primary mb-2">Batch 2015</p>
                  <p className="text-sm text-muted-foreground">Current Position</p>
                  <p className="text-xs text-muted-foreground mt-2">Achievements and contributions...</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">
              View More Alumni
              <Users className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background rounded-3xl p-12 lg:p-16 shadow-lg border border-primary/20">
            <GraduationCap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Reconnect?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our vibrant alumni community and stay connected with your MVA family. Together, let's continue to grow, celebrate achievements, and create new memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-xl"
              >
                {isLogin ? "Login to Portal" : "Join Now"}
              </Button>
              <Button
                onClick={() => setIsLogin(!isLogin)}
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg font-semibold rounded-xl"
              >
                {isLogin ? "Need an account? Register" : "Existing User? Login"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}