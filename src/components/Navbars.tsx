import React, { useEffect, useState } from 'react';
import { Menu, X, Code2, Users, Home, Phone, Zap } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Accueil', href: 'home', icon: Home },
    { name: 'Services', href: 'services', icon: Code2 },
    { name: 'Equipe', href: 'destinations', icon: Users },
    { name: 'Contact', href: 'contact', icon: Phone },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-[99999] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg py-3'
            : 'bg-gradient-to-r from-gray-900/95 to-gray-800/95 py-5'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <div className="bg-green-500 p-2 rounded-lg">
                <Zap size={22} className="text-white" />
              </div>

              <div className="hidden sm:flex flex-col items-start">
                <span
                  className={`text-xl font-extrabold ${
                    isScrolled ? 'text-green-700' : 'text-green-400'
                  }`}
                >
                  KIBONGO TECH
                </span>

                <span
                  className={`text-[10px] ${
                    isScrolled ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  INNOVATION & EXCELLENCE
                </span>
              </div>
            </button>

            {/* NAVIGATION DESKTOP */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    isScrolled
                      ? 'text-gray-700 hover:text-green-600'
                      : 'text-white hover:text-green-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <item.icon size={18} />
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* BURGER MOBILE */}
            <button
              type="button"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 border border-white/20 shadow-2xl"
            >
              {isOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <Menu className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[88px] left-0 right-0 w-full z-[99998] bg-white shadow-2xl border-t border-gray-100 md:hidden"
          >
            <div className="px-4 py-5 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-center gap-3 px-4 py-4 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                >
                  <item.icon size={22} />
                  <span className="font-semibold">{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbars;