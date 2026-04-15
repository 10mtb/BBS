import Link from 'next/link';
import { Key, Droplets, Zap, LayoutGrid, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Key,
    title: 'Serrurerie',
    description:
      'Ouverture de porte, changement de serrure, blindage et sécurisation. Intervention rapide 24h/7j.',
    features: ['Ouverture de porte', 'Changement serrure', 'Blindage', 'Serrures haute sécurité'],
    color: 'bg-bbs-green',
    urgent: true,
  },
  {
    icon: Droplets,
    title: 'Plomberie',
    description:
      'Dépannage fuite d\'eau, réparation WC, canalisation. Intervention rapide et efficace.',
    features: ['Fuite d\'eau', 'Réparation WC', 'Canalisation', 'Détection fuite'],
    color: 'bg-blue-500',
    urgent: true,
  },
  {
    icon: Zap,
    title: 'Électricité',
    description:
      'Panne électrique, installation, dépannage. Tout type d\'intervention électrique.',
    features: ['Panne électrique', 'Tableau électrique', 'Prises & Interrupteurs', 'Mise aux normes'],
    color: 'bg-yellow-500',
    urgent: true,
  },
  {
    icon: LayoutGrid,
    title: 'Fermetures',
    description:
      'Rideaux métalliques, stores bannes, volets roulants, fenêtres PVC, portails.',
    features: ['Rideaux métalliques', 'Stores bannes', 'Volets roulants', 'Fenêtres & Portails'],
    color: 'bg-purple-500',
    urgent: false,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-bbs-green/10 text-bbs-green text-sm font-medium rounded-full mb-4">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des solutions pour tous vos projets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            BBS vous propose une gamme complète de services pour vos besoins en serrurerie, 
            plomberie, électricité et fermetures/menuiseries.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-bbs-green/30 relative overflow-hidden">
              {service.urgent && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Urgence
                  </span>
                </div>
              )}
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-bbs-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-bbs-green group-hover:text-white transition-colors" asChild>
                  <Link href="/services">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-bbs-green hover:bg-bbs-green-dark shadow-lg">
            <Link href="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
