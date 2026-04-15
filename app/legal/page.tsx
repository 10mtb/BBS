import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales de BBS, artisan multi-services à Paris 17. Serrurerie, plomberie, électricité.',
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Mentions légales</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-slate-300">
            Informations légales concernant BBS SASU.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Informations sur l&apos;entreprise</h2>
            <p>
              <strong>Raison sociale :</strong> BBS
              <br />
              <strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)
              <br />
              <strong>SIREN :</strong> 995 147 592
              <br />
              <strong>SIRET :</strong> 995 147 592 00019
              <br />
              <strong>Capital social :</strong> 1 000,00 €
              <br />
              <strong>Adresse :</strong> 88 Rue de Levis, 75017 Paris
              <br />
              <strong>Téléphone :</strong> 06 11 70 89 07
              <br />
              <strong>Email :</strong> bbs75.contact@gmail.com
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              Le directeur de la publication est M. Ben Mefteh Bechir, Président de BBS SASU.
            </p>

            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, USA
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo,
              icônes, etc.) est la propriété exclusive de BBS SASU ou fait
              l&apos;objet d&apos;une licence. Toute reproduction, représentation,
              modification, publication, adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite
              sans l&apos;autorisation écrite préalable de BBS SASU.
            </p>

            <h2>Crédits photos</h2>
            <p>
              Les photos utilisées sur ce site sont utilisées sous licence de Unsplash.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter à l&apos;adresse suivante :{' '}
              <a href="mailto:bbs75.contact@gmail.com">
                bbs75.contact@gmail.com
              </a>
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
