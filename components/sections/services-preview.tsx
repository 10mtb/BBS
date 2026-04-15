import Link from 'next/link';
import { Key, Droplets, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Key,
    title: 'Serrurerie',
    description:
      'Ouverture de porte, changement de serrure, blindage et sécurisation. Intervention rapide 24h/7j.',
    features: ['Ouverture de porte', 'Changement serrure', 'Blindage'],
    color: 'bg-bbs-green',
  },
  {
    icon: Droplets,
    title: 'Plomberie',
    description:
      'Dépannage fuite d\'eau, réparation WC, canalisation. Intervention rapide et efficace.',
    features: ['Fuite d\'eau', 'Réparation WC', 'Canalisation'],
    color: 'bg-blue-500',
  },
  {
    icon: Zap,
    title: 'Électricité',
    description:
      'Panne électrique, installation, dépannage. Tout type d\'intervention électrique.',
    features: ['Panne électrique', 'Installation', 'Dépannage'],
    color: 'bg-yellow-500',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos services de dépannage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            BBS intervient pour tous vos besoins en serrurerie, plomberie et électricité.
            Service rapide et devis gratuit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow border-2 hover:border-bbs-green/50">
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-bbs-green flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-bbs-green hover:bg-bbs-green-dark">
            <Link href="/services">
              Voir tous nos services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
