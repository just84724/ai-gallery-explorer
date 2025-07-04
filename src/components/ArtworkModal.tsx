
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useFavorites from '@/hooks/useFavorites';
import { artworkService, Artwork } from '@/services/artworkService';
import ShareButton from './ShareButton';

interface ArtworkModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtworkModal = ({ artwork, isOpen, onClose }: ArtworkModalProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);
  const [liking, setLiking] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (artwork) {
      setFavorite(isFavorite(artwork.id));
      setLikesCount(artwork.likes);
    }
  }, [artwork, isFavorite]);

  const handleFavoriteClick = async () => {
    if (!artwork) return;
    
    const newFavoriteState = !favorite;
    
    try {
      if (newFavoriteState) {
        await artworkService.addToFavorites(artwork.id);
        addFavorite(artwork.id);
        toast({
          title: "已加入收藏",
          description: "作品已加入您的收藏",
        });
      } else {
        await artworkService.removeFromFavorites(artwork.id);
        removeFavorite(artwork.id);
        toast({
          title: "已從收藏中移除",
          description: "作品已從您的收藏中移除",
        });
      }
      
      setFavorite(newFavoriteState);
    } catch (error) {
      toast({
        title: "操作失敗",
        description: "無法更新收藏狀態，請稍後再試",
        variant: "destructive"
      });
    }
  };

  const handleLikeClick = async () => {
    if (!artwork || liking) return;
    
    setLiking(true);
    try {
      const updatedArtwork = await artworkService.likeArtwork(artwork.id);
      setLikesCount(updatedArtwork.likes);
      toast({
        title: "點讚成功",
        description: "感謝您對這件作品的喜愛！",
      });
    } catch (error) {
      toast({
        title: "點讚失敗",
        description: "無法更新點讚數量，請稍後再試",
        variant: "destructive"
      });
    } finally {
      setLiking(false);
    }
  };

  if (!artwork) return null;

  const medium = artwork.medium || 'Digital Art';
  const dimensions = artwork.dimensions || 'Variable';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2">
            <div className="relative h-[300px] md:h-full">
              <img
                src={artwork.imageSrc}
                alt={artwork.title}
                className="w-full h-full object-contain bg-black"
              />
              <div className="absolute top-2 left-2">
                <ShareButton artwork={{ id: artwork.id, title: artwork.title, imageSrc: artwork.imageSrc }} />
              </div>
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/30 backdrop-blur-sm bg-black/20"
                  onClick={handleFavoriteClick}
                >
                  <Heart 
                    size={20}
                    className={favorite ? "fill-red-500 text-red-500" : "text-red-500"}
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-6 overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold">{artwork.title}</h2>
                <p className="text-gallery-red font-medium text-lg">AI繪圖作品</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-1">描述</h3>
                <p className="text-gray-700">{artwork.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">日期</h3>
                  <p className="text-gray-700">{artwork.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">媒介</h3>
                  <p className="text-gray-700">{medium}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">尺寸</h3>
                  <p className="text-gray-700">{dimensions}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">點讚</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700">{likesCount}</span>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="h-8 px-3"
                      onClick={handleLikeClick}
                      disabled={liking}
                    >
                      {liking ? "處理中..." : "點讚"}
                    </Button>
                  </div>
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
