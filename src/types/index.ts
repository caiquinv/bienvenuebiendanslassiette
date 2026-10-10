export type ViewMode = 'all' | 'page-1' | 'page-2' | 'page-3';

export interface PurchaseInfo {
  productName: string;
  tagline: string;
  price: string;
  guaranteeDays: number;
  maxDeliveryHours: number;
  supportEmail: string;
  format: string;
  includedBonuses: {
    title: string;
    description: string;
    highlights: string[];
  }[];
}
