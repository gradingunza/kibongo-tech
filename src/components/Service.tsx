import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Monitor, 
  GraduationCap, 
  Home, 
  Users,
  Award,
  Clock,
  CheckCircle,
  Zap,
  ExternalLink
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  link?: string;
  linkText?: string;
}

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = () => {
      setTimeout(() => {
        setServices([
          {
            id: 1,
            title: "Accompagnement Digital",
            description: "Nous accompagnons les sociétés et les particuliers dans la création et le déploiement d'applications web et mobile sur mesure.",
            icon: <Monitor size={24} />,
            tags: ["Web", "Mobile", "Cloud"]
          },
          {
            id: 2,
            title: "Kibongo Tech Academy",
            description: "Nous formons vos cadres en Excel approfondi et les jeunes dans les métiers web porteurs pour bâtir une équipe technique solide.",
            icon: <GraduationCap size={24} />,
            tags: ["Formation", "Certification", "Excel"]
          },
          {
            id: 3,
            title: "Solutions Tech Maison",
            description: "Nos propres applications pour résoudre les problèmes réels de la société congolaise et africaine.",
            icon: <Home size={24} />,
            tags: ["Innovation", "Immovia", "Impact social"],
            link: "https://www.immovia.site",
            linkText: "www.immovia.site"
          }
        ]);
        setLoading(false);
      }, 2000);
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* En-tête optimisé mobile */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-2 md:mb-4">
            NOS SERVICES
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-3">
            Découvrez ce que nous sommes et ce que nous faisons
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 md:py-20"
              >
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-4 border-gray-200 border-t-green-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-6 w-6 md:h-8 md:w-8 bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 font-medium text-sm md:text-base">Chargement de nos solutions...</p>
                <p className="text-xs text-gray-400 mt-1">Préparez-vous à découvrir l'innovation</p>
              </motion.div>
            ) : (
              <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-3 md:mb-4">
                          <motion.div 
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="text-green-700 bg-green-50 p-1.5 md:p-2 rounded-lg"
                          >
                            {service.icon}
                          </motion.div>
                          <div className="flex flex-wrap gap-1 justify-end">
                            {service.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 group-hover:text-green-700 transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {service.description}
                          {service.link && (
                            <a 
                              href={service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-700 font-semibold hover:text-green-800 underline hover:no-underline transition-colors inline-flex items-center gap-1 ml-1 text-xs"
                            >
                              {service.linkText}
                              <ExternalLink size={10} className="inline" />
                            </a>
                          )}
                        </p>
                        
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="mt-3 pt-2 border-t border-gray-100"
                        >
                          <div className="flex items-center gap-2 text-xs text-green-600">
                            <CheckCircle size={10} />
                            <span>Solution sur mesure</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Section Notre engagement optimisée mobile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={!loading && inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 md:mt-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl border border-green-100 p-5 md:p-10"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={!loading && inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full mb-3 md:mb-4"
              >
                <Users size={20} className="text-white md:w-[24px] md:h-[24px]" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-semibold text-green-900 mb-2 md:mb-4">
                Notre engagement
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                Chez Kibongo Tech, nous sommes des partenaires passionnés qui s'investissent pleinement dans la réussite de vos projets. 
                Notre approche est basée sur l'écoute, la compréhension de vos besoins et la proposition de solutions innovantes et durables. 
                Nous croyons en un numérique inclusif et nous mettons un point d'honneur à transférer nos compétences.
              </p>
            </div>
          </motion.div>

          {/* Stats optimisées mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={!loading && inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 md:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {[
              { icon: Users, value: "15+", label: "Clients accompagnés", delay: 0.7 },
              { icon: Award, value: "10+", label: "Formations dispensées", delay: 0.8 },
              { icon: Clock, value: "5", label: "Solutions innovantes", delay: 0.9 }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={!loading && inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -3 }}
                className="bg-white rounded-xl border border-gray-200 px-4 py-4 md:px-6 md:py-6 hover:shadow-md transition-all duration-300 text-center group"
              >
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                    <stat.icon className="text-green-600" size={22} />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;