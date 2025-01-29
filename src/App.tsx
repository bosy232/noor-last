import React, { useEffect } from 'react';
    import { useTranslation } from 'react-i18next';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import Services from './components/Services';
    import Doctors from './components/Doctors';
    import Departments from './components/Departments';
    import Contact from './components/Contact';
    import Footer from './components/Footer';
    import Testimonials from './components/Testimonials';
    import AboutUs from './components/AboutUs';
    import CallToAction from './components/CallToAction';
    import './i18n';

    function App() {
      const { i18n } = useTranslation();
      const isArabic = i18n.language === 'ar';

      useEffect(() => {
        // Set the initial direction for the entire document
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
      }, [isArabic]);

      return (
        <div 
          className={`min-h-screen bg-white ${isArabic ? 'font-arabic' : ''}`}
          style={{ scrollBehavior: 'smooth' }}
        >
          <Navbar />
          <Hero />
          <Services />
          <Departments />
          <Doctors />
          <Testimonials />
          <AboutUs />
          <CallToAction />
          <Contact />
          <Footer />
        </div>
      );
    }

    export default App;
