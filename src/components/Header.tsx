
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GalleryHorizontal, Heart, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  // Helper function to scroll to a section smoothly
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GalleryHorizontal size={28} className="text-gallery-red" />
          <h1 className="text-2xl font-bold font-display">
            <span className="text-gallery-red">AI</span>
            <span className={isScrolled ? 'text-gray-800' : 'text-white'}>畫廊</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-8">
              <li><a href="#" className={`font-medium hover:text-gallery-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>首頁</a></li>
              <li><a href="#" className={`font-medium hover:text-gallery-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={(e) => {e.preventDefault(); scrollToSection('gallery')}}>藝術家</a></li>
              <li><a href="#" className={`font-medium hover:text-gallery-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={(e) => {e.preventDefault(); scrollToSection('about')}}>關於</a></li>
              <li><a href="#" className={`font-medium hover:text-gallery-red transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={(e) => {e.preventDefault(); scrollToSection('blog')}}>部落格</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className={isScrolled ? 'text-gray-800' : 'text-white'}>
            <Heart size={20} />
          </Button>
          <Button className="bg-gallery-red hover:bg-gallery-red/90">
            登錄
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
