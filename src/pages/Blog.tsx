
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample blog post data - expanded with more content
const blogPosts = [
  {
    id: 1,
    title: 'AI藝術的未來：超越想像的創意邊界',
    excerpt: '探討人工智能如何徹底改變藝術創作的過程，以及這對藝術世界的意義...',
    content: '人工智能藝術正以前所未有的速度發展，改變著我們對藝術創作的理解。AI不僅是工具，更成為藝術家的合作夥伴，共同探索創意的新邊界。本文深入探討了AI藝術的發展歷程，從早期的實驗性嘗試到今日的成熟應用，展示了技術與藝術融合的美妙可能。未來，隨著生成式AI技術的進步，我們預計將見證更多令人驚嘆的創新，打破傳統藝術的界限，創造全新的藝術形式與表達方式。',
    date: '2025-04-28',
    image: 'https://ai-gallery.com/uploads/blog/future-of-ai-art.jpg',
    category: '趨勢分析',
    readTime: '5 分鐘',
    author: '張文華'
  },
  {
    id: 2,
    title: '從像素到畫布：AI生成藝術展覽現場報導',
    excerpt: '本文記錄了最近在台北舉行的「像素夢境」AI藝術展覽，展示了來自世界各地的AI藝術作品...',
    content: '「像素夢境」展覽於4月10日至15日在台北當代藝術中心舉行，吸引了超過5,000名觀眾。展覽匯集了來自全球15個國家的30位藝術家的作品，展示了AI藝術的多樣性與創新性。展品涵蓋了生成對抗網絡(GAN)創作的肖像畫、基於文字提示生成的超現實景觀、以及互動式AI裝置藝術等。特別引人注目的是本地藝術家林明哲的作品「數位夢境」系列，該系列結合了傳統台灣文化元素與先進的AI技術，創造出令人驚嘆的視覺體驗。展覽期間還舉辦了多場工作坊和座談會，促進藝術家與公眾之間的交流與討論。',
    date: '2025-04-15',
    image: 'https://ai-gallery.com/uploads/blog/exhibition-report.jpg',
    category: '展覽報導',
    readTime: '8 分鐘',
    author: '陳雅琪'
  },
  {
    id: 3,
    title: '專訪：AI藝術家林明哲談創作歷程與靈感來源',
    excerpt: '在這次專訪中，林明哲分享了他如何與AI協作創作出震撼人心的藝術作品...',
    content: '林明哲，台灣新銳AI藝術家，近年來因其「數位夢境」系列作品而備受關注。在本次專訪中，林明哲詳細分享了他的創作歷程與理念。「我不把AI視為替代藝術家的工具，而是將其視為創作夥伴，」林明哲說道，「我們之間的合作是一種對話，一種共創的過程。」林明哲的作品融合了台灣傳統文化元素與現代數位美學，創造出獨特的視覺語言。他特別提到童年在台灣鄉間的記憶是他重要的靈感來源，這些記憶通過AI的處理，轉化為夢幻而富有詩意的視覺意象。「技術只是媒介，情感與文化認同才是作品的核心，」他強調。林明哲目前正在籌備新的展覽，探索AI與實體裝置藝術的結合可能性。',
    date: '2025-04-02',
    image: 'https://ai-gallery.com/uploads/blog/artist-interview.jpg',
    category: '藝術家專訪',
    readTime: '12 分鐘',
    author: '王藝萱'
  },
  {
    id: 4,
    title: 'AI藝術市場分析：收藏趨勢與投資價值',
    excerpt: '隨著AI藝術的普及，其市場價值與收藏潛力也逐漸受到關注...',
    content: 'AI藝術市場近年來呈現爆發式增長，根據最新數據，2024年全球AI藝術品交易額已達3.2億美元，比去年同期增長了76%。非同質化代幣(NFT)的興起進一步推動了數位藝術的收藏熱潮，為AI藝術品提供了可靠的所有權證明與交易渠道。目前市場上最受歡迎的AI藝術類型包括生成式肖像、抽象藝術以及與傳統藝術風格fusion的作品。投資專家建議，收藏者應關注具有創新算法或獨特風格的藝術家作品，同時也要考慮藝術家的學術背景與展覽經歷。雖然市場前景看好，專家也提醒收藏者注意市場波動風險，建議基於欣賞而非純投資目的進行收藏。',
    date: '2025-03-20',
    image: 'https://ai-gallery.com/uploads/blog/market-analysis.jpg',
    category: '市場分析',
    readTime: '10 分鐘',
    author: '李明宏'
  },
  {
    id: 5,
    title: '如何開始你的AI藝術創作：初學者指南',
    excerpt: '想嘗試AI藝術創作但不知從何開始？本指南為你提供實用的入門建議...',
    content: 'AI藝術創作的門檻正變得越來越低，即使沒有編程背景也能輕鬆入門。首先，你需要了解幾種主流的AI藝術創作工具，如Midjourney、DALL-E和Stable Diffusion等。這些平台提供了用戶友好的界面，只需輸入文字描述即可生成相應的圖像。對於初學者來說，掌握有效的提示(prompt)工程是關鍵，好的提示能明確傳達你的創作意圖。本文詳細介紹了提示工程的基本原則與實用技巧，包括如何描述風格、構圖、光線等元素。此外，了解基本的藝術理論與設計原則也能幫助你更好地引導AI創作。最後，參與AI藝術社群是提升技能的有效途徑，可以通過線上論壇、Discord社群或實體工作坊與其他創作者交流經驗。',
    date: '2025-03-10',
    image: 'https://ai-gallery.com/uploads/blog/beginners-guide.jpg',
    category: '教學指南',
    readTime: '15 分鐘',
    author: '陳雅琪'
  },
  {
    id: 6,
    title: 'AI與傳統藝術的碰撞：融合還是顛覆？',
    excerpt: 'AI藝術的興起引發了關於藝術本質、創作者身份與藝術價值的深刻討論...',
    content: 'AI藝術與傳統藝術的關係是近年藝術理論討論的熱點。支持者認為，AI為藝術創作提供了新的可能性，拓展了藝術表達的範圍；而批評者則擔憂AI可能削弱人類創造力的獨特性與價值。本文通過訪談多位活躍於傳統與數位藝術領域的藝術家，探討了他們對這一議題的看法。有趣的是，許多傳統媒材藝術家正積極探索將AI作為輔助工具融入其創作過程，如草稿生成、構圖實驗等。同時，也有藝術家嘗試將AI生成的內容與傳統媒材結合，如將AI生成的圖像轉化為油畫或版畫作品。這種融合反映了當代藝術的包容性與實驗精神。專家指出，真正的問題不是技術本身，而是藝術家如何使用這些工具表達自己的視角與情感。',
    date: '2025-02-25',
    image: 'https://ai-gallery.com/uploads/blog/traditional-vs-ai.jpg',
    category: '藝術評論',
    readTime: '18 分鐘',
    author: '王藝萱'
  }
];

const Blog = () => {
  // Set page title
  useEffect(() => {
    document.title = '部落格 - AI畫廊';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gallery-red/10 to-gallery-gold/10 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display text-gray-800">
                <span className="text-gallery-red">部落格</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                探索AI藝術的最新趨勢、技術發展和創作靈感，深入了解這個快速演變的領域。
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-gallery-red to-gallery-gold"></div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 right-10 w-20 h-20 rounded-full bg-gallery-red/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gallery-gold/10 blur-3xl"></div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map(post => (
                <div key={post.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-gallery-red/50 transition-all hover:shadow-lg hover:shadow-gallery-red/10 group">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    {/* Use a gradient placeholder since we don't have real images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gallery-red/20 to-gallery-gold/30"></div>
                    <div className="absolute bottom-0 left-0 bg-gallery-red px-3 py-1 text-xs text-white rounded-tr-md">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gallery-red transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-gallery-red font-medium hover:text-gallery-gold transition-colors"
                    >
                      閱讀更多
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
