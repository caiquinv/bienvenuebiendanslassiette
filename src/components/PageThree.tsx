import React from 'react';
import { HelpCircle, Mail, ChefHat, Check, Heart, Shield } from 'lucide-react';

export const PageThree: React.FC = () => {
  return (
    <article
      aria-label="Page 3 : Conseils de démarrage et support officiel"
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
              Conseils & Assistance Client
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#2E4E33] font-semibold">
            Page 03 / 03
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E4E33] uppercase tracking-wider mb-1.5">
            <ChefHat className="w-3.5 h-3.5 text-[#84BF3B]" />
            <span>Accompagnement & sérénité</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1B321F] mb-1.5 leading-tight">
            Bien démarrer & Support officiel
          </h2>
          <p className="text-xs sm:text-sm text-[#38483B] leading-relaxed">
            Notre équipe reste à vos côtés pour que votre transition vers une cuisine saine soit une véritable source de plaisir.
          </p>
          <div className="w-16 h-0.5 bg-[#84BF3B] mt-3"></div>
        </div>

        {/* 3 Starter Tips */}
        <div className="mb-6">
          <h3 className="font-serif text-base font-bold text-[#1B321F] mb-2.5">
            Quelques conseils pour vos premiers pas dès réception :
          </h3>

          <div className="grid grid-cols-1 gap-2.5 text-xs">
            <div className="bg-white border border-[#E2E8DF] rounded-md p-3 shadow-2xs flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#E8EFE6] text-[#2E4E33] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong className="text-[#1B321F] block mb-0.5 font-semibold">
                  Démarrez sans pression :
                </strong>
                <span className="text-[#38483B] leading-relaxed text-[11px]">
                  Ne cherchez pas à tout changer d'un coup. Choisissez simplement 1 ou 2 recettes faciles pour vos
                  premiers dîners afin de vous approprier les combinaisons de saveurs en douceur.
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8DF] rounded-md p-3 shadow-2xs flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#E8EFE6] text-[#2E4E33] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong className="text-[#1B321F] block mb-0.5 font-semibold">
                  Laissez-vous guider par les listes de courses :
                </strong>
                <span className="text-[#38483B] leading-relaxed text-[11px]">
                  Les 28 jours de menus prévoient des listes triées par rayon de supermarché. C'est l'outil idéal pour
                  gagner un temps précieux et éliminer la charge mentale des courses.
                </span>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8DF] rounded-md p-3 shadow-2xs flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#E8EFE6] text-[#2E4E33] font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong className="text-[#1B321F] block mb-0.5 font-semibold">
                  Misez sur les sauces et condiments maison :
                </strong>
                <span className="text-[#38483B] leading-relaxed text-[11px]">
                  Le guide des 30 sauces transforme n'importe quelle assiette de légumes bruts ou de céréales en un
                  plat digne d'un bistrot en moins de 5 minutes chrono.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Official Section */}
        <div className="bg-white border border-[#E2E8DF] rounded-lg p-4 shadow-2xs mb-5">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E8EFE6] text-[#2E4E33] flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-4 h-4 text-[#2E4E33]" />
            </div>
            <div className="space-y-1.5 w-full">
              <h4 className="font-serif text-sm font-bold text-[#1B321F]">
                Que faire si le délai de 48 heures est dépassé ?
              </h4>
              <p className="text-[11px] text-[#38483B] leading-relaxed">
                Pour rappel, vos accès personnels vous sont préparés avec soin et vous parviendront dans un délai
                maximum de 48 heures après la confirmation de votre paiement. Si passé ce délai vous n'avez reçu aucun
                e-mail (après avoir vérifié vos dossiers Spams et Courriers indésirables), contactez directement notre
                support client officiel :
              </p>

              <div className="bg-[#FAF8F5] border border-[#D5DDD1] rounded-md p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2E4E33] shrink-0" />
                  <span className="text-xs font-semibold text-[#1B321F]">
                    support@biendanslassiette.com
                  </span>
                </div>
                <span className="text-[10px] text-[#556658]">
                  Indiquez votre nom et numéro de commande Hotmart
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Wellness Disclaimer (Extracted verbatim from official website) */}
        <div className="bg-[#F6F4EF] border border-[#E2DDCF] rounded-md p-3 text-[10px] text-[#556658] leading-relaxed mb-4">
          <div className="flex items-center gap-1.5 font-bold text-[#3B4C3E] uppercase text-[9px] tracking-wider mb-1">
            <Shield className="w-3 h-3 text-[#2E4E33]" />
            <span>Avertissement de responsabilité & bien-être</span>
          </div>
          <p className="italic">
            Ce recueil de recettes est un ouvrage pratique d'accompagnement culinaire et d'art de vivre. Il ne prétend
            en aucun cas diagnostiquer, traiter, guérir ou prévenir une quelconque pathologie médicale. Les conseils
            partagés s'inscrivent dans une démarche de cuisine maison équilibrée. Pour tout problème de santé ou régime
            thérapeutique particulier, veuillez solliciter l'avis de votre médecin traitant ou d'un diététicien qualifié.
          </p>
        </div>

        {/* Final Warm Note */}
        <div className="text-center pt-1">
          <p className="font-serif text-base sm:text-lg font-bold text-[#1B321F] mb-0.5">
            Nous vous souhaitons une merveilleuse aventure culinaire !
          </p>
          <p className="text-xs text-[#4A5D4E]">
            L'équipe de <strong>Bien dans l'Assiette</strong> vous remercie pour votre confiance et votre fidélité.
          </p>
        </div>
      </div>

      {/* Page 3 Footer */}
      <footer className="pt-4 border-t border-[#2E4E33]/15 flex items-center justify-between text-[11px] text-[#556658]">
        <span>© 2026 Bien dans l'Assiette · Tous droits réservés</span>
        <span className="font-mono text-[#2E4E33] font-semibold">Page 3 sur 3</span>
      </footer>
    </article>
  );
};
