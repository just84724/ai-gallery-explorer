
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="ghost" className="gap-2 text-purple-600 hover:text-pink-600 hover:bg-purple-100 font-bold text-lg">
                <ArrowLeft size={20} />
                返回首頁
              </Button>
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
            <h1 className="text-4xl md:text-6xl font-black font-display mb-4">完整作品集</h1>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-purple-200 shadow-lg">
            <p className="text-gray-800 text-xl font-bold max-w-2xl leading-relaxed">
              探索所有由AI創作的藝術作品，這裡展示了各種風格和主題的精彩創作。
            </p>
          </div>
          
          <GalleryGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
