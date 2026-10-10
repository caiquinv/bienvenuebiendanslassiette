import React from 'react';
import { CheckCircle2, PackageCheck, Send, AlertTriangle, ShieldCheck, Mail, Laptop } from 'lucide-react';

export const PageTwo: React.FC = () => {
  return (
    <article
      aria-label="Page 2 : Les prochaines étapes de votre commande"
      className="a4-page bg-[#FAF8F5] text-[#1A241C] p-8 sm:p-12 shadow-md mx-auto flex flex-col justify-between border border-[#E2E8DF] print:border-none print:shadow-none"
    >
      <div>
        {/* Top Header / Brand Line */}
        <div className="flex items-center justify-between border-b border-[#2E4E33]/20 pb-3 mb-6 text-xs text-[#556658]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm tracking-wide text-[#1B321F]">
              BIEN DANS L'ASSIETTE
            </span>
            <span aria-hidden="true" className="text-stone-300">|</span>
            <span className="font-medium tracking-wider uppercase text-[10px] text-[#4A5D4E]">
              Les Prochaines Étapes
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#2E4E33] font-semibold">
            Page 02 / 03
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E4E33] uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#84BF3B]" />
            <span>Organisation et déroulement</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1B321F] mb-1.5 leading-tight">
            Que se passe-t-il maintenant ?
          </h2>
          <p className="text-xs sm:text-sm text-[#38483B] leading-relaxed">
            Voici les 3 étapes claires qui encadrent la mise à disposition de votre commande pour une expérience en toute sérénité.
          </p>
          <div className="w-16 h-0.5 bg-[#84BF3B] mt-3"></div>
        </div>

        {/* 3 Steps Vertical Flow */}
        <div className="space-y-4 mb-7">
          {/* Étape 1 */}
          <div className="bg-white border border-[#E2E8DF] rounded-lg p-4 shadow-2xs relative">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#1B321F] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                01
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1B321F]">
                    Étape 1 — Confirmation de votre achat
                  </h3>
                  <span className="text-[10px] font-semibold text-[#2E4E33] bg-[#E8EFE6] px-1.5 py-0.5 rounded">
                    Validé
                  </span>
                </div>
                <p className="text-xs text-[#38483B] leading-relaxed">
                  Votre règlement a été validé avec succès par la plateforme sécurisée Hotmart. Vous avez reçu
                  (ou allez recevoir dans les prochains instants) un e-mail officiel de confirmation avec votre reçu
                  d'achat et votre numéro de transaction unique.
                </p>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="bg-white border border-[#E2E8DF] rounded-lg p-4 shadow-2xs relative">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#2E4E33] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                02
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1B321F]">
                    Étape 2 — Préparation soignée de vos fichiers
                  </h3>
                  <span className="text-[10px] font-semibold text-[#8F6418] bg-[#FEF3D6] px-1.5 py-0.5 rounded">
                    En cours
                  </span>
                </div>
                <p className="text-xs text-[#38483B] leading-relaxed">
                  Notre équipe finalise la préparation de votre guide numérique de 250 recettes ainsi que de vos
                  4 guides bonus en haute définition. Nous veillons à ce que chaque support soit parfaitement formaté
                  pour une lecture fluide sur votre téléphone, votre tablette ou votre ordinateur.
                </p>
              </div>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="bg-[#FFFDF7] border-2 border-[#E6CC92] rounded-lg p-4 shadow-2xs relative">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-[#84BF3B] text-[#1B321F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                03
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-base font-bold text-[#1B321F]">
                    Étape 3 — Disponibilisation de vos accès sous 48 heures
                  </h3>
                  <span className="text-[10px] font-bold text-[#8F6418] bg-[#FDF1D5] px-1.5 py-0.5 rounded">
                    Délai officiel
                  </span>
                </div>
                <p className="text-xs text-[#38483B] leading-relaxed">
                  Votre accès complet vous sera mis à disposition dans un délai maximum de{' '}
                  <strong className="text-[#1B321F] font-semibold">48 heures après la confirmation du paiement</strong>.
                  Vous recevrez un e-mail officiel dédié contenant l'ensemble de vos liens personnels pour télécharger
                  vos fichiers PDF haute résolution.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommandations Importantes pour l'Acheteur */}
        <div className="bg-[#FAF4EB] border border-[#E7D6B9] rounded-lg p-4 text-xs text-[#364237]">
          <h4 className="font-serif text-sm font-bold text-[#1B321F] mb-2 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-[#A26D13]" />
            <span>Recommandations essentielles pendant ce délai</span>
          </h4>
          <ul className="space-y-2 text-[11px] leading-relaxed text-[#38483B]">
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#1B321F] shrink-0">1.</span>
              <span>
                <strong>Conservez précieusement votre e-mail Hotmart :</strong> Il contient votre reçu et votre
                numéro de commande, indispensables si vous avez la moindre question pour notre support.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#1B321F] shrink-0">2.</span>
              <span>
                <strong>Surveillez votre boîte de réception :</strong> Pensez à vérifier l'onglet « Promotions »,
                les « Courriers indésirables » ou vos « Spams » si l'e-mail n'apparaît pas dans votre boîte principale.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-[#1B321F] shrink-0">3.</span>
              <span>
                <strong>Format PDF universel & haute fidélité :</strong> Vos documents sont au format PDF standard.
                Vous pourrez les conserver sur tous vos appareils sans abonnement ni date d'expiration.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Page 2 Footer */}
      <footer className="pt-4 border-t border-[#2E4E33]/15 flex items-center justify-between text-[11px] text-[#556658]">
        <span>Support client officiel : support@biendanslassiette.com</span>
        <span className="font-mono text-[#2E4E33] font-semibold">Page 2 sur 3</span>
      </footer>
    </article>
  );
};
