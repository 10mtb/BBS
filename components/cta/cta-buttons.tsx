import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';

interface CtaButtonsProps {
  variant?: 'default' | 'hero' | 'section';
  showPhone?: boolean;
  showWhatsapp?: boolean;
}

export function CtaButtons({
  variant = 'default',
  showPhone = true,
  showWhatsapp = true,
}: CtaButtonsProps) {
  const isHero = variant === 'hero';

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Button
        size={isHero ? 'lg' : 'default'}
        className="bg-bbs-green hover:bg-bbs-green-dark text-white font-semibold"
        asChild
      >
        <Link href="/contact">Dépannage urgent</Link>
      </Button>
      {showPhone && (
        <Button
          size={isHero ? 'lg' : 'default'}
          asChild
          className={`${isHero ? 'bg-white text-bbs-green-dark hover:bg-white/90 font-semibold' : 'bg-bbs-green/10 text-bbs-green hover:bg-bbs-green hover:text-white border border-bbs-green font-semibold'}`}
        >
          <a href="tel:+33611708907">
            <Phone className="mr-2 h-4 w-4" />
            06 11 70 89 07
          </a>
        </Button>
      )}
      {showWhatsapp && !isHero && (
        <Button
          size="default"
          className="bg-green-600 hover:bg-green-700 text-white border-green-600 font-semibold"
          asChild
        >
          <a
            href="https://wa.me/33611708907"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
      )}
    </div>
  );
}
