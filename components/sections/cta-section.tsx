import Link from 'next/link';
import { Phone, MessageSquare, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-bbs-green via-bbs-green to-bbs-green-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm mb-6">
          <Clock className="h-4 w-4" />
          <span>Intervention sous 30 minutes</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Besoin d&apos;un dépannage ?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
          Appelez-nous maintenant pour une intervention rapide. 
          Nous intervenons 24h/7j dans toute l&apos;Île-de-France.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-bbs-green-dark hover:bg-white/90 font-bold text-lg px-10 py-7 h-auto shadow-xl"
            asChild
          >
            <a href="tel:+33611708907" className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              06 11 70 89 07
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-10 py-7 h-auto"
            asChild
          >
            <a 
              href="https://wa.me/33611708907" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageSquare className="h-6 w-6" />
              WhatsApp
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>24h/7j</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Île-de-France</span>
          </div>
          <span>•</span>
          <span>Devis gratuit</span>
          <span>•</span>
          <span>Garantie travaux</span>
        </div>
      </div>
    </section>
  );
}
