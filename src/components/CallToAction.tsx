import React from 'react';
    import { useTranslation } from 'react-i18next';

    const CallToAction = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <section className="py-20 bg-primary-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isArabic ? 'هل أنت مستعد لتلقي أفضل رعاية صحية؟' : 'Ready to Experience the Best Healthcare?'}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              {isArabic
                ? 'احجز موعدك اليوم واستمتع برعاية طبية متميزة في مستشفى نور الشروق.'
                : 'Book your appointment today and experience exceptional medical care at Noor Al-Shorouk Hospital.'}
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transform hover:scale-105"
                aria-label={isArabic ? 'اتصل بنا الآن' : 'Contact Us Now'}
              >
                {isArabic ? 'اتصل بنا الآن' : 'Contact Us Now'}
              </a>
            </div>
          </div>
        </section>
      );
    };

    export default CallToAction;
