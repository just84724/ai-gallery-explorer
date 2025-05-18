
import { GalleryHorizontal, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GalleryHorizontal size={24} className="text-gallery-red" />
              <h3 className="text-xl font-bold font-display">
                <span className="text-gallery-red">AI</span>
                <span>畫廊</span>
              </h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              探索AI藝術的無限可能，發現由人工智能創造的驚艷作品。
            </p>
            <div className="flex items-center gap-2 text-gray-600 hover:text-gallery-red transition-colors">
              <Mail size={18} />
              <a href="mailto:just84724@gmail.com">just84724@gmail.com</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">快速鏈接</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gallery-red transition-colors">首頁</a></li>
              <li><a href="#" className="hover:text-gallery-red transition-colors">藝術家</a></li>
              <li><a href="#" className="hover:text-gallery-red transition-colors">展覽</a></li>
              <li><a href="#" className="hover:text-gallery-red transition-colors">關於我們</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 AI畫廊. 保留所有權利.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com/share?url=https://ai-gallery.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#1877F2] transition-colors flex items-center gap-2"
                aria-label="分享到 Facebook">
                <Facebook size={20} />
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a href="https://twitter.com/intent/tweet?url=https://ai-gallery.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#1DA1F2] transition-colors flex items-center gap-2"
                aria-label="分享到 Twitter">
                <Twitter size={20} />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#E4405F] transition-colors flex items-center gap-2"
                aria-label="分享到 Instagram">
                <Instagram size={20} />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
