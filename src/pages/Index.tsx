
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GallerySection from '@/components/GallerySection';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import PersonalArtworkSection from '@/components/PersonalArtworkSection';

const Index = () => {
  // Set page title
  useEffect(() => {
    document.title = 'AI畫廊 - 探索AI藝術的無限可能';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GallerySection />
        <BlogSection />
        <PersonalArtworkSection />
        <StatsSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
