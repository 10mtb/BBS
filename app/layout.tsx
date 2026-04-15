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
    default: 'BBS - Artisan Multi-Services Paris & Île-de-France | Dépannage 24h/7j',
    template: '%s | BBS - Artisan Multi-Services',
  },
  description:
    'BBS, artisan multi-services à Paris 17. Dépannage urgent 24h/7j : serrurerie, plomberie, électricité, fermetures. Rideaux métalliques, stores, volets. Intervention dans toute l\'Île-de-France.',
  keywords: [
    'serrurier Paris',
    'serrurier Paris 17',
    'serrurier urgence Paris',
    'serrurier 24h Paris',
    'dépannage serrurerie Paris',
    'plombier Paris',
    'plombier Paris 17',
    'dépannage plomberie Paris',
    'électricien Paris',
    'électricien Paris 17',
    'dépannage électrique Paris',
    'rideaux métalliques Paris',
    'stores bannes Paris',
    'volets roulants Paris',
    'fenêtres PVC Paris',
    'portails Paris',
    'portes blindées Paris',
    'artisan multi-services Paris',
    'dépannage urgent Île-de-France',
    'bbs serrurier',
    'bbs plombier',
    'bbs electricien',
    'bbs fermetures',
    'artisan 24h Paris',
  ],
  authors: [{ name: 'BBS - Artisan Multi-Services' }],
  creator: 'BBS',
  publisher: 'BBS SASU',
  metadataBase: new URL('https://bbs-urgence.fr'),
  alternates: {
    canonical: 'https://bbs-urgence.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bbs-urgence.fr',
    siteName: 'BBS - Artisan Multi-Services',
    title: 'BBS - Artisan Multi-Services Paris & Île-de-France | Dépannage 24h/7j',
    description:
      'Artisan multi-services à Paris 17. Dépannage urgent 24h/7j : serrurerie, plomberie, électricité, fermetures. Intervention rapide dans toute l\'Île-de-France.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BBS - Artisan Multi-Services Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBS - Artisan Multi-Services Paris | Dépannage 24h/7j',
    description:
      'Serrurerie, plomberie, électricité, fermetures. Intervention rapide 24h/7j dans toute l\'Île-de-France.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
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
