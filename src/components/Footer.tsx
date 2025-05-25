
import { Palette, Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Palette size={24} className="text-gallery-red" />
              <h3 className="text-xl font-bold font-display">
                <span className="text-gallery-red">AI</span>
                <span>畫廊</span>
              </h3>
            </Link>
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
              <li><Link to="/" className="hover:text-gallery-red transition-colors">首頁</Link></li>
              <li><Link to="/blog" className="hover:text-gallery-red transition-colors">部落格</Link></li>
              <li><Link to="/gallery" className="hover:text-gallery-red transition-colors">藝術家</Link></li>
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
                className="text-gray-500 hover:text-black transition-colors flex items-center gap-2"
                aria-label="分享到 X">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="hidden sm:inline">X</span>
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
