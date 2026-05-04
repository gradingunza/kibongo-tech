import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle,
  Clock,
  User,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumbers = [
    { number: "+243813691461", label: "Ligne principale" },
    { number: "+243985178996", label: "WhatsApp Business" },
    { number: "+243829492584", label: "Support technique" }
  ];

  const emails = [
    { address: "gradingunza@gmail.com", label: "Support technique" },
    { address: "levialoma23@gmail.com", label: "Commercial" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="contact">
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
            CONTACTEZ-NOUS
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-3">
            Nous sommes à votre écoute pour tous vos projets technologiques
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
            {/* Informations de contact optimisées mobile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Carte des coordonnées */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                  <Phone size={18} className="text-green-600 md:w-[20px] md:h-[20px]" />
                  Nos coordonnées
                </h3>
                
                {/* Numéros de téléphone */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3 flex items-center gap-2">
                    <Phone size={14} className="text-green-600" />
                    Téléphones
                  </h4>
                  <div className="space-y-1 md:space-y-2">
                    {phoneNumbers.map((phone, idx) => (
                      <div key={idx} className="flex items-center justify-between p-1.5 md:p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <span className="text-xs md:text-sm text-gray-600">{phone.label}</span>
                        <a 
                          href={`tel:${phone.number}`}
                          className="text-green-700 font-medium hover:text-green-800 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                        >
                          {phone.number}
                          <Phone size={12} className="md:w-[14px] md:h-[14px]" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emails */}
                <div className="mb-4 md:mb-6">
                  <h4 className="text-xs md:text-sm font-semibold text-gray-700 mb-2 md:mb-3 flex items-center gap-2">
                    <Mail size={14} className="text-green-600" />
                    Emails
                  </h4>
                  <div className="space-y-1 md:space-y-2">
                    {emails.map((email, idx) => (
                      <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-1.5 md:p-2 hover:bg-gray-50 rounded-lg transition-colors gap-1 sm:gap-0">
                        <span className="text-xs md:text-sm text-gray-600">{email.label}</span>
                        <a 
                          href={`mailto:${email.address}`}
                          className="text-green-700 font-medium hover:text-green-800 transition-colors flex items-center gap-1 md:gap-2 text-xs md:text-sm"
                        >
                          {email.address}
                          <Mail size={12} className="md:w-[14px] md:h-[14px]" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heures d'ouverture */}
                <div className="pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Clock size={16} className="text-green-600 md:w-[20px] md:h-[20px]" />
                    <div>
                      <p className="text-xs md:text-sm font-medium text-gray-800">Heures d'ouverture</p>
                      <p className="text-xs text-gray-500">Lun - Ven: 8h00 - 18h00</p>
                      <p className="text-xs text-gray-500">Sam: 9h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte de localisation simplifiée */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-green-600 md:w-[20px] md:h-[20px]" />
                  Notre localisation
                </h3>
                <div className="space-y-2">
                  <p className="text-xs md:text-sm text-gray-600">
                    Kinshasa, République Démocratique du Congo
                  </p>
                  <div className="mt-3 md:mt-4 bg-gray-100 rounded-lg h-32 md:h-48 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={24} className="text-green-600 mx-auto mb-1 md:mb-2 md:w-[32px] md:h-[32px]" />
                      <p className="text-xs text-gray-500">Carte interactive disponible</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact optimisé mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
                <Send size={18} className="text-green-600 md:w-[20px] md:h-[20px]" />
                Envoyez-nous un message
              </h3>
              
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-3 md:mb-4 p-2 md:p-3 rounded-lg flex items-center gap-2 ${
                    formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}
                >
                  {formStatus.success ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                  <span className="text-xs">{formStatus.message}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 md:pl-10 pr-3 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 md:pl-10 pr-3 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-8 md:pl-10 pr-3 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Devis">Demande de devis</option>
                    <option value="Formation">Inscription formation</option>
                    <option value="Support">Support technique</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent"></div>
                      Envoi...
                    </>
                  ) : (
                    <>
                      <Send size={14} className="md:w-[18px] md:h-[18px]" />
                      Envoyer
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-3 md:mt-4">
                * Champs obligatoires. Réponse sous 24-48h.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;