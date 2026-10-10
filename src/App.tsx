import React, { useState } from 'react';
import { ViewMode } from './types';
import { DocumentHeader } from './components/DocumentHeader';
import { DocumentToolbar } from './components/DocumentToolbar';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { OrderCheckModal } from './components/OrderCheckModal';
import { FaqSection } from './components/FaqSection';
import { downloadWelcomePDF } from './utils/pdfDownloader';
import { Download, Printer, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [zoom, setZoom] = useState<number>(1);
  const [activeSection, setActiveSection] = useState<string>('doc');
  const [checkModalOpen, setCheckModalOpen] = useState<boolean>(false);
  const [faqModalOpen, setFaqModalOpen] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#EDEFEA] flex flex-col font-sans text-[#1A241C]">
      {/* 1. Header (Sticky Top Bar) */}
      <DocumentHeader
        onOpenCheckModal={() => setCheckModalOpen(true)}
        onOpenFaqModal={() => setFaqModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* 2. Document Controls Toolbar */}
      <DocumentToolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        zoom={zoom}
        setZoom={setZoom}
        onOpenCheckModal={() => setCheckModalOpen(true)}
      />

      {/* 3. Main Document Reading Canvas */}
      <main className="flex-1 overflow-x-auto py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center">
        {/* Dedicated PDF Delivery & Download Card */}
        <div className="no-print max-w-4xl w-full mb-8 bg-white border border-[#D5DDD1] rounded-xl p-5 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#84BF3B] shrink-0"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2E4E33]">
                  Fichier PDF Officiel Prêt pour Hotmart
                </span>
                <span className="text-stone-300" aria-hidden="true">·</span>
                <span className="text-[11px] text-[#556658]">Format A4 vertical (3 pages)</span>
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#1B321F]">
                BIENVENUE-BIEN-DANS-LASSIETTE.pdf
              </h2>
              <p className="text-xs text-[#4A5D4E]">
                Document officiel complet incluant l'avertissement prioritaire des 48h, les 3 étapes d'accès et le support client.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href="/BIENVENUE-BIEN-DANS-LASSIETTE.pdf"
                download="BIENVENUE-BIEN-DANS-LASSIETTE.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#84BF3B] hover:bg-[#93ce45] text-[#162818] font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le PDF (Direct)</span>
              </a>

              <a
                href="/BIENVENUE-BIEN-DANS-LASSIETTE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAF8F5] hover:bg-[#F2EFE8] text-[#1B321F] border border-[#CCD8C8] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <span>Ouvrir dans un onglet</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAF8F5] hover:bg-[#F2EFE8] text-[#1B321F] border border-[#CCD8C8] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#2E4E33]" />
                <span>Imprimer A4</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scaled Document Pages Container */}
        <div
          className="print-page-container transition-transform duration-150 origin-top flex flex-col items-center gap-10"
          style={{ transform: `scale(${zoom})` }}
        >
          {/* Page 1 */}
          {(viewMode === 'all' || viewMode === 'page-1') && (
            <div className="relative">
              <PageOne />
            </div>
          )}

          {/* Page 2 */}
          {(viewMode === 'all' || viewMode === 'page-2') && (
            <div className="relative">
              <PageTwo />
            </div>
          )}

          {/* Page 3 */}
          {(viewMode === 'all' || viewMode === 'page-3') && (
            <div className="relative">
              <PageThree />
            </div>
          )}
        </div>
      </main>

      {/* 4. Bottom Quality Assurance & Verification Footer */}
      <footer className="no-print bg-[#162818] text-stone-300 border-t border-[#2a3e2d] py-6 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#84BF3B] shrink-0" />
            <div>
              <p className="font-semibold text-white">
                Document de Bienvenue Conforme — Bien dans l'Assiette
              </p>
              <p className="text-[11px] text-stone-400">
                Notification de délai en 48 heures incluse · Identité de marque respectée · Pages originales préservées à 100 %
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span>Support client : support@biendanslassiette.com</span>
            <span aria-hidden="true">·</span>
            <span>Hotmart Confirmed</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setFaqModalOpen(true)}
              className="text-stone-300 hover:text-white underline cursor-pointer"
            >
              Aide & FAQ
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <OrderCheckModal
        isOpen={checkModalOpen}
        onClose={() => setCheckModalOpen(false)}
      />
      <FaqSection
        isOpen={faqModalOpen}
        onClose={() => setFaqModalOpen(false)}
      />
    </div>
  );
}
