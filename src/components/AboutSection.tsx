
import { Button } from '@/components/ui/button';
import { Brush, Code, HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-gradient-to-br from-white to-gray-100">
      {/* Vibrant background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gallery-gold/20 via-gallery-teal/10 to-gallery-red/10 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-gray-800">
            <span className="text-gallery-red">關於</span>
            <span>我們</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gallery-red to-gallery-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-gradient-to-br from-gallery-red to-gallery-gold w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Brush className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">創意無限</h3>
            <p className="text-gray-600 text-center">
              我們致力於推動AI藝術創新，探索科技與藝術的完美結合，為創作者提供無限可能。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-gradient-to-br from-gallery-teal to-[#D946EF] w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Code className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">技術創新</h3>
            <p className="text-gray-600 text-center">
              運用最先進的AI技術，我們不斷探索視覺藝術的新疆界，創造前所未有的藝術體驗。
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="bg-gradient-to-br from-gallery-gold to-gallery-red w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <HeartHandshake className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">社群連結</h3>
            <p className="text-gray-600 text-center">
              我們建立了一個充滿活力的藝術社群，連結創作者與欣賞者，共同探索AI藝術的美妙世界。
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-gallery-red hover:bg-gallery-red/90 text-white px-8 py-6 text-lg rounded-full">
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
