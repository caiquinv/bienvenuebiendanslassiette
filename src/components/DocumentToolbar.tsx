import React from 'react';
import { ViewMode } from '../types';
import { Download, Printer, ZoomIn, ZoomOut, RotateCcw, Clock, ShieldCheck, FileText } from 'lucide-react';
import { downloadWelcomePDF } from '../utils/pdfDownloader';

interface DocumentToolbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  onOpenCheckModal: () => void;
}

export const DocumentToolbar: React.FC<DocumentToolbarProps> = ({
  viewMode,
  setViewMode,
  zoom,
  setZoom,
  onOpenCheckModal,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <aside aria-label="Commandes du document" className="no-print bg-[#1d3221] text-stone-200 border-b border-[#2d4732] py-2.5 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Status indicator unboxed text with subtle separators */}
        <div className="flex items-center gap-2 text-stone-300 font-medium overflow-x-auto py-1">
          <div className="flex items-center gap-1.5 text-[#84BF3B]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap font-semibold">Commande Hotmart validée</span>
          </div>
          <span className="text-stone-500" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 text-amber-300">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap font-semibold">Accès sous 48h max</span>
          </div>
          <span className="text-stone-500" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5 text-stone-300">
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">Format A4 (3 pages)</span>
          </div>
        </div>

        {/* View Mode Segmented Controls */}
        <div className="flex items-center gap-1 bg-[#142316] p-1 rounded-md border border-[#2b422f]">
          <button
            onClick={() => setViewMode('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              viewMode === 'all'
                ? 'bg-[#2b4430] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Vue d'ensemble (3 pages)
          </button>
          <button
            onClick={() => setViewMode('page-1')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              viewMode === 'page-1'
                ? 'bg-[#2b4430] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Page 1 (Bienvenue & 48h)
          </button>
          <button
            onClick={() => setViewMode('page-2')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              viewMode === 'page-2'
                ? 'bg-[#2b4430] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Page 2 (Étapes)
          </button>
          <button
            onClick={() => setViewMode('page-3')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
              viewMode === 'page-3'
                ? 'bg-[#2b4430] text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Page 3 (Support)
          </button>
        </div>

        {/* Zoom & Quick Actions */}
        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="hidden lg:flex items-center gap-1 bg-[#142316] px-2 py-1 rounded-md border border-[#2b422f] text-stone-300">
            <button
              onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))}
              title="Réduire"
              className="p-0.5 hover:text-white cursor-pointer"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center font-mono tabular-nums text-[11px]">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(1.4, z + 0.1))}
              title="Agrandir"
              className="p-0.5 hover:text-white cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(1)}
              title="Réinitialiser"
              className="p-0.5 ml-1 text-stone-400 hover:text-white cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={onOpenCheckModal}
            className="px-2.5 py-1 bg-[#263e2a] hover:bg-[#324f37] text-stone-200 rounded border border-[#3b593f] transition-colors whitespace-nowrap cursor-pointer"
          >
            Suivi 48h
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#263e2a] hover:bg-[#324f37] text-stone-200 rounded border border-[#3b593f] transition-colors whitespace-nowrap cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-stone-300" />
            <span>Imprimer A4</span>
          </button>

          <button
            onClick={downloadWelcomePDF}
            className="flex items-center gap-1 px-3 py-1 bg-[#84BF3B] hover:bg-[#95cf47] text-[#162818] font-semibold rounded transition-colors whitespace-nowrap cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Télécharger PDF</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
