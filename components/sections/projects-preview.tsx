import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Ouverture porte blindée',
    category: 'Serrurerie',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 2,
    title: 'Réparation fuite WC',
    category: 'Plomberie',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80',
  },
  {
    id: 3,
    title: 'Panne électrique',
    category: 'Électricité',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 4,
    title: 'Changement serrure',
    category: 'Serrurerie',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
];

export function ProjectsPreview() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos interventions
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Découvrez quelques-unes de nos interventions récentes. 
              Serrurerie, plomberie et électricité.
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
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-bbs-green text-white text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
