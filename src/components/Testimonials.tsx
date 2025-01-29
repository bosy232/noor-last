import React from 'react';
    import { useTranslation } from 'react-i18next';

    const testimonials = [
      {
        name: "Aisha Mahmoud",
        nameAr: "عائشة محمود",
        text: "The care I received at Noor Al-Shorouk was exceptional. The staff was compassionate and professional.",
        textAr: "كانت الرعاية التي تلقيتها في مستشفى نور الشروق استثنائية. كان الموظفون متعاطفين ومهنيين.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Ahmed Hassan",
        nameAr: "أحمد حسن",
        text: "I was impressed by the advanced technology and the expertise of the doctors. Highly recommended!",
        textAr: "لقد أُعجبت بالتكنولوجيا المتقدمة وخبرة الأطباء. موصى به بشدة!",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1000&q=80"
      },
      {
        name: "Fatma Ali",
        nameAr: "فاطمة علي",
        text: "The nursing staff was incredibly caring and attentive. They made my stay comfortable.",
        textAr: "كان طاقم التمريض يتمتع برعاية واهتمام كبيرين. لقد جعلوا إقامتي مريحة.",
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=1000&q=80"
      }
    ];

    const Testimonials = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      return (
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {isArabic ? 'آراء مرضانا' : 'Patient Testimonials'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {isArabic
                  ? 'اطلع على تجارب مرضانا الذين تلقوا رعاية استثنائية في مستشفى نور الشروق.'
                  : 'Read what our patients have to say about their exceptional care at Noor Al-Shorouk Hospital.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={isArabic ? testimonial.nameAr : testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {isArabic ? testimonial.nameAr : testimonial.name}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    {isArabic ? testimonial.textAr : testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Testimonials;
