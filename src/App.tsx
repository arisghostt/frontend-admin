import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CategoryPage } from './pages/CategoryPage';
import { ChatPage } from './pages/ChatPage';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans selection:bg-black selection:text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/category/:type" element={<CategoryPage />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </main>
          <FooterWrapper />
        </div>
      </Router>
    </CartProvider>
  );
}

import { useLocation } from 'react-router-dom';

const FooterWrapper = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/' || location.pathname === '/chat' || location.pathname === '/checkout';
  
  return !hideFooter ? <Footer /> : null;
};
