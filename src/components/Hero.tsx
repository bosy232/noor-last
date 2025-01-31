import React, { useState, useEffect } from 'react';
    import { useTranslation } from 'react-i18next';
    import { Calendar, Phone, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
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
      const [department, setDepartment] = useState('Internal Medicine');
      const [doctor, setDoctor] = useState('');
      const [date, setDate] = useState('');
      const [time, setTime] = useState('');
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

        if (!name || !phone || !department || !doctor || !date || !time) {
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
          setDepartment('Internal Medicine');
          setDoctor('');
          setDate('');
          setTime('');
        }, 500);
      };

      const doctorsByDepartment = {
        "Internal Medicine": ["Dr. Sayed Zaki"],
        "Dermatology": ["Dr. Essam Shaker", "Dr. Hala Shawky"],
        "Neurology": ["Dr. Suleiman Maghrabi"],
        "Ear, Nose, and Throat (ENT)": ["Dr. Abdel Sattar Hassan Khamis", "Dr. Noman Hassan Noman"],
        "Orthopedics": ["Dr. Sherif Zoheir", "Dr. Tarek Yahya", "Dr. Mohamed Fathy"],
        "General Surgery": ["Dr. Mohamed Hossam", "Dr. Mostafa El Sheikh", "Dr. Mohamed Hesham"],
        "Obstetrics and Gynecology": ["Dr. Esraa El-Bilqini", "Dr. Roqia Sayed"],
        "Cardiology": ["Dr. Hossam Magdy", "Dr. Ehab El-Hefny"],
        "Gastroenterology and Endoscopy": ["Dr. Samar Kamal"],
        "Diet and Nutrition": ["Dr. Mona Abdel Khaleq"],
        "Diabetes and Endocrinology": ["Dr. Emad Moussa"],
        "Pediatrics and Neonatology": ["Dr. Mohamed Fadel", "Dr. Abdallah Saad", "Dr. Hassan El-Hefnawy"],
        "Cardiothoracic Surgery": ["Dr. Sami Amin"],
        "Nephrology": ["Dr. Negm El-Din Mohamed Amer"],
        "Urology": ["Dr. Mohamed Ragab"],
        "Vascular Surgery": ["Dr. Abdel Rahman Yahya"],
        "Psychiatry": ["Dr. Ahmed El-Nahhas"]
      };

      const doctorsByDepartmentAr = {
        "Internal Medicine": ["د. سيد زكي"],
        "Dermatology": ["د. عصام شاكر", "د. هالة شوقي"],
        "Neurology": ["د. سليمان مغربي"],
        "Ear, Nose, and Throat (ENT)": ["د. عبد الستار حسن خميس", "د. نعمان حسن نعمان"],
        "Orthopedics": ["د. شريف زهير", "د. طارق يحيى", "د. محمد فتحي"],
        "General Surgery": ["د. محمد حسام", "د. مصطفى الشيخ", "د. محمد هشام"],
        "Obstetrics and Gynecology": ["د. إسراء البلقيني", "د. رقية سيد"],
        "Cardiology": ["د. حسام مجدي", "د. إيهاب الحفني"],
        "Gastroenterology and Endoscopy": ["د. سمر كمال"],
        "Diet and Nutrition": ["د. منى عبد الخالق"],
        "Diabetes and Endocrinology": ["د. عماد موسى"],
        "Pediatrics and Neonatology": ["د. محمد فاضل", "د. عبد الله سعد", "د. حسن الحفناوي"],
        "Cardiothoracic Surgery": ["د. سامي أمين"],
        "Nephrology": ["د. نجم الدين محمد عامر"],
        "Urology": ["د. محمد رجب"],
        "Vascular Surgery": ["د. عبد الرحمن يحيى"],
        "Psychiatry": ["د. أحمد النحاس"]
      };
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
          setDepartment('Internal Medicine');
          setDoctor('');
          setDate('');
          setTime('');
        }, 500);
      };

      const doctorsByDepartment = {
        "Internal Medicine": ["Dr. Sayed Zaki"],
        "Dermatology": ["Dr. Essam Shaker", "Dr. Hala Shawky"],
        "Neurology": ["Dr. Suleiman Maghrabi"],
        "Ear, Nose, and Throat (ENT)": ["Dr. Abdel Sattar Hassan Khamis", "Dr. Noman Hassan Noman"],
        "Orthopedics": ["Dr. Sherif Zoheir", "Dr. Tarek Yahya", "Dr. Mohamed Fathy"],
        "General Surgery": ["Dr. Mohamed Hossam", "Dr. Mostafa El Sheikh", "Dr. Mohamed Hesham"],
        "Obstetrics and Gynecology": ["Dr. Esraa El-Bilqini", "Dr. Roqia Sayed"],
        "Cardiology": ["Dr. Hossam Magdy", "Dr. Ehab El-Hefny"],
        "Gastroenterology and Endoscopy": ["Dr. Samar Kamal"],
        "Diet and Nutrition": ["Dr. Mona Abdel Khaleq"],
        "Diabetes and Endocrinology": ["Dr. Emad Moussa"],
        "Pediatrics and Neonatology": ["Dr. Mohamed Fadel", "Dr. Abdallah Saad", "Dr. Hassan El-Hefnawy"],
        "Cardiothoracic Surgery": ["Dr. Sami Amin"],
        "Nephrology": ["Dr. Negm El-Din Mohamed Amer"],
        "Urology": ["Dr. Mohamed Ragab"],
        "Vascular Surgery": ["Dr. Abdel Rahman Yahya"],
        "Psychiatry": ["Dr. Ahmed El-Nahhas"]
      };

      const doctorsByDepartmentAr = {
        "Internal Medicine": ["د. سيد زكي"],
        "Dermatology": ["د. عصام شاكر", "د. هالة شوقي"],
        "Neurology": ["د. سليمان مغربي"],
        "Ear, Nose, and Throat (ENT)": ["د. عبد الستار حسن خميس", "د. نعمان حسن نعمان"],
        "Orthopedics": ["د. شريف زهير", "د. طارق يحيى", "د. محمد فتحي"],
        "General Surgery": ["د. محمد حسام", "د. مصطفى الشيخ", "د. محمد هشام"],
        "Obstetrics and Gynecology": ["د. إسراء البلقيني", "د. رقية سيد"],
        "Cardiology": ["د. حسام مجدي", "د. إيهاب الحفني"],
        "Gastroenterology and Endoscopy": ["د. سمر كمال"],
        "Diet and Nutrition": ["د. منى عبد الخالق"],
        "Diabetes and Endocrinology": ["د. عماد موسى"],
        "Pediatrics and Neonatology": ["د. محمد فاضل", "د. عبد الله سعد", "د. حسن الحفناوي"],
        "Cardiothoracic Surgery": ["د. سامي أمين"],
        "Nephrology": ["د. نجم الدين محمد عامر"],
        "Urology": ["د. محمد رجب"],
        "Vascular Surgery": ["د. عبد الرحمن يحيى"],
        "Psychiatry": ["د. أحمد النحاس"]
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-800/20" />
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
                    className="btn btn-primary"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('hero.bookAppointment')}
                  </button>
                  <button
                    onClick={handleEmergencyCall}
                    className="btn btn-secondary"
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
                    <label className="form-label">{t('hero.fullName')}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t('hero.phoneNumber')}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className={`form-label ${isArabic ? 'text-right' : ''}`}>{t('hero.department')}</label>
                    <select 
                      value={department}
                      onChange={(e) => {
                        setDepartment(e.target.value);
                        setDoctor('');
                      }}
                      className={`form-select ${isArabic ? 'text-right' : ''}`}
                    >
                      <option value="Internal Medicine">{isArabic ? 'الطب الباطني' : 'Internal Medicine'}</option>
                      <option value="Dermatology">{isArabic ? 'الأمراض الجلدية' : 'Dermatology'}</option>
                      <option value="Neurology">{isArabic ? 'طب الأعصاب' : 'Neurology'}</option>
                      <option value="Ear, Nose, and Throat (ENT)">{isArabic ? 'الأنف والأذن والحنجرة' : 'Ear, Nose, and Throat (ENT)'}</option>
                      <option value="Orthopedics">{isArabic ? 'جراحة العظام' : 'Orthopedics'}</option>
                      <option value="General Surgery">{isArabic ? 'الجراحة العامة' : 'General Surgery'}</option>
                      <option value="Obstetrics and Gynecology">{isArabic ? 'النساء والتوليد' : 'Obstetrics and Gynecology'}</option>
                      <option value="Cardiology">{isArabic ? 'أمراض القلب' : 'Cardiology'}</option>
                      <option value="Gastroenterology and Endoscopy">{isArabic ? 'الجهاز الهضمي والمناظير' : 'Gastroenterology and Endoscopy'}</option>
                      <option value="Diet and Nutrition">{isArabic ? 'التغذية' : 'Diet and Nutrition'}</option>
                      <option value="Diabetes and Endocrinology">{isArabic ? 'السكري والغدد الصماء' : 'Diabetes and Endocrinology'}</option>
                      <option value="Pediatrics and Neonatology">{isArabic ? 'طب الأطفال وحديثي الولادة' : 'Pediatrics and Neonatology'}</option>
                      <option value="Cardiothoracic Surgery">{isArabic ? 'جراحة القلب والصدر' : 'Cardiothoracic Surgery'}</option>
                      <option value="Nephrology">{isArabic ? 'أمراض الكلى' : 'Nephrology'}</option>
                      <option value="Urology">{isArabic ? 'المسالك البولية' : 'Urology'}</option>
                      <option value="Vascular Surgery">{isArabic ? 'جراحة الأوعية الدموية' : 'Vascular Surgery'}</option>
                      <option value="Psychiatry">{isArabic ? 'الطب النفسي' : 'Psychiatry'}</option>
                    </select>
                  </div>
                  {department && (
                    <div>
                      <label className={`form-label ${isArabic ? 'text-right' : ''}`}>
                        {t('hero.doctor')}
                      </label>
                      <select
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        className={`form-select ${isArabic ? 'text-right' : ''}`}
                      >
                        <option value="">{isArabic ? 'اختر طبيب' : 'Select a doctor'}</option>
                        {isArabic ? (doctorsByDepartmentAr[department]?.map((doc, index) => (
                          <option key={index} value={doc}>{doc}</option>
                        ))) : (doctorsByDepartment[department]?.map((doc, index) => (
                          <option key={index} value={doc}>{doc}</option>
                        )))}
                      </select>
                    </div>
                  )}
                  <div>
                    <label className="form-label">
                      {t('hero.date')}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      {t('hero.time')}
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                       className="form-input"
                    />
                  </div>
                  {formError && <p className="text-red-500 text-sm">{formError}</p>}
                  {formSuccess && <p className="text-green-500 text-sm">{formSuccess}</p>}
                  <button
                    type="submit"
                    className="btn btn-primary"
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
