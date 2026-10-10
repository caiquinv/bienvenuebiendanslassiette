import React from 'react';
import { Sparkles, Clock, Check, Utensils, HeartHandshake, BookOpen } from 'lucide-react';

export const PageOne: React.FC = () => {
  return (
    <article
      aria-label="Page 1 : Bienvenue et information essentielle"
      className="a4-page bg-[#FAF8F5] text-[#1A241C] p-8 sm:p-12 shadow-md mx-auto flex flex-col justify-between border border-[#E2E8DF] print:border-none print:shadow-none"
    >
      {/* Top Header / Brand Line */}
      <div>
        <div className="flex items-center justify-between border-b border-[#2E4E33]/20 pb-3 mb-6 text-xs text-[#556658]">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm tracking-wide text-[#1B321F]">
              BIEN DANS L'ASSIETTE
            </span>
            <span aria-hidden="true" className="text-stone-300">|</span>
            <span className="font-medium tracking-wider uppercase text-[10px] text-[#4A5D4E]">
              Document Officiel de Bienvenue
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#2E4E33] font-semibold">
            Page 01 / 03
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E4E33] uppercase tracking-wider mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#84BF3B]" />
            <span>Confirmation de votre commande</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1B321F] mb-2 leading-tight">
            Bienvenue dans Bien dans l'Assiette
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#2E4E33] font-medium">
            « Qu'est-ce qu'on mange ce soir ? » Vous aurez enfin la réponse.
          </p>
          <div className="w-16 h-0.5 bg-[#84BF3B] mt-3"></div>
        </div>

        {/* Warm Personal Letter */}
        <div className="mb-6 text-sm text-[#2A372C] leading-relaxed">
          <p className="font-serif text-base font-bold text-[#1B321F] mb-1.5">
            Chère lectrice, cher lecteur,
          </p>
          <p className="text-xs sm:text-sm text-[#38483B] leading-relaxed">
            Nous tenons à vous remercier chaleureusement pour votre achat. En choisissant{' '}
            <strong className="text-[#1B321F] font-semibold">Bien dans l'Assiette</strong>, vous faites le choix
            d'une cuisine bienveillante, gourmande et profondément réconfortante, pensée pour simplifier votre quotidien
            sans jamais sacrifier le plaisir de la table ni le bien-être de votre foyer.
          </p>
        </div>

        {/* ========================================================
            MANDATORY 48-HOUR NOTIFICATION BOX (CRITICAL & PROMINENT)
            ======================================================== */}
        <div className="mb-7 bg-[#FFFDF7] border-2 border-[#E6CC92] rounded-lg p-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A74A]"></div>
          
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#FEF3D6] text-[#A26D13] flex items-center justify-center shrink-0 mt-0.5 border border-[#E9D4A1]">
              <Clock className="w-5 h-5 text-[#9E650D]" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#8F6418] bg-[#FDF1D5] px-2 py-0.5 rounded">
                  Information essentielle · Délai de livraison
                </span>
              </div>

              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1B321F] leading-snug">
                Votre accès au produit sera mis à votre disposition dans un délai maximum de 48 heures après la confirmation du paiement.
              </h2>

              <p className="text-xs sm:text-[13px] text-[#3E493F] leading-relaxed">
                Nous préparons actuellement les derniers détails de votre accès avec beaucoup de soin et d'attention
                afin de vous offrir une excellente expérience. Dès que vos documents numériques seront prêts, vous
                recevrez un e-mail officiel contenant vos liens personnels de téléchargement.
              </p>

              <div className="flex items-center gap-1.5 text-xs font-medium text-[#2E4E33] pt-0.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#84BF3B]" />
                <span>Nous vous remercions chaleureusement pour votre confiance et votre compréhension !</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Ce que comprend votre commande */}
        <div>
          <h3 className="font-serif text-lg font-bold text-[#1B321F] mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#84BF3B]" />
            <span>Ce que comprend votre commande</span>
          </h3>

          <div className="space-y-3 text-xs">
            {/* Guide Principal */}
            <div className="bg-white border border-[#E2E8DF] rounded-md p-3.5 shadow-2xs">
              <div className="flex items-baseline justify-between mb-1.5">
                <h4 className="font-bold text-sm text-[#1B321F]">
                  1. Le Guide Numérique « Bien dans l'Assiette » (250 recettes PDF)
                </h4>
                <span className="text-[11px] font-medium text-[#2E4E33] uppercase tracking-wider">
                  Cœur du programme
                </span>
              </div>
              <p className="text-[#4D5C4F] mb-2 leading-relaxed">
                Une cuisine simple et inspirée de l'alimentation anti-inflammatoire, avec des ingrédients bruts,
                de saison et faciles à trouver en supermarché. Des fiches prêtes en moins de 25 minutes avec étapes claires :
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 text-[11px] font-semibold text-[#1B321F] bg-[#FAF8F5] p-2 rounded border border-[#EBEFEA]">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#84BF3B]" /> 50 Petits-déjeuners</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#84BF3B]" /> 50 Déjeuners</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#84BF3B]" /> 50 Dîners</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#84BF3B]" /> 50 Desserts</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#84BF3B]" /> 50 Snacks & Boissons</span>
              </div>
            </div>

            {/* Les 4 compléments inclus */}
            <div className="bg-white border border-[#E2E8DF] rounded-md p-3.5 shadow-2xs">
              <h4 className="font-bold text-sm text-[#1B321F] mb-2">
                2. Les 4 compléments pratiques inclus avec votre guide :
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#38483B]">
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#EBEFEA]">
                  <span className="font-bold text-[#1B321F] block mb-0.5">Bonus 1 : 28 jours de menus clé-en-main</span>
                  <span>4 semaines complètes du lundi au dimanche avec listes de courses organisées par rayon.</span>
                </div>
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#EBEFEA]">
                  <span className="font-bold text-[#1B321F] block mb-0.5">Bonus 2 : Guide du batch cooking express</span>
                  <span>Préparez vos bases le week-end et assemblez vos plats sains en seulement 10 minutes.</span>
                </div>
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#EBEFEA]">
                  <span className="font-bold text-[#1B321F] block mb-0.5">Bonus 3 : Placard sain & 60 substitutions</span>
                  <span>Adaptez facilement vos recettes du quotidien avec les indispensables et équivalences simples.</span>
                </div>
                <div className="p-2 rounded bg-[#FAF8F5] border border-[#EBEFEA]">
                  <span className="font-bold text-[#1B321F] block mb-0.5">Bonus 4 : 30 sauces, vinaigrettes & dips</span>
                  <span>Renouvelez et sublimez vos plats en quelques minutes avec des ingrédients du placard.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 1 Footer */}
      <footer className="pt-4 border-t border-[#2E4E33]/15 flex items-center justify-between text-[11px] text-[#556658]">
        <span>Document réservé aux acquéreurs · Bien dans l'Assiette © 2026</span>
        <span className="font-mono text-[#2E4E33] font-semibold">Page 1 sur 3</span>
      </footer>
    </article>
  );
};
