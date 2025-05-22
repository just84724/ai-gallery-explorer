
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Gallery } from 'lucide-react';
import { artworks } from '@/data/artworks';

const Hero = () => {
  // Helper function to scroll to the gallery section
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select a subset of artworks to display as thumbnails
  const thumbnailArtworks = artworks.slice(0, 6);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
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
                <Gallery className="mr-2 h-5 w-5" />
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
          
          {/* Thumbnail Grid for AI Artworks */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-3 perspective-800">
              {thumbnailArtworks.map((artwork, index) => (
                <div 
                  key={artwork.id}
                  className={`
                    rounded-lg overflow-hidden shadow-lg transform transition-all duration-500
                    hover:scale-105 hover:z-10 opacity-90 hover:opacity-100
                    ${index === 0 || index === 5 ? 'rotate-3' : ''}
                    ${index === 2 || index === 3 ? '-rotate-3' : ''}
                  `}
                >
                  <img 
                    src={artwork.imageSrc}
                    alt={artwork.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-gradient-to-r from-gallery-red to-purple-600"></div>
    </section>
  );
};

export default Hero;
