import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CtaButtons } from '@/components/cta/cta-buttons';

export function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-bbs-green/20 border border-bbs-green/30 rounded-full text-sm mb-6">
            ⚡ Dépannage urgent 24h/7j à Paris
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Serrurerie • Plomberie • Électricité • Fermetures
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Votre artisan multi-services à Paris 17. Intervention rapide pour tous 
            vos besoins en serrurerie, plomberie, électricité et fermetures/menuiseries. Devis gratuit.
          </p>
          <CtaButtons variant="hero" />
          <div className="flex flex-wrap gap-6 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <span className="text-bbs-green font-bold">24h</span>
              </div>
              <span className="text-slate-300">Service d&apos;urgence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <span className="text-bbs-green font-bold">7j/7</span>
              </div>
              <span className="text-slate-300">Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <span className="text-bbs-green font-bold">✓</span>
              </div>
              <span className="text-slate-300">Devis gratuit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
