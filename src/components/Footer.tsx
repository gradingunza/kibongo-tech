import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  Clock,
  Award,
  ChevronRight,
  Zap,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Fonction pour défiler vers une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Accueil', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'Équipe', href: 'destinations' },
    { name: 'Contact', href: 'contact' }
  ];

  const services = [
    { name: 'Accompagnement Digital', href: 'services' },
    { name: 'Kibongo Tech Academy', href: 'services' },
    { name: 'Solutions Tech Maison', href: 'services' },
    { name: 'Application ImmovIa', href: 'https://www.immovia.site', external: true },
    { name: 'Développement sur mesure', href: 'services' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+243 813 691 461', href: 'tel:+243813691461' },
    { icon: Phone, text: '+243 985 178 996', href: 'tel:+243985178996' },
    { icon: Mail, text: 'gradingunza@gmail.com', href: 'mailto:gradingunza@gmail.com' },
    { icon: Mail, text: 'levialoma23@gmail.com', href: 'mailto:levialoma23@gmail.com' }
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/kibongotech', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/kibongotech', name: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/kibongotech', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Logo et description - optimisé mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4"
          >
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 p-1 rounded-lg"
                >
                  <Zap size={16} className="text-white md:w-[20px] md:h-[20px]" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                    KIBONGO TECH
                  </span>
                  <span className="text-[6px] md:text-[10px] font-light tracking-wider text-gray-400 -mt-0.5">
                    INNOVATION & EXCELLENCE
                  </span>
                </div>
              </motion.div>
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Des professionnels passionnés pour vos solutions technologiques d'exception.
            </p>
            <div className="flex space-x-2 pt-1 md:pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors bg-gray-800 p-1.5 md:p-2 rounded-full hover:bg-gray-700"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-3 w-3 md:h-4 md:w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm md:text-lg font-semibold text-green-400 mb-3 md:mb-5 flex items-center gap-1 md:gap-2">
              <ChevronRight size={14} className="md:w-[18px] md:h-[18px]" />
              Liens rapides
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors text-xs md:text-sm flex items-center gap-2 cursor-pointer w-full text-left"
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Nos Services - liste réduite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm md:text-lg font-semibold text-green-400 mb-3 md:mb-5 flex items-center gap-1 md:gap-2">
              <Award size={14} className="md:w-[18px] md:h-[18px]" />
              Nos Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors text-xs md:text-sm flex items-center gap-2 cursor-pointer group"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                      {service.name}
                      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="text-gray-300 hover:text-green-400 transition-colors text-xs md:text-sm flex items-center gap-2 cursor-pointer w-full text-left"
                    >
                      <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                      {service.name}
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - simplifié */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm md:text-lg font-semibold text-green-400 mb-3 md:mb-5 flex items-center gap-1 md:gap-2">
              <Phone size={14} className="md:w-[18px] md:h-[18px]" />
              Contact
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    className="flex items-start text-gray-300 hover:text-green-400 transition-colors text-xs md:text-sm group"
                  >
                    <item.icon className="h-3 w-3 md:h-4 md:w-4 text-green-400 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Horaires */}
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-800">
              <div className="flex items-start">
                <Clock className="h-3 w-3 md:h-4 md:w-4 text-green-400 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-xs md:text-sm">Lun - Ven: 8h00 - 18h00</p>
                  <p className="text-gray-300 text-xs md:text-sm">Sam: 9h00 - 13h00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-4 md:my-6"
        />

        {/* Copyright et liens légaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xs md:text-sm text-center"
          >
            © {currentYear} Kibongo Tech. Tous droits réservés.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-green-400 text-xs md:text-sm transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;