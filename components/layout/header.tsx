'use client';

import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-slate-950/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-bbs-green">BBS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-bbs-green transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-bbs-green text-bbs-green hover:bg-bbs-green hover:text-white" asChild>
              <a href="tel:+33611708907">
                <Phone className="mr-2 h-4 w-4" />
                06 11 70 89 07
              </a>
            </Button>
            <Button size="sm" className="bg-bbs-green hover:bg-bbs-green-dark" asChild>
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-bbs-green"
                >
                  BBS
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-muted-foreground hover:text-bbs-green transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="border-bbs-green text-bbs-green hover:bg-bbs-green hover:text-white" asChild>
                    <a href="tel:+33611708907">
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </a>
                  </Button>
                  <Button className="bg-bbs-green hover:bg-bbs-green-dark" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Demander un devis
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
