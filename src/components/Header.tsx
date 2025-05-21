
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useFavorites from '@/hooks/useFavorites';
import SearchDialog from './header/SearchDialog';
import FavoritesDialog from './header/FavoritesDialog';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isGalleryPage = location.pathname.includes('/gallery');

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <SearchDialog getIconColor={getIconColor} />

          {/* Favorites Dialog */}
          <FavoritesDialog getIconColor={getIconColor} />

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
