import React from 'react';
import { useTranslation } from 'react-i18next';

const departments = [
  {
    name: "Cardiac Center",
    nameAr: "مركز القلب",
    description: "State-of-the-art cardiac care with latest technologies",
    descriptionAr: "رعاية قلبية متطورة مع أحدث التقنيات",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
  },
  {
    name: "Neurology Department",
    nameAr: "قسم المخ والأعصاب",
    description: "Expert treatment for neurological conditions",
    descriptionAr: "علاج متخصص لحالات المخ والأعصاب",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
  },
  {
    name: "Pediatrics Unit",
    nameAr: "وحدة الأطفال",
    description: "Specialized care for children with 24/7 NICU",
    descriptionAr: "رعاية متخصصة للأطفال مع وحدة عناية مركزة للأطفال حديثي الولادة",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80"
  }
];

const Departments = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'أقسامنا الطبية' : 'Our Medical Departments'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? 'أقسام متخصصة مجهزة بأحدث التقنيات الطبية لتقديم أفضل رعاية للمرضى'
              : 'Specialized departments equipped with the latest medical technologies to provide the best patient care'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={isArabic ? dept.nameAr : dept.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {isArabic ? dept.nameAr : dept.name}
                </h3>
                <p className="text-gray-600">
                  {isArabic ? dept.descriptionAr : dept.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
