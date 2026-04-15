# BBS - Project Specification

## Project Overview

**Project Name**: BBS - Serrurerie, Plomberie, Électricité
**Project Type**: Multi-service artisan website (lead-generation landing site)
**Tech Stack**: Next.js + TypeScript + Tailwind CSS + shadcn/ui
**Template Base**: memextech/nextjs-shadcn-landing-page-template
**Target Location**: 88 Rue de Levis, 75017 Paris, France

## 1. Business Context

### 1.1 Company Information (from Pappers)
- **Company Name**: BBS
- **Legal Form**: SASU (Société par Actions Simplifiée Unipersonnelle)
- **SIREN**: 995 147 592
- **SIRET (siège)**: 995 147 592 00019
- **VAT Number**: FR68995147592
- **Address**: 88 Rue de Levis, 75017 Paris
- **Creation Date**: 04/12/2025
- **RCS Registration**: Paris, le 17/12/2025
- **Share Capital**: 1 000,00 €
- **Director**: Ben Mefteh Bechir (Président, born 10/1974)

### 1.2 Activities
- **Primary Activity**: Serrurerie et travaux de menuiserie métallique
- **Secondary Activities**: Électricité et plomberie (sous-traitance)
- **NAF/APE Code**: 43.32B (Travaux de menuiserie métallique et serrurerie)
- **Convention Collective**: Ouvriers des entreprises du bâtiment de plus de 10 salariés - IDCC 1597
- **Fiscal Year End**: 31/12/2026
- **Staff**: 0 salarié (2026 data)

### 1.3 Company Object (from statuts)
La société a pour objet, en France et à l'Étranger :
- Serrurerie, plomberie, électricité
- Toutes opérations commerciales, industrielles, financières, mobilières ou immobilières

### 1.4 Compliance Status
- 0 procédure collective
- 0 contentieux
- 0 sanction
- S'est opposée à l'utilisation de ses données à des fins de prospection

### 1.5 Primary Goal
Generate emergency service requests and quotes for locksmith, plumbing, and electrical services in Paris and Île-de-France.

## 2. Brand Identity

### 2.1 Brand Colors (from Ben Mefteh logo)
- **Primary Green**: #49B175
- **Secondary Green**: #2E7A4E (darker)
- **Accent Green**: #6BCF94 (lighter)
- **Text**: Black (#000000)
- **Background**: White (#FFFFFF)

### 2.2 Logo Concept
Based on Kimi AI conversation with Ben Mefteh:
- Keep the same key icon from original Ben Mefteh logo
- Use "BBS" as company name
- Services: Serrurerie, Plomberie, Électricité
- Clean, professional design matching original branding

### 2.3 Instagram Identity
- **Username Suggestion**: @bbs.urgence (recommended)
- **Alternative**: @bbs.depannage, @bbs.24h
- **Bio Template**:
  ```
  🔑 Serrurier 24h/7j | 🚪 Ouverture porte | 🔒 Changement serrure | 🚿 Plomberie & ⚡ Élec | 📞 [Numéro]
  ```

## 3. Technical Specification

### 3.1 Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Deployment**: Vercel
- **Domain**: To be determined (suggest: bbs-urgence.fr or bbs-depannage.fr)

## 4. Site Structure

### Pages to Create
1. **Home** (/) - Hero with emergency CTA, services summary, trust blocks
2. **Services** (/services) - Detailed service listing (Serrurerie, Plomberie, Électricité)
3. **Contact** (/contact) - Emergency contact, quote form, location
4. **Legal** (/legal) - Mentions légales, privacy policy

### Navigation Structure
- Fixed header with logo and navigation
- Sticky emergency CTA buttons (call, WhatsApp)
- Footer with contact info and services

## 5. Content Sections

### 5.1 Home Page
- **Hero Section**: 24/7 Emergency services, clear CTA
- **Services Summary**: 
  - 🔑 Serrurerie (Ouverture de porte, Changement serrure, Blindage)
  - 🚿 Plomberie (Dépannage, Fuite, WC)
  - ⚡ Électricité (Panne électrique, Installation)
- **Why Choose Us**: Rapid intervention, 24h/7j, Devis gratuit
- **Emergency CTA Block**: Prominent contact options

### 5.2 Services Page
**Serrurerie:**
- Ouverture de porte
- Changement de serrure
- Blindage et sécurisation
- Dépannage 24h/7j

**Plomberie:**
- Dépannage fuite d'eau
- Réparation WC
- Canalisation
- Intervention rapide

**Électricité:**
- Panne électrique
- Installation électrique
- Dépannage rapide

### 5.3 Contact/Quote Page
- Emergency hotline (click-to-call)
- WhatsApp integration
- Address: 88 Rue de Levis, 75017 Paris
- Business hours: 24h/7j (emergency)
- Quote request form

## 6. Features

### 6.1 Required Features
- [x] Responsive mobile-first design
- [x] Fast loading time
- [x] Sticky emergency CTA buttons
- [x] Click-to-call functionality
- [x] WhatsApp integration
- [x] Quote form with basic validation
- [x] SEO metadata (title, description)
- [x] Open Graph tags
- [x] Legal pages
- [x] Cookie notice

### 6.2 Optional Features
- [ ] FAQ section
- [ ] Testimonials/reviews
- [ ] Service area map
- [ ] Blog for local SEO (future)

## 7. SEO Specification

### 7.1 Target Keywords
- serrurier Paris 17
- serrurier urgence Paris
- dépannage serrurerie Paris
- plombier Paris 17
- électricien Paris 17
- serrurier 24h Paris
- ouverture porte Paris
- changement serrure Paris
- bbs serrurier
- bbs plombier
- bbs electricien

### 7.2 SEO Requirements
- [x] Unique title and meta description per page
- [x] Proper H1/H2 hierarchy
- [x] Local business schema (JSON-LD)
- [x] Contact details in footer
- [ ] Optimized images
- [x] Internal linking
- [ ] Fast Core Web Vitals

## 8. Design & UX Requirements

### 8.1 Visual Direction
- Emergency-focused hero with prominent CTA
- Service cards with icons (key, wrench, lightning)
- Trust signals (24h availability, rapid intervention)
- Green brand colors (#49B175)
- Clean, professional, trustworthy
- Mobile-first responsive design

### 8.2 Color Application
- **Primary (CTA, Headers)**: #49B175
- **Secondary (Icons, Accents)**: #2E7A4E
- **Background**: White #FFFFFF
- **Text**: Black #000000
- **Emergency highlight**: Red or orange for urgency

### 8.3 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 9. Development Phases

### Phase 1: Setup
- [x] Project initialization
- [x] Dependencies verification
- [x] Git repository setup
- [x] .gitignore setup

### Phase 2: Brand & Design
- [x] Color palette configuration (#49B175)
- [x] Tailwind config updated with BBS green colors
- [ ] Logo creation/preparation (from Kimi conversation assets)

### Phase 3: Page Development
- [x] Create page structure
- [x] Implement components
- [x] Add content
- [x] Homepage (hero, services preview, why us, projects preview, CTA)
- [x] Services page (Serrurerie, Plomberie, Électricité)
- [x] Projects page (Nos interventions)
- [x] About page (BBS SASU presentation)
- [x] Contact page (form, info, map)
- [x] Legal pages (Mentions légales, Privacy policy)

### Phase 4: Features
- [x] Contact form integration
- [x] WhatsApp button
- [x] Click-to-call buttons (06 11 70 89 07)
- [x] SEO implementation (metadata, JSON-LD)
- [x] Header/Footer components
- [x] Mobile sticky bar
- [x] WhatsApp floating button

### Phase 5: Testing
- [ ] Responsive testing
- [ ] Form testing
- [ ] Performance testing

### Phase 6: Deployment
- [ ] Vercel setup
- [ ] Domain configuration
- [ ] Final QA

## 10. Client Content Requirements

### Provided by Client:
- [x] Exact business name: BBS
- [x] Legal form: SASU
- [x] Business address: 88 Rue de Levis, 75017 Paris
- [x] SIREN: 995 147 592
- [x] Director: Ben Mefteh Bechir
- [x] Services: Serrurerie, Plomberie, Électricité
- [x] Phone number: 06 11 70 89 07
- [x] Email address: bbs75.contact@gmail.com
- [x] Business hours: 24h/7j (emergency service)
- [ ] Photos of work
- [ ] Logo (to be created from Ben Mefteh style)
- [ ] Testimonials/reviews

## 11. Deliverables

- [ ] Functional website deployed on Vercel
- [ ] Source code repository
- [ ] Mobile-responsive design
- [ ] Logo files (PNG, SVG)
- [ ] Brand mini-guide
- [ ] Working contact form
- [ ] Legal pages
- [ ] Deployment link

## 12. Acceptance Criteria

- [ ] Website is online and accessible
- [ ] All pages display correctly on mobile and desktop
- [ ] Contact form works and submissions are received
- [ ] CTA buttons work on mobile (click-to-call)
- [ ] Brand identity is consistent (green #49B175)
- [ ] Emergency services are prominently displayed
- [ ] Basic SEO is in place (titles, meta descriptions)
- [ ] Page load times are acceptable (< 3s)

## 13. Timeline Estimate

| Phase | Duration |
|-------|----------|
| Setup | 1 day |
| Brand & Design | 2-3 days |
| Page Development | 3-5 days |
| Features | 2-3 days |
| Testing | 1-2 days |
| Deployment | 1 day |
| **Total** | **10-15 days** |

## 14. Budget Estimate

| Item | Estimated Cost (EUR) |
|------|---------------------|
| Branding (logo) | 100 - 300 |
| Website development | 500 - 1,200 |
| Deployment setup | included or 50-150 |
| **Total** | **650 - 1,650** |

Monthly maintenance: 30-100 EUR (optional)

## 15. Reference Information

### Pappers Profile
- URL: https://www.pappers.fr/entreprise/bbs-995147592
- Last updated: 15/04/2026

### Instagram
- Profile: @bbs.urgence
- URL: https://www.instagram.com/bbs.urgence

### Related Conversations
- Kimi AI discussion on logo design
- Ben Mefteh logo style reference

---

*Specification created: 2026-04-15*
*Client: BBS (SIREN: 995 147 592)*
*Developer: TBD*
