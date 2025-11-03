import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubMenuItem {
  label: string;
  path: string;
}

interface SubDropdown {
  label: string;
  items: SubMenuItem[];
}

interface MenuItem {
  label: string;
  path?: string;
  dropdown?: SubMenuItem[];
  subDropdowns?: SubDropdown[];
}

const menuItems: MenuItem[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
    dropdown: [
      { label: "Our Story", path: "/about#our-story" },
      { label: "Mission and Vision", path: "/about#mission-vision" },
      { label: "Founder's Vision", path: "/about#founders-vision" },
      { label: "Our Society", path: "/about#our-society" },
      { label: "Our Leadership", path: "/about#leadership" },
      { label: "Our Knowledge Partners", path: "/about#knowledge-partners" },
      { label: "Community and CSR", path: "/about#community-csr" },
    ],
  },
  {
    label: "Life at MVA",
    path: "/life-at-mva",
    subDropdowns: [
      {
        label: "MVA Boarding",
        items: [
          { label: "Overview", path: "/life-at-mva/boarding/overview" },
          { label: "Residential Wings", path: "/life-at-mva/boarding/residential-wings" },
          { label: "Hostel Life", path: "/life-at-mva/boarding/hostel-life" },
          { label: "Food and Nutrition", path: "/life-at-mva/boarding/food-nutrition" },
          { label: "Safety Measures", path: "/life-at-mva/boarding/safety-measures" },
          { label: "Health and Medical Facilities", path: "/life-at-mva/boarding/health-medical" },
        ],
      },
      {
        label: "MVA Culture",
        items: [
          { label: "Darbaar", path: "/life-at-mva/culture/darbaar" },
          { label: "Sports and Athletics", path: "/life-at-mva/culture/sports-athletics" },
          { label: "Zenith Circle", path: "/life-at-mva/culture/zenith-circle" },
          { label: "Maharath", path: "/life-at-mva/culture/maharath" },
          { label: "Art & Craft", path: "/life-at-mva/culture/art-craft" },
          { label: "Performing Arts", path: "/life-at-mva/culture/performing-arts" },
          { label: "Financial Literacy", path: "/life-at-mva/culture/financial-literacy" },
          { label: "V-MAT", path: "/life-at-mva/culture/vmat" },
          { label: "Tours", path: "/life-at-mva/culture/tours" },
          { label: "School Events", path: "/life-at-mva/culture/school-events" },
        ],
      },
      {
        label: "Infrastructure",
        items: [
          { label: "Vision Udaan", path: "/life-at-mva/infrastructure/vision-udaan" },
          { label: "Vision Paradise", path: "/life-at-mva/infrastructure/vision-paradise" },
          { label: "Vision Petals", path: "/life-at-mva/infrastructure/vision-petals" },
          { label: "Vision Mantra", path: "/life-at-mva/infrastructure/vision-mantra" },
          { label: "Vision Divine", path: "/life-at-mva/infrastructure/vision-divine" },
          { label: "Vision Vista", path: "/life-at-mva/infrastructure/vision-vista" },
          { label: "Swad Sansad", path: "/life-at-mva/infrastructure/swad-sansad" },
          { label: "Anhad Anand Auditorium", path: "/life-at-mva/infrastructure/anhad-anand-auditorium" },
          { label: "Josh Club", path: "/life-at-mva/infrastructure/josh-club" },
          { label: "Chronosphere", path: "/life-at-mva/infrastructure/chronosphere" },
          { label: "White House", path: "/life-at-mva/infrastructure/white-house" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    dropdown: [
      { label: "Grade Groups", path: "/academics/grade-groups" },
      { label: "Teaching Methodology", path: "/academics/teaching-methodology" },
      { label: "Academic Calendar", path: "/academics/academic-calendar" },
      { label: "Results", path: "/academics/results" },
      { label: "Chronosphere (Outcomes)", path: "/academics/chronosphere" },
      { label: "Career and College Counseling", path: "/academics/career-counseling" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    dropdown: [
      { label: "Procedure", path: "/admissions#procedure" },
      { label: "Online Registration", path: "/admissions#registration" },
      { label: "Fee Structure", path: "/admissions#fee-structure" },
      { label: "Sample Papers", path: "/admissions#sample-papers" },
      { label: "FAQ", path: "/admissions#faq" },
    ],
  },
  {
    label: "Achievements",
    path: "/achievements",
    dropdown: [
      { label: "Academics", path: "/achievements#academics" },
      { label: "Sports", path: "/achievements#sports" },
      { label: "Competitive Exams", path: "/achievements#competitive" },
    ],
  },
  {
    label: "Careers",
    path: "/careers",
  },
  {
    label: "Blogs & Insights",
    path: "/blogs",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [hoveredSubDropdown, setHoveredSubDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Close mobile menu and reset dropdown state whenever the route or hash changes
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    setHoveredSubDropdown(null);
  }, [location.pathname, location.hash]);

  // Scroll to top or to element referenced by hash when location changes.
  useEffect(() => {
    const scrollToTarget = () => {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const scrollWithOffset = (el: HTMLElement) => {
          // Compute navbar height if present
          const navbar = document.querySelector('nav.sticky');
          const navbarHeight = navbar ? (navbar as HTMLElement).getBoundingClientRect().height : 0;
          const rect = el.getBoundingClientRect();
          const targetY = window.scrollY + rect.top - navbarHeight - 8; // small gap
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        };

        const el = document.getElementById(id);
        if (el) {
          scrollWithOffset(el);
          return;
        }

        // If element not present yet (render delay), try shortly after.
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) scrollWithOffset(el2);
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 120);
      } else {
        // No hash: scroll to top of the new page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Run scroll after route change
    scrollToTarget();
  }, [location.pathname, location.hash]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(label);
      setActiveSubDropdown(null);
    }
  };

  const toggleSubDropdown = (label: string) => {
    setActiveSubDropdown(activeSubDropdown === label ? null : label);
  };

  // Navigate helper: convert certain life-at-mva submenu paths into hash navigation
  const handleNavPath = (path: string) => {
    try {
      // Close mobile menu immediately when navigating so the target section is visible
      setIsMobileMenuOpen(false);
      // Map academics submenu paths to in-page anchors on /academics
      if (path.startsWith('/academics')) {
        const parts = path.split('/').filter(Boolean); // ['academics', 'grade-groups']
        const section = parts[1] || 'grade-groups';
        navigate(`/academics#${section}`);
        return;
      }

      if (path.startsWith('/life-at-mva')) {
        const parts = path.split('/').filter(Boolean); // ['life-at-mva','boarding','hostel-life']
        let section = parts[parts.length - 1] || '';

        // Normalize common variants to section ids used in LifeAtMVAPage
        const normalization: Record<string, string> = {
          'overview': 'boarding',
          'residential-wings': 'residential-wings',
          'hostel-life': 'hostel-life',
          'food-nutrition': 'food-nutrition',
          'safety-measures': 'safety-measures',
          'health-medical': 'health-medical',
          'health-medical-facilities': 'health-medical',
          // culture variants
          'sports-athletics': 'sports',
          'sports-and-athletics': 'sports',
          'sports': 'sports',
          'zenith-circle': 'zenith',
          'art-craft': 'art',
          'performing-arts': 'performing',
          'financial-literacy': 'financial',
          'vmat': 'vmat',
          'tours': 'tours',
          'school-events': 'events'
        };

        if (normalization[section]) section = normalization[section];

        // If path is '/life-at-mva' or '/life-at-mva/boarding', ensure we scroll to boarding
        if (!section || section === 'boarding') {
          navigate('/life-at-mva#boarding');
          return;
        }

        navigate(`/life-at-mva#${section}`);
        return;
      }
    } catch (e) {
      // fallback to direct navigation
    }

    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-primary shadow-lg border-b border-gray-200">
  <div className="mx-auto px-4">
    <div className="flex items-center justify-between h-18"> {/* Reduced from h-20 to h-18 */}
      <Link to="/" className="flex items-center space-x-3 hover-elevate px-3 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"> {/* Reduced padding */}
        <img 
          src="/mva-logo 2.png" 
          alt="MVA Logo" 
          className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110" 
        />
        <div className="text-xl font-bold tracking-tight text-primary">Macro vision Academy</div>
      </Link>

      <div className="hidden lg:flex items-center space-x-1">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => {
              if (item.dropdown || item.subDropdowns) {
                setActiveDropdown(item.label);
                setHoveredSubDropdown(null);
              }
            }}
            onMouseLeave={() => {
              const label = item.label;
              setTimeout(() => {
                setActiveDropdown((current) => (current === label ? null : current));
                setHoveredSubDropdown((current) => (current === label ? null : current));
              }, 200);
            }}
          >
            {item.path && !item.dropdown && !item.subDropdowns ? (
              <Link to={item.path}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-primary hover:bg-primary/10 text-sm font-semibold px-3 h-10 transition-all duration-300 rounded-xl hover:shadow-md hover:scale-105 relative overflow-hidden group" 
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Button>
              </Link>
            ) : item.path && (item.dropdown || item.subDropdowns) ? (
              <div className="flex items-center">
                <button
                  onClick={() => handleNavPath(item.path || '/')}
                  className={`inline-flex items-center justify-center text-primary hover:bg-primary/10 text-sm font-semibold px-3 h-10 transition-all duration-300 rounded-r-none rounded-l-xl hover:shadow-md hover:scale-105 relative overflow-hidden group ${ /* Reduced padding and height */
                    activeDropdown === item.label ? 'bg-primary/5' : ''
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <Button
                  variant="ghost"
                  size="lg"
                  className={`text-primary hover:bg-primary/10 text-sm font-semibold px-2 h-10 transition-all duration-300 rounded-l-none rounded-r-xl hover:shadow-md hover:scale-105 relative overflow-hidden group ${ /* Reduced height */
                    activeDropdown === item.label ? 'bg-primary/5' : ''
                  }`}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 text-primary relative z-10 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="lg"
                className={`text-primary hover:bg-primary/10 text-sm font-semibold px-3 h-10 transition-all duration-300 rounded-xl hover:shadow-md hover:scale-105 relative overflow-hidden group ${ /* Reduced padding and height */
                  activeDropdown === item.label ? 'bg-primary/5' : ''
                }`}
                data-testid={`button-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="relative z-10">{item.label}</span>
                {(item.dropdown || item.subDropdowns) && (
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 text-primary relative z-10 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </Button>
            )}

            {item.dropdown && activeDropdown === item.label && (
              <div className="absolute left-0 mt-1 w-64">
                <div className="bg-popover border border-popover-border rounded-xl shadow-2xl py-2 animate-in fade-in-0 zoom-in-95 duration-200 origin-top"> {/* Reduced padding */}
                  {item.dropdown.map((subItem) => (
                    <div key={subItem.path}>
                      <button
                        onClick={() => handleNavPath(subItem.path)}
                        className="w-full text-left px-4 py-2 text-sm text-popover-foreground hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium transform hover:translate-x-2 hover:shadow-md" 
                        data-testid={`link-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subItem.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {item.subDropdowns && activeDropdown === item.label && (
              <div className="absolute left-0 mt-1 w-96">
                <div className="bg-popover border border-popover-border rounded-xl shadow-2xl py-3 max-h-[80vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-200 origin-top"> {/* Reduced padding */}
                  {item.subDropdowns.map((subDropdown, idx) => (
                    <div 
                      key={subDropdown.label} 
                      className={`${idx > 0 ? 'border-t border-popover-border pt-3 mt-3' : ''} relative`} 
                      onMouseEnter={() => setHoveredSubDropdown(subDropdown.label)}
                    >
                      <div 
                        className="px-4 py-2 text-sm font-bold text-primary tracking-wider flex items-center justify-between cursor-pointer hover:bg-primary/5 rounded-lg transition-all duration-300 relative z-10 group" 
                      >
                        {subDropdown.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 text-primary ${
                          hoveredSubDropdown === subDropdown.label ? 'rotate-180' : ''
                        }`} />
                      </div>
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          hoveredSubDropdown === subDropdown.label ? 'max-h-[500px] opacity-100 pb-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="space-y-1 pt-2">
                          {subDropdown.items.map((subItem) => (
                            <div key={subItem.path}>
                              <button
                                onClick={() => handleNavPath(subItem.path)}
                                className="w-full text-left px-5 py-2 text-sm text-popover-foreground hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium transform hover:translate-x-2 hover:shadow-sm"
                                data-testid={`link-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {subItem.label}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-primary h-10 w-11 transition-all duration-300 hover:scale-110 hover:bg-primary/10 rounded-xl" 
        onClick={toggleMobileMenu}
        data-testid="button-mobile-menu-toggle"
      >
        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} {/* Reduced icon size */}
      </Button>
    </div>

    {isMobileMenuOpen && (
      <div className="lg:hidden bg-white border-t border-gray-200 pb-5 max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in slide-in-from-top duration-300"> {/* Reduced padding and max-height */}
        {menuItems.map((item) => (
          <div key={item.label} className="py-1">
            {item.path && !item.dropdown && !item.subDropdowns ? (
              <Link to={item.path}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-left px-5 py-3 text-base font-medium text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl hover:translate-x-2 hover:shadow-md" 
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </button>
              </Link>
            ) : item.path && (item.dropdown || item.subDropdowns) ? (
              <div className="flex items-center">
                <div className="flex-1">
                  <button
                    onClick={() => handleNavPath(item.path || '/')}
                    className="w-full text-left px-5 py-3 text-base font-medium text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl hover:translate-x-2 hover:shadow-md" 
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </button>
                </div>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="px-5 py-3 text-base font-medium text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl"
                  data-testid={`mobile-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 text-primary ${ /* Reduced icon size */
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ) : (
              <button
                onClick={() => toggleDropdown(item.label)}
                className="w-full text-left px-5 py-3 text-base font-medium text-primary hover:bg-primary/5 transition-all duration-300 rounded-xl flex items-center justify-between hover:translate-x-2 hover:shadow-md"
                data-testid={`mobile-button-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 text-primary ${ /* Reduced icon size */
                    activeDropdown === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            {activeDropdown === item.label && item.dropdown && (
              <div className="bg-primary/5 py-2 animate-in slide-in-from-top-2 duration-300 rounded-xl mx-2">
                {item.dropdown.map((subItem) => (
                  <div key={subItem.path}>
                    <button
                      onClick={() => handleNavPath(subItem.path)}
                      className="w-full text-left px-8 py-2 text-sm text-primary/80 hover:bg-primary/10 transition-all duration-300 rounded-lg font-medium hover:translate-x-2 hover:shadow-sm" 
                      data-testid={`mobile-link-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {subItem.label}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeDropdown === item.label && item.subDropdowns && (
              <div className="bg-primary/5 py-2 animate-in slide-in-from-top-2 duration-300 rounded-xl mx-2">
                {item.subDropdowns.map((subDropdown) => (
                  <div key={subDropdown.label}>
                    <button
                      onClick={() => toggleSubDropdown(subDropdown.label)}
                      className="w-full text-left px-6 py-2 text-sm font-bold text-primary/80 uppercase tracking-wider flex items-center justify-between hover:bg-primary/10 transition-all duration-300 rounded-lg"
                      data-testid={`mobile-button-${subDropdown.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {subDropdown.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-300 text-primary ${ /* Reduced icon size */
                          activeSubDropdown === subDropdown.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeSubDropdown === subDropdown.label && (
                      <div className="bg-primary/10 animate-in slide-in-from-top-2 duration-300 rounded-lg mx-2">
                        {subDropdown.items.map((subItem) => (
                          <div key={subItem.path}>
                            <button
                              onClick={() => handleNavPath(subItem.path)}
                              className="w-full text-left px-10 py-2 text-sm text-primary/80 hover:bg-primary/20 transition-all duration-300 rounded-lg font-medium hover:translate-x-2 hover:shadow-sm" 
                              data-testid={`mobile-link-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {subItem.label}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
</nav>
  );
}