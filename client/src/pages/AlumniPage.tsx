import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, CalendarDays, MapPin, Edit3 } from "lucide-react";

export default function AlumniPage() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => navigate(path);

  const cards = [
    {
      icon: Edit3,
      title: "Update Your Contact Information",
      desc: "Keep your details current so we can stay in touch and keep you informed about exciting opportunities and events.",
      path: "/alumni/form",
    },
    {
      icon: Users,
      title: "Alumni Connect (Portal)",
      desc: "Join our exclusive Alumni Connect Portal – your gateway to networking, career resources, and community discussions with fellow alumni.",
      path: "/alumni/connect",
    },
    {
      icon: CalendarDays,
      title: "Events",
      desc: "From professional workshops to social gatherings, our events offer many ways to engage and celebrate your journey with us.",
      extra: "Stay connected for event information.",
      path: "/alumni/events",
    },
    {
      icon: MapPin,
      title: "Campus Visits and Reunions",
      desc: "We love welcoming you back! Plan your next visit or join us for our annual reunion to reconnect with classmates and make new memories. Follow our social media channels to stay updated!",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome, Alumni!</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay connected with your alma mater and fellow graduates through our alumni initiatives.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {cards.map(({ icon: Icon, title, desc, path, extra }, i) => (
              <div
                key={i}
                className="relative bg-white border border-blue-900 shadow-md hover:shadow-lg rounded-2xl p-6 flex flex-col text-center transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-16 h-1 bg-blue-900 rounded" />
                <div className="absolute top-0 left-0 w-1 h-16 bg-blue-900 rounded" />
                <div className="absolute bottom-0 right-0 w-16 h-1 bg-blue-900 rounded" />
                <div className="absolute bottom-0 right-0 w-1 h-16 bg-blue-900 rounded" />

                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Icon className="w-8 h-8 text-blue-900" />
                  </div>
                </div>

                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm text-muted-foreground mb-2">{desc}</p>
                {extra && <p className="text-xs text-muted-foreground mb-2">{extra}</p>}

                <div className="flex-grow" />
                {path && (
                  <Button
                    onClick={() => handleNavigation(path)}
                    className="mx-auto mt-4 w-32 px-5 py-2 text-base font-semibold bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Click here
                  </Button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Alumni Showcase</h2>
          <p className="text-lg text-muted-foreground">
            (Here we can highlight our distinguished alumni achievements and success stories.)
          </p>
        </section>
      </div>
    </div>
  );
}
