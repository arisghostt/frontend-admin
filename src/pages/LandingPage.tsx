import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 grayscale"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1920")' }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <div className="w-24 h-24 bg-white flex items-center justify-center rotate-45 mb-6">
            <div className="w-16 h-16 border-4 border-black -rotate-45 flex items-center justify-center">
              <span className="text-black text-xl font-bold">KK</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-[0.3em] mb-2">KING KUNTA</h1>
          <div className="w-40 h-[1px] bg-white/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-2xl font-serif italic tracking-wide">La marque des rois!</p>
          <Link 
            to="/home"
            className="px-12 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Découvrir
          </Link>
        </motion.div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay">
        <div className="grid grid-cols-6 h-full w-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-white flex items-center justify-center">
              <div className="w-12 h-12 border border-white rotate-45" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
