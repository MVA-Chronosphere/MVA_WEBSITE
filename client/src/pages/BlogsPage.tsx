import { useState } from "react";
import { X, Calendar, User, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Blog {
  image: string;
  title: string;
  desc: string;
  category: string;
  content: string;
}

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardClass =
    "bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer";
  const imageBox =
    "aspect-video w-full overflow-hidden bg-gray-100";

  const handleReadMore = (blog: Blog, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const blogs = {
    achievements: [
      {
        image: "MVA 02.jpg",
        title: "JEE Main & JEE Advanced 2025 Results: MVA Burhanpur Among India's Top 10 IIT-JEE Schools",
        desc: "Historic achievement with AIR 3, 526 JEE Advanced qualifiers, and 1,959 JEE Main successes placing MVA among elite institutions.",
        category: "Academic Excellence",
        content: `The much-awaited JEE Main and JEE Advanced 2025 results are out, and they've once again redrawn the map of academic excellence across India. Every year, thousands of brilliant young minds dream of securing a seat in the Indian Institutes of Technology (IITs) – and this year, Macro Vision Academy (MVA), Burhanpur, has turned that dream into a dazzling reality.
From the heart of Madhya Pradesh, MVA Burhanpur has proudly emerged among the Top 10 Schools in India for JEE Preparation 2025 – a phenomenal feat that celebrates its culture of discipline, innovation, and unstoppable ambition.
## JEE 2025 Results: A Record-Breaking Achievement
This year, MVA students didn't just perform – they soared. The academy's results in both JEE Main 2025 and JEE Advanced 2025 have been nothing short of historic.

### Highlights of MVA's 2025 Achievements:
- All India Rank 3 in JEE Advanced 2025
- 526 student qualified JEE Advanced 2025
- 1,959 students cleared JEE Main 2025
These milestones firmly place MVA Burhanpur among India's most elite IIT-JEE institutions – proof that with consistent mentorship, disciplined effort, and strong moral values, world-class results can emerge from anywhere, not just the metros.

## Top School in India for IIT-JEE Preparation 2025
In a year of intense competition, MVA Burhanpur has proudly joined the league of India's most renowned JEE powerhouses – a moment that marks a new dawn for Central India. MVA's inclusion in this elite proves that top tier JEE success stories are no longer limited to traditional coaching hubs. The winds of change are blowing from Burhanpur.

## What Makes MVA Burhanpur the Best School for JEE-IIT Preparation?
### 1. Integrated Curriculum – School + JEE Coaching
At MVA, students don't have to choose between boards and competitive exams. The academy's CBSE-aligned academic program is seamlessly integrated with structured IIT-JEE preparation, helping learners stay stress-free while achieving balance and brilliance.

### 2. Expert Faculty & Personal Mentoring
MVA's powerhouse of educators – including IIT alumni and subject experts – bring a rare blend of academic mastery and heartfelt mentorship. Small batches, one-on-one guidance, and frequent doubt-clearing sessions ensure that every student's journey is personal and powerful.

### 3. Cutting-Edge Infrastructure
From AI-based learning tools to smart classrooms and advanced labs, MVA ensures a tech-savvy, immersive, and engaging learning environment that mirrors the future of education.

### 4. Holistic Growth Beyond Academics
MVA believes that toppers are made not just by equations, but by empathy. Guided by its philosophy – "Nurturing Minds, Strengthening Morals, Shaping Humanity" – the school empowers students to grow as thinkers, innovators, and compassionate leaders.

### 5. Consistent Results Year After Year
Be it regional toppers or national rankholders, MVA's track record speaks louder than words. Year after year, it continues to raise the bar for IIT-JEE success across Central India.

## The MVA Vision
To be a centre of excellence that transforms young minds into confident, compassionate, and innovative leaders who shape a better world as exemplary global citizens.

## Conclusion
In the ever-evolving world of engineering education, MVA Burhanpur stands tall as a beacon of excellence, discipline, and innovation. Its exceptional JEE 2025 performance, featuring an AIR 3, hundreds of qualifiers, and a spot among India's Top 10 JEE Schools, highlights its continued focus on commitment to quality education and student success.

For parents and students aiming for the IIT dream, Macro Vision Academy offers not just coaching, but a complete environment of inspiration, mentorship, and growth.`
      },
    ],
    innovation: [
      {
        image: "MVA 05.jpg",
        title: "Chronosphere: Nurturing Innovation and Corporate Readiness at MVA Burhanpur",
        desc: "How our technical unit transforms students into innovators, problem-solvers, and future leaders through hands-on learning.",
        category: "Innovation & Skills",
        content: `In today's fast-paced digital world, education is no longer limited to classrooms or textbooks. The future belongs to those who can think creatively, work smartly, and adapt quickly to technological change. At MVA Burhanpur, we believe in empowering students to become more than just graduates – we prepare them to be innovators, problem-solvers, and future leaders.

That's exactly what Chronosphere, the technical unit of MVA Burhanpur, stands for. It's a vibrant learning community where technology meets creativity – a place where students discover their potential, learn industry-relevant skills, and transform themselves into corporate-ready professionals.

## Our Vision: Learning Beyond the Classroom
The name Chronosphere symbolizes the "sphere of time and technology" – representing how we help students stay ahead of their time. Our vision is simple yet powerful:

To bridge the gap between academic learning and corporate expectations through hands-on, practical, and innovative education.

At Chronosphere, we go beyond theoretical lessons. We focus on skill-based learning, where students get real exposure to modern tools, technologies, and creative processes. Every activity here – from workshops to live projects – is designed to make students industry-ready while building confidence, teamwork, and problem-solving abilities.

## What We Teach at Chronosphere
Chronosphere isn't just about learning technical skills; it's about experiencing technology in action. Our multidisciplinary programs are structured around today's most in-demand fields – Designing, Animation, Coding, Robotics, and Professional Development.

### Designing: Where Ideas Come to Life
Good design is not just about aesthetics – it's about communicating ideas effectively. At Chronosphere, students learn how to create powerful designs that combine creativity and functionality.

We train students in:
- Graphic Design using Adobe Photoshop, Illustrator, and Canva
- UI/UX Design with Figma and other modern tools
- Visual Storytelling and Brand Identity

Students work on real-time projects such as poster creation, app and web UI design, and digital campaigns. These experiences teach them to think like designers – understanding user needs, emotions, and how visuals influence perception.

### Animation: Turning Imagination into Motion
In the age of digital storytelling, animation is a language of its own. Our animation workshops help students learn how to breathe life into their ideas. From 2D animation and motion graphics to 3D modeling, we cover it all.

What students learn:
- Storyboarding and concept visualization
- Character design and animation principles
- Sound design and video editing

By creating short animated videos and explainer content, students gain hands-on experience that strengthens both their creativity and technical expertise.

### Coding: The Foundation of Modern Innovation
At the heart of technology lies coding – the skill that powers the digital age. Chronosphere's coding sessions help students understand, write, and innovate through code.

We focus on:
- Frontend Development: HTML, CSS, JavaScript, React
- Backend Programming: Python, Node.js, databases
- Logical Thinking and Algorithm Design

Students participate in coding challenges, hackathons, and collaborative projects that simulate real-world IT environments. The goal isn't just to learn coding – it's to think like a developer and build problem-solving mindsets.

### Robotics: Building the Future with Innovation
Robotics combines creativity, engineering, and coding – and at Chronosphere, students get to experience this fusion firsthand.

Through practical sessions, students explore:
- Arduino and Raspberry Pi programming
- Automation and sensor-based systems
- IoT (Internet of Things) concepts

From assembling robots to developing smart automation prototypes, students learn how machines can simplify human life. This hands-on approach builds technical confidence and sparks curiosity about the technologies shaping the future.

### Professional Skills: The Bridge to Corporate Readiness
Chronosphere strongly believes that technical knowledge must go hand-in-hand with professional skills. That's why we focus equally on soft skills and personality development, ensuring our students are truly corporate-ready.

Our training covers:
- Effective communication and presentation skills
- Teamwork and leadership development
- Resume building, interview preparation, and professional ethics

These sessions prepare students not only to secure jobs but also to excel in their careers by developing a strong professional identity.

## Why Chronosphere Stands Out
What truly makes Chronosphere unique is its student-centric and experiential learning approach. Every learner is encouraged to explore, experiment, and express themselves through projects and teamwork.

Our mentors – experienced educators and industry professionals – guide students through each step, helping them build both confidence and competence. Regular events like tech expos, workshops, competitions, and hackathons keep the learning environment dynamic and inspiring.

Through this ecosystem, students don't just gain skills, they build a portfolio, network, and mindset that give them an edge in the corporate world.

## The Future Begins Here
Chronosphere at MVA Burhanpur is more than just a technical unit – it's a movement that encourages students to create, innovate, and lead. Whether it's designing a digital brand, developing an app, animating a story, or building a robot, Chronosphere helps every learner turn ideas into reality.

By focusing on skill development, innovation, and corporate readiness, we are shaping the next generation of professionals who are confident, creative, and future-ready. Chronosphere – where imagination meets innovation, and learning turns into limitless possibilities.`
      },
      {
        image: "MVA 06.jpg",
        title: "Future-Ready Classrooms: How MVA Burhanpur is Redefining Education with AI",
        desc: "Transforming traditional learning into intelligent ecosystems with personalized, adaptive education experiences.",
        category: "EdTech Innovation",
        content: `In today's rapidly evolving digital landscape, Artificial Intelligence (AI) has emerged as a powerful force reshaping industries, and education is at the forefront of this transformation. MVA Burhanpur is leading this change by seamlessly integrating AI into its educational ecosystem, preparing students not just for exams, but for a tech-driven, innovation-led future.

## The Digital Shift in Learning
Gone are the days of one-size-fits-all education. At MVA Burhanpur, AI is turning classrooms into intelligent ecosystems where learning adapts to every student's pace, style, and potential. Through data-driven insights, teachers can now identify learning gaps, tailor lessons, and personalize study material – making education more inclusive, engaging, and effective.

AI doesn't just stop at academics. It's also transforming administrative efficiency. Automated attendance, smart grading systems, and performance analytics free up teachers' time so they can focus on what matters most – nurturing creativity, emotional intelligence, and problem-solving abilities among students.

## Transforming Classrooms with Smart AI Tools
### 1. Intelligent Tutoring Systems (ITS)
AI-powered tutoring platforms act as digital mentors. For instance, if a student at MVA Burhanpur struggles with algebra, AI tools like Carnegie Learning can offer simplified explanations, step-by-step problem-solving guidance, and adaptive exercises that evolve with the learner's progress.

### 2. AI-Powered Learning Management Systems (LMS)
Systems such as Moodle or Google Classroom AI extensions organize lessons, track performance, and suggest tailored quizzes or videos. Students receive instant feedback, while teachers gain insights into who needs extra support – turning data into personalized action.

### 3. Natural Language Processing (NLP) Tools
From improving writing to enhancing communication skills, NLP-based platforms help students refine their essays, reports, and presentations, ensuring clarity and professionalism.

### 4. Automated Assessment Tools
AI tools such as Gradescope simplify evaluation by analyzing responses, identifying common mistakes, and providing consistent grading. This ensures transparency and reduces the administrative burden on educators.

### 5. Virtual & Augmented Reality (VR/AR) with AI
Imagine exploring the solar system or walking through the Great Wall of China – all from a classroom in Burhanpur. With AI-driven AR/VR simulations, students at MVA Burhanpur experience immersive learning, enhancing retention and curiosity through interactive storytelling and real-world visualization.

### 6. AI Chatbots and Virtual Assistants
Round-the-clock support is a reality with chatbots that answer questions instantly, guide students through lessons, and assist in exam preparation. Tools like ChatGPT make knowledge accessible anytime, anywhere.

## Merits and Challenges of AI in Education
### Advantages:
- Personalized Learning: Every student follows a unique learning path tailored by AI.
- Skill Development: Gamified AI platforms enhance creativity, logic, and analytical thinking.
- Accessibility: AI bridges learning barriers for students with disabilities using voice recognition, real-time translation, and text-to-speech tools.
- Continuous Feedback: Instant evaluations allow quick corrective action and progress tracking.
- Global Exposure: Students access resources, lectures, and peers worldwide, widening their learning horizons.

### Challenges:
- Over-Dependence on Technology: Excessive reliance can hinder creative and critical thinking.
- Data Privacy: Protecting student information remains a top priority.
- Reduced Social Interaction: Digital learning can sometimes limit interpersonal connections.
- Digital Divide: Equal access to devices and internet connectivity is still a concern in some areas.

## The Future of AI in Education
The future of education is not about replacing teachers – it's about empowering them with AI. At MVA Burhanpur, educators use smart analytics to predict academic trends and identify early learning challenges, ensuring no child is left behind.

We're moving toward hyper-personalized learning, where AI dynamically adjusts lessons based on each student's interests, performance, and even mood. Imagine a student who learns history better through visuals – AI can curate videos, timelines, and quizzes that match their style, making education both efficient and enjoyable.

AI is also enabling global collaboration, allowing MVA students to connect with peers and mentors worldwide, fostering cross-cultural understanding and innovation.

## Empowering Parents and Students
AI doesn't just empower students – it keeps parents in the loop too. Through smart apps, parents receive regular updates about their child's academic progress, strengths, and areas for improvement. They can actively participate in their child's educational journey, ensuring holistic growth.

For students, AI brings flexibility and inclusivity. Whether it's a voice assistant helping a visually impaired learner, a captioning tool supporting hearing-impaired students, or adaptive reading software assisting children with dyslexia – AI ensures education for all.

Moreover, AI-based monitoring tools help parents and teachers ensure a healthy digital environment, analyzing online interactions and maintaining safety in virtual learning spaces.

## Preparing Students for an AI-Driven World
At MVA Burhanpur, the goal is to create future-ready students who can think critically, adapt quickly, and use technology responsibly. By integrating AI across disciplines, MVA ensures that learners develop essential 21st-century skills – coding, data interpretation, ethical reasoning, and digital literacy.

AI in education is not just about automating processes; it's about amplifying human potential. The harmony between human intelligence and artificial intelligence is shaping a future where learning never stops, creativity knows no bounds, and innovation becomes second nature.`
      },
      {
        image: "MVA 03.jpg",
        title: "Confidence Starts with a Word: Teach Your Child the Power of Speaking Up",
        desc: "Building lifelong communication skills and leadership through public speaking and confident expression.",
        category: "Skill Development",
        content: `Public speaking isn't just about standing in front of a crowd – it's a lifelong skill that shapes confidence, leadership, and communication. When a child learns to express their thoughts clearly and confidently, they're better equipped to handle academic, social, and professional challenges.

At MVA Burhanpur, we believe that public speaking is the foundation of holistic education. With the right guidance and encouragement, even the shyest child can learn to speak with clarity, think critically, and connect meaningfully with others.

## Why Public Speaking Matters
The ability to speak effectively is more than a classroom skill – it's a life skill. It builds leadership, teamwork, and self-assurance, preparing children for opportunities like school presentations, interviews, and future leadership roles.

Here's how learning public speaking early benefits children:

### 1. Builds Self-Esteem
For many children, speaking in front of others feels intimidating. But with positive reinforcement – encouragement, praise, and constructive feedback – that fear can transform into confidence.

Instead of focusing on mistakes, celebrate small wins: a well-structured sentence, good eye contact, or even a brave attempt. Each success reinforces self-belief and self-worth.

### 2. Enhances Communication and Social Skills
Public speaking teaches children to listen, communicate, and connect. Regular practice helps them articulate ideas clearly, develop empathy, and engage confidently in conversations. Over time, these skills help them form stronger relationships and become thoughtful, expressive individuals.

### 3. Unlocks Future Opportunities
Confident communication opens doors – from school competitions and group discussions to leadership roles and professional success. Mastering the art of speaking early gives children a strong advantage in every stage of life.

### 4. Encourages Creativity and Expression
When children feel free to express their thoughts, their imagination blossoms. Speaking publicly helps them analyze, visualize, and share ideas, boosting creativity and critical thinking – skills essential for success both in and beyond the classroom.

## Creating Opportunities to Practice
Confidence grows in supportive environments. At MVA Burhanpur, we encourage parents to build a nurturing atmosphere where children can practice speaking freely, without fear of judgment.

Here are a few simple ways to help your child at home:

- **Talk regularly**: Have open conversations about their day, stories they read, or topics they find interesting. This helps organize thoughts and develop expression naturally.
- **Provide a safe space**: Remind your child that it's okay to make mistakes. Every speaker improves with time and practice.
- **Respect their opinions**: When children feel heard, they become more confident sharing their views.
- **Make learning fun**:
  - Storytelling nights: Let them narrate their favorite tales.
  - Family debates: Choose fun topics as per liking.
  - Role-playing games: Encourage them to act out characters and express emotions.

These activities make speaking practice enjoyable while developing essential communication skills.

## Essential Public Speaking Skills to Teach
### 1. Voice and Clarity
A strong, clear voice is key to confident speaking. Encourage your child to:
- Speak slowly and pronounce each word clearly.
- Use a varied tone to stay engaging.
- Project their voice so it reaches everyone.

Reading aloud or reciting poems together is a fun way to build vocal clarity.

### 2. Confident Body Language
Non-verbal cues speak volumes. Teach your child to:
- Maintain eye contact with the audience.
- Use natural gestures to highlight points.
- Stand tall with a calm, open posture.

Mirror practice helps them observe and refine their expressions and movements.

### 3. Organized Thinking
A good speech needs structure. Show your child how to:
- Divide their talk into introduction, body, and conclusion.
- Use simple, age-appropriate language.
- Maintain logical flow with smooth transitions.

These habits improve both speaking and critical thinking skills.

### 4. Engaging Presentation
Encourage your child to:
- Use visuals, drawings, or props to illustrate points.
- Pause for emphasis and avoid filler words like "um" or "like."
- Practice in front of family or friends for confidence.

Frequent practice makes public speaking feel natural and rewarding.

## Tips for Parents
- **Be a Role Model**: Speak confidently in daily interactions – children learn best by example.
- **Record and Review**: Record their short speeches and discuss what went well. Celebrate progress.
- **Set Achievable Goals**: Begin with introductions or small recitations, then move to longer presentations.
- **Join Speaking Programs**: Enroll your child in public speaking workshops or MVA Burhanpur's speaking sessions to build confidence in a group setting.

## Final Thoughts
Helping your child master public speaking is one of the best investments in their personal growth. It takes patience, encouragement, and practice, but the results last a lifetime.

At MVA Burhanpur, we're committed to helping every child develop into an effective communicator and confident individual, equipped with the courage to express their ideas and lead with empathy.

Remember, every great speaker started small – your child's first step today can spark a lifetime of confidence tomorrow.`
      }
    ],
    parenting: [
      {
        image: "screentime.jpeg",
        title: "How Screen Time Affects Your Child's Brain Development",
        desc: "Practical guidance on balancing digital exposure with real-world experiences for healthy cognitive growth.",
        category: "Child Development",
        content: `We live in a digital age where screens surround us, from smartphones and tablets to TVs and laptops. For today's children, technology is both a learning tool and a source of entertainment. While it opens doors to knowledge and creativity, it also raises a serious question that many parents at MVA Burhanpur ask:

How much screen time is healthy for my child?

Let's explore how excessive screen use affects a child's brain development, social skills, and creativity, and how parents can create a healthy balance in this digital world.

## What Is Screen Time?
Screen time refers to the number of hours a person spends using digital devices such as phones, computers, or televisions. For children, some screen time can be educational, like watching learning videos or using interactive apps.

However, when screen exposure becomes excessive, it may affect a child's attention span, imagination, and emotional growth. As educators at MVA Burhanpur, we believe moderation is key – technology should enhance learning, not replace it.

## How Too Much Screen Time Affects Children?
### 1. Shorter Attention Spans
Screens often show fast-changing visuals and sounds, keeping the brain constantly stimulated. Over time, this can make it harder for children to focus on slower-paced tasks like reading, solving puzzles, or listening in class.

By encouraging screen-free activities such as art, reading, or outdoor play, parents can help improve a child's focus and patience.

### 2. Slower Cognitive Growth
Cognitive skills – like memory, planning, and problem-solving – grow through hands-on experiences. When screen time replaces these experiences, children miss chances to develop self-control, decision-making, and goal-setting abilities.

Simple daily activities, such as helping in the kitchen, building blocks, or doing chores, stimulate brain development more effectively than hours of passive screen use.

### 3. Limited Deep Thinking and Creativity
Watching videos or playing digital games gives instant results but requires little imagination. Over time, this can reduce a child's ability to think deeply, create stories, or solve problems independently.

Encouraging open-ended play – like drawing, storytelling, or building – helps keep their creativity alive.

## Finding a Healthy Balance
A healthy routine doesn't mean cutting screens out completely; it means using them wisely. Here are a few practical ways parents can manage their child's digital habits:

### 1. Use Screens in Moderation
Choose age-appropriate educational content that encourages thinking and creativity. Avoid passive videos that only entertain without teaching. A balanced approach keeps learning interactive and fun.

### 2. Encourage Face-to-Face Connection
Real conversations and playtime with family or friends are essential for building empathy, communication, and social understanding. These experiences teach children how to express themselves, read emotions, and cooperate with others – skills no device can replace.

### 3. Create Screen-Free Spaces
Set clear screen-free zones, like during meals or before bedtime. The blue light from screens can disrupt sleep by affecting melatonin production, making it harder for children to rest. A quiet bedtime routine without screens supports better sleep and emotional balance.

### 4. Promote Outdoor and Creative Play
Encourage children to spend time outside – running, cycling, or simply exploring nature. Outdoor play not only boosts physical health but also improves focus, emotional well-being, and social adaptability.

At MVA Burhanpur, we often remind families that playtime is learning time too – it builds imagination, confidence, and teamwork.

### 5. Talk and Listen
Family conversations strengthen relationships and language development. Ask your child about their day, what they watched, or what they learned online. This helps them think critically about what they consume and express their thoughts clearly.

## What Parents Can Do Every Day
- **Set routines**: Plan daily activities with balanced screen use and screen-free time.
- **Be a role model**: Children copy adults. Limiting your own screen time encourages them to do the same.
- **Encourage creative play**: drawing, storytelling, or building helps children express themselves freely.
- **Prioritize sleep**: Keep screens away an hour before bedtime for better rest and mood stability.
- **Stay involved**: Know what your child is watching or playing. Discuss online content openly to teach digital awareness.

## Healthy Screen Habits Lead to Healthy Minds
When used responsibly, technology can be a wonderful learning companion. But it should never replace real experiences, outdoor adventures, or family moments.

At MVA Burhanpur, we emphasize holistic education – nurturing both the mind and heart. By finding balance in screen use, parents can ensure that technology becomes a tool for growth, not a distraction from it.

Healthy boundaries, meaningful conversations, and active playtime together can help children grow into curious, creative, and emotionally intelligent individuals, ready to thrive in both the digital and real world.

## Conclusion
At MVA Burhanpur, we believe in guiding children and parents toward mindful digital habits that support balanced learning, creativity, and emotional well-being.

Because real growth happens not just on screens, but in the world beyond them.`
      },
    ]
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs & Insights</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expert perspectives on education, parenting, and student development
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="innovation" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="achievements" data-testid="tab-achievements">Achievements</TabsTrigger>
            <TabsTrigger value="innovation" data-testid="tab-innovation">Innovation</TabsTrigger>
            <TabsTrigger value="parenting" data-testid="tab-parenting">Parenting</TabsTrigger>
          </TabsList>

          {/* Innovation Tab */}
          <TabsContent value="innovation" className="space-y-6">
            <div className={`grid gap-8 ${blogs.innovation.length === 1 ? 'justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {blogs.innovation.map((blog, i) => (
                <article 
                  key={i} 
                  className={cardClass}
                  style={blogs.innovation.length === 1 ? { maxWidth: '400px', margin: '0 auto' } : {}}
                >
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className={`grid gap-8 ${blogs.achievements.length === 1 ? 'justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {blogs.achievements.map((blog, i) => (
                <article 
                  key={i} 
                  className={cardClass}
                  style={blogs.achievements.length === 1 ? { maxWidth: '400px', margin: '0 auto' } : {}}
                >
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Parenting Tab */}
          <TabsContent value="parenting" className="space-y-6">
            <div className={`grid gap-8 ${blogs.parenting.length === 1 ? 'justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {blogs.parenting.map((blog, i) => (
                <article 
                  key={i} 
                  className={cardClass}
                  style={blogs.parenting.length === 1 ? { maxWidth: '400px', margin: '0 auto' } : {}}
                >
                  <div className={imageBox}>
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{blog.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.desc}</p>
                    <button 
                      className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1"
                      onClick={(e) => handleReadMore(blog, e)}
                    >
                      Read More
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Blog Modal */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-6xl max-h-[95vh] w-full overflow-hidden flex flex-col">
            {/* Modal Header with Image */}
            <div className="relative">
              <div className="h-64 md:h-80 w-full overflow-hidden">
                <img 
                  src={selectedBlog.image} 
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedBlog.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/90">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">2 min read</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                  {selectedBlog.title}
                </h2>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  {selectedBlog.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    } else if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-lg md:text-xl font-bold text-gray-800 mt-6 mb-3">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('- ')) {
                      return (
                        <li key={index} className="text-gray-700 mb-2 ml-4 flex items-start">
                          <span className="text-primary mr-3 mt-2 flex-shrink-0">•</span>
                          <span>{paragraph.replace('- ', '')}</span>
                        </li>
                      );
                    } else if (paragraph.trim() === '') {
                      return <br key={index} />;
                    } else {
                      return (
                        <p key={index} className="text-gray-700 mb-4 leading-relaxed text-base md:text-lg">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-4xl mx-auto">
                <div className="text-sm text-gray-600">
                  Macro Vision Academy Burhanpur
                </div>
                <button
                  onClick={closeModal}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}