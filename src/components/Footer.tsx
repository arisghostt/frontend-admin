import React from 'react';
import { Facebook, Instagram, Music2, Ghost } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-1">
            <h3 className="text-sm font-serif italic mb-6">Soyez informé des nouveautés Kingkunta</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="*E-mail" 
                className="bg-white/10 border border-white/20 px-4 py-2 text-xs w-full focus:outline-none focus:border-white"
              />
              <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest">ok</button>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Paiements</h4>
            <ul className="space-y-3 text-[10px] text-gray-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Modes Acceptés</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Remboursements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Promotions</h4>
            <ul className="space-y-3 text-[10px] text-gray-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Offres en cours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code Promo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programme Fidélité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Service Client</h4>
            <ul className="space-y-3 text-[10px] text-gray-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">Infos de Livraison</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suivi de Commande</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Retour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ Livraison</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Supports & Contacts</h4>
            <ul className="space-y-3 text-[10px] text-gray-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chat en ligne</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Formulaire de contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales / CGV / RGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <span className="text-[10px] uppercase tracking-widest font-bold">Suivez nous sur</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-400 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Music2 size={18} /></a>
              <a href="#" className="hover:text-gray-400 transition-colors"><Ghost size={18} /></a>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-gray-400">Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
};
