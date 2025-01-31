import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Brain, Baby, Stethoscope, Syringe, Activity, Microscope, Pill, Bone, Eye, UserPlus, Scale, Stethoscope as Internal, Sun as Lung, LucideKey as Kidney, FlaskRound as Flask, Ear, Scissors, HeartPulse, Dna, Speech, Brain as Psych } from 'lucide-react';

    const services = [
  {
    icon: Heart,
    title: 'Cardiothoracic Surgery',
    titleAr: 'جراحة قلب وصدر',
    description: 'Open-heart surgery, thoracic surgery, and major vascular procedures',
    descriptionAr: 'جراحات القلب المفتوح، جراحات الصدر، وجراحات الأوعية الدموية الكبرى'
  },
  {
    icon: HeartPulse,
    title: 'Cardiology',
    titleAr: 'قلب وأوعية دموية',
    description: 'Diagnostic and therapeutic cardiac catheterization',
    descriptionAr: 'قسطرة القلب التشخيصية والعلاجية'
  },
  {
    icon: Internal,
    title: 'Internal Medicine',
    titleAr: 'باطنة',
    description: 'General internal medicine with ICU and infectious diseases',
    descriptionAr: 'الطب الباطني العام مع العناية المركزة والأمراض المعدية'
  },
  {
    icon: Lung,
    title: 'Gastroenterology',
    titleAr: 'جهاز هضمي ومناظير',
    description: 'Diagnostic and therapeutic endoscopy services',
    descriptionAr: 'خدمات المناظير التشخيصية والعلاجية'
  },
  {
    icon: Flask,
    title: 'Diabetes & Endocrinology',
    titleAr: 'سكر وغدد صماء',
    description: 'Treatment of diabetes and endocrine disorders',
    descriptionAr: 'علاج السكري واضطرابات الغدد الصماء'
  },
  {
    icon: Kidney,
    title: 'Nephrology',
    titleAr: 'أمراض كلى',
    description: 'Kidney diseases, dialysis, and transplant services',
    descriptionAr: 'أمراض الكلى، الغسيل الكلوي، وخدمات زراعة الكلى'
  },
  {
    icon: Microscope,
    title: 'Oncology',
    titleAr: 'أورام',
    description: 'Medical, radiation, and surgical oncology',
    descriptionAr: 'علاج الأورام الطبي والإشعاعي والجراحي'
  },
  {
    icon: Ear,
    title: 'ENT',
    titleAr: 'أنف وأذن وحنجرة',
    description: 'ENT surgery and hearing disorders treatment',
    descriptionAr: 'جراحة الأنف والأذن والحنجرة وعلاج اضطرابات السمع'
  },
  {
    icon: Scissors,
    title: 'Vascular Surgery',
    titleAr: 'جراحة أوعية دموية',
    description: 'Treatment of varicose veins and arterial diseases',
    descriptionAr: 'علاج الدوالي وأمراض الشرايين'
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    titleAr: 'أطفال وحديثي الولادة',
    description: 'Pediatric care with NICU facilities',
    descriptionAr: 'رعاية الأطفال مع وحدة العناية المركزة لحديثي الولادة'
  },
  {
    icon: Stethoscope,
    title: 'Urology',
    titleAr: 'مسالك بولية',
    description: 'Urological surgery and prostate treatment',
    descriptionAr: 'جراحة المسالك البولية وعلاج البروستاتا'
  },
  {
    icon: Brain,
    title: 'Neurology',
    titleAr: 'مخ وأعصاب',
    description: 'Treatment of neurological disorders and stroke',
    descriptionAr: 'علاج الاضطرابات العصبية والسكتة الدماغية'
  },
  {
    icon: UserPlus,
    title: 'Obstetrics & Gynecology',
    titleAr: 'نساء وتوليد',
    description: 'Pregnancy care and gynecological surgery',
    descriptionAr: 'رعاية الحمل وجراحة النساء'
  },
  {
    icon: Scale,
    title: 'Bariatric Surgery',
    titleAr: 'جراحة سمنة',
    description: 'Weight loss surgery and follow-up care',
    descriptionAr: 'جراحات إنقاص الوزن ورعاية المتابعة'
  },
  {
    icon: Speech,
    title: 'Speech Therapy',
    titleAr: 'نطق وتخاطب',
    description: 'Treatment of speech and communication disorders',
    descriptionAr: 'علاج اضطرابات النطق والتواصل'
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