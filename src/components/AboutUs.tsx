import React from 'react';
    import { useTranslation } from 'react-i18next';

    const AboutUs = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'عن مستشفى نور الشروق' : 'About Noor Al-Shorouk Hospital'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isArabic
                  ? 'تعرف على المزيد حول مهمتنا ورؤيتنا وقيمنا التي توجهنا في تقديم أفضل رعاية صحية.'
                  : 'Learn more about our mission, vision, and values that guide us in providing the best healthcare.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1512102438733-bfa4ed29aef7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hospital Team"
                  className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {isArabic ? 'مهمتنا' : 'Our Mission'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {isArabic
                    ? 'مهمتنا هي تقديم رعاية صحية عالية الجودة وشاملة لجميع المرضى، مع التركيز على الابتكار والرحمة والتميز.'
                    : 'Our mission is to provide high-quality, comprehensive healthcare to all patients, with a focus on innovation, compassion, and excellence.'}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {isArabic ? 'رؤيتنا' : 'Our Vision'}
                </h3>
                <p className="text-gray-700 mb-6">
                  {isArabic
                    ? 'رؤيتنا هي أن نكون المستشفى الرائد في المنطقة، والمعروف بالرعاية المبتكرة والنتائج المتميزة.'
                    : 'Our vision is to be the leading hospital in the region, known for innovative care and outstanding outcomes.'}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {isArabic ? 'قيمنا' : 'Our Values'}
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li className="mb-2">
                    {isArabic ? 'الرحمة' : 'Compassion'}
                  </li>
                  <li className="mb-2">
                    {isArabic ? 'التميز' : 'Excellence'}
                  </li>
                  <li className="mb-2">
                    {isArabic ? 'الابتكار' : 'Innovation'}
                  </li>
                  <li className="mb-2">
                    {isArabic ? 'النزاهة' : 'Integrity'}
                  </li>
                  <li className="mb-2">
                    {isArabic ? 'العمل الجماعي' : 'Teamwork'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default AboutUs;
