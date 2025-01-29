import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Heart, Brain, Baby, Eye, Stethoscope, Syringe } from 'lucide-react';

    const services = [
      {
        icon: Heart,
        title: 'Cardiac Care',
        titleAr: 'رعاية القلب',
        description: 'State-of-the-art cardiac and vascular surgery with latest Philips catheter devices.',
        descriptionAr: 'جراحة القلب والأوعية الدموية المتطورة مع أحدث أجهزة قسطرة فيليبس.'
      },
      {
        icon: Brain,
        title: 'Neurosurgery',
        titleAr: 'جراحة المخ والأعصاب',
        description: 'Expert treatment of complex neurological conditions with advanced techniques.',
        descriptionAr: 'علاج متخصص لحالات المخ والأعصاب المعقدة بتقنيات متقدمة.'
      },
      {
        icon: Baby,
        title: 'Pediatrics',
        titleAr: 'طب الأطفال',
        description: 'Specialized care for children and newborns with 24/7 NICU support.',
        descriptionAr: 'رعاية متخصصة للأطفال وحديثي الولادة مع دعم وحدة العناية المركزة على مدار الساعة.'
      },
      {
        icon: Eye,
        title: 'Ophthalmology',
        titleAr: 'طب العيون',
        description: 'Comprehensive diagnosis and treatment of all eye diseases.',
        descriptionAr: 'تشخيص وعلاج شامل لجميع أمراض العيون.'
      },
      {
        icon: Stethoscope,
        title: 'Internal Medicine',
        titleAr: 'الطب الباطني',
        description: 'Expert diagnosis and treatment of various internal medical conditions.',
        descriptionAr: 'تشخيص وعلاج متخصص لمختلف الحالات الطبية الباطنية.'
      },
      {
        icon: Syringe,
        title: 'Oncology',
        titleAr: 'علاج الأورام',
        description: 'Advanced cancer diagnosis and treatment with personalized care plans.',
        descriptionAr: 'تشخيص وعلاج متقدم للسرطان مع خطط رعاية شخصية.'
      }
    ];

    const Services = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('services.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:scale-102"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{isArabic ? service.titleAr : service.title}</h3>
                    <p className="text-gray-600">{isArabic ? service.descriptionAr : service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    };

    export default Services;
