import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2349B175' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-sm mb-6 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-200 font-medium">Dépannage urgent 24h/7j - Île-de-France</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Artisan Multi-Services
            <span className="block text-bbs-green mt-2">Serrurerie • Plomberie • Électricité • Fermetures</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Votre interlocuteur unique pour tous vos dépannages à Paris et en Île-de-France. 
            Intervention rapide, devis gratuit, travail garanti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-bbs-green hover:bg-bbs-green-dark text-white font-semibold text-lg px-8 py-6 h-auto shadow-lg shadow-bbs-green/25"
              asChild
            >
              <a href="tel:+33611708907" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                06 11 70 89 07
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-white/10 hover:bg-white border-2 border-white text-white hover:text-bbs-green-dark font-semibold text-lg px-8 py-6 h-auto"
              asChild
            >
              <a href="/contact">
                Devis gratuit
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-bbs-green" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">24h/7j</p>
                <p className="text-slate-400">Urgence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-bbs-green" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Île-de-France</p>
                <p className="text-slate-400">Toute la région</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-bbs-green/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-bbs-green" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Garantie</p>
                <p className="text-slate-400">Travaux assurés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
