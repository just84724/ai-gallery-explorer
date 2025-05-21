
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PersonalArtworkSection = () => {
  const [showPreview, setShowPreview] = useState(false);
  
  return (
    <section id="personal-artwork" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">個人AI繪圖網站</h2>
          <div className="h-1 w-20 bg-gallery-red mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            探索我的個人AI藝術作品集，發現更多由AI生成的創意和藝術表現。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/3">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/3c6a2c5f-8722-494e-ba2e-ecdf578ba019.png" 
                      alt="個人AI畫廊預覽" 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h3 className="text-white font-medium">pixai.art/@just84724</h3>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">我的PixAI藝廊</h3>
                  <p className="text-gray-600 mb-6">
                    這是我在PixAI平台上的個人作品集，展示了我使用各種AI工具創作的藝術作品。
                    歡迎瀏覽並關注我的創作歷程！
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <Dialog open={showPreview} onOpenChange={setShowPreview}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="border-gallery-teal text-gallery-teal hover:bg-gallery-teal/10"
                        >
                          查看預覽
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl">
                        <DialogHeader>
                          <DialogTitle className="text-center">PixAI藝廊預覽</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video w-full">
                          <iframe 
                            src="https://pixai.art/@just84724/artworks" 
                            title="個人AI繪圖網站"
                            className="w-full h-[500px] border-0"
                            loading="lazy"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      className="bg-gallery-red hover:bg-gallery-red/90 flex gap-2"
                      onClick={() => window.open("https://pixai.art/@just84724/artworks", "_blank")}
                    >
                      <WandSparkles size={18} />
                      訪問網站
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PersonalArtworkSection;
