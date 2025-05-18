
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Personal AI art journey blog posts
const blogPosts = [
  {
    id: 1,
    title: '我的第一篇 AI 創作紀錄',
    excerpt: '從 SD1.5 時代到現在的 AI 繪圖技術，這兩年來發生了翻天覆地的變化...',
    content: '我第一次使用 PixAI 網站製作 AI 繪圖時，還是在 SD1.5 模型的時代，當時產出的圖片畫質相當粗糙，必須透過加入提升畫質的提示詞，才能勉強提高成品品質。如今已經來到 2025 年，AI 繪圖技術與兩年前相比有了極大的進步，現在不僅有 pony 模型、Illustrious XL 模型等高品質模型可用，最新版本的 Illustrious 模型甚至內建了藝術家標籤，能自由組合風格，大幅提升了創作的彈性與表現力。',
    date: '2023-05-02',
    category: '創作紀錄',
    readTime: '3 分鐘',
    author: '創作者'
  },
  {
    id: 2,
    title: 'AI模型快速成長的一年',
    excerpt: '2024 年 AI 繪圖技術的快速躍進，從 Pony 模型的推出到大量 LoRA 的運用...',
    content: '2024 年可說是 AI 繪圖開始快速成長的一年，其中 Pony 模型的推出讓許多 AI 繪圖創作者感到相當震撼與驚訝。這個創新的模型讓套用各種風格、提示詞以及提升畫質的操作變得更加容易。回想在 SD1.5 的時代，想完成一張高品質的圖像往往需要搭配大量的 LoRA，例如：姿勢用的 LoRA、強化細節的 LoRA、眼睛專用的 LoRA，甚至還有一些迷因風格的 LoRA，才能達到理想效果。',
    date: '2024-01-30',
    category: '技術發展',
    readTime: '4 分鐘',
    author: '創作者'
  },
  {
    id: 3,
    title: 'Illustrious XL 模型的推出與崛起',
    excerpt: '從 2024 年 10 月的 Illustrious 模型到現在的 Illustrious XL，一款革命性的 AI 繪圖模型...',
    content: '其實早在 2024 年 10 月，就已經發布了 Illustrious 模型，這也是當時讓許多 AI 繪圖創作者感到驚艷的一款模型。它可以套用各種藝術家的標籤來產生不同的風格，甚至可以進行風格混合。特別是其中的 NoobAI-XL 模型，更採用了 V-pred 與 Epsilon-pred 這兩種預測機制，這種預測模型是一種相當新穎的方法，能將多位藝術家的風格整合到同一模型中，所生成的圖像往往具有明顯的畫師風格（雖然仍然可能出現斷手或過擬合的問題）。到了 2025 年，Illustrious XL 模型正式進入爆發性成長的時期，幾乎所有的模型或 LoRA 都會搭配使用 Illustrious XL 的風格。我目前最常用的也是這款模型。',
    date: '2025-01-30',
    category: '模型評測',
    readTime: '5 分鐘',
    author: '創作者'
  },
  {
    id: 4,
    title: '目前的 AI 繪圖生態',
    excerpt: '2025 年的 AI 繪圖生態系統如何降低創作門檻，讓更多人能參與 AI 藝術創作...',
    content: '而今年隨著 Illustrious XL 的大幅成長，新手與模型創作者都變得更容易上手。由於許多提示詞已經被簡化，模型本身就內建了基本的細節與畫質表現，使用者只需專注於如何設計出自己想要的 AI 圖像，或是創造專屬的 LoRA，大大降低了創作的門檻。',
    date: '2025-02-01',
    category: '行業分析',
    readTime: '3 分鐘',
    author: '創作者'
  }
];

const Blog = () => {
  // Set page title
  useEffect(() => {
    document.title = '創作者的 AI 繪圖旅程 - AI畫廊';
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
                <span className="text-gallery-red">我的</span> AI 繪圖旅程
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                從 2023 年至今，記錄我使用 AI 繪圖技術的心得與成長歷程，以及對這個快速發展領域的觀察。
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
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="inline-block bg-gallery-red text-white px-3 py-1 text-xs rounded mb-3">
                      {post.category}
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
