
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, Download, Share } from 'lucide-react';
import { useState } from 'react';

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: {
    id: string;
    title: string;
    artist: string;
    imageSrc: string;
    description: string;
    likes: number;
    date: string;
  } | null;
}

const ArtworkModal = ({ isOpen, onClose, artwork }: ArtworkModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  
  if (!artwork) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white dark:bg-gallery-navy/90">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image section */}
          <div className="md:w-2/3 overflow-hidden bg-black">
            <img 
              src={artwork.imageSrc} 
              alt={artwork.title} 
              className="w-full h-full object-contain max-h-[80vh]"
            />
          </div>
          
          {/* Details section */}
          <div className="md:w-1/3 p-6 flex flex-col">
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">{artwork.title}</DialogTitle>
              <DialogDescription className="text-base text-muted-foreground">
                {artwork.artist} • {artwork.date}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 mb-6 flex-grow">
              <p className="text-sm leading-relaxed">{artwork.description}</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className={`flex-1 ${isLiked ? 'bg-red-50 text-gallery-red border-gallery-red' : ''}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart size={18} className={isLiked ? "fill-gallery-red text-gallery-red mr-2" : "mr-2"} />
                  {isLiked ? '已收藏' : '收藏'}
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share size={18} className="mr-2" />
                  分享
                </Button>
              </div>
              <Button className="w-full bg-gallery-red hover:bg-gallery-red/90">
                <Download size={18} className="mr-2" />
                下載圖片
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
