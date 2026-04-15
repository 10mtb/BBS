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
            <div className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287760.2865632173!2d2.2!3d48.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sIle-de-France!5e0!3m2!1sfr!2sfr!4v1704067200000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention Île-de-France"
                className="grayscale-[50%]"
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
