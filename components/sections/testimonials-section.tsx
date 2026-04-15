import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Jean-Pierre M.',
    location: 'Paris 17e',
    rating: 5,
    service: 'Serrurerie',
    text: 'Ouverture de porte en moins de 20 minutes ! Service rapide et professionnel. Prix très correct pour une intervention urgente.',
  },
  {
    name: 'Fatima B.',
    location: 'Neuilly-sur-Seine',
    rating: 5,
    service: 'Plomberie',
    text: 'Fuite d\'eau réparée rapidement. Travail propre et soigné. Je recommande vivement pour tous travaux de plomberie.',
  },
  {
    name: 'Marc D.',
    location: 'Saint-Denis',
    rating: 5,
    service: 'Électricité',
    text: 'Panne électrique résolue en un temps record. Électricien compétent et agréable. Merci pour l\'intervention rapide !',
  },
  {
    name: 'Sophie L.',
    location: 'Boulogne-Billancourt',
    rating: 5,
    service: 'Fermetures',
    text: 'Installation de volets roulants parfaite. Équipe professionnelle et respect des délais. Excellent rapport qualité-prix.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-bbs-green/10 text-bbs-green text-sm font-medium rounded-full mb-4">
            Témoignages clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs retours d&apos;expérience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full border-0 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-bbs-green/5 rounded-bl-full">
                <Quote className="w-8 h-8 text-bbs-green/30 absolute top-2 right-2 rotate-12" />
              </div>
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-bbs-green text-bbs-green"
                    />
                  ))}
                </div>
                <span className="inline-block px-2 py-1 bg-bbs-green/10 text-bbs-green text-xs font-medium rounded mb-3">
                  {testimonial.service}
                </span>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <span>{testimonial.location}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
