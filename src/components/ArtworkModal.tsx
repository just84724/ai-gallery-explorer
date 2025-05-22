
import { useState, useEffect } from 'react';
import { X, Heart } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useFavorites from '@/hooks/useFavorites';

interface ArtworkModalProps {
  artwork: {
    id: string;
    title: string;
    artist: string;
    description: string;
    imageSrc: string;
    date: string;
    medium?: string;  // Make optional to match the Artwork type
    dimensions?: string;  // Make optional to match the Artwork type
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (artwork) {
      setFavorite(isFavorite(artwork.id));
    }
  }, [artwork, isFavorite]);

  const handleFavoriteClick = () => {
    if (!artwork) return;
    
    if (favorite) {
      removeFavorite(artwork.id);
      toast({
        title: "已從收藏中移除",
        description: "作品已從您的收藏中移除",
      });
    } else {
      addFavorite(artwork.id);
      toast({
        title: "已加入收藏",
        description: "作品已加入您的收藏",
      });
    }
    
    setFavorite(!favorite);
  };

  if (!artwork) return null;

  // Set default values for medium and dimensions if they're missing
  const medium = artwork.medium || 'Digital Art';
  const dimensions = artwork.dimensions || 'Variable';

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative h-[300px] md:h-full">
              <img
                src={artwork.imageSrc}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/20 text-white hover:bg-black/40"
                onClick={handleFavoriteClick}
              >
                <Heart 
                  size={20}
                  className={favorite ? "fill-gallery-red text-gallery-red" : ""}
                />
              </Button>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6 overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{artwork.title}</h2>
                <p className="text-gallery-red font-medium">{artwork.artist}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500">描述</h3>
                <p className="mt-1 text-gray-700">{artwork.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">日期</h3>
                  <p className="mt-1 text-gray-700">{artwork.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">媒介</h3>
                  <p className="mt-1 text-gray-700">{medium}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">尺寸</h3>
                  <p className="mt-1 text-gray-700">{dimensions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
