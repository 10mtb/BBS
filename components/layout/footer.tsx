import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projets' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/legal', label: 'Mentions légales' },
  { href: '/legal/privacy', label: 'Politique de confidentialité' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-bbs-green">BBS</h3>
            <p className="text-slate-400 text-sm mb-4">
              Société par Actions Simplifiée Unipersonnelle (SASU). 
              Dépannage multi-services : serrurerie, plomberie et électricité 
              à Paris et en Île-de-France.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link href="/services#serrurerie" className="hover:text-white transition-colors">
                🔑 Serrurerie
              </Link>
              <Link href="/services#plomberie" className="hover:text-white transition-colors">
                🚿 Plomberie
              </Link>
              <Link href="/services#electricite" className="hover:text-white transition-colors">
                ⚡ Électricité
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>88 Rue de Levis<br />75017 Paris, France</span>
              </div>
              <a href="tel:+33611708907" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                06 11 70 89 07
              </a>
              <a href="mailto:bbs75.contact@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                bbs75.contact@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} BBS SASU. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
