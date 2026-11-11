import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Challenges from './components/Challenges';
import Products from './components/Products';
import Services from './components/Services';
import Industries from './components/Industries';
import Ecosystem from './components/Ecosystem';
import WhyChooseUsAndProcess from './components/WhyChooseUsAndProcess';
import TestimonialsAndKnowledge from './components/TestimonialsAndKnowledge';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomNav from './components/MobileBottomNav';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutUsPage from './pages/AboutUsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'products' | 'services' | 'industries' | 'solutions' | 'resources' | 'about'
  const [selectedProduct, setSelectedProduct] = useState('editlog');
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'consultation', // 'demo' or 'consultation'
  });

  // Handle URL hash changes for browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#products' || hash === '#product-page') {
        setCurrentPage('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#services' || hash === '#service-page') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#industries' || hash === '#industry-page') {
        setCurrentPage('industries');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#solutions' || hash === '#solution-page') {
        setCurrentPage('solutions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#resources' || hash === '#resource-page') {
        setCurrentPage('resources');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#about-us') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToProducts = (productId) => {
    if (productId && typeof productId === 'string') {
      setSelectedProduct(productId);
    }
    setCurrentPage('products');
    window.location.hash = '#products';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToServices = () => {
    setCurrentPage('services');
    window.location.hash = '#services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToIndustries = () => {
    setCurrentPage('industries');
    window.location.hash = '#industries';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSolutions = () => {
    setCurrentPage('solutions');
    window.location.hash = '#solutions';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToResources = () => {
    setCurrentPage('resources');
    window.location.hash = '#resources';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDemoModal = () => {
    setModalState({ isOpen: true, type: 'demo' });
  };

  const openConsultModal = () => {
    setModalState({ isOpen: true, type: 'consultation' });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F8FAFC] selection:bg-[#0052CC] selection:text-white overflow-x-hidden pb-16 md:pb-0">
      {/* 1. Header / Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateProducts={navigateToProducts}
        onNavigateServices={navigateToServices}
        onNavigateIndustries={navigateToIndustries}
        onNavigateSolutions={navigateToSolutions}
        onNavigateResources={navigateToResources}
        onNavigateAbout={navigateToAbout}
        onOpenDemoModal={openDemoModal}
        onOpenConsultModal={openConsultModal}
      />

      {/* Main Content Area based on current view */}
      <main className="flex-1 w-full">
        {currentPage === 'about' ? (
          /* Dedicated About Us Page */
          <AboutUsPage
            onNavigateHome={navigateToHome}
            onNavigateServices={navigateToServices}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
          />
        ) : currentPage === 'resources' ? (
          /* Dedicated Resource Centre Page */
          <ResourcesPage
            onNavigateHome={navigateToHome}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
          />
        ) : currentPage === 'solutions' ? (
          /* Dedicated Practical Business Solutions Page */
          <SolutionsPage
            onNavigateHome={navigateToHome}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
          />
        ) : currentPage === 'industries' ? (
          /* Dedicated Industry-Specific Solutions Page */
          <IndustriesPage
            onNavigateHome={navigateToHome}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
          />
        ) : currentPage === 'services' ? (
          /* Dedicated Business Technology Services Page */
          <ServicesPage
            onNavigateHome={navigateToHome}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
          />
        ) : currentPage === 'products' ? (
          /* Dedicated Tally Product Page */
          <ProductPage
            onNavigateHome={navigateToHome}
            onOpenDemoModal={openDemoModal}
            onOpenConsultModal={openConsultModal}
            activeProduct={selectedProduct}
          />
        ) : (
          /* Main Homepage */
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenConsultModal={openConsultModal}
              onNavigateProducts={navigateToProducts}
            />

            {/* 3. Stats & Credibility Bar */}
            <StatsBar />

            {/* 4. Challenges Section */}
            <Challenges
              onOpenConsultModal={openConsultModal}
            />

            {/* 5. Products Section */}
            <Products
              onNavigateProducts={navigateToProducts}
              onOpenDemoModal={openDemoModal}
              onOpenConsultModal={openConsultModal}
            />

            {/* 6. Services Section */}
            <Services
              onNavigateServices={navigateToServices}
              onOpenConsultModal={openConsultModal}
            />

            {/* 7. Industry Solutions Section */}
            <Industries
              onNavigateIndustries={navigateToIndustries}
              onOpenConsultModal={openConsultModal}
            />

            {/* 8. Automation & Ecosystem Flow Section */}
            <Ecosystem
              onNavigateSolutions={navigateToSolutions}
              onOpenConsultModal={openConsultModal}
            />

            {/* 9. Why Choose Us & Implementation Process Section */}
            <WhyChooseUsAndProcess />

            {/* 10. Customer Testimonials & Knowledge Centre Section */}
            <TestimonialsAndKnowledge
              onNavigateResources={navigateToResources}
            />

            {/* 12. Bottom Call to Action Banner */}
            <BottomCTA
              onOpenConsultModal={openConsultModal}
              onOpenDemoModal={openDemoModal}
            />
          </>
        )}
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateProducts={navigateToProducts}
        onNavigateServices={navigateToServices}
        onNavigateIndustries={navigateToIndustries}
        onNavigateSolutions={navigateToSolutions}
        onNavigateResources={navigateToResources}
        onNavigateAbout={navigateToAbout}
        onOpenConsultModal={openConsultModal}
        onOpenDemoModal={openDemoModal}
      />

      {/* Interactive Lead / Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
      />

      {/* Quick WhatsApp Action Floating Button (Desktop) */}
      <FloatingWhatsApp />

      {/* Mobile Bottom Navigation Bar (Mobile / Responsive) */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateProducts={navigateToProducts}
        onOpenConsultModal={openConsultModal}
      />
    </div>
  );
}
