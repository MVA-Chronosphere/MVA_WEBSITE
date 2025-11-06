"use client";

import {
  GraduationCapIcon,
  BookOpenIcon,
  BrainIcon,
  TrophyIcon,
  CalendarIcon,
  CodeIcon,
  CpuIcon,
  RocketIcon,
  AwardIcon,
  UsersIcon,
  LightbulbIcon,
  TargetIcon,
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

        {/* Academic Calendar Section */}
        <section id="academic-calendar" className="scroll-mt-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055A4] rounded-full mb-6">
              <CalendarIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Maven_Pro']">Academic Calendar</h2>
            <div className="w-24 h-1 bg-[#0055A4] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Structured academic planning for the 2025-26 academic year
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Column - Information */}
                <div className="lg:col-span-2">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 font-['Maven_Pro']">Calendar Overview</h4>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      The Academic Calendar serves as the official planning document for the 2025-26 academic year, 
                      outlining key dates, examination schedules, holidays, and institutional events to ensure 
                      coordinated planning across all academic activities.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border-l-4 border-[#0055A4] pl-4 py-2">
                      <h5 className="font-semibold text-gray-900 mb-2">Academic Terms</h5>
                      <p className="text-gray-600 text-sm">Structured semester system with defined assessment periods</p>
                    </div>
                    <div className="border-l-4 border-[#0055A4] pl-4 py-2">
                      <h5 className="font-semibold text-gray-900 mb-2">Examination Schedule</h5>
                      <p className="text-gray-600 text-sm">Comprehensive testing calendar with preparatory periods</p>
                    </div>
                    <div className="border-l-4 border-[#0055A4] pl-4 py-2">
                      <h5 className="font-semibold text-gray-900 mb-2">Institutional Events</h5>
                      <p className="text-gray-600 text-sm">Academic, cultural, and co-curricular activities</p>
                    </div>
                    <div className="border-l-4 border-[#0055A4] pl-4 py-2">
                      <h5 className="font-semibold text-gray-900 mb-2">Administrative Dates</h5>
                      <p className="text-gray-600 text-sm">Registration, orientation, and administrative deadlines</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Download */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-xl p-8 shadow-sm sticky top-8">
                    <div className="text-center mb-6">
                      <div className="bg-[#0055A4] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Download Document</h4>
                      <p className="text-gray-600 text-sm mb-6">
                        Official Academic Calendar 2025-26
                      </p>
                    </div>

                    <Button 
                      onClick={() => window.open('academic_calender.pdf', '_blank')}
                      className="w-full bg-[#0055A4] hover:bg-[#004488] text-white py-4 px-6 text-lg font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg border border-[#004488]"
                    >
                      <CalendarIcon className="w-5 h-5" />
                      Download PDF
                    </Button>

                    <div className="mt-6 space-y-3 text-sm text-gray-600">
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span>File Format</span>
                        <span className="font-semibold text-gray-900">PDF Document</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span>File Size</span>
                        <span className="font-semibold text-gray-900">2.4 MB</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span>Pages</span>
                        <span className="font-semibold text-gray-900">12 Pages</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     {/* Chronosphere Section - Consolidated */}
<section id="chronosphere">
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0055A4] rounded-full mb-6">
      <RocketIcon className="w-8 h-8 text-white" />
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Maven_Pro']">Chronosphere Innovation Lab</h2>
    <div className="w-24 h-1 bg-[#0055A4] mx-auto mb-6"></div>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Where learning goes beyond classrooms to create innovators, problem-solvers, and future leaders
    </p>
  </div>

  <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Programs & Outcomes */}
      <div className="space-y-8">
        {/* Student Outcomes */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Maven_Pro'] flex items-center">
            <TargetIcon className="w-6 h-6 text-[#0055A4] mr-3" />
            Student Outcomes
          </h3>
          <div className="grid gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <CodeIcon className="w-5 h-5 text-[#0055A4] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Industry-Ready Projects</h4>
                  <p className="text-gray-600 text-sm">Real hands-on coding, data, and AI/ML work</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <AwardIcon className="w-5 h-5 text-[#0055A4] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Global Certifications</h4>
                  <p className="text-gray-600 text-sm">AWS, HCL-Jigsaw recognized credentials</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <LightbulbIcon className="w-5 h-5 text-[#0055A4] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation Mindset</h4>
                  <p className="text-gray-600 text-sm">Critical thinking, leadership, and creativity built into every program</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start">
                <TrophyIcon className="w-5 h-5 text-[#0055A4] mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Career & College Edge</h4>
                  <p className="text-gray-600 text-sm">Strong digital portfolios and real-world exposure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* World Records */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Maven_Pro'] flex items-center">
            <AwardIcon className="w-6 h-6 text-[#0055A4] mr-3" />
            World Record Achievements
          </h3>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <UsersIcon className="w-8 h-8 text-white mb-3" />
                <h4 className="text-lg font-bold mb-2">Collective Innovation</h4>
                <p className="text-blue-100">
                  <span className="text-xl font-bold block">1440 Python Programs</span>
                  solved by 750 students in just 24 hours
                </p>
              </div>
              <div>
                <CpuIcon className="w-8 h-8 text-white mb-3" />
                <h4 className="text-lg font-bold mb-2">Individual Excellence</h4>
                <p className="text-blue-100">
                  <span className="text-xl font-bold block">480 Python Programs</span>
                  solved in 480 minutes by one student
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-400 text-center">
              <p className="text-blue-100 text-sm">
                <span className="font-semibold">Recognised by:</span> World Book of Records, London  
                <br />
                <span className="font-semibold"> Organized by:</span> Chronosphere : Ahead of Time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Programs & Labs */}
      <div className="space-y-8">
        {/* Programs Offered */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Maven_Pro'] flex items-center">
            <BookOpenIcon className="w-6 h-6 text-[#0055A4] mr-3" />
            Programs Offered
          </h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <GraduationCapIcon className="w-5 h-5 text-blue-600 mr-2" />
                For Classes 6th to 8th
              </h4>
              <p className="text-gray-600 text-sm mb-3">A perfect start for curious learners stepping into the world of technology and creativity</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Introduction to Programming</span> – Build your first codes and bring ideas to life</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Animation Basics</span> – Turn imagination into motion and stories into visuals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Business Essentials</span> – Learn the mindset of young entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Advanced Programming</span> – Take your coding journey to the next level with real projects</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <BrainIcon className="w-5 h-5 text-blue-600 mr-2" />
                For Classes 9th to 12th
              </h4>
              <p className="text-gray-600 text-sm mb-3">For future-ready learners ready to explore deeper tech, innovation, and leadership</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Data Science, AI/ML & Robotics</span> – Explore how machines think, learn, and move</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                  <span><span className="font-semibold">Entrepreneurship</span> – Design, innovate, and build your own ventures from the ground up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Labs */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Maven_Pro'] flex items-center">
            <CpuIcon className="w-6 h-6 text-[#0055A4] mr-3" />
            Innovation Labs & Facilities
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Teamwork Zones",
              "Entrepreneurship Hubs", 
              "Animation Studios",
              "Robotics Labs",
              "Coding Labs",
              "AI/ML Labs",
              "Data Science Labs",
              "Cybersecurity Labs"
            ].map((lab, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <p className="text-sm font-medium text-gray-900 text-center">{lab}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">
            World-class labs for hands-on experimentation and innovation
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Section - Key Message */}
    <div className="mt-12 pt-8 border-t border-gray-200">
      <div className="text-center">
        <p className="text-lg text-gray-700 italic">
          "At Chronosphere, learning doesn't stop in the classroom—it grows through creation and collaboration. 
          Our world-class labs and innovation spaces give every learner the freedom to experiment, explore, and make ideas real."
        </p>
      </div>
    </div>
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