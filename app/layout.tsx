import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { JsonLd } from '@/components/seo/json-ld';
import { CookieNotice } from '@/components/cookie-notice';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BBS - Serrurier, Plombier, Électricien, Fermetures Paris 17 | 24h/7j',
    template: '%s | BBS',
  },
  description:
    'BBS - Votre artisan multi-services à Paris 17. Serrurerie, plomberie, électricité et fermetures/menuiseries en dépannage urgent 24h/7j. Rideaux métalliques, stores, volets. Appelez le 06 11 70 89 07.',
  keywords: [
    'serrurier Paris 17',
    'serrurier urgence Paris',
    'dépannage serrurerie Paris',
    'plombier Paris 17',
    'électricien Paris 17',
    'serrurier 24h Paris',
    'rideaux métalliques Paris',
    'stores bannes Paris',
    'volets roulants Paris',
    'fenêtres PVC Paris',
    'portails Paris',
    'dépannage plomberie Paris',
    'dépannage électrique Paris',
    'bbs serrurier',
    'bbs plombier',
    'bbs electricien',
    'bbs fermetures',
  ],
  authors: [{ name: 'BBS' }],
  creator: 'BBS',
  metadataBase: new URL('https://bbs-urgence.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bbs-urgence.fr',
    siteName: 'BBS',
    title: 'BBS - Serrurier, Plombier, Électricien, Fermetures Paris 17 | 24h/7j',
    description:
      'Dépannage multi-services 24h/7j à Paris. Serrurerie, plomberie, électricité, fermetures. Rideaux métalliques, stores, volets. Devis gratuit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBS - Serrurier, Plombier, Électricien, Fermetures Paris 17',
    description:
      'Dépannage multi-services 24h/7j. Serrurerie, plomberie, électricité, fermetures.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieNotice />
        <Toaster />
      </body>
    </html>
  );
}
