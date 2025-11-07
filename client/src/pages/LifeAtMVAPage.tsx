import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import InfrastructureGallery from "@/components/InfrastructureGallery";

export default function LifeAtMVAPage() {
  const [activeTab, setActiveTab] = useState("boarding");
  const [activeCultureCategory, setActiveCultureCategory] = useState("darbaar");
  const [infrastructureModal, setInfrastructureModal] = useState({
    isOpen: false,
    title: "",
    content: ""
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      // Determine which tab should be active for this hash
      // Infrastructure-specific ids should open the Infrastructure tab
      const infraIds = [
        'vision-udaan','vision-paradise','vision-petals','vision-mantra','vision-divine','vision-vista',
        'swad-sansad','anhad-anand-auditorium','josh-club','chronosphere','white-house','infrastructure'
      ];
      // Boarding-specific subsection ids (ensure Boarding tab is active when linking directly)
      const boardingIds = [
        'overview','residential-wings','hostel-life','food-nutrition','safety-measures','health-medical','boarding'
      ];

      if (infraIds.includes(hash)) {
        setActiveTab('infrastructure');
      } else if (boardingIds.includes(hash)) {
        setActiveTab('boarding');
      } else if ([
        'darbaar','sports-and-athletics','sports','sports-athletics','zenith-circle','zenith','maharath','art-craft','art','performing-arts','performing','financial-literacy','financial','v-mat','vmat','tours','school-events','events'
      ].includes(hash)) {
        // If the hash targets a culture subsection, activate the Culture tab and choose the right category
        setActiveTab('culture');
        // Map several possible hash variants to culture category keys used in state
        const map: Record<string,string> = {
          'darbaar': 'darbaar',
          'sports-and-athletics': 'sports',
          'sports': 'sports',
          'zenith-circle': 'zenith',
          'zenith': 'zenith',
          'maharath': 'maharath',
          'art-craft': 'art',
          'art': 'art',
          'performing-arts': 'performing',
          'performing': 'performing',
          'financial-literacy': 'financial',
          'financial': 'financial',
          'v-mat': 'vmat',
          'vmat': 'vmat',
          'tours': 'tours',
          'school-events': 'events',
          'events': 'events'
        };
        const cat = map[hash] || 'darbaar';
        setActiveCultureCategory(cat);
      }

      // Wait a tick for tab content to render, then scroll accounting for sticky navbar
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navbar = document.querySelector('nav.sticky');
          const navbarHeight = navbar ? (navbar as HTMLElement).getBoundingClientRect().height : 0;
          const rect = el.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - navbarHeight - 8;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      }, 120);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Life at MVA</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Experience comprehensive development through world-class facilities, vibrant culture, and holistic education
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="boarding" data-testid="tab-boarding">MVA Boarding</TabsTrigger>
            <TabsTrigger value="culture" data-testid="tab-culture">MVA Culture</TabsTrigger>
            <TabsTrigger value="infrastructure" data-testid="tab-infrastructure">Infrastructure</TabsTrigger>
          </TabsList>

          <TabsContent value="boarding" className="space-y-16 font-maven-pro">
            {/* Overview Section */}
            <section className="space-y-8 relative" id="boarding">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "url('/mva-logo 2.png')",
                  backgroundSize: '50%',
                  backgroundPosition: 'center',
                  filter: 'blur(1px)'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Overview
                  </h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 text-center">
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    Since 2007, Macro Vision Academy has been providing one of the best CBSE boarding school experiences in India, offering students a safe, disciplined, and holistic environment to thrive. Our boarding facilities are designed to be a true second home—where safety, comfort, and growth go hand in hand.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    With separate residential wings for boys and girls (Vision Divine, Petals, Paradise, Passion, Udaan), we ensure a secure and nurturing environment supported by dedicated wardens and staff. Students enjoy modern amenities such as air-conditioned and non-air-conditioned rooms, 24/7 purified water, hot water supply, high-speed Wi-Fi, and spacious common areas that encourage bonding and learning.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    Boarding life at MVA blends comfort with growth: four nutritious meals daily from our FSSAI-certified kitchen, personalized academic mentoring (including access to IIT faculty), regular PTMs, structured study schedules, sports, cultural programs, and wellness activities. Every aspect of residential life is thoughtfully designed to support physical, emotional, and academic well-being.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-semibold">
                    At MVA Boarding, students don't just stay—they learn, grow, and flourish. It's more than accommodation; it's a transformative residential experience that prepares children to become confident, responsible, and future-ready leaders.
                  </p>
                </div>
              </div>
            </section>

            {/* Residential Wings Section */}
            <section className="space-y-8" id="residential-wings">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                  Residential Wings
                </h2>
              </div>
              
              {/* Vision Divine Hostel */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Vision Divine Hostel</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Established in 2023, with 162 spacious rooms housing 720 girls
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ All rooms at Divine are fully air-conditioned.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Bright, airy corridors with a homely ambience
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ In-house salon for personal care and grooming
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Secure environment with round-the-clock supervision
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                    <img 
                      src="/MVA boarding/divine wing.webp" 
                      alt="Vision Divine Hostel - Girls' Wing Senior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Vision Petals Hostel */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Vision Petals Hostel (Girls' Wing – Senior)</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Built in 2014, spanning 80,000 sq. ft.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ 96 AC hostel rooms with modern comforts
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ 16 elevated AC classrooms with interactive flat panels for immersive learning
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Perfect blend of luxury, innovation, and academics
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Designed to help students blossom and grow
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                    <img 
                      src="/MVA boarding/visionpetals.webp" 
                      alt="Vision Petals Hostel - Girls' Wing Senior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Vision Paradise Hostel */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Vision Paradise Hostel (Boys' Wing – Senior)</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Constructed 2015–2017, covering 1,50,000 sq. ft.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Built over a pond with water harvesting system
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Fully air-conditioned rooms for comfort and focus
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Central location within campus for easy access
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Encourages balance of academic focus and holistic living
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                    <img 
                      src="paradise wing photo.webp" 
                      alt="Vision Paradise Hostel - Boys' Wing Senior" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Vision Passion Hostel */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Vision Passion Hostel (Boys' Wing – Senior)</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ First hostel at MVA, established in 2007
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Non-air-conditioned, vibrant, and lively atmosphere
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Unique rectangular structure with circular gardens inside
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Beloved by alumni as the most social and active wing
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Fosters strong community bonding and school spirit
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-">
                    <img 
                      src="passion.webp" 
                      alt="Vision Passion Hostel - Boys' Wing Senior" 
                      className="w-full h-full "
                    />
                  </div>
                </div>
              </div>

              {/* Vision Udaan Hostel */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mb-12">
                <div className="lg:w-1/2 space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Vision Udaan Hostel (Boys' Wing – Middle, Classes 5–8)</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Dedicated to boys of classes 5–8, with AC rooms
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Houses many teachers and staff, along with the Principal & Founders, creating a strong support system
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Provides a safe, family-like atmosphere for younger students
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Encourages early independence in a caring environment
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Focus on academic discipline + personal care
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                    <img 
                      src="/MVA boarding/udan.webp" 
                      alt="Vision Udaan Hostel - Boys' Wing Middle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Hostel Life Section */}
            <section className="space-y-8" id="hostel-life">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                  Hostel Life
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    Life at MVA Boarding follows a mindful routine that balances academics, sports, wellness, and leisure:
                  </p>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Structured study hours with academic mentors and faculty guidance for doubt sessions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Nutritious meals from our FSSAI-certified kitchen.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Sports & fitness activities that build health and teamwork
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Cultural & social events to nurture creativity and confidence
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Mindfulness & wellness practices for mental and emotional growth
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Live Concerts with the most talented and knowledgeable minds of India
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Weekly visit to fine-dine NaCl Restaurant and Bakery for our students
                    </p>
                  </div>
                  <div className="mt-6">
                    <a href="https://youtube.com/shorts/D1ofIiQxKLY?si=OVeiaJfA75965mUf" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">
                      Watch Bhavya Jain, Class of 2024-25 testimonial
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                    <img 
                      src="Petals Hostel_11zon.webp" 
                      alt="Hostel Life at MVA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Food and Nutrition Section */}
            <section id="food-nutrition" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                  Food and Nutrition
                </h2>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side - 3 image placeholders */}
                <div className="lg:w-1/3 space-y-6">
                  <div className="border-4 border-blue-900 rounded-lg h-48 overflow-hidden">
                    <img 
                      src="DSC06270.webp" 
                      alt="FSSAI Kitchen" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="border-4 border-blue-900 rounded-lg h-48 overflow-hidden">
                    <img 
                      src="/MVA boarding/food 2.webp" 
                      alt="Swad Sansad Dining Hall" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="border-4 border-blue-900 rounded-lg h-48 overflow-hidden">
                    <img 
                      src="/MVA boarding/food 3.webp" 
                      alt="Nutritious Meals" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Right side - content */}
                <div className="lg:w-2/3 space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    At Macro Vision Academy, we believe that healthy, wholesome food is the foundation of a child's growth and well-being. That's why our pure-vegetarian kitchen and mess, led by our Founder and Academic Director, is FSSAI-certified by the Government of India, ensuring the highest standards of hygiene, quality, and safety.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    Our canteen, Swad Sansad, spans 16,000 sq. ft. and accommodates up to 1,500 students at a time. More than just a place to eat, it is a hub of community, warmth, and nourishment. Food at MVA is crafted with care, balancing taste and nutrition to support students' physical, mental, and academic growth.
                  </p>
                  <h4 className="text-xl font-bold text-primary mb-3">Balanced Meals for Every Student</h4>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Four nutritious meals daily for hostelers, complemented by morning tea and milk before bed.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Seasonal fruits and vegetables carefully incorporated into menus to ensure freshness and variety.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Over 20,000 meals prepared daily under the supervision of our founder, dietician, and professional chefs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ➤ Pre-planned yearly menus shared with parents to maintain transparency and meet nutritional needs.
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mt-4 font-semibold">
                    At MVA, we don't just serve meals—we nourish minds and bodies. Every dish is prepared with love, care, and attention to quality, so your child can enjoy food that is delicious, wholesome, and balanced, making healthy eating an enjoyable part of daily life.
                  </p>
                  <p className="text-primary font-bold text-lg mt-4">
                    Swad Sansad: Where taste meets nutrition, and every meal feels like home
                  </p>
                </div>
              </div>
            </section>

            {/* Safety Measures Section */}
            <section id="safety-measures" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                  Safety Measures
                </h2>
              </div>
              <div className="space-y-12">
                <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  At Macro Vision Academy Burhanpur, your child's safety, security, and well-being come first. We understand that parents entrust us with their most precious responsibility, and we take that trust seriously. That is why MVA has implemented comprehensive school safety measures—covering physical security, health and hygiene, digital safety, and emergency preparedness—so every student can learn and grow in a safe, nurturing, and disciplined environment.
                </p>
                
                {/* Physical Security at MVA */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Physical Security at MVA</h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Secure, fully fenced campus with monitored entry and exit points.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Over 1,000 CCTV surveillance cameras covering classrooms, hostels, and common areas.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Parent access to live classroom links during school hours and evening self-study.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Trained security personnel on duty 24/7.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Dedicated Private Security Officers from Indian Security Forces stationed in each hostel.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Separate boarding wings for boys and girls, ensuring maximum safety and comfort.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/cctv .webp" 
                        alt="Physical Security at MVA" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Preparedness */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Emergency Preparedness</h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Regular fire, evacuation, and lockdown drills for students and staff.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ First-aid training and rapid medical response systems across the campus.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ A 24/7 on-campus medical facility, with direct access to All Is Well Multispeciality Hospital.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Staff trained in emergency protocols, disaster management, and student safety.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/Emergency Preparedness 1.webp" 
                        alt="Emergency Preparedness" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Health & Hygiene Practices */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Health & Hygiene Practices</h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Daily routines for sanitisation and cleanliness across classrooms, hostels, and dining areas.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Easy-to-access handwashing stations and safe, purified drinking water.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Regular health check-ups, wellness monitoring, and counseling support for students.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ FSSAI-certified vegetarian kitchen, serving balanced and hygienic meals prepared under expert supervision.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/Health & Hygiene Practices.webp" 
                        alt="Health & Hygiene Practices" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Digital Safety & Cybersecurity */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Digital Safety & Cybersecurity</h4>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Strong cybersecurity policies to protect students' online privacy.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ iPad-enabled classrooms integrated with digital ethics and cyber safety training.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Anti-bullying programs promoting responsible online and offline behavior.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Macronet high-speed Wi-Fi with monitored and controlled access for safe learning.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/Digital Safety & Cybersecurity.webp" 
                        alt="Digital Safety & Cybersecurity" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mt-8">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    At MVA, school safety is more than just systems—it is our culture. Through constant vigilance, rigorous training, and transparent communication with parents, we ensure that every child is secure, supported, and free to thrive in academics, sports, and life.
                  </p>
                  <p className="text-primary font-bold text-lg">
                    👉 Macro Vision Academy — trusted as the most safe CBSE school in Burhanpur with secure boarding facilities, modern technology, and a culture of care.
                  </p>
                </div>
              </div>
            </section>

            {/* Health and Medical Facilities Section */}
            <section id="health-medical" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                  Health and Medical Facilities
                </h2>
              </div>
              <div className="space-y-12">
                <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  At Macro Vision Academy (MVA), Burhanpur, your child's health, safety, and well-being are our highest priority. We understand that parents expect not just academic excellence but also a safe and caring environment where students thrive physically, mentally, and emotionally. That's why our school offers one of the most comprehensive health and medical support systems in Madhya Pradesh.
                </p>

                {/* 24/7 On-Campus Medical Support */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">24/7 On-Campus Medical Support</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      MVA provides round-the-clock medical care with an infirmary staffed by trained medical professionals. In addition, our students have direct access to All Is Well Multispeciality Hospital, a 360-bedded hospital just minutes away from campus. This ensures that in case of emergencies, your child receives immediate and expert care.
                    </p>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/24-7 On-Campus Medical Support.webp" 
                        alt="24/7 On-Campus Medical Support" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Regular Health Monitoring */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Regular Health Monitoring</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">To keep students healthy and parents reassured, we conduct:</p>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Routine health check-ups and wellness monitoring.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Growth and nutrition tracking.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Access to a dietician-approved meal plan through our FSSAI-certified kitchen.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/Regular Health Monitoring.webp" 
                        alt="Regular Health Monitoring" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Wellness & Preventive Care */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Wellness & Preventive Care</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">At MVA, health goes beyond medical treatment—it includes preventive and holistic care. Our wellness initiatives include:</p>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Daily yoga and meditation for stress relief and focus.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Darbaar sessions and mentorship programs to support mental well-being.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Personalised care for boarding students with a home-away-from-home philosophy.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="DSC03578.webp" 
                        alt="Wellness & Preventive Care" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Preparedness */}
                {/* <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12">
                  <div className="lg:w-1/2 space-y-4">
                    <h4 className="text-lg md:text-xl font-bold text-primary mb-4">Emergency Preparedness</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">Safety is about being ready for the unexpected. MVA has:</p>
                    <div className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed">➤ Trained staff in first aid, CPR, and crisis management.</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Emergency drills (fire, evacuation, and lockdowns).</p>
                      <p className="text-muted-foreground leading-relaxed">➤ Ambulance access for urgent hospital transfer to All Is Well Multispeciality Hospital.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="border-4 border-blue-900 rounded-lg h-64 lg:h-80 overflow-hidden">
                      <img 
                        src="/MVA boarding/Emergency Preparedness 2.jpeg" 
                        alt="Medical Emergency Preparedness" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div> */}

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary mb-4">Why Parents Trust MVA for Student Health</h4>
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">✔ 24/7 medical support inside the campus</p>
                    <p className="text-muted-foreground leading-relaxed">✔ Linked with a world-class hospital in Burhanpur</p>
                    <p className="text-muted-foreground leading-relaxed">✔ FSSAI-certified meals designed for nutrition & hygiene</p>
                    <p className="text-muted-foreground leading-relaxed">✔ Preventive health, yoga, and wellness practices daily</p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="culture" className="space-y-12 font-maven-pro">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                MVA Culture
              </h2>
            </div>

            {/* Culture Category Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button 
                onClick={() => setActiveCultureCategory("darbaar")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "darbaar" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Darbaar
              </button>
              <button 
                onClick={() => setActiveCultureCategory("sports")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "sports" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Sports and Athletics
              </button>
              <button 
                onClick={() => setActiveCultureCategory("zenith")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "zenith" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Zenith Circle
              </button>
              <button 
                onClick={() => setActiveCultureCategory("maharath")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "maharath" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Maharath
              </button>
              <button 
                onClick={() => setActiveCultureCategory("art")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "art" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Art & Craft
              </button>
              <button 
                onClick={() => setActiveCultureCategory("performing")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "performing" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Performing Arts
              </button>
              <button 
                onClick={() => setActiveCultureCategory("financial")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "financial" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Financial Literacy
              </button>
              <button 
                onClick={() => setActiveCultureCategory("vmat")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "vmat" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                V-MAT
              </button>
              <button 
                onClick={() => setActiveCultureCategory("tours")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "tours" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                Tours
              </button>
              <button 
                onClick={() => setActiveCultureCategory("events")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCultureCategory === "events" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                School Events
              </button>
            </div>

            {/* Darbaar Section */}
            {activeCultureCategory === "darbaar" && (
              <section id="darbaar" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Darbaar
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/darbar/darbar.webp" 
                      alt="Darbaar Sessions Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/darbar/darbar 3.webp" 
                      alt="Darbaar Sessions Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/darbar/darbar 2.webp" 
                      alt="Darbaar Sessions Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-semibold">
                      Darbaar & Fortnight Sessions – Guiding Students Beyond Classrooms
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy, we believe true education is not just about academics—it's about shaping responsible, empathetic, and future-ready individuals. One of our most cherished traditions that embodies this philosophy is Anand Sir's Darbaar Sessions.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      Led by our Founder and Chairman, and Academic Guru— Anand Prakash Chouksey Sir, these sessions have been transforming student lives for over 35 years.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">What Makes These Sessions Unique?</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Open Dialogue: Students freely ask questions about finance, careers, religion, global culture, science & technology, mental health, and life management.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Life Lessons: Anand Sir imparts timeless values of humility, discipline, compassion, and leadership.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Practical Guidance: From future planning to handling anxiety, students gain clarity and confidence.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Celebration & Correction: A platform to recognize achievements, address challenges, and build strong character.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Impact on Students</h4>
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        For many young learners, navigating life's big questions can be confusing. Anand Sir's mentorship bridges that gap, helping students connect knowledge with purpose. These sessions:
                      </p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Inspire students to dream big while staying grounded in values.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Instill confidence, clarity, and resilience.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Encourage a lifelong love for learning, self-reflection, and empathy.</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        Just like the traditional Guru-Shishya bond, these interactions go beyond academics. Students don't just see Anand Sir as an educator, but as a guide, mentor, and life coach.
                      </p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">A Balance of Academic Excellence & Life Wisdom</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        At Macro Vision Academy, education goes beyond classrooms. Through Darbar & Fortnight Sessions, students receive the rare opportunity to learn directly from an experienced mentor who combines academic brilliance with life wisdom. This unique tradition ensures that every child at MVA doesn't just excel in exams—but also grows into a compassionate, confident, and future-ready leader.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Sports and Athletics Section */}
            {activeCultureCategory === "sports" && (
              <section id="sports" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Sports and Athletics
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Sports and Athletics/Sports and Athletics 3.webp" 
                      alt="Sports & Athletics Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Sports and Athletics/Sports and Athletics 2.webp" 
                      alt="Sports & Athletics Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Sports and Athletics/Sports and Athletics 1.webp" 
                      alt="Sports & Athletics Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Sports & Athletics at Macro Vision Academy, Burhanpur</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy (MVA), we believe that education sports and physical fitness is in the essence of bringing up our students. Our holistic approach to learning ensures that students not only excel academically but also develop healthy bodies, strong minds, and resilient spirits. On the field, court, or track, our students imbibe teamwork, discipline, leadership, and perseverance—skills that prepare them for life beyond school.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Highlights of CBSE Sports Achievements 2025</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We are proud of our students' outstanding performance in CBSE Cluster and Athletic Meets 2025. Their dedication, discipline, and determination reflect MVA's commitment to nurturing sporting talent alongside academic excellence.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-2">These achievements are the result of:</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Expert coaching and structured training schedules</p>
                        <p className="text-muted-foreground leading-relaxed">➤ World-class sports infrastructure on campus</p>
                        <p className="text-muted-foreground leading-relaxed">➤ A strong culture of discipline, resilience, and teamwork</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Inter-School Competitions</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Regular participation in district and state championships across cricket, football, basketball, volleyball, badminton, and athletics</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Hosting and competing in invitational tournaments on campus, giving students exposure to healthy competition and sportsmanship</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Consistent achievements in inter-school cultural and sports festivals, where MVA students stand out for both skill and spirit</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Sports Offered at MVA</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">Our comprehensive sports program includes:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Cricket</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Football (Soccer)</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Basketball</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Volleyball</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Badminton</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Table Tennis</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Chess</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Carrom</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Yoga & Meditation</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Athletics & Track Events</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Kabaddi</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Kho-Kho</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Shooting</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Building Champions, Building Character</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        At MVA, our goal is not just to win medals, but to shape students who embody the values of sportsmanship, perseverance, and teamwork. From inter-school competitions to national-level events, MVA students consistently excel both on the field and in the classroom. With national-level coaching, modern infrastructure, and a focus on holistic development, students at MVA are encouraged to explore their potential, push boundaries, and grow into champions in every sense of the word.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Continue with remaining sections... */}
            {activeCultureCategory === "zenith" && (
              <section id="zenith" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Zenith Circle
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="zenith.webp" 
                      alt="Zenith Circle Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="zenith2.webp" 
                      alt="Zenith Circle Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Zenith Circle/Zenith Circle 3.webp" 
                      alt="Zenith Circle Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      We are committed to holistic development—nurturing not only intellect but also confidence, communication, and character. To realize this vision, we established the Zenith Circle, a dedicated initiative that equips students with leadership skills, soft skills, and life values essential for success in the 21st century.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      The Zenith Circle provides structured training and real-life opportunities that strengthen critical thinking, teamwork, and responsibility, ensuring every child grows into a capable, confident, and future-ready individual.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">What is Zenith Circle?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        The Zenith Circle is our structured program for students from Grade V to XII, designed to nurture confidence, communication, and critical thinking. It goes beyond classroom knowledge to shape responsible, future-ready individuals who can lead with purpose.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Through this initiative, students receive four hours of training every week in both classrooms and outdoor settings, ensuring a balance of theory, practice, and real-life application.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Core Training Areas</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Communication Skills – Listening, speaking, reading, writing, and comprehension.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Soft Skills Development – Leadership, negotiation, discipline, creativity, and teamwork.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Functional Training – Public speaking, event management, and problem-solving.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Team Building Activities – Simulations, workshops, group projects, and case studies.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Learning Through Experience</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Zenith Circle encourages students to actively participate in school life. From morning assemblies and annual functions to sports meets, MUN conferences, and cultural festivals, students take on leadership roles in:
                      </p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Event planning & stage management</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Anchoring & report writing</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Discipline & coordination</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Decoration & logistics</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Why Zenith Circle?</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">✔ Builds leadership, confidence, and communication skills.</p>
                        <p className="text-muted-foreground leading-relaxed">✔ Prepares students for competitive exams, interviews, and future careers.</p>
                        <p className="text-muted-foreground leading-relaxed">✔ Develops discipline, teamwork, and problem-solving abilities.</p>
                        <p className="text-muted-foreground leading-relaxed">✔ Shapes responsible, compassionate, and future-ready individuals.</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                        At Macro Vision Academy, Zenith Circle is more than a program—it is our commitment to developing students who excel not only in academics but also in life.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Maharath Section */}
            {activeCultureCategory === "maharath" && (
              <section id="maharath" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Maharath
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Maharath/maharath 3.webp" 
                      alt="Maharath Life Skills Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Maharath/maharath 1.webp" 
                      alt="Maharath Life Skills Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Maharath/maharath 2.webp" 
                      alt="Maharath Life Skills Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Maharath – The Life Skills Program at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-semibold">
                      Empowering Students with Real-World Skills for a Confident Future.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      Our Maharath – The Life Skills Program is a one-of-its-kind initiative designed to equip students with essential, practical skills that prepare them for life's challenges. Through hands-on learning experiences, students build self-reliance, problem-solving abilities, and confidence—skills that extend far beyond the classroom.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">What is Maharath?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Maharath is a comprehensive life skills training program that introduces students to real-world tasks and creative activities. By engaging in practical projects, students gain firsthand experience in tasks that are often overlooked but vital for daily living. The program fosters a growth mindset, independence, and respect for all forms of work, shaping students into capable and confident individuals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Key Life Skills Covered in Maharath</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">Students are trained in a wide range of practical and creative activities, including:</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Creative crafts and pottery making</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Using everyday tools safely</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Automobile basics and maintenance</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Carpentry skills and projects</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Electrical repairs and maintenance</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Wall painting and finishing work</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Sanitary fittings and plumbing basics</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Introduction to welding techniques</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Why Choose Maharath at Macro Vision Academy?</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">✅ Hands-on experience and experimentation</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Self-reliance and problem-solving skills</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Confidence-building through completion</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Lifelong learning and curiosity</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Respect for all forms of work</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Art & Craft Section */}
            {activeCultureCategory === "art" && (
              <section id="art" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Art & Craft
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Art & Craft/art 1.webp" 
                      alt="Art & Craft Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Art & Craft/art 3.webp" 
                      alt="Art & Craft Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Art & Craft/art 2.webp" 
                      alt="Art & Craft Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Art and Craft Department – The Art Sphere at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-semibold">
                      Where Creativity Meets Expression and Imagination Turns into Art
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy, the Art Sphere is a vibrant and inspiring space dedicated to fostering creativity, imagination, and artistic expression. Our Art and Craft Department encourages students to explore various forms of art while enhancing their skills, boosting self-confidence, and transforming their ideas into beautiful, tangible creations.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">A World of Creative Exploration</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">The Art Sphere offers students a wide variety of creative opportunities, including:</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Painting and Sketching – refine artistic techniques and explore different mediums.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Calligraphy and Designing – learn the art of beautiful writing and innovative designs.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Origami and Craftwork – develop precision, patience, and imagination through intricate paper art and craft projects.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Creative Projects – experiment with mixed media and unique styles to bring original ideas to life.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Supporting Academics and Cultural Excellence</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Beyond individual growth, the Art Sphere plays an integral role in enriching the school's cultural and academic life. From designing wall murals to creating props and backdrops for events, the department actively supports school activities and competitions at local, state, and national levels. Our students' artworks are showcased in exhibitions, performances, and inter-school contests, helping them gain recognition and build pride in their creative accomplishments.
                      </p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Why Art Sphere is Special</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">✅ Personalized learning: Expert guidance helps students discover and refine their artistic voice.</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Creative problem-solving: Projects encourage experimentation and innovation.</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Patience and focus: Art activities foster mindfulness and perseverance.</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Confidence building: Presenting artwork publicly empowers students to express themselves.</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Cultural contribution: Art Sphere supports performances, festivals, and competitions, adding vibrancy to school life.</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                        Join us at The Art Sphere and let your child's imagination flourish with passion, purpose, and endless possibilities!
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Performing Arts Section */}
            {activeCultureCategory === "performing" && (
              <section id="performing" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Performing Arts
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Performing Arts/Performing Arts 3.webp" 
                      alt="Performing Arts Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Performing Arts/Performing Arts 1.webp" 
                      alt="Performing Arts Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Performing Arts/Performing Arts2.webp" 
                      alt="Performing Arts Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Performing Arts Department - AstraNexus of MVA</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy, Burhanpur, we believe education is more than academics—it is also about expression, creativity, and confidence. Our Performing Arts program provides students with opportunities to explore their talents in dance, drama, and music, while building teamwork, discipline, and cultural appreciation. With the Anhad Anand Auditorium as their stage, students experience the excitement of live performances, theatre productions, and musical showcases that bring out the artist within.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Music Department</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        The Music Department at MVA nurtures both vocal and instrumental talents, introducing students to Indian classical, folk, and western styles. Guided by industry-trained teachers, students gain confidence to perform live on stage while mastering rhythm and melody.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-2">Students train on a variety of instruments, including:</p>
                      <p className="text-muted-foreground leading-relaxed">🎹 Piano | 🎸 Guitar | 🎼 Keyboard | 🎶 Flute | 🥁 Drums | 🪘 Tabla</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Performances at the Anhad Anand Auditorium give students the platform to develop stage presence, overcome hesitation, and grow into confident young artists.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Dance Department</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Dance at MVA blends traditional Indian forms with contemporary styles, encouraging students to express themselves creatively while appreciating India's cultural heritage. Our unique model also allows senior students to mentor and teach their peers, cultivating leadership alongside artistry.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        From Annual Day performances to inter-school competitions and cultural festivals, dance at MVA builds confidence, rhythm, and expression that lasts a lifetime.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Drama & Theatre</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        With guidance from seasoned theatre professionals, the Drama & Theatre program at MVA sharpens a child's ability to think critically, express emotions, and communicate effectively. Students participate in workshops, skits, and full-scale productions that teach empathy, teamwork, and presentation skills.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Our annual theatre productions not only entertain but also spread social awareness and values-based learning, making drama a powerful educational tool.
                      </p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Why Choose Performing Arts at MVA?</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Builds self-confidence, communication, and stage presence.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Encourages creativity, imagination, and emotional growth.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Instills appreciation for India's cultural heritage and global art forms.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Provides platforms at Annual Day, inter-school events, national festivals, and the Anhad Anand Auditorium.</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mt-4 font-semibold">
                        At Macro Vision Academy, dance, drama, and music are not just extracurricular activities—they are pathways to discovering hidden talents, developing character, and creating memories that last forever.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Financial Literacy Section */}
            {activeCultureCategory === "financial" && (
              <section id="financial" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Financial Literacy
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Financial Literacy/Financial Literacy.webp" 
                      alt="Financial Literacy Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Financial Literacy/Financial Literacy 2.webp" 
                      alt="Financial Literacy Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/Financial Literacy/Financial Literacy 3.webp" 
                      alt="Financial Literacy Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Financial Literacy Program at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy (MVA), Burhanpur, we believe that education goes beyond academics. Our Financial Literacy Program is designed to equip students with the knowledge, skills, and confidence to make informed financial decisions and prepare for life beyond the classroom. In today's world, understanding money—how to save it, invest it, and manage it wisely—is as important as excelling in academics.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      The course covers key areas including budgeting, savings, investments, banking, credit, taxation, and financial planning, helping students develop a practical understanding of personal finance. It also emphasizes critical thinking, decision-making, and problem-solving skills, which are essential for students to navigate real-world financial challenges responsibly.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Program Highlights:</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Interactive Workshops: Hands-on activities and simulations to help students experience real-life financial scenarios.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Expert Mentorship: Guidance from faculty and industry professionals to provide practical insights.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Project-Based Learning: Case studies, role-plays, and activities that reinforce financial concepts.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Age-Appropriate Modules: Tailored courses for primary, middle, and senior school students to ensure relevance at every stage of learning.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Additional Learning Areas:</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Digital Banking & Online Transactions</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Understanding Credit Scores & Reports</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Investment Basics & Risk Management</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Entrepreneurship & Business Planning</p>
                      </div>
                    </div>

                    {/* <div className="bg-gray-200 border-4 border-blue-900 h-48 lg:h-56 flex items-center justify-center rounded-lg">
                      <span className="text-gray-500 text-sm md:text-base text-center">Financial Literacy Workshop Image</span>
                    </div> */}

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        Through this program, students gain more than just financial knowledge—they learn discipline, foresight, and responsibility, empowering them to become confident, financially aware, and future-ready leaders. By integrating financial literacy with MVA's holistic education approach, we ensure that every child is prepared not only for exams but also for life.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* V-MAT Section */}
            {activeCultureCategory === "vmat" && (
              <section id="vmat" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    V-MAT
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/V-MAT/V-MAT 1.webp" 
                      alt="V-MAT Activities Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/V-MAT/V-MAT 2.webp" 
                      alt="V-MAT Activities Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/V-MAT/V-MAT 3.webp" 
                      alt="V-MAT Activities Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">V-MAT – Vision Mental Ability Test at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy (MVA), Burhanpur, we believe that developing analytical thinking, problem-solving, and reasoning skills from an early age is essential for academic success and lifelong learning. That's why we introduced V-MAT (Vision Mental Ability Test), a unique program designed to enhance quantitative, logical, and verbal reasoning abilities for students from Grades 1 to 10.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      V-MAT goes beyond traditional classroom learning. It helps students strengthen critical thinking, sharpen mental agility, and improve focus, preparing them for competitive exams such as UPSC, CAT, Olympiads, and entrance tests. By integrating V-MAT into the curriculum, MVA ensures that students build a strong foundation in cognitive reasoning and problem-solving.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Program Highlights:</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Structured Reasoning Modules: Age-appropriate exercises in quantitative, verbal, and logical reasoning</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Skill Development: Enhances analytical thinking, decision-making, and problem-solving abilities</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Activity-Based Learning: Hands-on tasks and interactive exercises make learning engaging and practical</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Exam Preparation Edge: Prepares students for competitive exams and aptitude assessments from an early stage</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Additional Benefits:</h4>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">✅ Enhanced memory and concentration</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Improved academic performance</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Better time management skills</p>
                        <p className="text-muted-foreground leading-relaxed">✅ Increased self-confidence</p>
                      </div>
                    </div>

                    {/* <div className="border-4 border-blue-900 h-48 lg:h-56 overflow-hidden rounded-lg">
                      <img
                        src="/MVA Culture/V-MAT/V-MAT 4.jpg"
                        alt="V-MAT Training Session Image"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div> */}

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                        Through V-MAT, students at MVA develop confidence, intellectual curiosity, and the ability to tackle complex problems with ease. This program is an integral part of our holistic education approach, ensuring that students excel academically while nurturing a sharp, agile mind.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Tours Section */}
            {activeCultureCategory === "tours" && (
              <section id="tours" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    Tours
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="IMG_7780.webp" 
                      alt="Educational Tours Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="IMG_0308.webp" 
                      alt="Educational Tours Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="IMG_0274.webp" 
                      alt="Educational Tours Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">Educational Tours & Excursions at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy (MVA), Burhanpur, learning goes beyond the classroom. Our educational tours and excursions provide students with opportunities to explore new cultures, environments, and ideas, fostering curiosity, global awareness, and holistic development.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Local Trips</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Students regularly participate in local excursions around Burhanpur and nearby regions to connect classroom knowledge with real-world experiences. These trips include Historical sites and monuments, Nature trails and trips to major industrial centres across the region and Community service and social learning activities.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Local trips encourage teamwork, observation skills, and cultural appreciation, helping students apply lessons learned in school in a practical setting.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">National Tours</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">MVA organizes national educational tours to expose students to the diversity and heritage of India. Destinations include:</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Capitals and major cities for historical, cultural, and civic learning</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Science and technology museums, research institutes, and innovation hubs</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Adventure and environmental learning centers</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Inter-school competitions and events across India</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        These trips broaden students' horizons, enhance independence, and provide exposure to India's rich cultural and academic opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">International Tours</h4>
                      <p className="text-muted-foreground leading-relaxed mb-2">To nurture a global perspective, Macro Vision Academy offers select international tours for senior students. These experiences include:</p>
                      <div className="space-y-2">
                        <p className="text-muted-foreground leading-relaxed">➤ Educational visits to museums, universities, and tech centers abroad</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Cultural exchange programs to understand global traditions, languages, and innovations</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Participation in international competitions, seminars, and workshops</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        International tours equip students with cross-cultural understanding, confidence, and global awareness, preparing them to thrive in an increasingly interconnected world.
                      </p>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="text-xl font-bold text-primary mb-2">Why MVA Tours Matter</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        At Macro Vision Academy, tours are designed to complement academic learning, build life skills, and foster personal growth. Students return with enhanced confidence, social skills, and a broader understanding of the world, making every trip a memorable and transformative experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* School Events Section */}
            {activeCultureCategory === "events" && (
              <section id="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                    School Events
                  </h3>
                </div>
                
                {/* Three Images Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/School Events/events 1.webp" 
                      alt="School Events Image 1" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/School Events/events 3.webp" 
                      alt="School Events Image 2" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-4 border-blue-900 h-48 md:h-56 overflow-hidden" style={{ borderRadius: "20px 0 20px 0" }}>
                    <img 
                      src="/MVA Culture/School Events/events 2.webp" 
                      alt="School Events Image 3" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content in Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-primary">School Events at Macro Vision Academy</h4>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      At Macro Vision Academy, we believe that true education happens when learning extends beyond textbooks. Our school events are thoughtfully designed to nurture confidence, teamwork, creativity, and leadership skills in every student.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      From academic competitions to sports tournaments, cultural festivals, innovation fairs, international trips, and community service programs, our events create opportunities for students to discover their passions and showcase their talents.
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-primary">Key Highlights</h4>
                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed">➤ Annual Day Celebrations – A showcase of talent where students express themselves through dance, drama, music, and cultural performances, celebrating creativity and values.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Sports Meets & Tournaments – Building team spirit, resilience, and discipline, with inter-house and inter-school competitions in athletics, indoor, and outdoor games.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Innovation & Science Fairs – Anchored by our Chronosphere Lab, students present projects in AI, Robotics, Coding, and Research, fostering a startup mindset and problem-solving skills.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ MVMUN (Macro Vision's Model United Nations) – A flagship event where students step into the shoes of world leaders, debating global issues, sharpening diplomacy, public speaking, and negotiation skills, and gaining the confidence to lead on international platforms.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <p className="text-muted-foreground leading-relaxed">➤ International Trips & Exchange Programs – Opportunities to travel abroad, explore new cultures, and interact with global institutions, helping students develop cross-cultural understanding, independence, and a global outlook.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Literary & Cultural Festivals – Debates, quizzes, exhibitions, and art showcases that build critical thinking, communication, and creativity.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Wellness & Personality Development Programs – Workshops, motivational talks, and signature initiatives like VMAT, Brain Booster, Mid-Brain Activation, and Quantum Reading that enhance mental agility and self-growth.</p>
                        <p className="text-muted-foreground leading-relaxed">➤ Community Engagement – Social awareness campaigns and drives where students learn the importance of compassion, responsibility, and service to society.</p>
                      </div>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-muted-foreground leading-relaxed text-base sm:text-lg font-semibold">
                        Every event at MVA is more than an activity — it is a milestone in the journey of shaping confident, compassionate, and capable leaders of tomorrow.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </TabsContent>

                  <TabsContent value="infrastructure" className="space-y-12 font-maven-pro">
            <div id="infrastructure" />
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block border-b-4 border-black pb-2">
                Infrastructure
              </h2>
              <p className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto">
                Explore our world-class infrastructure designed to provide the best learning environment for holistic development
              </p>
            </div>

            {/* Infrastructure Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Vision Udaan */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-udaan"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/udan.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Udaan",
                  content: "Vision Udaan – Senior Secondary Wing (Grades 11 & 12)\n\nAt Macro Vision Academy's Vision Udaan Wing, students of Classes 11 & 12 receive the perfect balance of CBSE curriculum and competitive exam coaching (IIT-JEE, NEET, CA, CLAT, SAT, IPMAT and many more). With subject-specialist mentors, structured self-study schedules, and round-the-clock faculty support, Udaan is where students consistently achieve top All India Ranks. This wing also includes modern AC hostels for boys (Grades 5–8), ensuring comfort and focus."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Udaan</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Senior Secondary Wing</span>
                </div>
              </div>

              {/* Vision Paradise */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-paradise"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/visionparadise.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Paradise",
                  content: "The Vision Paradise Wing (spread across 150,000 sq. ft.) is home to Grades 9 & 10. It offers interactive classrooms, a digital iPad library, and debate-driven learning methods to strengthen academic foundations. Paradise also houses the Performing Arts Department with 30+ instructors in music, dance, drama, and theatre, alongside the prestigious Anhad Anand Auditorium, giving students the stage to shine."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Paradise</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Grades 9 & 10</span>
                </div>
              </div>

              {/* Vision Petals */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-petals"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/visionpetals.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Petals",
                  content: "Vision Petals – Middle Wing (Classes 6–8)\n\nVision Petals is a vibrant academic and residential hub for Classes 6–8. With AC hostels for 360 students, 24x7 security, and on-site medical facilities, safety and comfort come first. The Artsphere Studio nurtures creativity with painting, pottery, origami, sculpture, and craftwork, making it a perfect blend of academics and co-curricular excellence."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Petals</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Middle Wing</span>
                </div>
              </div>

              {/* Vision Mantra */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-mantra"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/mantra wing.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Mantra",
                  content: "Vision Mantra – Primary Wing (Classes 1–5)\n\nThe Vision Mantra Wing builds strong foundations for Grades 1–5 through interactive classrooms, meditation sessions, and our signature V-MAT program (Vision Mental Ability Test), which enhances logical reasoning and problem-solving. With brain booster classes like quantum reading and speed reading, students gain lifelong skills early."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Mantra</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Primary Wing</span>
                </div>
              </div>

              {/* Vision Divine */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-divine"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/divine wing.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Divine",
                  content: "Vision Divine – Girls' Senior Wing & Hostel\n\nVision Divine Wing is dedicated to Grades 9–12 girls, providing a secure and inspiring environment. With AC and non-AC hostel options, it accommodates 720 students in bright, spacious rooms. Facilities include an in-house salon, study spaces, and personalized mentoring, ensuring academic excellence and personal wellbeing."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Divine</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Girls' Senior Wing</span>
                </div>
              </div>

              {/* Vision Vista */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="vision-vista"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/vista dummy.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Vision Vista",
                  content: "Vision Vista – Girls' Middle Wing\n\nVision Vista Wing serves Grades 6–8 girls, combining academics with residential comfort. With staff living on-site and an engaging community atmosphere, students feel supported and connected, building friendships and confidence while excelling in studies."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Vision Vista</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Girls' Middle Wing</span>
                </div>
              </div>

              {/* Library */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="library"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/library.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Library",
                  content: "Library – The Knowledge Hub\n\nOur state-of-the-art library is a treasure trove of knowledge with over 15,000 books spanning across various genres, subjects, and reading levels. The library features:\n\n• Extensive collection of academic textbooks, reference books, and competitive exam materials\n• Vast fiction and non-fiction sections to foster reading habits\n• Digital library with e-books and online resources\n• Quiet reading zones and collaborative study areas\n• Regular book clubs and reading sessions\n• Research assistance and academic support\n\nThe library serves as a central hub for intellectual exploration, research, and self-study, providing students with the resources they need to excel academically and develop lifelong learning habits."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Library</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Knowledge Hub</span>
                </div>
              </div>

              {/* Swad Sansad */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="swad-sansad"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('DSC06248.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Swad Sansad",
                  content: "Swad Sansad – Central Mess & Kitchen\n\nAt Swad Sansad, Macro Vision Academy's FSSAI-accredited kitchen, we prepare over 20,000 fresh, nutritious meals daily. Expert chefs and dieticians design a balanced, year-long menu to ensure every child receives the right nutrition. From breakfast to bedtime milk, our centralized kitchen and dual mess halls guarantee quality and care."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Swad Sansad</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Central Mess & Kitchen</span>
                </div>
              </div>

              {/* Anhad Anand Auditorium */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="anhad-anand-auditorium"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/Anhad Anand Auditorium.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Anhad Anand Auditorium",
                  content: "Anhad Anand Auditorium – Stage of Excellence\n\nThe Anhad Anand Auditorium is where Macro Vision Academy students showcase talent in dance, theatre, drama, and live performances. With state-of-the-art sound and stage facilities, it promotes confidence, teamwork, and creativity, making it the cultural heartbeat of our campus."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Anhad Anand Auditorium</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Stage of Excellence</span>
                </div>
              </div>

              {/* Josh Club */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="josh-club"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('DSC06312.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Josh Club",
                  content: "Josh Club – Indoor Sports Arena\n\nJosh Club is Macro Vision Academy's indoor sports hub, featuring premium wooden courts for badminton, table tennis, chess, and carrom. Trained by national-level coaches, our students excel in competitive sports while learning discipline, teamwork, and resilience."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Josh Club</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Indoor Sports Arena</span>
                </div>
              </div>

              {/* Chronosphere */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="chronosphere"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('/infrastructure/chronosphere.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "Chronosphere",
                  content: "Chronosphere – India's First School Tech Revolution\n\nThe Chronosphere is an 18,000 sq. ft. futuristic tech lab with 400 iMacs and 12 specialized labs in AI, robotics, machine learning, data science, animation, and entrepreneurship. Students gain 21st-century industry skills before college, making Macro Vision Academy the pioneer of school-level tech innovation in India."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Chronosphere</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Tech Revolution</span>
                </div>
              </div>

              {/* White House */}
              <div 
                className="border-4 border-blue-900 aspect-square flex flex-col cursor-pointer hover:opacity-90 transition-opacity p-4 relative overflow-hidden bg-cover bg-center"
                id="white-house"
                style={{ 
                  borderRadius: "30px 0 30px 0",
                  backgroundImage: "url('DSC09938.webp')"
                }}
                onClick={() => setInfrastructureModal({
                  isOpen: true,
                  title: "White House",
                  content: "White House – The Leadership Hub\n\nEstablished in 2009, the White House is the Founders' Office and the strategic hub of Macro Vision Academy. It symbolizes leadership, vision, and the philosophy of nurturing academic excellence with holistic development, guiding every decision that shapes our students' future."
                })}
              >
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white text-xs md:text-sm text-center font-bold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">White House</span>
                  <span className="text-white text-xs mt-1 text-center font-semibold bg-black bg-opacity-60 px-2 py-1 rounded whitespace-nowrap">Leadership Hub</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Modal */}
            {infrastructureModal.isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-2xl font-bold text-primary">{infrastructureModal.title}</h3>
                    <button
                      onClick={() => setInfrastructureModal({ isOpen: false, title: "", content: "" })}
                      className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {infrastructureModal.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {paragraph.split('\n').map((line, lineIndex) => (
                            <span key={lineIndex}>
                              {line}
                              {lineIndex < paragraph.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
