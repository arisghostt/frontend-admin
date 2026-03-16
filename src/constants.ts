import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bottines en cuir',
    ref: 'REF-001',
    price: 630,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    type: 'Shoes',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#FFFFFF', '#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#EC4899']
  },
  {
    id: '2',
    name: 'T-shirt Oversize',
    ref: 'REF-002',
    price: 203,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Men',
    type: 'Clothing',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#1E3A8A', '#000000', '#FFFFFF']
  },
  {
    id: '3',
    name: 'Escarpins Noirs',
    ref: 'REF-003',
    price: 450,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800'
    ],
    category: 'Women',
    type: 'Shoes',
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['#000000']
  }
];
