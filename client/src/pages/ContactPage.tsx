import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ContactPage() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedSubTopic, setSelectedSubTopic] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
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

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus("idle");

  // Store the form element reference before async operations
  const form = e.currentTarget;
  const formData = new FormData(form);
  
  // Add the subtopic to formData if it exists
  if (selectedSubTopic) {
    formData.append('subtopic', selectedSubTopic);
  }
  
  // Add FormSubmit specific fields
  formData.append('_subject', `New Contact Form: ${formData.get('topic')}`);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');

  try {
    const response = await fetch("https://formsubmit.co/ajax/digitalmarketing@mvaburhanpur.com", {
      method: "POST",
      body: formData,
    });

    // Parse the JSON response to check the actual success status
    const result = await response.json();
    
    if (response.ok && result.success === "true") {
      setSubmitStatus("success");
      // Use the stored form reference instead of e.currentTarget
      form.reset();
      setSelectedTopic("");
      setSelectedSubTopic("");
    } else {
      setSubmitStatus("error");
      console.error('Form submission failed:', result);
    }
  } catch (error) {
    setSubmitStatus("error");
    console.error('Form submission error:', error);
  } finally {
    setIsSubmitting(false);
  }
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
            
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  ✅ Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium">
                  ❌ There was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input 
                name="name"
                type="text" 
                placeholder="Enter your name" 
                required
                minLength={2}
              />
              <Input 
                name="email"
                type="email" 
                placeholder="Enter your email" 
                required
              />
              <Input 
                name="phone"
                type="tel" 
                placeholder="Enter your phone number" 
                required
                minLength={10}
              />

              <select
                name="topic"
                value={selectedTopic}
                onChange={handleTopicChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              >
                <option value="">Select a topic</option>
                <option value="Career Enquiry">Career Enquiry</option>
                <option value="Admissions">Admissions</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
              </select>

              {selectedTopic && (
                <select
                  name="subtopic"
                  value={selectedSubTopic}
                  onChange={(e) => setSelectedSubTopic(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Select an option</option>
                  {subTopicOptions[selectedTopic]?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              )}

              <Textarea 
                name="message"
                rows={5} 
                placeholder="Write your message here..." 
                required
                minLength={10}
              />
              
              <Button 
                size="lg" 
                className="w-full" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info remains the same */}
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

        {/* Map section remains the same */}
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