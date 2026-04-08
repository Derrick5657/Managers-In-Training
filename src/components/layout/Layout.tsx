import { Outlet, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from '../ChatWidget';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow pt-16">
          <Outlet />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HelmetProvider>
  );
}
