import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { CtaButtons } from '@/components/cta/cta-buttons';

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Découvrez BBS, artisan multi-services à Paris 17. Serrurerie, plomberie, électricité. Intervention rapide 24h/7j.',
};

const values = [
  {
    icon: Award,
    title: 'Intervention rapide',
    description:
      'Nous intervenons rapidement pour tous vos dépannages. Service d\'urgence disponible.',
  },
  {
    icon: Users,
    title: 'Devis transparent',
    description:
      'Chaque projet commence par un devis gratuit et détaillé. Pas de surprise.',
  },
  {
    icon: Target,
    title: 'Travail garanti',
    description:
      'Tous nos travaux sont garantis. Satisfaction client est notre priorité.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Premier contact',
    description:
      'Appelez-nous ou remplissez le formulaire. Nous vous recontactons rapidement.',
  },
  {
    number: '02',
    title: 'Évaluation',
    description:
      'Nous évaluons votre besoin et vous fournissons un devis gratuit.',
  },
  {
    number: '03',
    title: 'Intervention',
    description:
      'Nous intervenons rapidement pour résoudre votre problème.',
  },
  {
    number: '04',
    title: 'Garantie',
    description:
      'Tous nos travaux sont garantis. Votre satisfaction est notre engagement.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">À propos</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Découvrez BBS, votre artisan multi-services de confiance à Paris 17.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                BBS, votre artisan multi-services à Paris
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BBS est une SASU (Société par Actions Simplifiée Unipersonnelle) 
                  spécialisée dans le dépannage multi-services. Fondée en 2025, 
                  notre entreprise intervient pour tous vos besoins en serrurerie, 
                  plomberie et électricité.
                </p>
                <p>
                  Basés à Paris 17, nous répondons rapidement aux demandes 
                  d&apos;intervention urgente. Notre objectif : vous fournir un 
                  service fiable, rapide et de qualité.
                </p>
                <p>
                  Que ce soit pour une porte claquée, une fuite d&apos;eau ou une 
                  panne électrique, BBS est votre interlocuteur de confiance pour 
                  tous vos dépannages.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-bbs-green">
                    24h/7j
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Service d&apos;urgence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-bbs-green">
                    Paris 17
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Zone d&apos;intervention
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-bbs-green">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Artisan BBS au travail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-bbs-green text-white p-6 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Devis gratuit</div>
                <div className="text-sm opacity-90">Intervention rapide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-full bg-bbs-green/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-bbs-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Notre méthode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-bbs-green/10 absolute -top-4 -left-2">
                  {step.number}
                </div>
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zone d&apos;intervention
              </h2>
              <p className="text-muted-foreground mb-6">
                BBS intervient principalement dans le 17ème arrondissement de Paris 
                et ses environs. Notre positionnement nous permet de garantir des 
                délais courts et un service personnalisé.
              </p>
              <ul className="space-y-2">
                {[
                  'Paris 17e arrondissement',
                  'Paris 8e arrondissement',
                  'Levallois-Perret',
                  'Neuilly-sur-Seine',
                  'Courbevoie',
                  'Île-de-France',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-bbs-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                alt="Zone d'intervention Paris"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bbs-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;un dépannage ?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Contactez BBS pour une intervention rapide. 
            Service disponible 24h/7j.
          </p>
          <CtaButtons variant="hero" />
        </div>
      </section>
    </>
  );
}
