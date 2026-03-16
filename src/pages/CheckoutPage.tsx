import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

export const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-8" alt="Visa" />
        </div>

        <div className="p-8">
          <h1 className="text-2xl font-bold mb-8">Payer en ligne</h1>

          <div className="flex gap-4 mb-10 opacity-70 grayscale">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-4" alt="Stripe" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard" />
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Paiement simulé réussi!'); navigate('/home'); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom sur la carte</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">N° de la carte</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="**** **** **** ****"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
                <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date d'exp.</label>
                <input 
                  type="text" 
                  placeholder="MM/AA"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cryptogramme</label>
                <input 
                  type="text" 
                  placeholder="***"
                  className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors mt-8"
            >
              Payer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
