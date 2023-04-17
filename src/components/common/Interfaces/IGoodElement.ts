export interface GoodElement {
  url_img: string;
  name: string;
  type_weight: string;
  weight: number | string;
  barcode: number;
  brand?: string;
  producer?: string;
  description?: string;
  cost: number;
  type_product?: string[];
}
