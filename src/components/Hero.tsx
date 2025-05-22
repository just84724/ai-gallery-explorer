
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageIcon } from 'lucide-react';
import { artworks } from '@/data/artworks';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const Hero = () => {
  // Helper function to scroll to the gallery section
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select featured artworks to display in the carousel
  const featuredArtworks = artworks.slice(0, 6);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with AI art styled gradient */}
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
                <ImageIcon className="mr-2 h-5 w-5" />
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
          
          {/* Carousel for AI Artworks */}
          <div className="hidden lg:block">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {featuredArtworks.map((artwork) => (
                  <CarouselItem key={artwork.id}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-xl shadow-lg">
                        <div className="relative pb-[100%]">
                          <img 
                            src={artwork.imageSrc} 
                            alt={artwork.title} 
                            className="absolute inset-0 w-full h-full object-contain bg-black"
                          />
                        </div>
                        <div className="bg-black/70 text-white p-3">
                          <h3 className="text-lg font-semibold">{artwork.title}</h3>
                          <p className="text-sm text-gallery-red">{artwork.artist}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-black/40 text-white hover:bg-black/60" />
              <CarouselNext className="right-0 bg-black/40 text-white hover:bg-black/60" />
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-gradient-to-r from-gallery-red to-purple-600"></div>
    </section>
  );
};

export default Hero;
