import { useState } from 'react';
import ArtworkCard from './ArtworkCard';
import ArtworkModal from './ArtworkModal';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample artwork data
const artworks = [
  {
    id: '1',
    title: '黃金視界',
    artist: 'AI創作家',
    imageSrc: '/lovable-uploads/c560fa36-4559-495d-9ad6-0e9a23842290.png',
    description: '這幅作品融合了鮮豔的顏色和精細的細節，展現了AI繪畫的細膩與精確。作品中的人物眼神充滿生命力，金色的頭髮在光線下閃爍著奪目的光彩。',
    likes: 354,
    date: '2025-04-12'
  },
  {
    id: '2',
    title: '紅傘之夜',
    artist: 'AI夢境工作室',
    imageSrc: '/lovable-uploads/ab4ea31a-91b7-44e9-b8eb-37031823210d.png',
    description: '在月光的照耀下，白髮少女手持紅傘，站在夜空之下。紅與藍的強烈對比創造出夢幻而神秘的氛圍，彷彿來自另一個世界的美麗幻想。',
    likes: 287,
    date: '2025-03-28'
  },
  {
    id: '3',
    title: '刀鋒武士',
    artist: 'AI繪夢師',
    imageSrc: '/lovable-uploads/189c5319-8e92-405c-8c72-7e2a082a8d65.png',
    description: '這幅作品展現了一位白髮武士少女，手持發光的武器，背景是傳統建築和鮮豔的粉色能量流。黑白與彩色的巧妙結合創造出獨特的視覺風格。',
    likes: 412,
    date: '2025-04-02'
  },
  {
    id: '4',
    title: '機械守護者',
    artist: 'AI視覺實驗室',
    imageSrc: '/lovable-uploads/1d5c1738-fbf5-493d-989f-fce892f255fb.png',
    description: '這位機械風格的角色手持高科技武器，眼神銳利而堅定。藍色調的色彩和未來感的設計元素展現了科幻與幻想的完美結合。',
    likes: 231,
    date: '2025-03-15'
  },
  {
    id: '5',
    title: '和風貓娘',
    artist: 'AI創作坊',
    imageSrc: '/lovable-uploads/031fdea9-d44e-4b98-8787-cf48b67f6c23.png',
    description: '在傳統日式房間中，這位帶有貓耳的少女展現出優雅與神秘。透過窗戶照射進來的溫暖陽光，以及房間中的黃色花朵，營造出寧靜而溫馨的氛圍。',
    likes: 389,
    date: '2025-04-08'
  },
  {
    id: '6',
    title: '皇冠與劍',
    artist: 'AI藝術協會',
    imageSrc: '/lovable-uploads/26d59dcc-cf1a-4fc4-a29c-c6dbda6f72c4.png',
    description: '這幅作品描繪了一位戴著皇冠的神秘角色，手持發光的劍。紫色頭髮與金色眼睛的鮮明對比，加上背景的月亮，創造出神秘而王者的氣息。',
    likes: 276,
    date: '2025-03-22'
  },
  {
    id: '7',
    title: '荷葉少女',
    artist: 'AI夢想工作室',
    imageSrc: '/lovable-uploads/dd3f19e9-0285-4f30-a58e-e04cfbb2e55d.png',
    description: '這幅作品展現了一位坐在小船上的少女，手持巨大的荷葉傘。背景中的寺廟和荷葉池塘營造出東方的韻味，細膩的雨滴效果增添了畫面的生動感。',
    likes: 365,
    date: '2025-04-05'
  },
  {
    id: '8',
    title: '和平手勢',
    artist: 'AI畫師聯盟',
    imageSrc: '/lovable-uploads/ae505838-0056-4ffe-b0f7-3988d740ec1e.png',
    description: '這位白髮角色在蔚藍的天空下做出和平手勢，黃色的眼睛閃爍著自信的光芒。暗色的服裝與明亮的背景形成鮮明對比，展現出角色的獨特個性。',
    likes: 298,
    date: '2025-03-19'
  },
  {
    id: '9',
    title: '浴缸之歌',
    artist: 'AI視覺工坊',
    imageSrc: '/lovable-uploads/34de02b1-1a26-45c5-9a8d-34b5e8820164.png',
    description: '在充滿溫馨氛圍的浴室中，這位藍髮少女坐在浴缸裡，周圍漂浮著粉色花瓣。陽光透過窗戶照射進來，創造出溫暖而寧靜的氛圍。',
    likes: 344,
    date: '2025-03-27'
  },
  {
    id: '10',
    title: '治癒科學家',
    artist: 'AI創新實驗室',
    imageSrc: '/lovable-uploads/3c6a2c5f-8722-494e-ba2e-ecdf578ba019.png',
    description: '這位穿著白色實驗室外套的角色展現出活潑和治癒的氣息。藍色點綴的服裝和溫暖的背景色調創造出親切而專業的形象。',
    likes: 253,
    date: '2025-03-12'
  },
  {
    id: '11',
    title: '聖劍騎士',
    artist: 'AI幻想工作室',
    imageSrc: '/lovable-uploads/0854597b-f78f-46e5-8d89-e53d15eeb9e6.png',
    description: '這幅作品展現了一位金髮騎士，手持發光的聖劍，背景是壯麗的天空。皇冠和盔甲的設計展現出皇家的尊貴，而劍上的光芒則象徵著神聖的力量。',
    likes: 421,
    date: '2025-04-10'
  },
  {
    id: '12',
    title: '黃昏女王',
    artist: 'AI藝術先鋒',
    imageSrc: '/lovable-uploads/cb1c9646-61eb-421d-beac-96517f916955.png',
    description: '在黃昏的天空下，這位金髮騎士手持發光的劍，散發出王者的氣息。盔甲的精細設計和背景的壯麗天空增強了畫面的史詩感和莊嚴氛圍。',
    likes: 376,
    date: '2025-04-01'
  },
  {
    id: '13',
    title: '心之劍',
    artist: 'AI創意聯盟',
    imageSrc: '/lovable-uploads/9496b94a-a1ce-401f-a35f-88f233deaefb.png',
    description: '這幅作品展現了一位金髮角色手持特殊設計的紅色劍。劍身上的心形圖案和日落背景形成鮮明對比，展現出力量與情感的結合。',
    likes: 303,
    date: '2025-03-25'
  }
];

const GallerySection = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleArtworkClick = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-display mb-2">精選作品</h2>
        <p className="text-muted-foreground mb-8">探索我們最新與最受歡迎的AI藝術作品</p>
        
        <Tabs defaultValue="popular" className="mb-8">
          <TabsList>
            <TabsTrigger value="popular">熱門作品</TabsTrigger>
            <TabsTrigger value="recent">最新作品</TabsTrigger>
            <TabsTrigger value="featured">編輯精選</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {artworks.map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {[...artworks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
              {[...artworks].sort(() => 0.5 - Math.random()).slice(0, 8).map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  id={artwork.id}
                  title={artwork.title}
                  artist={artwork.artist}
                  imageSrc={artwork.imageSrc}
                  likes={artwork.likes}
                  onClick={() => handleArtworkClick(artwork)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="px-8">
            查看更多作品
          </Button>
        </div>
        
        <ArtworkModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          artwork={selectedArtwork}
        />
      </div>
    </section>
  );
};

export default GallerySection;
