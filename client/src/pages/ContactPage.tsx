import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubTopic, setSelectedSubTopic] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("topic") === "career") {
      setSelectedTopic("Career Enquiry");
    }
  }, [location]);

  const subTopicOptions: Record<string, string[]> = {
    "Career Enquiry": [
      "Teaching Position",
      "Administrative Position",
      "Developer Position",
      "Support Staff",
      "Internship Opportunity",
    ],
    Admissions: ["New Admission", "Transfer Student", "Boarding Facility", "Fee Structure"],
    "General Inquiry": ["Campus Visit", "Academic Programs", "Extra-Curricular Activities", "Infrastructure"],
    "Technical Support": ["Website Issue", "Online Portal Access", "Payment Gateway", "SchoolKnot Technical Issue"],
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
    setSelectedSubTopic("");
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-[#0055A4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any assistance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <Input id="name" type="text" placeholder="Enter your name" />
              <Input id="email" type="email" placeholder="Enter your email" />
              <Input id="phone" type="tel" placeholder="Enter your phone number" />

              <select
                id="topic"
                value={selectedTopic}
                onChange={handleTopicChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a topic</option>
                <option value="Career Enquiry">Career Enquiry</option>
                <option value="Admissions">Admissions</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
              </select>

              {selectedTopic && (
                <select
                  id="subtopic"
                  value={selectedSubTopic}
                  onChange={(e) => setSelectedSubTopic(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select an option</option>
                  {subTopicOptions[selectedTopic]?.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              )}

              <Textarea id="message" rows={5} placeholder="Write your message here..." />
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="h-6 w-6 text-primary" />,
                  title: "Address",
                  details: `Macro Vision Academy\nPost Box No.12,\nRenuka Mata Road,\nBehind Collectorate,\nBurhanpur(M.P.) Pin-450331`,
                },
                {
                  icon: <Phone className="h-6 w-6 text-primary" />,
                  title: "Phone",
                  details: "+91 93025 11111\n+91 93001 10033 (Admissions)",
                },
                {
                  icon: <Mail className="h-6 w-6 text-primary" />,
                  title: "Email",
                  details: "Digitalmarketing@mvaburhanpur.com",
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Office Hours",
                  details: "Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM\nSun: Closed",
                },
              ].map(({ icon, title, details }) => (
                <div key={title} className="bg-card border border-card-border rounded-lg p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Visit Our Campus</h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.711576118177!2d76.19673577503882!3d21.28288158043079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd83328d69a073d%3A0x17d3c9d12b069ab!2sMacro%20Vision%20Academy!5e0!3m2!1sen!2sin!4v1761898927655!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-lg font-medium mt-4 text-muted-foreground">Campus Map</p>
        </div>
      </div>
    </div>
  );
}
