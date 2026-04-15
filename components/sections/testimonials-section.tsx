import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Marie D.',
    location: 'Pantin',
    rating: 5,
    text: 'Excellente prestation ! L\'équipe a été ponctuelle, professionnelle et le résultat est impeccable. Je recommande vivement.',
  },
  {
    name: 'Thomas L.',
    location: 'Montreuil',
    rating: 5,
    text: 'Travail soigné et propre. Les murs de notre salon n\'ont jamais été aussi beaux. Prix très correct pour la qualité delivered.',
  },
  {
    name: 'Sophie M.',
    location: 'Bagnolet',
    rating: 5,
    text: 'Très satisfaite du résultat. M. Bernard est à l\'écoute et propose de bonnes advise. Je referai appel à ses services.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-construction-orange text-construction-orange"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
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
