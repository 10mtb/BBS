export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BBS',
  description:
    'Dépannage multi-services à Paris 17 : serrurerie, plomberie, électricité et fermetures/menuiseries. Intervention rapide 24h/7j.',
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
  sameAs: [
    'https://www.instagram.com/bbs.urgence',
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
