
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  // Personal AI art journey blog posts
  const blogPosts = [
    {
      id: 1,
      title: '我的第一篇 AI 創作紀錄',
      excerpt: '從 SD1.5 時代到現在的 AI 繪圖技術，這兩年來發生了翻天覆地的變化...',
      date: '2023-05-02',
      category: '創作紀錄',
      readTime: '3 分鐘'
    },
    {
      id: 2,
      title: 'AI模型快速成長的一年',
      excerpt: '2024 年 AI 繪圖技術的快速躍進，從 Pony 模型的推出到大量 LoRA 的運用...',
      date: '2024-01-30',
      category: '技術發展',
      readTime: '4 分鐘'
    },
    {
      id: 3,
      title: 'Illustrious XL 模型的推出與崛起',
      excerpt: '從 2024 年 10 月的 Illustrious 模型到現在的 Illustrious XL，一款革命性的 AI 繪圖模型...',
      date: '2025-01-30',
      category: '模型評測',
      readTime: '5 分鐘'
    }
  ];

  return (
    <section id="blog" className="py-16 bg-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gallery-gold to-gallery-red"></div>
      <div className="absolute -top-10 right-10 w-20 h-20 rounded-full bg-gallery-red/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gallery-gold/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-800">
              <span className="text-gallery-red">我的</span> 
              <span className="ml-2">AI 繪圖旅程</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              從 2023 年至今，記錄我使用 AI 繪圖技術的心得與成長歷程，以及對這個快速發展領域的觀察。
            </p>
          </div>
          <Link to="/blog">
            <Button className="bg-gallery-red hover:bg-gallery-red/90 text-white mt-4 md:mt-0 group">
              查看全部文章
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
};

export default BlogSection;
