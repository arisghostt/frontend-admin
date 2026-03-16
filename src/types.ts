export interface Product {
  id: string;
  name: string;
  ref: string;
  price: number;
  description: string;
  images: string[];
  category: 'Men' | 'Women';
  type: 'Clothing' | 'Shoes' | 'Accessories';
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}
