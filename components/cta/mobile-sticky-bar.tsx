'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
      <div className="flex gap-2 p-3">
        <Button variant="ghost" size="sm" className="flex-1 bg-bbs-green text-white hover:bg-bbs-green-dark" asChild>
          <a href="tel:+33611708907">
            <Phone className="mr-2 h-4 w-4" />
            Appeler
          </a>
        </Button>
        <Button size="sm" className="flex-1 bg-bbs-green hover:bg-bbs-green-dark" asChild>
          <Link href="/contact">
            Devis gratuit
          </Link>
        </Button>
      </div>
    </div>
  );
}
