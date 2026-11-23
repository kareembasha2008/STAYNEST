# STAYNEST — Premium PG & Hostel Management Platform

> **"Your Space. Your Comfort. Your Home."**  
> *First-Year B.Tech Web Development Academic Project (HTML5, CSS3, Vanilla JavaScript)*

---

## 📌 Project Overview
**STAYNEST** is a modern, responsive, and feature-complete web platform designed for premium student co-living, hostel, and paying guest (PG) accommodations. Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**, it delivers a seamless commercial accommodation booking aesthetic inspired by platforms like Stanza Living and Chapter Living.

This project is tailored specifically for academic evaluation, featuring zero external paid dependencies, zero backend requirement, and browser `localStorage` simulated data persistence.

---

## 🎨 Design System & Visual Identity
- **Primary Color Palette:** Emerald Green (`#059669`, `#10B981`, `#064E3B`) denoting freshness, nature, and reliability.
- **Base & Neutral Palette:** Deep Charcoal Slate (`#0B1120`, `#0F172A`, `#1E293B`) paired with soft crisp whites (`#FFFFFF`, `#F8FAFC`).
- **Accents:** Warm Amber (`#F59E0B`) for ratings, Sunday feasts, and maintenance priority alerts.
- **Typography:**
  - Headings: `Outfit` (Modern, clean geometric display typeface)
  - Body & UI: `Plus Jakarta Sans` (Highly legible modern sans-serif)
- **Glassmorphism & Micro-Interactions:** Frosted glass navbar (`backdrop-filter: blur(14px)`), smooth card hover lifts, animated pulse markers, modal dialog transitions, and interactive progress steppers.

---

## 🚀 Live Localhost Server
The website runs on a local static HTTP server:
```
http://localhost:3000/
```
*(Open the URL in any modern browser such as Google Chrome, Microsoft Edge, Firefox, or Safari)*

---

## 📂 Project Structure
```
STAYNEST/
├── index.html         # Semantic HTML5 architecture (12 complete sections + 4 modals)
├── style.css          # Modern CSS3 stylesheet (Design tokens, CSS grid, flexbox, animations, media queries)
├── script.js          # Modular Vanilla JavaScript (Filters, modal popups, grievance engine, validation)
├── server.js          # Lightweight Node.js local HTTP server
└── README.md          # Comprehensive project documentation
```

---

## ✨ Features & Sections Implemented

### 1. Navigation Bar
- **Branding:** Custom STAYNEST feather & home emblem logo with typography.
- **Smooth Navigation:** Sticky frosted header with dynamic scroll shadow and active section indicator (`IntersectionObserver`).
- **Mobile Menu:** Full-featured hamburger toggle with sliding side drawer and dark overlay.
- **CTA:** Prominent "Enquire Now" action button.

### 2. Hero Section
- **Visuals:** High-resolution student co-living background with gradient depth overlays.
- **Headlines:** "Find Your Perfect Stay" and official tagline *"Your Space. Your Comfort. Your Home."*
- **Quick Room Finder Widget:** Live filter by sharing type, wing (Boys/Girls), and AC preference that scrolls and updates the room catalog.
- **Key Stats:** 550+ Happy Residents, 300 Mbps Mesh Wi-Fi, 4 Daily Meals, 4.9/5 Rating.

### 3. About Us
- **Story & Value:** Highlights friction-free student hospitality, parental peace of mind, and academic focus.
- **Collage Grid:** Asymmetric photo collage with floating university certification badges.
- **Core Pillars:** 3-Tier Biometric Security, Hospital-Grade Sanitization, 24/7 Silent Study Zones, and Student Community Events.

### 4. Available Rooms Catalog (Interactive Filtering)
- **Room Types Included:**
  1. *Single Sharing Deluxe Suite* (₹16,500/mo) — Available
  2. *Double Sharing Studio* (₹10,800/mo) — Available
  3. *Triple Sharing Classic* (₹8,200/mo) — Filling Fast
  4. *Four Sharing Quad (Budget)* (₹6,200/mo) — Available
  5. *Single Executive Penthouse* (₹18,500/mo) — Waitlist
  6. *Double Sharing Premium AC* (₹12,500/mo) — Available
- **Interactive JS Filtering:**
  - Filter by room occupancy (Single, Double, Triple, Four, All).
  - Filter by status (Available Only, Filling Fast, Waitlist).
  - Sort by Monthly Rent (Low to High, High to Low).
- **View Details Modal:** Opens detailed room specifications (room dimensions, security deposit, washroom fixtures, balcony, power backup, and bed inclusions).
- **Enquire Now Action:** Auto-selects the room in the reservation form and scrolls down smoothly.

### 5. Room Facilities & Infrastructure
- 10 Modern icon cards showcasing:
  1. *Gigabit Wi-Fi 6 (300 Mbps dual-band mesh)*
  2. *Smart Inverter Air Conditioning*
  3. *Orthopaedic Spine-Care Memory Foam Mattresses*
  4. *Dedicated Study Pods with LED Lamps*
  5. *Personal Secure Wooden Wardrobes with Lockers*
  6. *Automated In-House Laundry & Steam Ironing*
  7. *Multi-Stage RO Alkaline Purified Water Dispensers*
  8. *Daily Professional Housekeeping & Sanitization*
  9. *Biometric Entry Turnstiles & 72 CCTV Cameras*
  10. *Recreation & Gaming Lounge (PS5, Foosball, Table Tennis)*

### 6. Food & Weekly Daily Menu
- **Meal Schedule:** Clear banner with meal timings (Breakfast, Lunch, Evening Snacks, Dinner).
- **Interactive Day Selector:** Switch between **Monday to Sunday** menus with instant DOM updates and automatic highlight for today.
- **Dietary Diversity:** North Indian, South Indian, Jain options on request, and special **Sunday Dum Biryani Feast**.
- **Kitchen Standards:** FSSAI certified kitchen, zero frozen foods, cooked in 100% RO water.

### 7. Hostel Rules & Code of Conduct
- **Interactive Accordion:** Organizes rules into 6 clear policy categories:
  1. Entry, Exit & Curfew Timings (10:00 PM cutoff, biometric attendance, e-gate pass)
  2. Room Cleanliness & Waste Segregation (Zero in-room cooking, daily cleaning)
  3. Visitor & Parent Policies (Visitor lounge hours, photo ID verification)
  4. Noise Restrictions & Quiet Hours (10:30 PM to 6:30 AM silence)
  5. Property Safety & Electrical Guidelines (Approved appliances, power conservation)
  6. Zero-Tolerance Substance & Anti-Ragging Mandate (Strict compliance with UGC guidelines)

### 8. Photo Gallery & Lightbox
- **Categorized Views:** All Photos, Bedrooms, Study Suites, Dining & Kitchen, Common Lounges, Campus Exterior.
- **Interactive Fullscreen Lightbox:** Click any photo to view in high definition with caption, tag, previous/next controls, and keyboard navigation (`Esc`, `←`, `→`).

### 9. Booking Enquiry Form
- **Fields:** Full Name, Email, 10-digit Phone, Preferred Room Type, Joining Date, College/Institution, and Special Requirements.
- **Comprehensive Validation:** Real-time and submit checks with clear visual indicators and error messages.
- **Confirmation Receipt Modal:** Generates unique demo booking token (e.g. `SN-ENQ-2026-8941`) and stores submission in `localStorage`.

### 10. Student Grievance & Maintenance Helpdesk
- **Realistic Ticket Logging:** Students can log issues across 7 categories (*Wi-Fi, Food, Room Maintenance, Cleanliness, Electricity, Water/Plumbing, Other*) with priority levels.
- **Unique Ticket Reference:** Automatically generates formatted tokens (e.g. `SN-TKT-7821`).
- **Interactive Status Tracker:** Enter any ticket number (or click pre-loaded demo buttons) to view:
  - Ticket metadata and resident room number
  - Live progress stepper: `[1. Submitted] -> [2. Assigned] -> [3. In Progress] -> [4. Resolved]`
  - Assigned technician details and resolution turnaround time.
- **Pre-Loaded Sample Tickets for Examiners:**
  - `SN-TKT-1082` (Wi-Fi router issue — In Progress)
  - `SN-TKT-0941` (AC remote replacement — Resolved)
  - `SN-TKT-1150` (Bathroom deep clean — Under Review)

### 11. Contact & Interactive Location Section
- **Campus Address:** Sector 62 Knowledge Hub, near Metro Station.
- **Helplines:** Admissions desk, 24x7 Warden emergency, and official email desks.
- **Stylized Interactive Campus Navigator:** Radar pulse marker, walking score (98/100), and transit landmarks (metro, hospital, university).
- **Quick Callback Request:** Enter a phone number to simulate an instant 15-minute campus tour callback.

### 12. Footer & Academic Badges
- Quick navigation links, living options, student support hotlines, social media icons, back-to-top button, and clear academic disclaimer.

---

## 🛠️ How to Run Locally

### Option 1: Using the Included Node Server (Recommended)
```bash
node server.js
```
Then open `http://localhost:3000/` in your browser.

### Option 2: Direct File Open
Double click `index.html` to open directly in any browser.

---

## 🎓 Academic Grading Checklist
- [x] **HTML5:** Semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>/modals`).
- [x] **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, media queries, smooth animations, glassmorphism.
- [x] **Vanilla JavaScript:** Event listeners, DOM manipulation, arrays, objects, string templates, regex form validation, modal controls, and `localStorage` persistence.
- [x] **Separation of Concerns:** Separate clean `index.html`, `style.css`, and `script.js` files.
- [x] **Zero Broken Elements:** High quality photography, zero Lorem Ipsum, accessible ARIA attributes, keyboard support (`Escape` to close modals, arrow keys for lightbox).
- [x] **Ethical Disclaimers:** Clearly labeled sample demonstration data and pricing throughout.
