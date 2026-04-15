export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'Locksmith', 'Plumber', 'Electrician'],
  name: 'BBS - Artisan Multi-Services',
  description:
    'Artisan multi-services à Paris et en Île-de-France. Dépannage urgent 24h/7j en serrurerie, plomberie, électricité et fermetures/menuiseries.',
  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  '@id': 'https://bbs-urgence.fr',
  url: 'https://bbs-urgence.fr',
  telephone: '+33611708907',
  email: 'bbs75.contact@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '88 Rue de Levis',
    addressLocality: 'Paris',
    postalCode: '75017',
    addressCountry: 'FR',
    addressRegion: 'Île-de-France',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8877,
    longitude: 2.3068,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'Dépannage urgent 24h/7j',
    },
  ],
  priceRange: '€€',
  areaServed: [
    {
      '@type': 'City',
      name: 'Paris',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Paris 17e arrondissement',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Île-de-France',
    },
    {
      '@type': 'State',
      name: 'Hauts-de-Seine',
      containedIn: 'Île-de-France',
    },
    {
      '@type': 'State',
      name: 'Seine-Saint-Denis',
      containedIn: 'Île-de-France',
    },
    {
      '@type': 'State',
      name: 'Val-de-Marne',
      containedIn: 'Île-de-France',
    },
  ],
  serviceType: [
    'Serrurerie',
    'Plomberie',
    'Électricité',
    'Fermetures et Menuiseries',
    'Dépannage urgence',
    'Ouverture de porte',
    'Changement de serrure',
    'Réparation fuite',
    'Panne électrique',
    'Rideaux métalliques',
    'Stores bannes',
    'Portes blindées',
    'Volets roulants',
    'Fenêtres PVC',
    'Vitrines de magasin',
    'Vérandas',
    'Portails',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de dépannage',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Serrurerie',
          description: 'Ouverture de porte, changement de serrure, blindage',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plomberie',
          description: 'Réparation fuite, débouchage, WC',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Électricité',
          description: 'Panne électrique, installation, mise aux normes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fermetures et Menuiseries',
          description: 'Rideaux métalliques, stores, volets, fenêtres',
        },
      },
    ],
  },
  sameAs: [
    'https://www.instagram.com/bbs.urgence',
    'https://www.facebook.com/bbs.urgence',
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
