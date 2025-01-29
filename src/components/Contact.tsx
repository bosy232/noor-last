import React, { useState } from 'react';
    import { useTranslation } from 'react-i18next';
    import { MapPin, Phone, Mail } from 'lucide-react';

    const Contact = () => {
      const { t, i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [formError, setFormError] = useState('');
      const [formSuccess, setFormSuccess] = useState('');

      const handleSendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        setFormError('');
        setFormSuccess('');

        if (!name || !email || !message) {
          setFormError(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields.');
          return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setFormError(isArabic ? 'البريد الإلكتروني غير صالح' : 'Invalid email address.');
          return;
        }

        // Simulate form submission
        setTimeout(() => {
          setFormSuccess(isArabic ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        }, 500);
      };

      return (
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-6">
                  {t('contact.info')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary-600" />
                    <p className="text-gray-600">
                      {isArabic
                        ? 'مدينة الشروق، المدخل الأول من ميدان الحرية، الحي الثامن، القاهرة'
                        : 'Al-Shorouk City, First Entrance from Al-Hurriya Square, 8th District, Cairo'}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="https://maps.app.goo.gl/o2SjoHhxGLmNc6RU8" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                      <p className="text-gray-600 hover:text-primary-700 transition-colors">
                        {isArabic ? 'عرض الموقع على الخريطة' : 'View on Google Maps'}
                      </p>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="text-gray-600">02-26888860</p>
                      <p className="text-gray-600">011-13444234</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary-600" />
                    <p className="text-gray-600">info@nshospital.net</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-6">
                  {t('contact.sendMessage')}
                </h3>
                <form className="space-y-4" onSubmit={handleSendMessage}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.message')}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  {formError && <p className="text-red-500 text-sm">{formError}</p>}
                  {formSuccess && <p className="text-green-500 text-sm">{formSuccess}</p>}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    {t('contact.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Contact;
