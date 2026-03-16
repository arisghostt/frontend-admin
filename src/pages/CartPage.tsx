import { useNavigate, Link } from 'react-router-dom';
import { X, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold uppercase tracking-[0.2em] mb-12 border-b-2 border-black pb-4 inline-block">Mon Panier</h1>
            
            <div className="space-y-12">
              {cart.length === 0 ? (
                <p className="text-gray-500 italic">Votre panier est vide.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex gap-8 relative pb-12 border-b border-gray-100">
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                      className="absolute top-0 right-0 text-gray-400 hover:text-black"
                    >
                      <X size={24} />
                    </button>
                    
                    <div className="w-40 aspect-[3/4] bg-gray-50 overflow-hidden">
                      <img src={item.images[0]} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-4xl font-serif uppercase tracking-tighter mb-1">{item.name}</h2>
                          <p className="text-sm text-gray-400 font-medium">Description</p>
                        </div>
                        <span className="text-2xl font-bold">{item.price} €</span>
                      </div>
                      
                      <div className="flex items-center gap-8 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest">Color</span>
                          <div className="w-6 h-6 rounded-sm border" style={{ backgroundColor: item.selectedColor }} />
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest">Size</span>
                          <div className="w-10 h-10 border flex items-center justify-center text-xs font-bold">{item.selectedSize}</div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-widest">Qté</span>
                          <select 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, item.selectedSize, item.selectedColor, parseInt(e.target.value))}
                            className="border p-1 text-xs font-bold"
                          >
                            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                      </div>

                      <button className="self-start mt-6 text-[10px] font-bold uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
                        Sauvegarder pour plus tard
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="mt-12 text-right">
                <span className="text-2xl font-bold uppercase tracking-widest">Total {total} €</span>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-[0.2em] mb-8">Total</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-xl font-bold">Montant Total</span>
                  <span className="text-xl font-bold">{total} €</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-xl font-bold">Livraison</span>
                  <span className="text-xl font-bold">Oui</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Adresse de livraison</h3>
              <div className="h-12 border-b border-black" />
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Modes de Paiement</h3>
              <div className="flex flex-wrap gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-6" alt="Stripe" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Code Promotionnel</h3>
              <input type="text" className="w-full border border-black p-3 text-xs" />
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#1a1a1a] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
            >
              Paiement
            </button>
          </div>
        </div>
      </div>

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
