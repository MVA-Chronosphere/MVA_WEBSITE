

import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function AlumniPage() {
  const navigate = useNavigate();
  const handleGoToForm = () => navigate("/alumni/form");
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome, Alumni!</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay connected with your alma mater and fellows through our dedicated alumni resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col min-h-[260px]">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-blue-900 rounded" />
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute bottom-0 right-0 w-1 h-16 bg-blue-900 rounded" />
              <h2 className="text-xl font-bold text-center mb-2">Update Your Contact Information</h2>
              <p className="text-base text-muted-foreground text-center mb-2">Keep your details current so we can stay in touch and keep you informed about exciting opportunities and events.</p>
              <div className="flex-1" />
              <Button onClick={handleGoToForm} className="mx-auto w-32 px-5 py-2 text-base font-semibold bg-primary text-white rounded hover:bg-primary/90 transition-all">Click here</Button>
            </div>
            {/* Card 2 */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col min-h-[260px]">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-blue-900 rounded" />
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute bottom-0 right-0 w-1 h-16 bg-blue-900 rounded" />
              <h2 className="text-xl font-bold text-center mb-2">Alumni Connect (Portal)</h2>
              <p className="text-base text-muted-foreground text-center mb-2">Join our exclusive Alumni Connect Portal - your gateway to networking, career resources, and community discussions with fellow alumni.</p>
              <div className="flex-1" />
              <Button onClick={handleGoToForm} className="mx-auto w-32 px-5 py-2 text-base font-semibold bg-primary text-white rounded hover:bg-primary/90 transition-all">Click here</Button>
            </div>
            {/* Card 3 */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col min-h-[260px]">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-blue-900 rounded" />
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute bottom-0 right-0 w-1 h-16 bg-blue-900 rounded" />
              <h2 className="text-xl font-bold text-center mb-2">Events</h2>
              <p className="text-base text-muted-foreground text-center mb-2">From professional workshops to social gatherings, our events offer many ways to engage and celebrate your journey with us.</p>
              <span className="block text-xs text-center text-muted-foreground mb-2">Stay connected for event information.</span>
              <div className="flex-1" />
              <Button onClick={handleGoToForm} className="mx-auto w-32 px-5 py-2 text-base font-semibold bg-primary text-white rounded hover:bg-primary/90 transition-all">Click here</Button>
            </div>
            {/* Card 4 */}
            <div className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 flex flex-col min-h-[260px]">
              {/* Top-Left L-Border */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute top-0 left-0 w-1 h-16 bg-blue-900 rounded" />
              {/* Bottom-Right L-Border */}
              <div className="absolute bottom-0 right-0 w-16 h-1 bg-blue-900 rounded" />
              <div className="absolute bottom-0 right-0 w-1 h-16 bg-blue-900 rounded" />
              <h2 className="text-xl font-bold text-center mb-2">Campus Visits and Reunions</h2>
              <p className="text-base text-muted-foreground text-center mb-2">We love welcoming you back! Plan your next visit or join us for our annual reunion to reconnect with classmates and make new memories. Do follow our social media channels and stay updated!</p>
              <div className="flex-1" />
            </div>
          </div>
        </section>

        {/* Alumni Showcase section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Alumni Showcase</h2>
          <p className="text-lg text-muted-foreground text-center">(Here we can show our Alumni)</p>
        </section>

        {/* Alumni Showcase section can be enhanced here if needed */}

        {/* Form removed from this page, now on its own page */}
      </div>
    </div>

  );
}
