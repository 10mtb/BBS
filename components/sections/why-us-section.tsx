import { Clock, Shield, Sparkles, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const trustPoints = [
  {
    icon: Zap,
    title: 'Intervention rapide',
    description:
      'Nous intervenons rapidement pour tous vos dépannages. Service d\'urgence 24h/7j.',
  },
  {
    icon: Shield,
    title: 'Devis gratuit',
    description:
      'Nous vous fournissons un devis gratuit et transparent avant toute intervention.',
  },
  {
    icon: Sparkles,
    title: 'Travail garanti',
    description:
      'Tous nos travaux sont garantis. Satisfaction client是我们的 priorité.',
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir BBS ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Votre artisan de confiance à Paris 17 pour tous vos dépannages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point) => (
            <Card key={point.title} className="text-center border-0 shadow-md">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-bbs-green/10 flex items-center justify-center mx-auto mb-6">
                  <point.icon className="h-8 w-8 text-bbs-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
