import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

export const CategoryPage = () => {
  const { type } = useParams();
  const { addToCart } = useCart();
  const isQueen = type === 'women';
  
  const filteredProducts = PRODUCTS.filter(p => 
    type === 'all' || p.category.toLowerCase() === type
  );

  return (
    <div className="pt-20 min-h-screen bg-[#f8f8f8]">
      {/* Category Header */}
      <section className="py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-8 uppercase tracking-tighter">
            Nos articles pour les {isQueen ? 'QUEENS' : 'KINGS'}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-serif italic">
            <button className="hover:text-gray-400 transition-colors border-b border-black pb-1">Prêt-à-porter {isQueen ? 'Femmes' : 'Hommes'}</button>
            <button className="hover:text-gray-400 transition-colors">Chaussures {isQueen ? 'Femmes' : 'Hommes'}</button>
            <button className="hover:text-gray-400 transition-colors">Accessoires</button>
          </div>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="py-12 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg font-serif italic text-gray-500 leading-relaxed">
            Petit narratif pour présenter la collection. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </section>

      {/* Video Presentation (Placeholder) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 italic font-serif">
          Video présentation de la collection
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              <Link to={`/product/${product.id}`} className="w-full aspect-[3/4] bg-white mb-6 overflow-hidden relative">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <h3 className="text-xl font-serif italic mb-2">{product.name}</h3>
              <p className="text-2xl font-bold mb-4">{product.price} €</p>
              <button 
                onClick={() => addToCart(product, product.sizes[0], product.colors[0])}
                className="bg-[#1a1a1a] text-white px-8 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <button className="text-gray-400 hover:text-black"><ChevronLeft size={20} /></button>
          <span className="text-sm font-bold">1</span>
          <button className="text-gray-400 hover:text-black"><ChevronRight size={20} /></button>
        </div>
      </section>

      {/* Floating Chat Button */}
      <Link 
        to="/chat"
        className="fixed bottom-8 right-8 bg-[#4ade80] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform z-40"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Chat</span>
        <MessageCircle size={18} />
      </Link>
    </div>
  );
};
