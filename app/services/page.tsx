'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Key,
  Droplets,
  Zap,
  LayoutGrid,
  CheckCircle2,
  Clock,
  Phone,
  Shield,
  Award,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CtaSection } from '@/components/sections/cta-section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'serrurerie',
    icon: Key,
    title: 'Serrurerie',
    subtitle: 'Dépannage urgent 24h/7j',
    description:
      'Notre service de serrurerie couvre tous vos besoins en urgence ou sur rendez-vous. Ouverture de porte, changement de serrure, blindage et sécurisation.',
    features: [
      { name: 'Ouverture de porte claquée ou verrouillée', urgent: true },
      { name: 'Changement de serrure (tous types)', urgent: true },
      { name: 'Blindage de porte', urgent: false },
      { name: 'Installation serrure haute sécurité', urgent: false },
      { name: 'Duplication de clés', urgent: false },
      { name: 'Dépannage 24h/7j', urgent: true },
    ],
    color: 'bg-bbs-green',
    lightColor: 'bg-bbs-green/10',
    borderColor: 'border-bbs-green',
  },
  {
    id: 'plomberie',
    icon: Droplets,
    title: 'Plomberie',
    subtitle: 'Intervention rapide',
    description:
      'Nos plombiers interviennent rapidement pour tous vos problèmes : fuite d\'eau, WC, canalisation, sanitaires. Diagnostic et réparation efficace.',
    features: [
      { name: 'Réparation de fuite d\'eau', urgent: true },
      { name: 'Débouchage de canalisation', urgent: true },
      { name: 'Réparation WC (cuvette, mécanisme, flotteur)', urgent: false },
      { name: 'Remplacement de robinets', urgent: false },
      { name: 'Détection de fuite', urgent: true },
      { name: 'Installation sanitaire', urgent: false },
    ],
    color: 'bg-blue-500',
    lightColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500',
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité',
    subtitle: 'Dépannage et installation',
    description:
      'Services électriques complets pour vos dépannages et projets. Panne, installation, mise aux normes. Sécurité et conformité garanties.',
    features: [
      { name: 'Dépannage panne électrique', urgent: true },
      { name: 'Recherche de défaut', urgent: true },
      { name: 'Remplacement disjoncteur', urgent: false },
      { name: 'Installation prise et interrupteur', urgent: false },
      { name: 'Raccordement tableau électrique', urgent: false },
      { name: 'Mise en conformité', urgent: false },
    ],
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500',
  },
  {
    id: 'fermetures',
    icon: LayoutGrid,
    title: 'Fermetures & Menuiseries',
    subtitle: 'Installation et réparation',
    description:
      'Solutions complètes pour vos fermetures : rideaux métalliques, stores, volets roulants, fenêtres PVC, portails et vérandas.',
    features: [
      { name: 'Rideaux métalliques', urgent: false },
      { name: 'Stores bannes', urgent: false },
      { name: 'Portes blindées', urgent: false },
      { name: 'Volets roulants', urgent: false },
      { name: 'Fenêtres PVC', urgent: false },
      { name: 'Portails et vérandas', urgent: false },
    ],
    color: 'bg-purple-500',
    lightColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500',
  },
];

const trustPoints = [
  { icon: Clock, number: '30', unit: 'min', label: 'Temps d\'intervention' },
  { icon: Shield, number: '2', unit: 'ans', label: 'Garantie travaux' },
  { icon: Award, number: '100%', unit: '', label: 'Satisfaction client' },
  { icon: Star, number: '5', unit: '/5', label: 'Note clients' },
];

const faqs = [
  {
    question: 'Êtes-vous disponibles 24h/7j ?',
    answer:
      'Oui, BBS intervient 24 heures sur 24, 7 jours sur 7 pour vos dépannages urgents en serrurerie et plomberie. Appelez-nous pour une intervention rapide.',
  },
  {
    question: 'Combien coûte une intervention ?',
    answer:
      'Nous vous fournissons un devis gratuit et transparent avant toute intervention. Le tarif dépend du type de dépannage. Pas de surprise !',
  },
  {
    question: 'Intervenez-vous dans tout l\'Île-de-France ?',
    answer:
      'Oui, nous intervenons dans tout Paris et l\'Île-de-France. Appelez-nous pour vérifier la disponibilité dans votre zone.',
  },
  {
    question: 'Proposez-vous des garanties sur vos travaux ?',
    answer:
      'Oui, tous nos travaux sont garantis. Nous utilisons des matériaux de qualité professionnelle.',
  },
  {
    question: 'Comment prendre rendez-vous ?',
    answer:
      'Appelez-nous au 06 11 70 89 07, envoyez un email ou remplissez le formulaire de contact. Nous vous répondrons rapidement.',
  },
  {
    question: 'Travaillez-vous avec les assurances ?',
    answer:
      'Nous pouvons vous accompagner dans vos démarches avec les assurances. N\'hésitez pas à nous contacter pour plus d\'informations.',
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('serrurerie');
  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-bbs-green/20 text-bbs-green border-bbs-green/30 px-4 py-1 mb-6">
              Artisan Multi-Services à Paris
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nos services de dépannage
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Serrurerie, plomberie, électricité et fermetures. 
              Intervention rapide 24h/7j dans toute l&apos;Île-de-France.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-bbs-green hover:bg-bbs-green-dark text-white font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-bbs-green/25" asChild>
                <a href="tel:+33611708907">
                  <Phone className="mr-3 h-6 w-6" />
                  06 11 70 89 07
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg px-8 py-6 h-auto" asChild>
                <Link href="/contact">
                  Devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-950 shadow-lg relative -mt-12 z-10 mx-4 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <stat.icon className="h-6 w-6 text-bbs-green" />
                  <span className="text-3xl md:text-4xl font-bold text-slate-900">{stat.number}</span>
                  <span className="text-lg text-muted-foreground">{stat.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs & Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  'flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300',
                  activeTab === service.id
                    ? `${service.color} text-white shadow-lg scale-105`
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                )}
              >
                <service.icon className="h-5 w-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className={cn('text-white p-8 md:p-12', activeService.color)}>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <activeService.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{activeService.title}</h2>
                    <p className="text-white/80 text-lg">{activeService.subtitle}</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-muted-foreground mb-8">
                      {activeService.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className={cn(activeService.color, 'text-white')} asChild>
                        <a href="/contact">Demander un devis</a>
                      </Button>
                      <Button size="lg" variant="outline" className={cn('border-2 border-slate-300', activeService.lightColor)} asChild>
                        <a href="tel:+33611708907">
                          <Phone className="h-5 w-5 mr-2" />
                          Appeler maintenant
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4">Nos prestations</h3>
                    <div className="space-y-3">
                      {activeService.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className={cn(
                            'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                            feature.urgent ? 'bg-red-100' : activeService.lightColor
                          )}>
                            <CheckCircle2 className={cn(
                              'h-5 w-5',
                              feature.urgent ? 'text-red-500' : 'text-bbs-green'
                            )} />
                          </div>
                          <div className="flex-1">
                            <span className="text-sm">{feature.name}</span>
                            {feature.urgent && (
                              <Badge className="ml-2 text-xs bg-red-500">
                                Urgence
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgences Banner */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                <Phone className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Dépannage urgent ?</h3>
                <p className="text-white/90 text-lg">Appelez-nous immédiatement - Intervention sous 30 minutes</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 font-bold text-2xl px-12 py-8 h-auto shadow-xl" asChild>
              <a href="tel:+33611708907">
                <Phone className="mr-4 h-7 w-7" />
                06 11 70 89 07
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tous nos services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services pour répondre à tous vos besoins en dépannage et installation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={cn(
                  'border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]',
                  activeTab === service.id ? service.borderColor : 'border-transparent'
                )}
                onClick={() => setActiveTab(service.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={cn(
                    'w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white',
                    service.color
                  )}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
                  <div className="text-xs text-bbs-green font-medium">
                    {service.features.filter(f => f.urgent).length} services urgents
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Questions fréquentes
              </h2>
              <p className="text-muted-foreground">
                Trouvez rapidement les réponses à vos questions.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-lg text-left font-medium py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaSection
        title="Besoin d'aide ? Demandez un devis gratuit"
        description="Notre équipe est disponible 24h/7j pour répondre à toutes vos questions et organiser une intervention rapide."
        badgeText="Devis sous 24h"
        buttons={['phone', 'contact']}
      />
    </>
  );
}
