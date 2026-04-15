'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CtaButtons } from '@/components/cta/cta-buttons';
import { CtaSection } from '@/components/sections/cta-section';

const projects = [
  {
    id: 1,
    title: 'Ouverture porte blindée',
    category: 'Serrurerie',
    location: 'Paris 17e (75017)',
    description:
      'Intervention rapide pour ouverture de porte blindée. Client锁在外面，30分钟内解决。',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 2,
    title: 'Réparation fuite WC',
    category: 'Plomberie',
    location: 'Paris 17e (75017)',
    description:
      'Fuite d\'eau importante au niveau du WC. Réparation effectuée en urgence.',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
  {
    id: 3,
    title: 'Panne électrique appartement',
    category: 'Électricité',
    location: 'Paris 8e (75008)',
    description:
      'Panne électrique complète dans un appartement. Recherche de défaut et réparation.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 4,
    title: 'Changement serrure',
    category: 'Serrurerie',
    location: 'Levallois-Perret (92300)',
    description:
      'Remplacement complet d\'une serrure suite à une perte de clés.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 5,
    title: 'Débouchage canalisation',
    category: 'Plomberie',
    location: 'Paris 17e (75017)',
    description:
      'Canalisation bouchée dans une cuisine. Débouchage professionnel.',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
  {
    id: 6,
    title: 'Installation prise électrique',
    category: 'Électricité',
    location: 'Neuilly-sur-Seine (92200)',
    description:
      'Installation de nouvelles prises électriques dans un bureau.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 7,
    title: 'Blindage de porte',
    category: 'Serrurerie',
    location: 'Paris 17e (75017)',
    description:
      'Installation d\'un blindage complet pour renforcer la sécurité.',
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 8,
    title: 'Remplacement chauffe-eau',
    category: 'Plomberie',
    location: 'Courbevoie (92400)',
    description:
      'Remplacement d\'un chauffe-eau défectueux. Installation rapide.',
    before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
  },
];

const categories = ['Tous', 'Serrurerie', 'Plomberie', 'Électricité', 'Fermetures'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showBefore, setShowBefore] = useState(false);

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm mb-6 text-slate-400">
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Projets</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Nos interventions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez nos récentes interventions en serrurerie, plomberie, électricité et fermetures. 
              Chaque dépannage est réalisé avec professionnalisme.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-8 bg-slate-50 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                className={activeCategory === category ? 'bg-bbs-green hover:bg-bbs-green-dark' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => {
                  setSelectedProject(project);
                  setShowBefore(false);
                }}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.after}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-bbs-green">
                    {project.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300">{project.location}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300"
            onClick={() => setSelectedProject(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image
                src={showBefore ? selectedProject.before : selectedProject.after}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <Badge className="bg-bbs-green mb-2">
                {selectedProject.category}
              </Badge>
              <h3 className="text-xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-slate-300">{selectedProject.location}</p>
              <p className="text-slate-400 mt-2">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <CtaSection
        title="Besoin d'une intervention ?"
        description="Comme ces clients, contactez-nous pour un dépannage rapide. Service disponible 24h/7j."
        showBadge={false}
      />
    </>
  );
}
