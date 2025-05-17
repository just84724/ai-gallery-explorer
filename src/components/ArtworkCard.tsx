
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArtworkCardProps {
  id: string;
  title: string;
  artist: string;
  imageSrc: string;
  likes: number;
  onClick: () => void;
}

const ArtworkCard = ({ id, title, artist, imageSrc, likes, onClick }: ArtworkCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-md card-hover bg-white dark:bg-gallery-navy/50 cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <div className="image-container aspect-[3/4] bg-gray-100">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="image-overlay">
            <div className="flex justify-between items-center">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleLike}>
                <Heart size={18} className={isLiked ? "fill-gallery-red text-gallery-red" : "text-white"} />
                <span className="ml-1">{likeCount}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ZoomIn size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <p className="text-muted-foreground text-sm">{artist}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArtworkCard;
