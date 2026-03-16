import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play, Pause, Heart, MessageCircle } from 'lucide-react';

const CATEGORIES = [
  { id: '1', title: 'Prêt-à-porter Hommes', image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800' },
  { id: '2', title: 'Prêt-à-porter Femmes', image: 'https://images.unsplash.com/photo-1539109132384-361555754525?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Chaussures Hommes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800' },
  { id: '4', title: 'Chaussures Femmes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800' },
];

export const HomePage = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4">Bientôt disponible!</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 uppercase tracking-tighter">Nouvelle Collection KING KUNTA</h1>
          <p className="text-lg text-gray-500 font-medium">Septembre 2026</p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {CATEGORIES.map((cat) => (
          <motion.div 
            key={cat.id}
            whileHover={{ y: -10 }}
            className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center group"
          >
            <div className="aspect-[3/4] w-full mb-8 overflow-hidden bg-gray-50">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-sm font-serif italic mb-4">{cat.title}</h3>
            <Link to="/category/all" className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1">Découvrir</Link>
          </motion.div>
        ))}
      </section>

      {/* Narrative Section */}
      <section className="py-20 text-center px-4 bg-white border-y border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-serif italic text-gray-600 leading-relaxed">
            Petit narratif pour présenter la collection. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Video preview"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-serif italic mb-8">Video présentation de la collection</h2>
            <div className="flex items-center gap-8">
              <button className="w-16 h-16 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Play fill="currentColor" size={24} />
              </button>
            </div>
          </div>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 text-white">
              <button><Play size={20} /></button>
              <button><Pause size={20} /></button>
              <div className="w-40 h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white" />
              </div>
            </div>
            <button className="text-white hover:text-red-500 transition-colors">
              <Heart size={24} />
            </button>
          </div>
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
