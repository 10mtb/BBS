import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const areas = [
  { name: 'Paris 17e', postalCode: '75017' },
  { name: 'Paris 8e', postalCode: '75008' },
  { name: 'Levallois-Perret', postalCode: '92300' },
  { name: 'Neuilly-sur-Seine', postalCode: '92200' },
  { name: 'Courbevoie', postalCode: '92400' },
  { name: 'Asnières-sur-Seine', postalCode: '92600' },
  { name: 'Clichy', postalCode: '92110' },
  { name: 'Saint-Denis', postalCode: '93200' },
  { name: 'Puteaux', postalCode: '92800' },
  { name: 'Rueil-Malmaison', postalCode: '92500' },
];

export function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bbs-green/10 rounded-full text-sm font-medium text-bbs-green mb-6">
              <MapPin className="h-4 w-4" />
              Zone d&apos;intervention
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nous intervenons près de chez vous
            </h2>
            <p className="text-muted-foreground mb-6">
              Basés à Paris 17, nous nous déplaçons rapidement dans tout 
              l&apos;ouest parisien et l&apos;Île-de-France. Intervention urgente disponible.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-bbs-green" />
                  <span>
                    {area.name} ({area.postalCode})
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.683487!2d2.3068!3d48.8877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbe4a5b7b3f%3A0x40ca5cd36e4ab70!2s88+Rue+de+L%C3%A9vis%2C+75017+Paris!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Zone d'intervention BBS à Paris 17"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
