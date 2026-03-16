import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { cart } = useCart();
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (isLanding) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/home" className="flex flex-col items-center">
            <div className="w-10 h-10 bg-black flex items-center justify-center rotate-45">
              <div className="w-6 h-6 border-2 border-white -rotate-45 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">KK</span>
              </div>
            </div>
            <span className="text-[10px] font-bold tracking-widest mt-1">KING KUNTA</span>
          </Link>
          <span className="hidden md:block text-[10px] italic text-gray-400">La marque des rois!</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/home" className="text-xs font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">Accueil</Link>
          <Link to="/about" className="text-xs font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">Qui sommes-nous?</Link>
          <Link to="/register" className="text-xs font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">S'inscrire</Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">
              Notre Catalogue <ChevronDown size={12} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2">
              <Link to="/category/men" className="block px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-gray-50">King</Link>
              <Link to="/category/women" className="block px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-gray-50">Queen</Link>
            </div>
          </div>
          <Link to="/cart" className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider hover:text-gray-500 transition-colors">
            Panier <span className="bg-red-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">{cart.length}</span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              className="bg-gray-100 rounded-full px-4 py-1.5 text-[10px] w-40 focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Rechercher..."
            />
            <Search size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-bold">FR</span>
            <ChevronDown size={10} />
          </div>
        </div>
      </div>
    </header>
  );
};
