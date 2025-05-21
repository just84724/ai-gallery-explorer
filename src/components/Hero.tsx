
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      {/* Updated background with AI art styled gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gallery-red/20 via-gallery-teal/30 to-gallery-gold/20"
          style={{
            backgroundImage: `url('/lovable-uploads/ae505838-0056-4ffe-b0f7-3988d740ec1e.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
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
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-gradient-to-r from-gallery-red to-gallery-gold"></div>
    </section>
  );
};

export default Hero;
