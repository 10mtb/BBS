import { Clock, Shield, Award, ThumbsUp, MapPin, Euro } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const trustPoints = [
  {
    icon: Clock,
    title: 'Intervention rapide',
    description:
      'Nous intervenons sous 30 minutes pour vos urgences. Service disponible 24h/7j dans toute l\'Île-de-France.',
  },
  {
    icon: Euro,
    title: 'Devis gratuit',
    description:
      'Un devis détaillé et gratuit avant chaque intervention. Prix transparent, sans surprise.',
  },
  {
    icon: Shield,
    title: 'Garantie travaux',
    description:
      'Tous nos travaux sont garantis. Nous utilisons des matériaux de qualité professionnelle.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction client',
    description:
      'La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.',
  },
  {
    icon: Award,
    title: 'Artisan qualifié',
    description:
      'Experience et savoir-faire pour tous vos dépannages en serrurerie, plomberie et électricité.',
  },
  {
    icon: MapPin,
    title: 'Île-de-France',
    description:
      'Nous couvrons tout Paris et l\'Île-de-France : 75, 92, 93, 94, 77, 78, 91, 95.',
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-bbs-green/10 text-bbs-green text-sm font-medium rounded-full mb-4">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Votre artisan de confiance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            BBS, c&apos;est la garantie d&apos;un service rapide, efficace et de qualité pour tous vos dépannages.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <Card key={point.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
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
