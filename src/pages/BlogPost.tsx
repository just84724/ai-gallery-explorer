
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Facebook, Twitter, Home } from 'lucide-react';

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

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const navigate = useNavigate();
  
  // Set page title and find post based on id
  useEffect(() => {
    if (!id) {
      navigate('/blog');
      return;
    }
    
    const postId = parseInt(id);
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} - AI畫廊`;
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);
  
  if (!post) {
    return <div className="pt-24 text-center">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 via-orange-50 to-red-100">
      <Header />
      <main className="flex-grow pt-24">
        <article className="container mx-auto px-4 py-8">
          {/* Navigation buttons */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/blog" className="inline-flex items-center text-orange-600 hover:text-pink-600 transition-colors font-bold text-lg">
              <ArrowLeft size={20} className="mr-2" />
              返回文章列表
            </Link>
            <Link to="/" className="inline-flex items-center text-orange-600 hover:text-pink-600 transition-colors font-bold text-lg">
              <Home size={20} className="mr-2" />
              返回首頁
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-12 bg-white rounded-3xl p-10 border-3 border-orange-300 shadow-2xl shadow-orange-200/50">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 text-lg rounded-full mb-6 font-black shadow-lg">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 font-display leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">{post.title}</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-800 text-lg font-bold">
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                <Calendar size={18} className="text-orange-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full">
                <Clock size={18} className="text-pink-600" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                <User size={18} className="text-red-600" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 border-3 border-pink-300 shadow-2xl shadow-pink-200/50">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <p className="mb-8 text-gray-800 leading-relaxed text-xl font-medium">
                {post.content}
              </p>
            </div>
          </div>
          
          {/* Share buttons */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-3xl p-8 border-3 border-red-300 shadow-2xl shadow-red-200/50">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 text-2xl">分享這篇文章</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex items-center gap-2 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold">
                    <Facebook size={18} />
                    Facebook
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-bold">
                    <Twitter size={18} />
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
