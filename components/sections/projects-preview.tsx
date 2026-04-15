import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, Droplets, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Ouverture porte blindée Paris 17',
    category: 'Serrurerie',
    location: 'Paris 17e',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Réparation fuite importante',
    category: 'Plomberie',
    location: 'Neuilly-sur-Seine',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
    icon: Droplets,
  },
  {
    id: 3,
    title: 'Panne électrique complète',
    category: 'Électricité',
    location: 'Boulogne-Billancourt',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Installation rideaux métalliques',
    category: 'Fermetures',
    location: 'Saint-Denis',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    icon: Wrench,
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-bbs-green/10 text-bbs-green text-sm font-medium rounded-full mb-4">
              Nos réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interventions récentes
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Découvrez quelques-unes de nos interventions récentes en Île-de-France.
              Serrurerie, plomberie, électricité et fermetures.
            </p>
          </div>
          <Button variant="outline" className="border-bbs-green text-bbs-green hover:bg-bbs-green hover:text-white" asChild>
            <Link href="/projects">
              Voir toutes les interventions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              href="/projects"
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-bbs-green text-white text-xs font-medium rounded-full">
                    <project.icon className="h-3 w-3" />
                    {project.category}
                  </span>
                  <span className="text-white/80 text-sm">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-bbs-green transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
