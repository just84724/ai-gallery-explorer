
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { artworks } from '@/data/artworks';

interface SearchDialogProps {
  getIconColor: () => string;
}

const SearchDialog = ({ getIconColor }: SearchDialogProps) => {
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof artworks>([]);
  const navigate = useNavigate();

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

  return (
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
  );
};

export default SearchDialog;
