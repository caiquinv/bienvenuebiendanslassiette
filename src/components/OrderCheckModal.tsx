import React, { useState } from 'react';
import { X, Clock, CheckCircle2, AlertCircle, Copy, Check, Mail, ShieldCheck } from 'lucide-react';

interface OrderCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderCheckModal: React.FC<OrderCheckModalProps> = ({ isOpen, onClose }) => {
  const [orderRef, setOrderRef] = useState('');
  const [copied, setCopied] = useState(false);
  const [orderDate, setOrderDate] = useState(() => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  });

  if (!isOpen) return null;

  // Calculate maximum 48h deadline from chosen date
  const selectedDate = new Date(orderDate);
  const deadlineDate = new Date(selectedDate.getTime() + 48 * 60 * 60 * 1000);

  const formattedDeadline = deadlineDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handleCopySupportTemplate = () => {
    const template = `Bonjour,\n\nJe vous contacte concernant ma commande du guide "Bien dans l'Assiette" effectuée sur Hotmart.\nNuméro de transaction : ${orderRef || '[Indiquez votre référence ici]'}\n\nMerci de bien vouloir vérifier l'envoi de mes accès personnels.\n\nCordialement,`;
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-[#D5DDD1] animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#162818] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-[#84BF3B]" />
            <h3 className="font-serif text-lg font-bold">
              Suivi du Délai d'Accès (48h max)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 text-sm text-[#1A241C]">
          {/* Golden highlight */}
          <div className="bg-[#FFFDF7] border border-[#E6CC92] rounded-lg p-3.5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#9E650D] shrink-0 mt-0.5" />
            <div className="text-xs text-[#3E493F] leading-relaxed">
              <strong className="text-[#1B321F] block mb-0.5">
                Rappel du protocole officiel :
              </strong>
              Votre accès au produit et à l'ensemble de ses 4 compléments sera mis à votre disposition dans un
              délai maximum de <strong>48 heures après la confirmation du paiement</strong>.
            </div>
          </div>

          {/* Calculator */}
          <div className="space-y-3">
            <label className="block text-xs font-semibold text-[#1B321F] uppercase tracking-wider">
              Date & heure de confirmation de votre commande :
            </label>
            <input
              type="datetime-local"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-[#CCD8C8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4E33] bg-[#FAF8F5]"
            />

            <div className="bg-[#FAF8F5] border border-[#E2E8DF] rounded-md p-3 text-xs">
              <span className="text-[#556658] block mb-1">Votre accès arrivera au plus tard le :</span>
              <p className="font-serif text-base font-bold text-[#1B321F] capitalize">
                {formattedDeadline}
              </p>
            </div>
          </div>

          {/* Order reference field */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-[#1B321F] uppercase tracking-wider">
              Votre référence de commande Hotmart (facultatif) :
            </label>
            <input
              type="text"
              placeholder="Ex : HP1234567890 ou reçu Hotmart"
              value={orderRef}
              onChange={(e) => setOrderRef(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-[#CCD8C8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4E33] bg-[#FAF8F5]"
            />
          </div>

          {/* Copy message helper */}
          <div className="pt-2 border-t border-stone-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#556658]">
                Besoin d'aide après 48h ? Écrivez au support :
              </span>
              <a
                href="mailto:support@biendanslassiette.com"
                className="text-xs font-bold text-[#2E4E33] hover:underline flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5" />
                support@biendanslassiette.com
              </a>
            </div>

            <button
              onClick={handleCopySupportTemplate}
              className="w-full py-2 px-3 bg-[#FAF8F5] hover:bg-[#F2EFE8] border border-[#CCD8C8] rounded-md text-xs font-medium text-[#1B321F] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#2E4E33]" />
                  <span>Modèle de message copié dans le presse-papier !</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#556658]" />
                  <span>Copier le modèle d'e-mail pour le support</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF8F5] px-6 py-3 border-t border-[#E2E8DF] flex justify-end">
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
