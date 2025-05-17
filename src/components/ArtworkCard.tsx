
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ZoomIn, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Facebook, Twitter, Instagram, X } from 'lucide-react';

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

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const shareUrl = `https://ai-gallery.com/artwork/${id}`;
  const shareTitle = `${title} by ${artist}`;

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
              
              <div className="flex">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <ZoomIn size={18} />
                </Button>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleShareClick}>
                      <Share2 size={18} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-2">
                    <div className="flex gap-2">
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
                        onClick={handleShareClick}
                      >
                        <Facebook size={18} className="text-[#1877F2]" />
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
                        onClick={handleShareClick}
                      >
                        <Twitter size={18} className="text-[#1DA1F2]" />
                      </a>
                      <a 
                        href={`https://www.instagram.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-pink-100 transition-colors"
                        onClick={handleShareClick}
                      >
                        <Instagram size={18} className="text-[#E4405F]" />
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={handleShareClick}
                      >
                        <X size={18} className="text-black dark:text-white" />
                      </a>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
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
