import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MapPinIcon } from 'lucide-react';

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

const services = [
  { href: '/services#serrurerie', label: 'Serrurerie', desc: 'Ouverture porte, serrure' },
  { href: '/services#plomberie', label: 'Plomberie', desc: 'Fuite, WC, canalisation' },
  { href: '/services#electricite', label: 'Électricité', desc: 'Panne, installation' },
  { href: '/services#fermetures', label: 'Fermetures', desc: 'Volets, rideaux, fenêtres' },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-bbs-green">BBS</h3>
            <p className="text-slate-400 text-sm mb-4">
              Artisan multi-services à Paris 17. Dépannage urgent 24h/7j en serrurerie, 
              plomberie, électricité et fermetures/menuiseries.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <MapPinIcon className="h-4 w-4 text-bbs-green" />
              <span>Intervention en Île-de-France</span>
            </div>
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
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <Link 
                  key={service.href} 
                  href={service.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  <span className="text-slate-400">{service.label}</span>
                  <span className="text-slate-500 ml-2">- {service.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-bbs-green" />
                <span>88 Rue de Levis<br />75017 Paris</span>
              </div>
              <a href="tel:+33611708907" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0 text-bbs-green" />
                <span className="font-medium text-white">06 11 70 89 07</span>
              </a>
              <a href="mailto:bbs75.contact@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0 text-bbs-green" />
                bbs75.contact@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-bbs-green" />
                <span>24h/7j<br />Dépannage urgent</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white mb-1">BBS SASU</p>
              <p className="text-sm text-slate-400">
                SIREN: 995 147 592 | Capital: 1 000€
              </p>
            </div>
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
          <p className="text-center text-sm text-slate-500 mt-6">
            © {new Date().getFullYear()} BBS - Artisan Multi-Services Paris. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
