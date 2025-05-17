
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gallery, Download, Heart } from 'lucide-react';

const features = [
  {
    icon: <Gallery size={36} className="text-gallery-red" />,
    title: '高質量AI藝術',
    description: '我們的平台匯集了最高質量的AI生成藝術作品，每一幅都經過精心挑選與優化。'
  },
  {
    icon: <Download size={36} className="text-gallery-red" />,
    title: '輕鬆下載',
    description: '一鍵下載您喜愛的作品，用於個人收藏或創意項目，完全免費且無水印。'
  },
  {
    icon: <Heart size={36} className="text-gallery-red" />,
    title: '個人收藏',
    description: '創建您專屬的收藏，保存您喜愛的作品，並在任何時候輕鬆訪問它們。'
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">為何選擇我們的AI畫廊</h2>
          <p className="text-muted-foreground">
            我們致力於展示最高質量的AI生成藝術，並提供最佳的用戶體驗，讓您輕鬆探索人工智能的創意世界。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
