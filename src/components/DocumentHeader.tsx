import React from 'react';
import { Download, Printer, CheckCircle2 } from 'lucide-react';
import { downloadWelcomePDF } from '../utils/pdfDownloader';

interface DocumentHeaderProps {
  onOpenCheckModal: () => void;
  onOpenFaqModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  onOpenCheckModal,
  onOpenFaqModal,
  activeSection,
  setActiveSection,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-[#162818] border-b border-[#2a3e2d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#84BF3B] flex items-center justify-center text-[#162818] font-bold text-sm">
            BA
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
            Bien dans l'Assiette
          </span>
        </div>

        {/* Zone 2: Concise navigation links (single line, no capsules) */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-300">
          <button
            onClick={() => setActiveSection('doc')}
            className={`transition-colors whitespace-nowrap py-1 cursor-pointer ${
              activeSection === 'doc'
                ? 'text-white border-b-2 border-[#84BF3B]'
                : 'hover:text-white'
            }`}
          >
            Document Officiel (PDF)
          </button>
          <button
            onClick={onOpenCheckModal}
            className="transition-colors hover:text-white whitespace-nowrap py-1 cursor-pointer"
          >
            Délai 48h & Suivi
          </button>
          <button
            onClick={onOpenFaqModal}
            className="transition-colors hover:text-white whitespace-nowrap py-1 cursor-pointer"
          >
            Questions Fréquentes
          </button>
          <a
            href="mailto:support@biendanslassiette.com"
            className="transition-colors hover:text-white whitespace-nowrap py-1"
          >
            Support Client
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={handlePrint}
            title="Imprimer ou enregistrer au format A4"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-200 bg-[#223824] hover:bg-[#2c472f] rounded border border-[#344e37] transition-colors whitespace-nowrap cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-stone-300" />
            <span>Imprimer</span>
          </button>
          <button
            onClick={downloadWelcomePDF}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#162818] bg-[#84BF3B] hover:bg-[#95cf47] rounded transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Télécharger le PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
