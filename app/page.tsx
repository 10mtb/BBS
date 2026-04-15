import { HeroSection } from '@/components/sections/hero-section';
import { ServicesPreview } from '@/components/sections/services-preview';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { ProjectsPreview } from '@/components/sections/projects-preview';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ServiceAreaSection } from '@/components/sections/service-area-section';
import { CtaSection } from '@/components/sections/cta-section';
import { WhatsAppFloat } from '@/components/cta/whatsapp-float';
import { MobileStickyBar } from '@/components/cta/mobile-sticky-bar';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <ServiceAreaSection />
      <CtaSection />
      <WhatsAppFloat />
      <MobileStickyBar />
    </>
  );
}
