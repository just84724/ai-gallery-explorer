
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Wand } from 'lucide-react';

const Hero = () => {
  // Helper function to scroll to the gallery section
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Updated background with more AI art styled gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gallery-red/30 via-purple-600/40 to-gallery-blue/50"
          style={{
            backgroundImage: `url('/lovable-uploads/1d5c1738-fbf5-493d-989f-fce892f255fb.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-white">
            探索<span className="text-gallery-red">AI</span>藝術的<br />無限可能
          </h1>
          <p className="text-xl mb-8 text-gray-200 max-w-lg">
            在這裡發現由人工智能創作的震撼藝術作品，沉浸於創新與美學的完美融合。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-gallery-red hover:bg-gallery-red/90 text-white px-8 py-6 text-lg"
              onClick={scrollToGallery}
            >
              開始探索
            </Button>
            <Link to="/blog">
              <Button 
                variant="outline" 
                className="border-gallery-teal text-gallery-teal hover:bg-gallery-teal/10 px-8 py-6 text-lg"
              >
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-gradient-to-r from-gallery-red to-purple-600"></div>
    </section>
  );
};

export default Hero;
