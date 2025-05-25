
import { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { artworkService, Artwork } from '@/services/artworkService';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GalleryGrid = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch artworks when component mounts or sort option changes
  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      try {
        const data = await artworkService.getAllArtworks({ 
          sortBy: sortOption as 'newest' | 'popular' | 'views'
        });
        setArtworks(data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [sortOption]);

  const handleArtworkClick = async (artwork: Artwork) => {
    try {
      // Get the updated artwork with incremented view count
      const updatedArtwork = await artworkService.getArtworkById(artwork.id);
      if (updatedArtwork) {
        setSelectedArtwork(updatedArtwork);
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Error fetching artwork details:', error);
    }
  };

  return (
    <div>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-2 border-purple-300 shadow-lg">
          <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 font-bold">所有作品</TabsTrigger>
          <TabsTrigger value="popular" className="data-[state=active]:bg-white data-[state=active]:text-pink-600 font-bold">最受歡迎</TabsTrigger>
          <TabsTrigger value="views" className="data-[state=active]:bg-white data-[state=active]:text-orange-600 font-bold">最多瀏覽</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="flex justify-end mb-6">
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px] border-2 border-purple-300 bg-white shadow-lg font-bold text-purple-700">
                <SelectValue placeholder="排序方式" />
              </SelectTrigger>
              <SelectContent className="border-2 border-purple-300">
                <SelectItem value="newest" className="font-bold text-purple-700">最新上傳</SelectItem>
                <SelectItem value="popular" className="font-bold text-pink-700">最受歡迎</SelectItem>
                <SelectItem value="views" className="font-bold text-orange-700">最多瀏覽</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>
        
        <TabsContent value="popular">
          {/* Content for popular tab */}
        </TabsContent>
        
        <TabsContent value="views">
          {/* Content for most viewed tab */}
        </TabsContent>
      </Tabs>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="aspect-[3/4] rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 animate-pulse border-2 border-purple-300 shadow-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
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
      )}
      
      <ArtworkModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artwork={selectedArtwork}
      />
    </div>
  );
};

export default GalleryGrid;
