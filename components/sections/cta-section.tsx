import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-bbs-green text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Besoin d&apos;un dépannage urgent ?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Contactez BBS pour une intervention rapide. 
          Service disponible 24h/7j à Paris et en Île-de-France.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-bbs-green-dark hover:bg-white/90 font-semibold"
            asChild
          >
            <Link href="/contact">
              Demander un devis gratuit
            </Link>
          </Button>
          <Button
            size="lg"
            className="bg-bbs-green-dark border-2 border-white text-white hover:bg-bbs-green-dark/90"
            asChild
          >
            <a href="tel:+33611708907" className="text-white">
              <Phone className="mr-2 h-5 w-5" />
              06 11 70 89 07
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
