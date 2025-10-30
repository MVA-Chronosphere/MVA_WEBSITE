import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#003366] to-[#002244] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/our-story" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-our-story">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics/grade-groups" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-academics">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions/procedure" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-admissions">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/life-at-mva/boarding/overview" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-life-at-mva">
                  Life at MVA
                </Link>
              </li>
              <li>
                <Link to="/careers/join-our-team" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academics/results" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-results">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/achievements/academics/iit-jee" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-achievements">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/alumni/connect-portal" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-alumni">
                  Alumni Portal
                </Link>
              </li>
              <li>
                <Link to="/blogs/parenting-tips" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-blogs">
                  Blogs & Insights
                </Link>
              </li>
              <li>
                <Link to="/admissions/faq" className="text-white/80 hover:text-white transition-colors text-sm" data-testid="footer-link-faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-white/80" />
                <span className="text-sm text-white/80">
                   Macro Vision Academy<br />
                      Post Box No.12,<br />
                      Renuka Mata Road,<br />
                      Behind Collectorate,<br />
                      Burhanpur(M.P.) Pin-450331<br />
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/80">+91 93025 11111</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/80">Digitalmarketing@mvaburhanpur.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Follow Us</h3>
            <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-6">
              <a
                href="https://www.facebook.com/macrovisionacademy"
                target="_blank"
                className="hover-elevate active-elevate-2 p-2.5 md:p-3 rounded-lg bg-white/10 transition-all hover:bg-white/20"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                className="hover-elevate active-elevate-2 p-2.5 md:p-3 rounded-lg bg-white/10 transition-all hover:bg-white/20"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.instagram.com/macro.vision.academy?igsh=cHMwb3pzNGZ2YW8z"
                target="_blank"
                className="hover-elevate active-elevate-2 p-2.5 md:p-3 rounded-lg bg-white/10 transition-all hover:bg-white/20"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/school/mvaburhanpur/"
                target="_blank"
                className="hover-elevate active-elevate-2 p-2.5 md:p-3 rounded-lg bg-white/10 transition-all hover:bg-white/20"
                data-testid="social-linkedin"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Stay connected with us for the latest updates and news from Macro Vision Academy.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Macro Vision Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
