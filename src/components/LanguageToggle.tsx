import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Globe } from 'lucide-react';

    const LanguageToggle = () => {
      const { i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      const toggleLanguage = () => {
        i18n.changeLanguage(isArabic ? 'en' : 'ar');
        // Force RTL/LTR for the entire document
        document.documentElement.dir = isArabic ? 'ltr' : 'rtl';
      };

      return (
        <button
          onClick={toggleLanguage}
          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all shadow-md hover:shadow-lg ${
            isArabic ? 'flex-row-reverse' : ''
          }`}
          aria-label="Toggle language"
        >
          <Globe className="w-5 h-5" />
          <span className={`text-sm font-medium ${isArabic ? 'font-arabic' : ''}`}>
            {isArabic ? 'English' : 'عربي'}
          </span>
        </button>
      );
    };

    export default LanguageToggle;
