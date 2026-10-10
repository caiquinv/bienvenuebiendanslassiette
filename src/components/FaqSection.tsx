import React, { useState } from 'react';
import { ChevronDown, HelpCircle, X, Mail } from 'lucide-react';

interface FaqSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: "Quand vais-je recevoir mon accès au guide ?",
      a: "Votre accès complet sera mis à votre disposition dans un délai maximum de 48 heures après la confirmation de votre paiement. Notre équipe prépare actuellement vos liens personnels et vérifie vos supports numériques avec attention pour vous garantir une expérience parfaite. Vous recevrez un e-mail officiel avec vos liens de téléchargement dès que tout sera prêt.",
    },
    {
      q: "Quels sont les documents inclus dans mon achat ?",
      a: "Votre achat comprend le guide numérique principal « Bien dans l'Assiette » avec 250 recettes simples réparties sur toute la journée (50 petits-déjeuners, 50 déjeuners, 50 dîners, 50 desserts, 50 snacks & boissons). Il inclut également 4 compléments pratiques : le guide de 28 jours de menus avec listes de courses par rayon, le guide du batch cooking express, le guide Placard sain & 60 substitutions, et le guide des 30 sauces, vinaigrettes & dips.",
    },
    {
      q: "Sur quels appareils puis-je consulter le guide ?",
      a: "Tous les guides sont fournis au format PDF haute résolution standard. Vous pouvez les lire confortablement sur smartphone (iOS et Android), tablette (iPad ou Android), ainsi que sur ordinateur (Mac, Windows, Linux). Aucun logiciel payant n'est requis.",
    },
    {
      q: "Puis-je imprimer le guide ?",
      a: "Absolument. La mise en page a été étudiée au format A4 afin de permettre une impression nette et claire, que vous souhaitiez imprimer l'intégralité du recueil ou simplement vos fiches recettes et listes de courses préférées.",
    },
    {
      q: "Que faire si je n'ai rien reçu après le délai de 48 heures ?",
      a: "Vérifiez en premier lieu l'intégralité de votre boîte de messagerie, y compris les onglets « Spams », « Courriers indésirables » ou « Promotions ». Si passé ce délai de 48 heures vous n'avez toujours pas reçu notre message, contactez directement notre support client officiel à l'adresse support@biendanslassiette.com en indiquant votre nom et votre référence d'achat Hotmart.",
    },
    {
      q: "Comment fonctionne la garantie de 15 jours ?",
      a: "Conformément à nos engagements, vous disposez d'une garantie de satisfaction de 15 jours. Si le contenu ne correspond pas à vos attentes, un simple e-mail à notre support client suffit pour demander un remboursement intégral, sans justification compliquée.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#D5DDD1] animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#162818] text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-[#84BF3B]" />
            <h3 className="font-serif text-lg font-bold">
              Questions Fréquentes — Accès & Utilisation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Accordion List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpenItem = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#E2E8DF] rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpenItem ? null : idx)}
                  className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 bg-[#FAF8F5] hover:bg-[#F3EFE7] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-sm font-bold text-[#1B321F]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#2E4E33] shrink-0 transition-transform duration-200 ${
                      isOpenItem ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpenItem && (
                  <div className="px-4 py-3 bg-white text-xs sm:text-[13px] text-[#38483B] leading-relaxed border-t border-[#EAEFE8]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8F5] px-6 py-3 border-t border-[#E2E8DF] flex items-center justify-between shrink-0">
          <a
            href="mailto:support@biendanslassiette.com"
            className="text-xs font-semibold text-[#2E4E33] hover:underline flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            support@biendanslassiette.com
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#162818] text-white hover:bg-[#253d27] rounded text-xs font-medium transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
