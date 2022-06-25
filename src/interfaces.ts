export interface Category {
  name: string;
  products: Product[];
}

export interface Product {
  id?: string;
  name?: string;
  inStock: Boolean;
  gallery: string[];
  description?: string;
  category?: string;
  attributes: AttributeSet[];
  prices?: Price[];
  brand?: string;
}

export interface Currency {
  label?: string;
  symbol?: string;
}

export interface AttributeSet {
  id?: string;
  name: string;
  type: string;
  items: Attribute[];
}

export interface Price {
  currency?: Currency;
  amount?: any;
}

export interface Attribute {
  displayValue: string;
  value: string;
  id?: string;
}