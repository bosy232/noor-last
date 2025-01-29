import React from 'react';
    import { useTranslation } from 'react-i18next';
import zaki from '../assets/images/zaki.jpg';

    const doctors = [
      {
        name: "Dr. El-Sayed Zaki",
        nameAr: "د. السيد زكي",
        specialty: "Internal Medicine",
        specialtyAr: "الطب الباطني",
        image: zaki
      },
      {
        name: "Dr. Mahmoud Nassar",
        nameAr: "د. محمود نصار",
        specialty: "General Surgery",
        specialtyAr: "الجراحة العامة",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Mohamed Ragab",
        nameAr: "د. محمد رجب",
        specialty: "Urology",
        specialtyAr: "المسالك البولية",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
      },
      {
        name: "Dr. Wafaa Khaled",
        nameAr: "د. وفاء خالد",
        specialty: "Obstetrics and Gynecology",
        specialtyAr: "النساء والتوليد",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
      }
    ];

    const Doctors = () => {
      const { i18n, t } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <section id="doctors" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('doctors.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('doctors.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={isArabic ? doctor.nameAr : doctor.name}
                      className="w-full h-full object-cover transition-transform transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {isArabic ? doctor.nameAr : doctor.name}
                    </h3>
                    <p className="text-primary-600">
                      {isArabic ? doctor.specialtyAr : doctor.specialty}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Doctors;
