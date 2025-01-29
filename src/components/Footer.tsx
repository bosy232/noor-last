import React from 'react';
    import { useTranslation } from 'react-i18next';

    const Footer = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <footer className="bg-primary-500 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-100 text-sm">
              &copy; {new Date().getFullYear()} Noor Al-Shorouk Hospital. All rights reserved.
            </p>
          </div>
        </footer>
      );
    };

    export default Footer;
