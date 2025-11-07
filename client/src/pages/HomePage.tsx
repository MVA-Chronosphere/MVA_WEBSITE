import { Link } from "react-router-dom";
import VideoHero from "@/components/VideoHero";
import AchievementsCarousel from "@/components/AchievementsCarousel";
import BannerSlider from "@/components/BannerSlider";
import AnimatedLeaves from "@/components/AnimatedLeaves";
import ImagePopup from "@/components/ImagePopup";
import { Button } from "@/components/ui/button";
import StatsCount from "@/components/ui/statscount";
import WhyChooseCard from "@/components/WhyChooseCard";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <VideoHero />

      <section className="py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
        <AnimatedLeaves />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 underline decoration-black decoration-2 underline-offset-4">
              Why Choose Macro Vision Academy?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A premier institution committed to holistic education, nurturing young minds through academics, sports, arts, and character building
            </p>
          </div>

          <div className="flex justify-center items-center w-full">
            <div className="relative bg-white   p-2 md:p-3 lg:p-4 w-full max-w-4xl">
              {/* Top-Left L-Border */}
              {/* <div className="absolute top-0 left-0 w-32 h-1 bg-blue-900"></div>
              <div className="absolute top-0 left-0 w-1 h-32 bg-blue-900"></div> */}
              {/* Bottom-Right L-Border */}
              {/* <div className="absolute bottom-0 right-0 w-32 h-1 bg-blue-900"></div>
              <div className="absolute bottom-0 right-0 w-1 h-32 bg-blue-900"></div> */}
              <ImagePopup
                src="/mva tree2.webp"
                alt="Macro Vision Academy Tree - Why Choose MVA"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Why Choose Cards Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <WhyChooseCard
              image="/why%20mva%20images/students%20achivemnt.webp"
              title={"Student Achievements"}
              description={"Celebrating excellence with outstanding results in IIT-JEE, NEET, NTSE, and board exams."}
              cta="Explore Achievements →"
              cardIndex={0}
            />
            <WhyChooseCard
              image="/why%20mva%20images/class%20facilities.webp"
              title={"World-Class Facilities"}
              description={"From Apple-powered classrooms to immersive VR lessons—global-standard learning environment."}
              cta="Discover Facilities →"
              cardIndex={1}
            />
            <WhyChooseCard
              image="/why%20mva%20images/expert%20teachers.webp"
              title={"Expert Teachers"}
              description={"A passionate team blending CBSE academics, competitive exam excellence and modern pedagogy."}
              cta="Meet Our Teachers →"
              cardIndex={2}
            />
            <WhyChooseCard
              image="/why%20mva%20images/hostel%20life.webp"
              title={"Vibrant Hostel Life"}
              description={"Spacious, hi-tech residential wings designed for comfort and holistic growth."}
              cta="Explore Hostels →"
              cardIndex={3}
            />
            <WhyChooseCard
              image="/why%20mva%20images/inspiring%20infrastructure.webp"
              title={"Inspiring Infrastructure"}
              description={"50-acre campus with futuristic architecture, advanced labs, sports arenas and more."}
              cta="View Infrastructure →"
              cardIndex={4}
            />
          </div>
        </div>
      </section>

  {/* Black line separator */}
  <div className="w-full h-px bg-black"></div>

      {/* Our Results Section */}
      <StatsCount
        stats={[
          { value: 484, label: "IIT/JEE\nSelections" },
          { value: 1790, label: "JEE-MAINS\nSelections" },
          { value: 505, label: "NEET\nSelections" },
          { value: 401, label: "NTSE\nSelections" },
          { value: 23, label: "NTSE II STAGE\nSelections" },
          { value: 67, label: "FOREIGN\nSelections" },
          { value: 52, label: "12th CBSE 2025\nMore than 90%" },
          { value: 122, label: "10th CBSE 2025\nMore than 90%" },
          { value: 19, label: "10th CBSE 2025\n100 out of 100 Marks" },
          { value: 7, label: "12th CBSE 2023\n100 out of 100 Marks" }
        ]}
        title="OUR RESULTS"
        showDividers={false}
        className=""
      />

      <BannerSlider />

      <AchievementsCarousel />

      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-[#0055A4] to-[#1E88E5] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-center text-white shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Explore Macro Vision Academy
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our world-class facilities, experienced faculty, and comprehensive programs designed to nurture excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link to="/about/our-story">
                <Button size="lg" variant="secondary" className="px-8 md:px-10 shadow-lg hover:shadow-xl transition-all hover:scale-105" data-testid="button-learn-more">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/life-at-mva/infrastructure/vision-udaan">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 px-8 md:px-10 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  data-testid="button-view-infrastructure"
                >
                  View Infrastructure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
