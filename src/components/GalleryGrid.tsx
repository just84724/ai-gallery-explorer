
import { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { artworks } from '@/data/artworks';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const GalleryGrid = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');

  const handleArtworkClick = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setModalOpen(true);
  };

  // Sort artworks based on selected option
  const sortedArtworks = [...artworks].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'popular') {
      return b.likes - a.likes;
    } else {
      return 0; // default
    }
  });

  return (
    <div>
      <div className="flex justify-end mb-6">
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="排序方式" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">最新上傳</SelectItem>
            <SelectItem value="popular">最受歡迎</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedArtworks.map((artwork) => (
          <ArtworkCard 
            key={artwork.id}
            id={artwork.id}
            title={artwork.title}
            artist={artwork.artist}
            imageSrc={artwork.imageSrc}
            onClick={() => handleArtworkClick(artwork)}
          />
        ))}
      </div>
      
      <ArtworkModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artwork={selectedArtwork}
      />
    </div>
  );
};

export default GalleryGrid;
