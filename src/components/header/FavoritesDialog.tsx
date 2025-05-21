
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { artworks } from '@/data/artworks';
import { useToast } from '@/hooks/use-toast';
import useFavorites from '@/hooks/useFavorites';

interface FavoritesDialogProps {
  getIconColor: () => string;
}

const FavoritesDialog = ({ getIconColor }: FavoritesDialogProps) => {
  const [showFavoritesDialog, setShowFavoritesDialog] = useState(false);
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();
  const { toast } = useToast();

  // Get favorite artworks
  const favoriteArtworks = artworks.filter(artwork => favorites.includes(artwork.id));
  
  // Handle favorite toggle
  const handleFavoriteToggle = (artworkId: string) => {
    removeFavorite(artworkId);
    toast({
      title: "已從收藏中移除",
      description: "作品已從您的收藏中移除",
    });
  };

  return (
    <Dialog open={showFavoritesDialog} onOpenChange={setShowFavoritesDialog}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className={getIconColor()}>
          <Heart size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">我的收藏</DialogTitle>
        </DialogHeader>
        {favoriteArtworks.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {favoriteArtworks.map((artwork) => (
              <div 
                key={artwork.id}
                className="flex gap-3 p-2 hover:bg-muted rounded-md"
              >
                <img 
                  src={artwork.imageSrc} 
                  alt={artwork.title} 
                  className="w-16 h-16 object-cover rounded cursor-pointer"
                  onClick={() => {
                    setShowFavoritesDialog(false);
                    navigate(`/gallery?artwork=${artwork.id}`);
                  }} 
                />
                <div className="flex-1 cursor-pointer"
                  onClick={() => {
                    setShowFavoritesDialog(false);
                    navigate(`/gallery?artwork=${artwork.id}`);
                  }}>
                  <h4 className="font-medium">{artwork.title}</h4>
                  <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-red-500"
                  onClick={() => handleFavoriteToggle(artwork.id)}
                >
                  <X size={16} />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-4 text-muted-foreground">您還沒有收藏任何作品</p>
        )}
        <div className="flex justify-center">
          <Link to="/gallery">
            <Button variant="outline">瀏覽更多作品</Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesDialog;
