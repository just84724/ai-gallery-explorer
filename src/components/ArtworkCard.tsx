
import { useState, useEffect } from 'react';
import { Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useFavorites from '@/hooks/useFavorites';
import ShareButton from './ShareButton';

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  imageSrc: string;
  likes?: number;
  views?: number;
  onClick: () => void;
}

const ArtworkCard = ({ 
  id, 
  title, 
  artist, 
  imageSrc, 
  likes = 0, 
  views = 0, 
  onClick 
}: ArtworkCardProps) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [favorite, setFavorite] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    setFavorite(isFavorite(id));
  }, [id, isFavorite]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const newFavoriteState = !favorite;
    setFavorite(newFavoriteState);
    
    if (newFavoriteState) {
      addFavorite(id);
      toast({
        title: "已加入收藏",
        description: "作品已加入您的收藏",
      });
    } else {
      removeFavorite(id);
      toast({
        title: "已從收藏中移除",
        description: "作品已從您的收藏中移除",
      });
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] w-full">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-white font-medium text-lg truncate">{title}</h3>
        <p className="text-gallery-gold text-sm mt-1 font-medium">AI繪圖作品</p>
        
        <div className="flex items-center mt-2 text-xs text-white/70">
          <Eye size={12} className="mr-1" />
          <span>{views} 次瀏覽</span>
        </div>
      </div>
      
      <ShareButton artwork={{ id, title, imageSrc }} />
      
      <Button 
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-white hover:bg-white/30 backdrop-blur-sm bg-black/20 z-10"
        onClick={handleFavoriteClick}
      >
        <Heart 
          size={20} 
          className={favorite ? "fill-red-500 text-red-500" : "text-red-500"}
        />
      </Button>
    </div>
  );
};

export default ArtworkCard;
