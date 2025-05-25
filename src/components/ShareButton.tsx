import { useState } from 'react';
import { Share2, Download, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  artwork: {
    id: string;
    title: string;
    imageSrc: string;
  };
}

const ShareButton = ({ artwork }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // 確保圖片網址是完整的 URL
  const getFullImageUrl = (imageSrc: string) => {
    if (imageSrc.startsWith('http')) {
      return imageSrc;
    }
    return `${window.location.origin}${imageSrc}`;
  };

  const fullImageUrl = getFullImageUrl(artwork.imageSrc);
  const shareUrl = `${window.location.origin}/gallery`;
  const shareText = `查看這個精彩的AI藝術作品：${artwork.title}`;

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&picture=${encodeURIComponent(fullImageUrl)}`;
        break;
      case 'pinterest':
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(fullImageUrl)}&description=${encodeURIComponent(shareText)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we'll copy the content with image URL
        navigator.clipboard.writeText(`${shareText}\n圖片：${fullImageUrl}\n頁面：${shareUrl}`);
        toast({
          title: "已複製到剪貼簿",
          description: "請在Instagram中貼上分享內容",
        });
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(fullImageUrl);
      setCopied(true);
      toast({
        title: "圖片網址已複製",
        description: "圖片網址已複製到剪貼簿",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "複製失敗",
        description: "無法複製圖片網址",
        variant: "destructive"
      });
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(fullImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${artwork.title.replace(/\s+/g, '_')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "下載完成",
        description: "圖片已開始下載",
      });
    } catch (error) {
      toast({
        title: "下載失敗",
        description: "無法下載圖片",
        variant: "destructive"
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 text-blue-500 hover:bg-white/20 hover:text-blue-500 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Share2 size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" onClick={(e) => e.stopPropagation()}>
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-gray-700 mb-3">分享到</h4>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-black hover:bg-gray-100"
            onClick={() => handleShare('twitter')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X (Twitter)
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-blue-800 hover:bg-blue-50"
            onClick={() => handleShare('facebook')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-red-600 hover:bg-red-50"
            onClick={() => handleShare('pinterest')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            Pinterest
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-2 text-pink-600 hover:bg-pink-50"
            onClick={() => handleShare('instagram')}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </Button>
          
          <div className="border-t pt-2 mt-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50"
              onClick={handleCopyUrl}
            >
              {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
              {copied ? '已複製!' : '複製圖片網址'}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 text-gray-600 hover:bg-gray-50"
              onClick={handleDownload}
            >
              <Download size={16} />
              下載圖片
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
