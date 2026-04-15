import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité et protection des données personnelles de BBS SASU.',
};

export default function PrivacyPage() {
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
              <Link href="/legal" className="hover:text-white">
                Mentions légales
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Politique de confidentialité</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-xl text-slate-300">
              Protection de vos données personnelles (RGPD).
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              BBS (&laquo; nous &raquo; ou &laquo; notre entreprise &raquo;)
              s&apos;engage à protéger la vie privée des utilisateurs de son site web.
              Cette politique de confidentialité décrit les types d&apos;informations
              que nous collectons, comment nous les utilisons et les mesures que
              nous prenons pour les protéger.
            </p>

            <h2>Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :
              <br />
              <strong>BBS SASU</strong>
              <br />
              88 Rue de Levis
              <br />
              75017 Paris, France
              <br />
              Email : bbs75.contact@gmail.com
            </p>

            <h2>Données collectées</h2>
            <p>
              Nous collectons les données suivantes via notre formulaire de contact :
            </p>
            <ul>
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Type de service demandé</li>
              <li>Message</li>
            </ul>

            <h2>Finalité du traitement</h2>
            <p>
              Les données collectées sont utilisées exclusivement pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de dépannage</li>
              <li>Vous contacter concernant votre demande</li>
              <li>Améliorer nos services</li>
            </ul>

            <h2>Base légale du traitement</h2>
            <p>
              Le traitement de vos données est basé sur votre consentement (formulaire
              de contact). Vous pouvez retirer votre consentement à tout moment en
              nous contactant.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les données personnelles collectées sont conservées pendant une durée
              de 3 ans à compter du dernier contact, sauf obligation légale contraire.
            </p>

            <h2>Partage des données</h2>
            <p>
              Vos données personnelles ne sont pas vendues, louées ou partagées avec
              des tiers à des fins marketing. Elles peuvent être transmises à nos
              prestataires techniques (hébergement, email) dans le strict cadre de
              leurs prestations.
            </p>

            <h2>Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:bbs75.contact@gmail.com">
                bbs75.contact@gmail.com
              </a>
            </p>

            <h2>Cookies</h2>
            <p>
              Notre site n&apos;utilise pas de cookies de tracking ou de marketing.
              Nous utilisons uniquement les cookies essentiels au fonctionnement du
              site (session, préférences utilisateur).
            </p>

            <h2>Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles appropriées pour protéger vos données personnelles
              contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h2>Modifications</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité
              périodiquement. Toute modification sera publiée sur cette page.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité
              ou pour exercer vos droits, contactez-nous :
            </p>
            <p>
              Email :{' '}
              <a href="mailto:bbs75.contact@gmail.com">
                bbs75.contact@gmail.com
              </a>
              <br />
              Adresse : 88 Rue de Levis, 75017 Paris
            </p>

            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
