import React from 'react';
import { useTranslation } from 'react-i18next';

const departments = [
  {
    name: "Cardiothoracic Surgery",
    nameAr: "جراحة قلب وصدر",
    description: "Open-heart surgery, thoracic surgery, and major vascular procedures with state-of-the-art facilities",
    descriptionAr: "جراحات القلب المفتوح، جراحات الصدر، وجراحات الأوعية الدموية الكبرى مع أحدث المرافق",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
  },
  {
    name: "Internal Medicine & ICU",
    nameAr: "الباطنة والعناية المركزة",
    description: "Comprehensive internal medicine care with advanced ICU facilities",
    descriptionAr: "رعاية طبية باطنية شاملة مع مرافق عناية مركزة متطورة",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80"
  },
  {
    name: "Oncology Center",
    nameAr: "مركز الأورام",
    description: "Complete cancer care including medical, radiation, and surgical oncology",
    descriptionAr: "رعاية شاملة للأورام تشمل العلاج الطبي والإشعاعي والجراحي",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80"
  },
  {
    name: "Nephrology & Dialysis",
    nameAr: "الكلى والغسيل الكلوي",
    description: "Advanced kidney care with modern dialysis units and transplant services",
    descriptionAr: "رعاية متقدمة للكلى مع وحدات غسيل كلوي حديثة وخدمات زراعة الكلى",
    image: "https://unsplash.com/photos/a-man-in-a-blue-lab-coat-holding-a-syringe-7vActJfluGw"
  },
  {
    name: "Bariatric Surgery Center",
    nameAr: "مركز جراحة السمنة",
    description: "Specialized weight loss surgery with comprehensive follow-up care",
    descriptionAr: "جراحات متخصصة لإنقاص الوزن مع رعاية متابعة شاملة",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80"
  },
  {
    name: "Women's Health Center",
    nameAr: "مركز صحة المرأة",
    description: "Complete women's healthcare including obstetrics, gynecology, and specialized surgeries",
    descriptionAr: "رعاية صحية شاملة للمرأة تشمل التوليد وأمراض النساء والجراحات المتخصصة",
    image: "https://unsplash.com/photos/white-blue-and-orange-medication-pill-KltoLK6Mk-g"
  },
  {
    name: "Neurology & Neurosurgery",
    nameAr: "المخ والأعصاب",
    description: "Advanced neurological care and specialized brain and spine surgeries",
    descriptionAr: "رعاية عصبية متقدمة وجراحات متخصصة للمخ والعمود الفقري",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
  },
  {
    name: "Pediatrics & NICU",
    nameAr: "الأطفال والحضانات",
    description: "Specialized pediatric care with advanced NICU facilities",
    descriptionAr: "رعاية متخصصة للأطفال مع وحدة عناية مركزة متطورة لحديثي الولادة",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80"
  }
];

const Departments = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {isArabic ? 'مراكزنا الطبية المتخصصة' : 'Our Specialized Medical Centers'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? 'مراكز متخصصة مجهزة بأحدث التقنيات الطبية وفريق طبي متميز لتقديم أفضل رعاية للمرضى'
              : 'Specialized centers equipped with the latest medical technologies and expert medical staff to provide the best patient care'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={dept.image}
                  alt={isArabic ? dept.nameAr : dept.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
