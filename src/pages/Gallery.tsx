
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Set page title
  useEffect(() => {
    document.title = '完整作品集 - AI畫廊';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft size={18} />
                返回首頁
              </Button>
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">完整作品集</h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            探索所有由AI創作的藝術作品，這裡展示了各種風格和主題的精彩創作。
          </p>
          
          <GalleryGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
