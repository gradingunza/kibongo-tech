import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import fonac from './assets/kibongo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Debug useEffect
    useEffect(() => {
        console.log('Navbar mounted - checking scroll');
        
        const handleScroll = () => {
            const scrolled = window.scrollY > 10;
            console.log('Scroll detected:', window.scrollY, 'Scrolled:', scrolled);
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Déclenchez immédiatement pour l'état initial
        handleScroll();
        
        return () => {
            console.log('Navbar unmounted - removing listener');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = ['Accueil', 'Personnels', 'Services', 'Apropos', 'Contact'];

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
                    : 'bg-transparent'
            }`}
            style={{ 
                top: 0, 
                left: 0, 
                border: '2px solid red' // Bordure de debug
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img 
                            src={fonac} 
                            alt="fonac" 
                            className="h-12 w-auto" 
                            style={{ border: '1px solid blue' }} // Debug
                        />
                        <span style={{ marginLeft: '10px', color: 'red' }}>
                            {isScrolled ? 'SCROLLED' : 'TOP'}
                        </span>
                    </div>

                    {/* Navigation desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-emerald-400 hover:text-green-500 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Bouton mobile */}
                    <button
                        className="md:hidden p-2 rounded-md text-blue-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            <AnimatePresence>
                {isOpen && (
                    <div className="md:hidden bg-black/95">
                        <div className="px-2 pt-2 pb-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="block px-4 py-3 text-blue-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;