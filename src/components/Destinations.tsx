import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin, Award, Code } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import destination images
import kinshasaImage from '../assets/levi.jpeg';
import parisImage from '../assets/grad.jpeg';

const Destinations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const destinations = [
    {
      id: 1,
      name: "Levi Aloma",
      role: "Directeur Financier & Business Manager",
      image: kinshasaImage,
      description: "Supply Chain and Business Plan Manager. Directeur financier Kibongo Tech et responsable interactions clients.",
      expertise: ["Business Plan", "Supply Chain", "Finance", "Client Relations"],
      email: "levialoma23@gmail.com",
      phone: "+243 829 492 584",
      icon: Award
    },
    {
      id: 2,
      name: "Gradi Ngunza",
      role: "Directeur des Opérations & Tech Lead",
      image: parisImage,
      description: "Développeur Full Stack web, Application Mobile et AWS Cloud Practitioner. Directeur des opérations Kibongo Tech.",
      expertise: ["Full Stack", "Mobile", "AWS Cloud", "API REST"],
      email: "gradingunza@gmail.com",
      phone: "+243 985 178 996",
      icon: Code
    },
  ];

  return (
    <section id="destinations" className="pt-24 md:pt-32 pb-12 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
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
            NOTRE ÉQUIPE
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-3">
            L'expertise passionnée au service de vos défis technologiques
          </p>
        </motion.div>

        {/* Carrousel Swiper optimisé mobile */}
        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="destinations-swiper"
          >
            {destinations.map((member, index) => (
              <SwiperSlide key={member.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group mx-auto max-w-sm md:max-w-none"
                >
                  {/* Image avec overlay - hauteur réduite sur mobile */}
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <div className="flex justify-center gap-2 md:gap-3">
                          <motion.a
                            href={`mailto:${member.email}`}
                            className="bg-white p-1.5 md:p-2 rounded-full hover:bg-green-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail size={14} className="text-gray-700 hover:text-white md:w-[18px] md:h-[18px]" />
                          </motion.a>
                          <motion.a
                            href={`tel:${member.phone}`}
                            className="bg-white p-1.5 md:p-2 rounded-full hover:bg-green-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Phone size={14} className="text-gray-700 hover:text-white md:w-[18px] md:h-[18px]" />
                          </motion.a>
                          <motion.a
                            href="#"
                            className="bg-white p-1.5 md:p-2 rounded-full hover:bg-green-500 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin size={14} className="text-gray-700 hover:text-white md:w-[18px] md:h-[18px]" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu optimisé mobile */}
                  <div className="p-4 md:p-6 text-center">
                    <div className="mb-2 md:mb-3">
                      <div className="inline-flex p-1.5 md:p-2 bg-green-100 rounded-full mb-1 md:mb-2">
                        <member.icon size={16} className="text-green-600 md:w-[20px] md:h-[20px]" />
                      </div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-0.5 md:mb-1">
                        {member.name}
                      </h3>
                      <p className="text-green-600 text-xs md:text-sm font-medium px-2">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                      {member.description}
                    </p>
                    
                    {/* Expertise tags - adaptés pour mobile */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-100">
                      {member.expertise.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-md text-xs font-medium bg-green-50 text-green-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Boutons de navigation personnalisés - plus petits sur mobile */}
          <button className="swiper-button-prev-custom absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-green-500 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 group">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-green-700 group-hover:text-white transition-colors" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-green-500 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 group">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-green-700 group-hover:text-white transition-colors" />
          </button>
        </div>
       
        {/* Indicateur de défilement pour mobile */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-xs text-gray-400">← Glisser pour voir l'équipe →</p>
        </div>
      </div>
    </section>
  );
};

export default Destinations;