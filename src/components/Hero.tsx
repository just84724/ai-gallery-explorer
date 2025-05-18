
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Updated background with brighter gradient overlay */}
      <div className="absolute inset-0 bg-white/80 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gallery-teal/60 to-gallery-gold/30"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight text-gray-800">
            探索<span className="text-gallery-red">AI</span>藝術的<br />無限可能
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-lg">
            在這裡發現由人工智能創作的震撼藝術作品，沉浸於創新與美學的完美融合。
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gallery-red hover:bg-gallery-red/90 text-white px-8 py-6 text-lg">
              開始探索
            </Button>
            <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-800/10 px-8 py-6 text-lg">
              了解更多
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-2 bg-gradient-to-r from-gallery-red to-gallery-gold"></div>
    </section>
  );
};

export default Hero;
