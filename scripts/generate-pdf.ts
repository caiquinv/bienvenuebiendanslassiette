import { jsPDF } from 'jspdf';
import * as fs from 'fs';
import * as path from 'path';

// Helper to create the official Bienvenue PDF
export function generateWelcomePDF(): Buffer {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkGreen = [27, 50, 31];       // #1B321F
  const forestGreen = [46, 78, 51];     // #2E4E33
  const freshGreen = [132, 191, 59];    // #84BF3B
  const creamBg = [250, 248, 245];      // #FAF8F5
  const alertBg = [254, 249, 238];      // #FEF9EE
  const alertBorder = [230, 204, 146];  // #E6CC92
  const alertText = [143, 100, 24];     // #8F6418
  const textDark = [26, 36, 28];        // #1A241C
  const textMuted = [85, 102, 88];      // #556658
  const hairline = [226, 233, 225];     // #E2E9E1
  const cardBg = [255, 255, 255];       // #FFFFFF

  // Draw Header
  const drawHeader = (pageNumber: number) => {
    // Top accent bar
    doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
    doc.rect(0, 0, pageWidth, 5, 'F');

    // Header info
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(freshGreen[0], freshGreen[1], freshGreen[2]);
    doc.text("BIEN DANS L'ASSIETTE", margin, 14);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text("DOCUMENT OFFICIEL DE BIENVENUE · GUIDE NUMÉRIQUE", margin + 48, 14);

    doc.text(`Page ${pageNumber} sur 3`, pageWidth - margin, 14, { align: 'right' });

    // Hairline
    doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, 17, pageWidth - margin, 17);
  };

  // Draw Footer
  const drawFooter = (pageNumber: number) => {
    const footerY = pageHeight - 12;
    doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
    doc.setLineWidth(0.3);
    doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text("© 2026 Bien dans l'Assiette · Tous droits réservés · Support client : support@biendanslassiette.com", margin, footerY);
    doc.text(`Page ${pageNumber} / 3`, pageWidth - margin, footerY, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: BIENVENUE & NOTIFICATION 48H
  // ==========================================
  drawHeader(1);

  // Background subtle tint
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(margin, 22, contentWidth, pageHeight - 40, 'F');

  // Title Box
  let currentY = 32;
  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Bienvenue dans Bien dans l'Assiette", margin + 6, currentY);

  currentY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("« Qu'est-ce qu'on mange ce soir ? » Vous aurez enfin la réponse.", margin + 6, currentY);

  // Divider
  currentY += 5;
  doc.setDrawColor(freshGreen[0], freshGreen[1], freshGreen[2]);
  doc.setLineWidth(0.8);
  doc.line(margin + 6, currentY, margin + 45, currentY);

  // Letter of gratitude
  currentY += 8;
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text("Chère lectrice, cher lecteur,", margin + 6, currentY);

  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const introText = "Nous tenons à vous remercier chaleureusement pour votre achat. En choisissant Bien dans l'Assiette, vous faites le premier pas vers une cuisine saine, gourmande et profondément réconfortante, pensée pour simplifier votre quotidien sans jamais sacrifier le plaisir de la table.";
  const splitIntro = doc.splitTextToSize(introText, contentWidth - 12);
  doc.text(splitIntro, margin + 6, currentY);
  currentY += splitIntro.length * 4.2 + 4;

  // ========================================================
  // CRITICAL MANDATORY 48-HOUR NOTIFICATION BOX (VISUALLY PROMINENT)
  // ========================================================
  const alertBoxY = currentY;
  const alertBoxHeight = 44;

  // Outer border & fill
  doc.setFillColor(alertBg[0], alertBg[1], alertBg[2]);
  doc.setDrawColor(alertBorder[0], alertBorder[1], alertBorder[2]);
  doc.setLineWidth(0.8);
  doc.roundedRect(margin + 4, alertBoxY, contentWidth - 8, alertBoxHeight, 2, 2, 'FD');

  // Header of alert
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(alertText[0], alertText[1], alertText[2]);
  doc.text("INFORMATION ESSENTIELLE — DÉLAI DE DISPONIBILITÉ DE VOTRE ACCÈS", margin + 8, alertBoxY + 6.5);

  // Main strong headline
  doc.setFont('times', 'bold');
  doc.setFontSize(11.5);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  const alertHeadline = "Votre accès au produit sera mis à votre disposition dans un délai maximum de 48 heures après la confirmation du paiement.";
  const splitAlertHead = doc.splitTextToSize(alertHeadline, contentWidth - 16);
  doc.text(splitAlertHead, margin + 8, alertBoxY + 13.5);

  // Explanation with care & warmth
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const alertBody = "Nous préparons les derniers détails de votre accès avec beaucoup de soin et d'attention afin de vous offrir une excellente expérience. Dès que vos documents numériques seront prêts, vous recevrez un e-mail officiel contenant vos liens personnels de téléchargement. Nous vous remercions chaleureusement pour votre confiance et votre compréhension !";
  const splitAlertBody = doc.splitTextToSize(alertBody, contentWidth - 16);
  doc.text(splitAlertBody, margin + 8, alertBoxY + 23.5);

  currentY = alertBoxY + alertBoxHeight + 8;

  // Presentation of what was acquired
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Ce que comprend votre commande", margin + 6, currentY);

  currentY += 6;
  // Card 1: Guide principal
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("1. Le Guide Numérique « Bien dans l'Assiette » (250 recettes PDF)", margin + 10, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const guideDesc = "Une cuisine simple et inspirée de l'alimentation anti-inflammatoire, conçue pour toute la journée avec des ingrédients bruts, de saison et faciles à trouver en supermarché :";
  doc.text(doc.splitTextToSize(guideDesc, contentWidth - 20), margin + 10, currentY + 11.5);

  // Bullets
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("• 50 Petits-déjeuners", margin + 10, currentY + 21);
  doc.text("• 50 Déjeuners", margin + 65, currentY + 21);
  doc.text("• 50 Dîners", margin + 120, currentY + 21);
  doc.text("• 50 Desserts", margin + 10, currentY + 27);
  doc.text("• 50 Snacks & Boissons", margin + 65, currentY + 27);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Chaque recette comprend : Portions, Temps de préparation (< 25 min), Ingrédients du quotidien, Étapes numérotées.", margin + 10, currentY + 34);

  currentY += 44;

  // Card 2: Les 4 compléments
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 44, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("2. Les 4 Compléments Pratiques Inclus avec votre Guide", margin + 10, currentY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);

  doc.setFont('helvetica', 'bold');
  doc.text("Bonus 1 : 28 jours de menus clé-en-main", margin + 10, currentY + 13);
  doc.setFont('helvetica', 'normal');
  doc.text("— 4 semaines complètes organisées du lundi au dimanche avec listes de courses par rayon.", margin + 70, currentY + 13);

  doc.setFont('helvetica', 'bold');
  doc.text("Bonus 2 : Guide du batch cooking express", margin + 10, currentY + 20);
  doc.setFont('helvetica', 'normal');
  doc.text("— Préparez vos bases le week-end et assemblez vos repas sains en seulement 10 minutes.", margin + 70, currentY + 20);

  doc.setFont('helvetica', 'bold');
  doc.text("Bonus 3 : Placard sain & 60 substitutions", margin + 10, currentY + 27);
  doc.setFont('helvetica', 'normal');
  doc.text("— Adaptez facilement vos recettes préférées selon ce que vous avez sous la main.", margin + 70, currentY + 27);

  doc.setFont('helvetica', 'bold');
  doc.text("Bonus 4 : 30 sauces, vinaigrettes & dips", margin + 10, currentY + 34);
  doc.setFont('helvetica', 'normal');
  doc.text("— Renouvelez et sublimez tous vos plats en quelques minutes avec des ingrédients simples.", margin + 70, currentY + 34);

  drawFooter(1);

  // ==========================================
  // PAGE 2: QUE SE PASSE-T-IL MAINTENANT ?
  // ==========================================
  doc.addPage();
  drawHeader(2);

  // Background subtle tint
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(margin, 22, contentWidth, pageHeight - 40, 'F');

  currentY = 32;
  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Que se passe-t-il maintenant ?", margin + 6, currentY);

  currentY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("Les 3 étapes clés pour recevoir et profiter de votre commande.", margin + 6, currentY);

  currentY += 5;
  doc.setDrawColor(freshGreen[0], freshGreen[1], freshGreen[2]);
  doc.setLineWidth(0.8);
  doc.line(margin + 6, currentY, margin + 45, currentY);

  currentY += 8;

  // STEP 1 BOX
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.setLineWidth(0.4);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 34, 2, 2, 'FD');

  // Step badge
  doc.setFillColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.rect(margin + 10, currentY + 5, 18, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  doc.text("ÉTAPE 1", margin + 19, currentY + 9.2, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Confirmation de votre paiement", margin + 32, currentY + 9.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const s1Text = "Votre transaction a été validée avec succès par la plateforme sécurisée Hotmart. Vous avez reçu (ou allez recevoir dans les prochains instants) un e-mail officiel de confirmation contenant votre reçu d'achat et votre référence de transaction.";
  doc.text(doc.splitTextToSize(s1Text, contentWidth - 20), margin + 10, currentY + 17);

  currentY += 40;

  // STEP 2 BOX
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 38, 2, 2, 'FD');

  doc.setFillColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.rect(margin + 10, currentY + 5, 18, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(255, 255, 255);
  doc.text("ÉTAPE 2", margin + 19, currentY + 9.2, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Préparation soignée de votre accès personnel", margin + 32, currentY + 9.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const s2Text = "Notre équipe prépare avec soin et bienveillance vos fichiers numériques en haute résolution : le guide principal de 250 recettes ainsi que les 4 guides bonus. Chaque support est vérifié pour assurer une lisibilité parfaite sur tous vos écrans (smartphone, tablette et ordinateur) et permettre une impression aisée.";
  doc.text(doc.splitTextToSize(s2Text, contentWidth - 20), margin + 10, currentY + 17);

  currentY += 44;

  // STEP 3 BOX
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 40, 2, 2, 'FD');

  doc.setFillColor(freshGreen[0], freshGreen[1], freshGreen[2]);
  doc.rect(margin + 10, currentY + 5, 18, 6, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("ÉTAPE 3", margin + 19, currentY + 9.2, { align: 'center' });

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Disponibilisation de vos accès en jusqu'à 48 heures", margin + 32, currentY + 9.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const s3Text = "Votre accès complet vous sera mis à disposition dans un délai maximum de 48 heures après la confirmation de votre paiement. Vous recevrez un e-mail officiel contenant vos liens de consultation et de téléchargement. Nous prenons le temps d'assurer que tout soit irréprochable avant votre découverte.";
  doc.text(doc.splitTextToSize(s3Text, contentWidth - 20), margin + 10, currentY + 17);

  currentY += 46;

  // RECOMMANDATIONS PRATIQUES
  doc.setFillColor(alertBg[0], alertBg[1], alertBg[2]);
  doc.setDrawColor(alertBorder[0], alertBorder[1], alertBorder[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 48, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(alertText[0], alertText[1], alertText[2]);
  doc.text("CONSEILS IMPORTANTS PENDANT CE DÉLAI :", margin + 10, currentY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);

  doc.text("1. Conservez précieusement le reçu de paiement délivré par Hotmart ainsi que votre numéro d'achat.", margin + 10, currentY + 15);
  doc.text("2. Surveillez régulièrement votre boîte de réception e-mail (y compris l'onglet Promotions et les spams).", margin + 10, currentY + 22);
  doc.text("3. Ajoutez l'adresse support@biendanslassiette.com à votre carnet d'adresses pour garantir la bonne réception.", margin + 10, currentY + 29);
  doc.text("4. Vos supports sont fournis au format PDF standard : aucun logiciel payant requis, lecture 100 % libre.", margin + 10, currentY + 36);

  drawFooter(2);

  // ==========================================
  // PAGE 3: CONSEILS, SUPPORT & GARANTIE
  // ==========================================
  doc.addPage();
  drawHeader(3);

  // Background subtle tint
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.rect(margin, 22, contentWidth, pageHeight - 40, 'F');

  currentY = 32;
  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Bien démarrer & Support officiel", margin + 6, currentY);

  currentY += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("Notre équipe reste à votre écoute pour vous accompagner.", margin + 6, currentY);

  currentY += 5;
  doc.setDrawColor(freshGreen[0], freshGreen[1], freshGreen[2]);
  doc.setLineWidth(0.8);
  doc.line(margin + 6, currentY, margin + 45, currentY);

  currentY += 8;

  // 3 CONSEILS DE DÉMARRAGE
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 44, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Conseils pour bien débuter dès réception de votre guide :", margin + 10, currentY + 6.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);

  doc.setFont('helvetica', 'bold');
  doc.text("• Démarrez sans pression :", margin + 10, currentY + 13.5);
  doc.setFont('helvetica', 'normal');
  doc.text("Choisissez une ou deux recettes simples dès le premier week-end pour vous familiariser en douceur.", margin + 47, currentY + 13.5);

  doc.setFont('helvetica', 'bold');
  doc.text("• Adoptez les listes par rayon :", margin + 10, currentY + 21);
  doc.setFont('helvetica', 'normal');
  doc.text("Gagnez un temps précieux au supermarché grâce à l'organisation méthodique des 4 semaines de menus.", margin + 50, currentY + 21);

  doc.setFont('helvetica', 'bold');
  doc.text("• Faites des sauces vos alliées :", margin + 10, currentY + 28.5);
  doc.setFont('helvetica', 'normal');
  doc.text("Une simple sauce ou un dip maison change tout et sublime un plat de légumes bruts de saison en quelques minutes.", margin + 52, currentY + 28.5);

  doc.setFont('helvetica', 'bold');
  doc.text("• Rappel du délai de livraison :", margin + 10, currentY + 36);
  doc.setFont('helvetica', 'normal');
  doc.text("Vos accès vous sont préparés avec attention et vous parviendront dans un délai de 48 heures maximum.", margin + 53, currentY + 36);

  currentY += 50;

  // SUPPORT CLIENT OFFICIEL
  doc.setFillColor(cardBg[0], cardBg[1], cardBg[2]);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 42, 2, 2, 'FD');

  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Que faire si vous n'avez pas reçu votre accès après 48 heures ?", margin + 10, currentY + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const supportText = "Si le délai de 48 heures après la confirmation de votre paiement est dépassé et que vous n'avez pas trouvé notre e-mail (après avoir vérifié vos courriers indésirables / spams), notre équipe de support client est à votre disposition pour vous aider.";
  doc.text(doc.splitTextToSize(supportText, contentWidth - 20), margin + 10, currentY + 14);

  // Email badge
  doc.setFillColor(creamBg[0], creamBg[1], creamBg[2]);
  doc.setDrawColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.roundedRect(margin + 10, currentY + 23, contentWidth - 28, 12, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Canal de support officiel :", margin + 14, currentY + 30.5);
  doc.setTextColor(forestGreen[0], forestGreen[1], forestGreen[2]);
  doc.text("support@biendanslassiette.com", margin + 54, currentY + 30.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Merci d'indiquer votre nom, prénom et votre numéro de transaction Hotmart pour un traitement prioritaire.", margin + 10, currentY + 39);

  currentY += 48;

  // AVERTISSEMENT RESPONSABILITÉ & BIEN-ÊTRE (Texte officiel extrait de la page)
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(hairline[0], hairline[1], hairline[2]);
  doc.roundedRect(margin + 6, currentY, contentWidth - 12, 28, 1.5, 1.5, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text("Avertissement de responsabilité & bien-être :", margin + 10, currentY + 5.5);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(6.8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const disclaimer = "Ce recueil de recettes est un ouvrage pratique d'accompagnement culinaire et d'art de vivre. Il ne prétend en aucun cas diagnostiquer, traiter, guérir ou prévenir une quelconque pathologie médicale. Les conseils partagés s'inscrivent dans une démarche de cuisine maison équilibrée. Pour tout problème de santé ou régime thérapeutique particulier, veuillez solliciter l'avis de votre médecin traitant ou d'un diététicien qualifié.";
  doc.text(doc.splitTextToSize(disclaimer, contentWidth - 20), margin + 10, currentY + 11);

  currentY += 34;

  // MESSAGE FINAL DE CLÔTURE
  doc.setFont('times', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(darkGreen[0], darkGreen[1], darkGreen[2]);
  doc.text("Nous vous souhaitons une merveilleuse aventure culinaire !", margin + 6, currentY);

  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text("Toute l'équipe de Bien dans l'Assiette vous remercie à nouveau pour votre confiance.", margin + 6, currentY);

  drawFooter(3);

  const arrayBuffer = doc.output('arraybuffer');
  return Buffer.from(arrayBuffer);
}

// Generate file if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const pdfBuffer = generateWelcomePDF();
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const outputPath = path.join(publicDir, 'BIENVENUE-BIEN-DANS-LASSIETTE.pdf');
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log(`PDF généré avec succès : ${outputPath} (${pdfBuffer.length} octets)`);
}
