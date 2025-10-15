# Design Guidelines for Macro Vision Academy Website

## Design Approach
**Reference-Based Approach**: Inspired by https://www.dais.edu.in/aboutus.html - clean, modern educational institution aesthetic with professional polish and trustworthy presentation.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Deep Navy: #003366 (headings, navbar, footer backgrounds)
- Azure Blue: #0055A4 (primary CTAs, active states)
- Sky Blue: #1E88E5 (accents, hover states, links)

**Secondary Colors:**
- Pure White: #FFFFFF (backgrounds, text on dark)
- Light Gray: #F5F7FA (alternate section backgrounds)
- Subtle Gold/Teal: Used sparingly for highlights and achievements badges

**Dark Mode**: Not required for educational institution website

### B. Typography

**Font Families:**
- Primary: Inter or Poppons (modern, clean sans-serif)
- Fallback: system-ui, -apple-system, sans-serif

**Type Scale:**
- Hero Headlines: 3xl-5xl (48-60px desktop)
- Section Headers: 2xl-3xl (32-40px)
- Navbar Items: sm-base (14-16px) - REDUCED for single-line layout
- Body Text: base (16px)
- Captions: sm (14px)

**Weight Distribution:**
- Bold (700): Headlines, CTAs
- Semibold (600): Subheadings, navbar items
- Regular (400): Body text
- Medium (500): Buttons, labels

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, mb-8, py-16, etc.)

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for readability

**Grid Systems:**
- Desktop: 12-column grid for complex layouts
- Features: grid-cols-3 lg:grid-cols-4 for infrastructure items
- Mobile: Always stack to single column

### D. Component Library

**Navigation:**
- Fixed/sticky navbar at top across all pages
- Single-line layout with optimized spacing
- Mega-dropdown menus with sub-categories
- Hamburger menu on mobile (<768px) with slide-in animation
- Hover states: subtle background change (blue tint)
- Active page indicator: bottom border or background highlight

**Hero Sections:**
- Homepage: Full-width video banner (holistic school life)
- Internal pages: Image + text overlay combinations
- Height: 70vh-80vh on desktop, 50vh on mobile
- CTA buttons prominently placed with high contrast

**Content Layouts (Diverse, Non-Repetitive):**

1. **Interactive Timeline** (About Us - Our Story)
   - Vertical timeline with alternating left/right content
   - Year markers with connecting lines
   - Milestone cards with images and descriptions

2. **Video Embed Section** (Founder's Vision)
   - 16:9 aspect ratio container
   - Play overlay with school branding
   - Centered with generous padding

3. **Drone Photo Gallery** (Infrastructure)
   - Masonry grid layout (Pinterest-style)
   - Lightbox modal on click
   - Category filters above gallery
   - 3 columns desktop, 2 tablet, 1 mobile

4. **Tabbed Interface** (Achievements)
   - Horizontal tabs: Academics, Sports, Others
   - Nested sub-tabs for Academics (IIT/JEE, NEET, CBSE, etc.)
   - Content area with results/stats cards below

5. **FAQ Accordion** (Admissions)
   - Expandable panels with smooth animation
   - Plus/minus toggle icons
   - Subtle border between items

6. **Leadership Grid** (About Us)
   - Card layout with professional photos
   - Name, designation, brief bio
   - Hover effect: slight scale and shadow increase

7. **Carousel Component** (Achievements on Homepage)
   - Auto-rotating with manual controls
   - Dots indicator at bottom
   - 3-5 second intervals

**CTA Elements:**
- Primary CTA: Solid blue (#0055A4), white text, rounded-lg
- Secondary CTA: Outline blue, blue text, transparent background with backdrop-blur
- Button sizes: px-6 py-3 (base), px-8 py-4 (hero CTAs)
- Hover: Darker shade, subtle scale (1.02)

**Footer:**
- Multi-column layout (Quick Links, Contact, Social Media, Newsletter)
- Dark blue background (#003366)
- White text with blue link hovers
- Copyright bar at bottom

### E. Responsive Breakpoints

**Mobile-First Approach:**
- Base (0-640px): Single column, stacked navigation, compressed spacing
- Tablet (640-1024px): 2-column grids, expanded navbar
- Desktop (1024px+): Full multi-column layouts, mega menus visible

**Navbar Responsiveness:**
- Desktop: All items visible in single line with dropdowns
- Tablet: Slightly reduced spacing, maintain visibility
- Mobile: Hamburger menu with full-screen overlay, nested dropdowns collapse/expand

### F. Images & Media

**Image Strategy:**

1. **Homepage Hero Video**: Holistic school life montage (academics, sports, hostel, STEM activities)
   - Autoplay, muted, looped
   - Fallback poster image for accessibility
   - Overlay with semi-transparent blue gradient

2. **Infrastructure Drone Gallery**: 
   - High-quality aerial shots of all facilities (Vision Udaan, Paradise, Petals, etc.)
   - Optimized for web (lazy loading)
   - Descriptive captions on hover

3. **About Us Page**:
   - Founder photos/video placeholder
   - Leadership team professional headshots
   - Historical timeline images (school evolution)

4. **Life at MVA**:
   - Residential wings photos
   - Student activity images (sports, arts, events)
   - Facility images (dining, hostel rooms, medical center)

5. **Achievements Page**:
   - Student success photos/certificates
   - Trophy/award images
   - Competition participation images

**Image Specifications:**
- Hero images: 1920x1080px minimum
- Gallery thumbnails: 600x400px
- Profile photos: 400x400px (square)
- Format: WebP with JPG fallback

### G. Animations & Interactions

**Minimal, Purposeful Motion:**
- Navbar dropdown: Fade-in with slide-down (200ms)
- Hamburger menu: Slide-in from right (300ms ease)
- Scroll animations: Fade-up on content sections (stagger 100ms)
- Carousel transitions: Slide with fade (500ms)
- Accordion: Smooth expand/collapse (250ms)
- Button hover: Subtle scale (150ms)

**No distracting effects**: Avoid excessive parallax, avoid continuous animations

### H. Accessibility & Performance

- Keyboard navigation for all dropdowns
- ARIA labels for interactive elements
- Focus states: Visible blue outline (ring-2 ring-blue-500)
- Alt text for all images
- Lazy loading for below-fold images
- Optimized video delivery (compressed, adaptive streaming)

### I. Page-Specific Highlights

**Homepage:**
- Video hero with overlay text and dual CTAs (Admissions + Explore)
- Achievement carousel (auto-rotating highlights)
- Quick links grid to main sections
- Latest news/events section

**About Us:**
- Interactive timeline dominates the page
- Embedded video section for founders
- Team grid with hover effects
- Partners/CSR section with logo grid

**Life at MVA:**
- Tab-based navigation (Boarding, Culture, Infrastructure)
- Each tab has rich content with images and descriptions
- Infrastructure uses masonry photo gallery

**Admissions:**
- Step-by-step procedure timeline
- Prominent CTA for online registration
- FAQ accordion for common queries
- Fee structure in clean table format

**Achievements:**
- Tabbed interface with sub-categories
- Stats counters with animations on scroll
- Photo grid of successful alumni/students

This design system creates a trustworthy, professional educational website that balances visual appeal with information density, ensuring all content is accessible while maintaining engagement.