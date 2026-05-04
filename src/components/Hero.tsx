import React, { useEffect } from "react";
import HeroBanner from "../assets/p.jpg";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Fonction pour défiler vers la section contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Animation machine à écrire
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3
      }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-16 md:pt-24" id="home">
      {/* Section de l'image de fond */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HeroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div ref={ref} initial="hidden" animate={controls} className="text-center md:text-left">
            {/* Titre avec effet machine à écrire - optimisé mobile */}
            <motion.h1 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold px-3 py-1 leading-tight"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-base sm:text-lg md:text-xl mb-2 text-emerald-300">
                Votre projet, notre engagement.
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Kibongo Tech
              </span>
              <span className="block text-sm sm:text-base md:text-lg mt-1">
                Excellence digitale & innovation
              </span>
            </motion.h1>

            {/* Sous-titre - simplifié pour mobile */}
            <motion.p
              className="text-xs sm:text-sm md:text-base mt-3 px-3 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Développement d'applications sur-mesure adaptées à vos besoins
            </motion.p>

            {/* Description - plus courte et lisible sur mobile */}
            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 max-w-2xl mx-auto md:mx-0 mt-3 px-3 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.8,
              }}
            >
              Donnez à votre entreprise une identité digitale puissante avec des sites web 
              et applications sur mesure qui vous démarquent de la concurrence.
            </motion.p>

            {/* Bouton CTA - taille adaptée pour mobile */}
            <motion.button
              onClick={scrollToContact}
              className="flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg mx-auto md:mx-0"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ 
                scale: 0.95,
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.2
              }}
            >
              <span>Contactez-nous</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>

            {/* Indicateur de défilement - optionnel pour mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
            >
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;