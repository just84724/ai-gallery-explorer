
import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { artworkService, Artwork } from '@/services/artworkService';
import { Loader2 } from 'lucide-react';

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [popularArtworks, setPopularArtworks] = useState<Artwork[]>([]);
  const [recentArtworks, setRecentArtworks] = useState<Artwork[]>([]);
  const [featuredArtworks, setFeaturedArtworks] = useState<Artwork[]>([]);
  const [mostViewedArtworks, setMostViewedArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch artworks when component mounts
    const fetchArtworks = async () => {
      setLoading(true);
      try {
        // Fetch popular artworks
        const popular = await artworkService.getAllArtworks({
          sortBy: 'popular',
          limit: 8
        });
        setPopularArtworks(popular);

        // Fetch recent artworks
        const recent = await artworkService.getAllArtworks({
          sortBy: 'newest',
          limit: 8
        });
        setRecentArtworks(recent);

        // Fetch most viewed artworks
        const mostViewed = await artworkService.getAllArtworks({
          sortBy: 'views',
          limit: 8
        });
        setMostViewedArtworks(mostViewed);

        // For featured artworks, we'll get all and shuffle to simulate editorial picks
        const all = await artworkService.getAllArtworks();
        const shuffled = [...all].sort(() => 0.5 - Math.random()).slice(0, 8);
        setFeaturedArtworks(shuffled);
      } catch (error) {
        console.error('Failed to fetch artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const handleArtworkClick = async (artwork: Artwork) => {
    // Get the full artwork details
    const fullArtwork = await artworkService.getArtworkById(artwork.id);
    if (fullArtwork) {
      setSelectedArtwork(fullArtwork);
      setModalOpen(true);
    }
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-display mb-2">精選作品</h2>
        <p className="text-muted-foreground mb-8">探索我們最新與最受歡迎的AI藝術作品</p>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-gallery-red" />
            <span className="ml-2 text-lg">載入作品中...</span>
          </div>
        ) : (
          <Tabs defaultValue="popular" className="mb-8">
            <TabsList>
              <TabsTrigger value="popular">熱門作品</TabsTrigger>
              <TabsTrigger value="recent">最新作品</TabsTrigger>
              <TabsTrigger value="featured">編輯精選</TabsTrigger>
              <TabsTrigger value="views">瀏覽最多</TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                {popularArtworks.map((artwork) => (
                  <ArtworkCard 
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    artist={artwork.artist}
                    imageSrc={artwork.imageSrc}
                    likes={artwork.likes}
                    views={artwork.views}
                    onClick={() => handleArtworkClick(artwork)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                {recentArtworks.map((artwork) => (
                  <ArtworkCard 
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    artist={artwork.artist}
                    imageSrc={artwork.imageSrc}
                    likes={artwork.likes}
                    views={artwork.views}
                    onClick={() => handleArtworkClick(artwork)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="featured" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                {featuredArtworks.map((artwork) => (
                  <ArtworkCard 
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    artist={artwork.artist}
                    imageSrc={artwork.imageSrc}
                    likes={artwork.likes}
                    views={artwork.views}
                    onClick={() => handleArtworkClick(artwork)}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="views" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                {mostViewedArtworks.map((artwork) => (
                  <ArtworkCard 
                    key={artwork.id}
                    id={artwork.id}
                    title={artwork.title}
                    artist={artwork.artist}
                    imageSrc={artwork.imageSrc}
                    likes={artwork.likes}
                    views={artwork.views}
                    onClick={() => handleArtworkClick(artwork)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
        
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
