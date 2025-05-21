
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WandSparkles, Heart, Search, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { artworks } from '@/data/artworks';
import { useToast } from '@/hooks/use-toast';

// Create a favorites service to manage favorites
const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('favoriteArtworks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteArtworks', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (artworkId: number) => {
    setFavorites((prev) => [...prev, artworkId]);
  };

  const removeFavorite = (artworkId: number) => {
    setFavorites((prev) => prev.filter(id => id !== artworkId));
  };

  const isFavorite = (artworkId: number) => {
    return favorites.includes(artworkId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof artworks>([]);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [showFavoritesDialog, setShowFavoritesDialog] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { favorites, isFavorite, removeFavorite } = useFavorites();
  const { toast } = useToast();

  const isGalleryPage = location.pathname.includes('/gallery');

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const filteredResults = artworks.filter(artwork => 
      artwork.title.toLowerCase().includes(query.toLowerCase()) || 
      artwork.artist.toLowerCase().includes(query.toLowerCase()) ||
      artwork.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };

  // Get favorite artworks
  const favoriteArtworks = artworks.filter(artwork => favorites.includes(artwork.id));
  
  // Handle favorite toggle
  const handleFavoriteToggle = (artworkId: number) => {
    if (isFavorite(artworkId)) {
      removeFavorite(artworkId);
      toast({
        title: "已從收藏中移除",
        description: "作品已從您的收藏中移除",
      });
    }
  };

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isGalleryPage) return 'text-white';
    return isScrolled ? 'text-gray-800' : 'text-white';
  };

  // Determine icon color based on page and scroll state
  const getIconColor = () => {
    if (isGalleryPage) return 'text-white hover:text-white/80';
    return isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white/80';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    } ${isGalleryPage ? 'bg-gray-800' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 z-10">
          <WandSparkles size={28} className="text-gallery-red" />
          <h1 className="text-2xl font-bold font-display">
            <span className="text-gallery-red">AI</span>
            <span className={getTextColor()}>畫廊</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-8">
              <li><Link to="/" className={`font-medium hover:text-gallery-red transition-colors ${getTextColor()}`}>首頁</Link></li>
              <li><Link to="/blog" className={`font-medium hover:text-gallery-red transition-colors ${getTextColor()}`}>部落格</Link></li>
              <li><Link to="/gallery" className={`font-medium hover:text-gallery-red transition-colors ${getTextColor()}`}>藝術家</Link></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Search Dialog */}
          <Dialog open={showSearchDialog} onOpenChange={setShowSearchDialog}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className={getIconColor()}>
                <Search size={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center">搜尋作品</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="搜尋作品或藝術家..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {searchResults.map((artwork) => (
                      <div 
                        key={artwork.id}
                        className="flex gap-3 p-2 hover:bg-muted rounded-md cursor-pointer"
                        onClick={() => {
                          setShowSearchDialog(false);
                          navigate(`/gallery?artwork=${artwork.id}`);
                        }}
                      >
                        <img src={artwork.imageSrc} alt={artwork.title} className="w-16 h-16 object-cover rounded" />
                        <div>
                          <h4 className="font-medium">{artwork.title}</h4>
                          <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <p className="text-center py-4 text-muted-foreground">沒有找到相關結果</p>
                ) : null}
              </div>
            </DialogContent>
          </Dialog>

          {/* Favorites Dialog */}
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

          <Link to="/login">
            <Button className="bg-gallery-red hover:bg-gallery-red/90">
              登錄
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
