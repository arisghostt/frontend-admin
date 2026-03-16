import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={product.images[currentImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={cn(
                  "w-20 aspect-square border-2 transition-all",
                  currentImage === idx ? "border-black" : "border-transparent opacity-50"
                )}
              >
                <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-6xl font-serif uppercase tracking-tighter mb-2">{product.name}</h1>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Numéro ref. {product.ref}</p>
          </div>

          <div className="bg-[#1a1a1a] text-white px-6 py-3 inline-block self-start rounded-md mb-8">
            <span className="text-xl font-bold">{product.price} euros</span>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-gray-600 leading-relaxed font-medium">
              {product.description}
            </p>
            <p className="text-gray-600 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Sizes</h3>
              <div className="flex gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-10 h-10 border flex items-center justify-center text-xs font-bold transition-all",
                      selectedSize === size ? "bg-black text-white border-black" : "border-gray-200 hover:border-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Colors</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-8 h-8 rounded-sm border-2 transition-all",
                      selectedColor === color ? "border-black scale-110" : "border-transparent"
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => addToCart(product, selectedSize, selectedColor)}
              className="flex-1 bg-[#1a1a1a] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
            >
              Ajouter au panier
            </button>
            <button 
              onClick={() => navigate('/chat')}
              className="bg-[#4ade80] text-white px-8 py-4 flex items-center gap-2 hover:bg-[#22c55e] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Chat</span>
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
