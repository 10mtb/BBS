import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Key,
  Droplets,
  Zap,
  LayoutGrid,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { CtaButtons } from '@/components/cta/cta-buttons';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez nos services : serrurerie, plomberie, électricité et fermetures/menuiseries. Intervention rapide 24h/7j à Paris. Devis gratuit.',
};

const services = [
  {
    id: 'serrurerie',
    icon: Key,
    title: 'Serrurerie',
    description:
      'Service de serrurerie complet pour tous vos besoins. Ouverture de porte, changement de serrure, blindage et sécurisation.',
    features: [
      'Ouverture de porte claquée ou verrouillée',
      'Changement de serrure (tous types)',
      'Blindage de porte',
      'Installation de serrure haute sécurité',
      'Duplication de clés',
      'Dépannage 24h/7j',
    ],
  },
  {
    id: 'plomberie',
    icon: Droplets,
    title: 'Plomberie',
    description:
      'Intervention rapide pour tous vos problèmes de plomberie. Fuite d\'eau, WC, canalisation et plus encore.',
    features: [
      'Réparation de fuite d\'eau',
      'Débouchage de canalisation',
      'Réparation WC (cuvette, mécanisme, flotteur)',
      'Remplacement de robinets',
      'Détection de fuite',
      'Installation sanitaire',
    ],
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité',
    description:
      'Services électriques professionnels pour vos dépannages et installations. Panne, installation, mise aux normes.',
    features: [
      'Dépannage panne électrique',
      'Recherche de défaut',
      'Remplacement disjoncteur',
      'Installation prise et interrupteur',
      'Raccordement tableau électrique',
      'Mise en conformité',
    ],
  },
  {
    id: 'fermetures',
    icon: LayoutGrid,
    title: 'Fermetures & Menuiseries',
    description:
      'Installation et réparation de fermetures et menuiseries. Rideaux métalliques, stores, volets, fenêtres, portails et plus.',
    features: [
      'Rideaux métalliques',
      'Stores bannes',
      'Portes blindées',
      'Volets roulants',
      'Fenêtres PVC',
      'Vitrines de magasin',
      'Vérandas',
      'Portails',
    ],
  },
];

const faqs = [
  {
    question: 'Êtes-vous disponibles 24h/7j ?',
    answer:
      'Oui, BBS intervient 24 heures sur 24, 7 jours sur 7 pour vos dépannages urgents. Appelez-nous pour une intervention rapide.',
  },
  {
    question: 'Combien coûte une intervention ?',
    answer:
      'Nous vous fournissons un devis gratuit avant toute intervention. Le tarif dépend du type de dépannage. Pas de surprise !',
  },
  {
    question: 'Intervenez-vous dans tout Paris ?',
    answer:
      'Nous intervenons principalement dans le 17ème arrondissement de Paris et ses environs. Contactez-nous pour vérifier la disponibilité dans votre zone.',
  },
  {
    question: 'Proposez-vous des garanties ?',
    answer:
      'Oui, tous nos travaux sont garantis. Nous utilisons des matériaux de qualité professionnelle.',
  },
  {
    question: 'Comment prendre rendez-vous ?',
    answer:
      'Vous pouvez nous appeler au 06 11 70 89 07, nous envoyer un email ou remplir le formulaire de contact. Nous vous répondrons rapidement.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos services
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Serrurerie, plomberie, électricité et fermetures/menuiseries. 
            Intervention rapide 24h/7j à Paris. Devis gratuit.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
              {services.slice(0, 2).map((service) => (
                <Card key={service.title} className="border-0 shadow-lg" id={service.id}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-bbs-green flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-bbs-green mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-12">
              {services.slice(2, 4).map((service) => (
                <Card key={service.title} className="border-0 shadow-lg" id={service.id}>
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-bbs-green flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-bbs-green mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-lg text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bbs-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;une intervention urgente ?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Appelez BBS pour un dépannage rapide. 
            Nous intervenons 24h/7j à Paris.
          </p>
          <CtaButtons variant="hero" />
        </div>
      </section>
    </>
  );
}
