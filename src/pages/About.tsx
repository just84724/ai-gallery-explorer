
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Brush, Code, HeartHandshake, Users, Award, PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = '關於我們 - AI畫廊';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-gallery-gold/10 via-gallery-teal/5 to-gallery-red/10 -z-10"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-gray-800">
                <span className="text-gallery-red">關於</span> AI畫廊
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                我們致力於推動AI藝術創新，連結創作者與欣賞者，共同探索人工智能藝術的無限可能。
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-gallery-red to-gallery-gold mx-auto"></div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-gray-800">
                  我們的 <span className="text-gallery-red">使命</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  AI畫廊成立於2022年，由一群熱愛科技與藝術的創新者所創立。我們相信人工智能將徹底改變藝術創作的方式，為藝術家與觀眾提供嶄新的體驗與視角。
                </p>
                <p className="text-gray-600 mb-6">
                  我們的使命是建立一個橋樑，連結AI技術與藝術表達，為藝術家提供展示與銷售作品的平台，同時為藝術愛好者提供獨特的收藏體驗。
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button className="bg-gallery-red hover:bg-gallery-red/90">
                    聯繫我們
                  </Button>
                  <span className="text-gray-500">just84724@gmail.com</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gallery-teal/30 to-gallery-gold/30 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 text-shadow">我們的願景</h3>
                  <p className="text-white text-shadow">成為AI藝術領域的領導者，推動科技與藝術的共同進步</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-display text-center text-gray-800">
              我們的 <span className="text-gallery-red">核心價值</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-gallery-red to-gallery-gold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Brush className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">創意無限</h3>
                <p className="text-gray-600">
                  我們相信AI能夠拓展創意的疆界，探索前所未有的藝術表現形式。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-gallery-teal to-[#D946EF] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">技術創新</h3>
                <p className="text-gray-600">
                  通過持續的技術研發，我們為藝術家提供最先進的AI創作工具。
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-gallery-gold to-gallery-red w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <HeartHandshake className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">社群連結</h3>
                <p className="text-gray-600">
                  我們致力於建立一個活躍的藝術社群，促進藝術家與收藏家之間的互動。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-display text-center text-gray-800">
              我們的 <span className="text-gallery-red">團隊</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gallery-red/20 to-gallery-gold/20 flex items-center justify-center mb-4">
                  <Users size={48} className="text-gallery-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">張文華</h3>
                <p className="text-gray-600">創辦人 & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gallery-teal/20 to-gallery-red/20 flex items-center justify-center mb-4">
                  <Code size={48} className="text-gallery-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">李明宏</h3>
                <p className="text-gray-600">技術總監</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gallery-gold/20 to-gallery-teal/20 flex items-center justify-center mb-4">
                  <Brush size={48} className="text-gallery-gold" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">王藝萱</h3>
                <p className="text-gray-600">藝術總監</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gallery-red/20 to-gallery-teal/20 flex items-center justify-center mb-4">
                  <PenSquare size={48} className="text-gallery-red" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">陳雅琪</h3>
                <p className="text-gray-600">內容策劃</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
