# PYAR Architects Showcase

Build a stunning, modern architecture firm website for **PYAR Architects** (Perfect Youths In Architectural Reign) — a Bangalore-based architecture, interior design, and construction firm. Make it visually premium with a dark luxury aesthetic, glassmorphism UI, smooth scroll animations, and a gallery with lightbox/glassy hover effects.

---

### BRAND INFO
- **Firm Name:** PYAR Architects
- **Tagline:** Perfect Youths In Architectural Reign
- **Location:** Bangalore, India
- **Phone:** +91-8438312410
- **Email:** pyararchitects@gmail.com
- **Hours:** Mon–Sun, 10:00 AM – 8:00 PM
- **Instagram:** https://www.instagram.com/pyar_architects
- **Services:** Architectural Planning, Interior Design, Building Construction, Prefabricated Solutions (Residential & Commercial)

---

### DESIGN STYLE
- **Color Palette:** Near-black (#0a0a0a) background, gold/warm amber (#c8a96e) accents, white text
- **Typography:** Elegant serif for headings (Playfair Display), clean sans-serif for body (Inter)
- **Effects:**
  - Glassmorphism cards (backdrop-blur, semi-transparent backgrounds, subtle borders)
  - Parallax hero section
  - Scroll-triggered fade-in animations (use framer-motion or CSS transitions)
  - Smooth cursor or scroll indicator
  - Hover glassy shimmer effect on project gallery cards
  - Sticky glassmorphism navbar that blurs on scroll

---

### PAGES & SECTIONS

#### 1. HOME PAGE
- **Hero:** Full-screen video/image background (use a placeholder architectural image from Unsplash — search "modern architecture bangalore"), large serif headline "Designing Spaces. Defining Lives.", CTA buttons: "View Projects" + "Get In Touch"
- **Stats Bar:** Glassmorphism strip showing: 50+ Projects | 8+ Years Experience | 100% Client Satisfaction | Bangalore & Beyond
- **Services Section:** 4 glass cards with icons: Architectural Planning, Interior Design, Building Construction, Prefabricated Solutions
- **Featured Projects Gallery:** Masonry or grid layout with 8 project cards. On hover: glassy overlay with project name + arrow. Lightbox on click. Projects:
  1. Proposed 40x60 at Nagarbhavi
  2. Proposed 30x40 at Kengeri
  3. One at Chitradurga Renovation
  4. FF – Guest Bedroom, Sakleshpura
  5. FF – Master Bedroom, Sakleshpura
  6. FF – Home Theatre, Sakleshpura
  7. GF – Common Areas, Sakleshpura
  8. R01 – Elevation, Sakleshpura
- **About Teaser:** Side-by-side layout with architectural image and short text about the firm
- **Testimonials:** 3 glass card testimonials with star ratings
- **CTA Banner:** Full-width dark section: "Ready to Build Your Dream?" with "Contact Us" button

#### 2. OUR STORY PAGE
- Full-page hero with parallax
- Mission & Vision in glass panels
- Team section with placeholder cards (3 team members)
- Timeline of firm milestones (2018 → Present)

#### 3. PROJECTS PAGE
- Filter tabs: All | Residential | Commercial | Interior | Renovation
- Masonry gallery grid
- Each project card: image, title, location, category tag, glassy hover overlay with "View Project →"
- Project detail modal or expand view

#### 4. CONTACT PAGE
- Split layout: left = contact form (Name, Email, Phone, Message, Submit), right = contact details + embedded Google Map
- Map embed: https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6474512399045!2d77.5601724741196!3d12.930365965782874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1587c43ee78d%3A0x898b3f7a561c2005!2sManya%20Enterprises!5e0!3m2!1sen!2sin!4v1769165072231!5m2!1sen!2sin
- Floating WhatsApp button linking to +918438312410

---

### NAVIGATION
- Logo: "PYAR" in elegant serif with "Architects" below in thin weight
- Nav links: Home | Our Story | Projects | Contact Us
- Sticky glassmorphism navbar (blur + semi-transparent dark background on scroll)
- Mobile hamburger menu with smooth slide-in panel

### FOOTER
- Logo + tagline
- Quick links
- Contact details
- Social icons (Instagram highlighted)
- Copyright: © 2026 Perfect Youths In Architectural Reign (PYAR)

---

### TECH STACK
- React + Tailwind CSS
- Framer Motion for animations
- Use Unsplash for placeholder architectural images (search terms: "modern architecture", "luxury interior design", "contemporary house india")
- Responsive: mobile-first design

Make it feel like a portfolio for a world-class architecture firm — think Zaha Hadid meets Indian luxury. Every section should feel intentional, minimal, and premium.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://akar-kala-kosh.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/af273e6c-f67d-40e8-a090-e1e2630ca9f0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
