import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const departments = [
  { name: 'Paris', code: '75', areas: ['Tous arrondissements'] },
  { name: 'Hauts-de-Seine', code: '92', areas: ['Neuilly-sur-Seine', 'Boulogne-Billancourt', 'Courbevoie', 'Asnières-sur-Seine', 'Rueil-Malmaison', 'Colombes', 'Nanterre', 'Levallois-Perret'] },
  { name: 'Seine-Saint-Denis', code: '93', areas: ['Saint-Denis', 'Montreuil', 'Aubervilliers', 'Drancy', 'Bobigny', 'Bondy', 'Le Blanc-Mesnil'] },
  { name: 'Val-de-Marne', code: '94', areas: ['Créteil', 'Vitry-sur-Seine', 'Champigny-sur-Marne', 'Saint-Maur-des-Fossés', 'Ivry-sur-Seine', 'Villejuif'] },
  { name: 'Seine-et-Marne', code: '77', areas: ['Melun', 'Chelles', 'Fontainebleau', 'Meaux'] },
  { name: 'Yvelines', code: '78', areas: ['Versailles', 'Saint-Germain-en-Laye', 'Rambouillet', 'Poissy'] },
  { name: 'Essonne', code: '91', areas: ['Évry', 'Massy', 'Palaiseau', 'Les Ulis'] },
  { name: "Val-d'Oise", code: '95', areas: ['Cergy', 'Argenteuil', 'Sarcelles', 'Garges-lès-Gonesse'] },
];

export function ServiceAreaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-bbs-green/20 rounded-full text-sm font-medium text-bbs-green mb-6">
              <MapPin className="h-4 w-4" />
              Zone d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intervention dans toute l&apos;Île-de-France
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Basés à Paris 17, nous intervenons rapidement dans tous les départements 
              de l&apos;Île-de-France. Appelez-nous pour vérifier la disponibilité dans votre zone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {departments.map((dept) => (
                <div key={dept.code} className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-bbs-green/20 flex items-center justify-center text-bbs-green font-bold text-sm">
                      {dept.code}
                    </span>
                    <span className="font-semibold">{dept.name}</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    {dept.areas.slice(0, 3).join(', ')}
                    {dept.areas.length > 3 && ` +${dept.areas.length - 3}`}
                  </p>
                </div>
              ))}
            </div>
            <Button 
              size="lg" 
              className="bg-bbs-green hover:bg-bbs-green-dark text-white"
              asChild
            >
              <a href="tel:+33611708907" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Appelez pour votre zone
              </a>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 p-8">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.9%2C48.1%2C3.5%2C49.2&layer=mapnik"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                title="Zone d'intervention Île-de-France"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-bbs-green text-white p-4 rounded-lg shadow-xl">
              <p className="font-bold text-2xl">8</p>
              <p className="text-sm">Départements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
