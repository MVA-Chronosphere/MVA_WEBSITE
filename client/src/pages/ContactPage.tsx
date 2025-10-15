import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
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
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  data-testid="input-subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message here..."
                  data-testid="textarea-message"
                />
              </div>

              <Button size="lg" className="w-full" data-testid="button-send-message">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Macro Vision Academy<br />
                      Educational District, Sector 5<br />
                      City, State - 123456
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 XXXX XXXXXX<br />
                      +91 XXXX XXXXXX (Admissions)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@macrovisionacademy.edu<br />
                      admissions@macrovisionacademy.edu
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-card-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visit Our Campus</h2>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-[#0055A4]/20 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-lg font-medium">Campus Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
