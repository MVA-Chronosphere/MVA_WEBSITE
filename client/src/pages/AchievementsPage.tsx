import TabbedAchievements from "@/components/TabbedAchievements";

// Main AchievementsPage component
export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      {/* Blue Header Section */}
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Celebrating excellence in academics, sports, and beyond
          </p>
        </div>
      </div>

      <TabbedAchievements />
    </div>
  );
}