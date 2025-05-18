
import { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { artworks } from '@/data/artworks';

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleArtworkClick = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-display mb-2">精選作品</h2>
        <p className="text-muted-foreground mb-8">探索我們最新與最受歡迎的AI藝術作品</p>
        
        <Tabs defaultValue="popular" className="mb-8">
          <TabsList>
            <TabsTrigger value="popular">熱門作品</TabsTrigger>
            <TabsTrigger value="recent">最新作品</TabsTrigger>
            <TabsTrigger value="featured">編輯精選</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {artworks.slice(0, 8).sort((a, b) => b.likes - a.likes).map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {[...artworks].slice(0, 8).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {[...artworks].sort(() => 0.5 - Math.random()).slice(0, 8).map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="px-8">
              查看更多作品
            </Button>
          </Link>
        </div>
        
        <ArtworkModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          artwork={selectedArtwork}
        />
      </div>
    </section>
  );
};

export default GallerySection;
