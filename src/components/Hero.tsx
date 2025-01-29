import React, { useState, useEffect } from 'react';
    import { useTranslation } from 'react-i18next';
    import { Calendar, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
    import slide1 from '../assets/images/slide1.jpeg';
    import slide2 from '../assets/images/slide2.jpeg';
    import slide3 from '../assets/images/slide3.jpeg';
    import slide4 from '../assets/images/slide4.jpeg';
    import slide5 from '../assets/images/slide5.jpeg';
    import slide6 from '../assets/images/slide6.jpeg';
    import slide7 from '../assets/images/slide7.jpeg';
    import slide8 from '../assets/images/slide8.jpeg';
    import slide9 from '../assets/images/slide9.jpeg';
    import slide10 from '../assets/images/slide10.jpeg';
    import slide11 from '../assets/images/slide11.jpeg';
    import slide12 from '../assets/images/slide12.jpeg';

    const Hero = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';
      const [currentSlide, setCurrentSlide] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(false);
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [department, setDepartment] = useState('General Surgery');
      const [formError, setFormError] = useState('');
      const [formSuccess, setFormSuccess] = useState('');

      const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12
      ];

      useEffect(() => {
        const timer = setInterval(() => {
          nextSlide();
        }, 5000);
        return () => clearInterval(timer);
      }, [currentSlide]);

      const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
          setIsTransitioning(false);
        }, 300);
      };

      const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
          setIsTransitioning(false);
        }, 300);
      };

      const handleBookAppointment = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleEmergencyCall = () => {
        window.location.href = 'tel:01113444234';
      };

      const handleRequestAppointment = (event: React.FormEvent) => {
        event.preventDefault();
        setFormError('');
        setFormSuccess('');

        if (!name || !phone) {
          setFormError(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields.');
          return;
        }

        // Basic phone number validation
        const phoneRegex = /^[0-9]{10,}$/;
        if (!phoneRegex.test(phone)) {
          setFormError(isArabic ? 'رقم الهاتف غير صالح' : 'Invalid phone number.');
          return;
        }

        // Simulate form submission
        setTimeout(() => {
          setFormSuccess(isArabic ? 'تم طلب الموعد بنجاح!' : 'Appointment requested successfully!');
          setName('');
          setPhone('');
          setDepartment('General Surgery');
        }, 500);
      };

      return (
        <div className="relative bg-white pt-20">
          <div className="absolute inset-0 z-0 overflow-hidden">
            {slides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}>
                <img
                  src={slide}
                  alt={`Hospital ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg mb-8 text-gray-100 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleBookAppointment}
                    className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('hero.bookAppointment')}
                  </button>
                  <button
                    onClick={handleEmergencyCall}
                    className="bg-white border-2 border-white text-primary-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t('hero.emergency')}: 01113444234
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-102 transition-transform">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('hero.quickAppointment')}</h2>
                <form className="space-y-4" onSubmit={handleRequestAppointment}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('hero.fullName')}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t('hero.phoneNumber')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('hero.department')}
                    </label>
                    <select 
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 px-4 py-2 ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      <option value="General Surgery">{isArabic ? 'الجراحة العامة' : 'General Surgery'}</option>
                      <option value="Cardiology">{isArabic ? 'القلب' : 'Cardiology'}</option>
                      <option value="Neurology">{isArabic ? 'المخ والأعصاب' : 'Neurology'}</option>
                      <option value="Pediatrics">{isArabic ? 'طب الأطفال' : 'Pediatrics'}</option>
                    </select>
                  </div>
                  {formError && <p className="text-red-500 text-sm">{formError}</p>}
                  {formSuccess && <p className="text-green-500 text-sm">{formSuccess}</p>}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all transform hover:scale-102"
                  >
                    {t('hero.requestAppointment')}
                  </button>
                </form>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              <button
                onClick={prevSlide}
                className={`bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors ${isTransitioning ? 'pointer-events-none' : ''} ${isArabic ? 'transform rotate-180' : ''}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className={`bg-white/20 text-white rounded-full p-2 hover:bg-white/40 transition-colors ${isTransitioning ? 'pointer-events-none' : ''} ${isArabic ? 'transform rotate-180' : ''}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    };

    export default Hero;
