"use client";

import {
  GraduationCapIcon,
  BookOpenIcon,
  BrainIcon,
  TrophyIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import ParallaxCards from "@/components/ui/parallaxcards";

const cardData = [
  {
    title: "Grades I–V (Primary School)",
    description: "Our Primary Program focuses on building strong foundations in core subjects while nurturing curiosity and creativity. Students engage in interactive, activity-based learning that develops problem-solving, logical reasoning, and communication skills.",
      details: {
      curriculum: [
        <><span className="font-semibold">Mathematics</span> – Problem-solving and logical reasoning.</>,
        <><span className="font-semibold">Science</span> – Practical experiments to encourage discovery.</>,
        <><span className="font-semibold">Language Arts</span> – Reading, writing, comprehension, and expression.</>,
        <><span className="font-semibold">Social Studies</span> – Basics of history, geography, and community life.</>,
        <><span className="font-semibold">VMAT (Vision Mental Ability Test)</span> – Enhancing logical reasoning and aptitude.</>
      ],
      methodology: [
        <><span className="font-semibold">Technology Integration</span> – Interactive classroom sessions with digital tools and smart boards.</>,
        <><span className="font-semibold">Project-based learning</span> – Practical, hands-on projects for applied understanding.</>,
        <><span className="font-semibold">Personalized attention</span> – Individualized support to meet each student's learning needs.</>,
        <><span className="font-semibold">Regular assessments</span> – Continuous feedback and performance tracking.</>,
        <><span className="font-semibold">Conceptual clarity</span> – Emphasis on understanding and application skills.</>
      ],
      calendar: [
        <><span className="font-semibold">Term 1</span>: April–September (Mid-term Exam)</>,
        <><span className="font-semibold">Term 2</span>: October–February (Final Exam)</>,
        <><span className="font-semibold">Weekly PTMs</span> for feedback and performance tracking.</>
      ]
    },
    icon: <GraduationCapIcon className="w-6 h-6 md:w-8 md:h-8" />,
    lightBg: "bg-white text-[#0055A4]",
    darkBg: "dark:bg-[#0055A4] dark:text-white",
  },
  {
    title: "Grades VI–VIII (Middle School)",
    description: "Middle school emphasizes conceptual clarity, critical thinking, and independent learning. The curriculum integrates academic rigor with IIT foundation courses, skill subjects, and interdisciplinary projects to prepare students for higher studies.",
      details: {
      curriculum: [
        <><span className="font-semibold">Core Subjects:</span> Mathematics, Science, Social Science, English, Hindi.</>,
        <><span className="font-semibold">IIT Foundation</span> – Early introduction to engineering exam preparation.</>,
        <><span className="font-semibold">Skill Courses</span> – Coding, financial literacy, environmental studies.</>,
        <><span className="font-semibold">Performing & Visual Arts</span> – Music, dance, drama, painting, and craft.</>,
        <><span className="font-semibold">VMAT & Brain Booster</span> – Cognitive and logical reasoning enhancement.</>
      ],
      methodology: [
        <><span className="font-semibold">Technology Integration</span> – Interactive classroom sessions with digital tools and smart boards.</>,
        <><span className="font-semibold">Project-based learning</span> – Practical, hands-on projects for applied understanding.</>,
        <><span className="font-semibold">Personalized attention</span> – Individualized support to meet each student's learning needs.</>,
        <><span className="font-semibold">Regular assessments</span> – Continuous feedback and performance tracking.</>,
        <><span className="font-semibold">Conceptual clarity</span> – Emphasis on understanding and application skills.</>
      ],
      calendar: [
        <><span className="font-semibold">Two terms</span> with periodic tests, mid-term, and final exams</>,
        <><span className="font-semibold">Events</span>: Science Fair, Literary Fest, Sports Day</>,
        <><span className="font-semibold">Scheduled</span> summer and winter breaks</>
      ]
    },
    icon: <BookOpenIcon className="w-6 h-6 md:w-8 md:h-8" />,
    lightBg: "bg-[#0055A4] text-white",
    darkBg: "dark:bg-white dark:text-[#0055A4]",
  },
  {
    title: "Grades IX–X (Secondary School)",
    description: "At this stage, students are prepared for CBSE Board Examinations with a strong focus on application-based learning, exam readiness, and life skills. The curriculum ensures a smooth transition into senior secondary education.",
      details: {
      curriculum: [
        <><span className="font-semibold">Languages (English & Hindi)</span> – Reading, writing, and critical analysis.</>,
        <><span className="font-semibold">Mathematics</span> – Conceptual clarity and application-based learning.</>,
        <><span className="font-semibold">Science (Physics, Chemistry, Biology)</span> – Supported by lab experiments and projects.</>,
        <><span className="font-semibold">Social Science</span> – History, geography, civics, and economics linked to real-world contexts.</>,
        <><span className="font-semibold">Information Technology & Skill Subjects</span> – Digital literacy, coding, and applied learning.</>
      ],
      methodology: [
        <><span className="font-semibold">Technology Integration</span> – Interactive classroom sessions with digital tools and smart boards.</>,
        <><span className="font-semibold">Project-based learning</span> – Practical, hands-on projects for applied understanding.</>,
        <><span className="font-semibold">Personalized attention</span> – Individualized support to meet each student's learning needs.</>,
        <><span className="font-semibold">Regular assessments</span> – Continuous feedback and performance tracking.</>,
        <><span className="font-semibold">Conceptual clarity</span> – Emphasis on understanding and application skills.</>
      ],
      calendar: [
        <><span className="font-semibold">Two terms</span> aligned with CBSE guidelines</>,
        <><span className="font-semibold">Periodic assessments</span>, half-yearly exams, and pre-boards</>,
        <><span className="font-semibold">Co-curricular and sports activities</span> integrated throughout the year</>
      ]
    },
    icon: <BrainIcon className="w-6 h-6 md:w-8 md:h-8" />,
    lightBg: "bg-white text-[#0055A4]",
    darkBg: "dark:bg-[#0055A4] dark:text-white",
  },
  {
    title: "Grades XI–XII (Senior Secondary)",
    description: "Senior Secondary is the most crucial phase of schooling, preparing students for CBSE Boards and competitive exams like IIT-JEE, NEET, CLAT, SAT, NDA, and CA-CPT. MVA blends NCERT curriculum with competitive exam training, ensuring students are future-ready for both national and international opportunities.",
      details: {
      curriculum: [
        <><span className="font-semibold">Science Stream</span>: Physics, Chemistry, Mathematics, Biology, Physical Education, English, Hindi.</>,
        <><span className="font-semibold">Commerce Stream</span>: Accountancy, Business Studies, Economics, Applied Mathematics, Psychology.</>,
        <><span className="font-semibold">Skill & Electives</span>: Fine Arts, Informatics Practices, Physical Education.</>,
        <><span className="font-semibold">Chronosphere Courses</span>: Python, C++, AI, ML, Data Analytics.</>
      ],
      methodology: [
        <><span className="font-semibold">Technology Integration</span> – Interactive classroom sessions with digital tools and smart boards.</>,
        <><span className="font-semibold">Project-based learning</span> – Practical, hands-on projects for applied understanding.</>,
        <><span className="font-semibold">Personalized attention</span> – Individualized support to meet each student's learning needs.</>,
        <><span className="font-semibold">Regular assessments</span> – Continuous feedback and performance tracking.</>,
        <><span className="font-semibold">Conceptual clarity</span> – Emphasis on understanding and application skills.</>
      ],
      calendar: [
        <><span className="font-semibold">Term-wise plan</span> aligned with CBSE</>,
        <><span className="font-semibold">Pre-scheduled test series</span> for competitive exams</>,
        <><span className="font-semibold">Revision weeks</span> before board exams</>,
        <><span className="font-semibold">Monthly PTMs</span> for parent feedback</>
      ]
    },
    icon: <TrophyIcon className="w-6 h-6 md:w-8 md:h-8" />,
    lightBg: "bg-[#0055A4] text-white",
    darkBg: "dark:bg-white dark:text-[#0055A4]",
  },
];

export default function AcademicsPage() {
  const cards = cardData.map((card) => ({
    lightBg: card.lightBg,
    darkBg: card.darkBg,
    content: (
      <CardContent className="flex flex-col h-full not-prose text-inherit justify-between">
        <div className="text-center mb-4 md:mb-6">
          <div className="mb-2 md:mb-4 flex justify-center">{card.icon}</div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4">{card.title}</h2>
          <h3 className="text-sm md:text-base font-semibold mb-2">Overview</h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-4xl mx-auto mb-3 md:mb-6 leading-relaxed">{card.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 flex-1 overflow-y-auto">
          <div>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3">Subject-wise Curriculum</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {card.details.curriculum.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current mt-1.5 md:mt-2 mr-2 flex-shrink-0"></span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3">Teaching Methodology</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {card.details.methodology.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current mt-1.5 md:mt-2 mr-2 flex-shrink-0"></span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-3">Academic Calendar</h3>
            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
              {card.details.calendar.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current mt-1.5 md:mt-2 mr-2 flex-shrink-0"></span>
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    ),
  }));

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Academics at Macro Vision Academy
          </p>
          <p className="text-base text-white/90 max-w-3xl mx-auto mt-4">
            At Macro Vision Academy, Burhanpur, our academic framework is designed to prepare students for excellence in CBSE board exams, competitive exams, and life beyond school. We provide a balanced curriculum across grade levels, supported by modern pedagogy, experiential learning, and holistic development initiatives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section id="grade-groups">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">Overview by Grade Groups (1–5, 6–8, 9–10, 11–12)</h2>
          <p className="text-sm md:text-base text-muted-foreground text-center mb-8 md:mb-12 max-w-4xl mx-auto">
            At Macro Vision Academy, Burhanpur, our academic framework is designed to prepare students for excellence in CBSE board exams, competitive exams, and life beyond school. We provide a balanced curriculum across grade levels, supported by modern pedagogy, experiential learning, and holistic development initiatives.
          </p>
          <ParallaxCards cards={cards} />
  </section>

  {/* anchors for direct nav targets from navbar dropdowns */}
  <div id="academic-calendar" className="sr-only" />
  <div id="chronosphere" className="sr-only" />

        <section id="teaching-methodology">
          <h2 className="text-3xl font-bold text-foreground mb-8">Teaching Methodology</h2>
          <div className="prose prose-lg max-w-4xl text-muted-foreground">
            <p className="mb-4">
              Our innovative teaching approach combines traditional wisdom with modern pedagogy. We employ:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Technology Integration</span> – Interactive classroom sessions with digital tools and smart boards.</li>
              <li><span className="font-semibold">Project-based learning</span> – Practical, hands-on projects for applied understanding.</li>
              <li><span className="font-semibold">Personalized attention</span> – Individualized support to meet each student's learning needs.</li>
              <li><span className="font-semibold">Regular assessments</span> – Continuous feedback and performance tracking.</li>
              <li><span className="font-semibold">Conceptual clarity</span> – Emphasis on understanding and application skills.</li>
            </ul>
          </div>
        </section>

        <section id="results">
          <h2 className="text-3xl font-bold text-foreground mb-8">Results</h2>
          <div className="bg-gradient-to-br from-primary/10 to-[#0055A4]/10 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Pass Percentage</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                <p className="text-muted-foreground">Students above 90%</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Top 100 Rankers</p>
              </div>
            </div>
          </div>
        </section>

        <section id="career-counseling">
          <h2 className="text-3xl font-bold text-foreground mb-8">Career and College Counseling</h2>
          <div className="bg-card border border-card-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our dedicated counseling team guides students in making informed decisions about their future. 
              We provide comprehensive support for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Career assessment and aptitude testing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">College application guidance</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Entrance exam preparation strategies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <p className="text-muted-foreground">Scholarship and financial aid assistance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
