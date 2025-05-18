
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'AI藝術的未來：超越想像的創意邊界',
      excerpt: '探討人工智能如何徹底改變藝術創作的過程，以及這對藝術世界的意義...',
      date: '2025-04-28',
      image: 'https://ai-gallery.com/uploads/blog/future-of-ai-art.jpg',
      category: '趨勢分析',
      readTime: '5 分鐘'
    },
    {
      id: 2,
      title: '從像素到畫布：AI生成藝術展覽現場報導',
      excerpt: '本文記錄了最近在台北舉行的「像素夢境」AI藝術展覽，展示了來自世界各地的AI藝術作品...',
      date: '2025-04-15',
      image: 'https://ai-gallery.com/uploads/blog/exhibition-report.jpg',
      category: '展覽報導',
      readTime: '8 分鐘'
    },
    {
      id: 3,
      title: '專訪：AI藝術家林明哲談創作歷程與靈感來源',
      excerpt: '在這次專訪中，林明哲分享了他如何與AI協作創作出震撼人心的藝術作品...',
      date: '2025-04-02',
      image: 'https://ai-gallery.com/uploads/blog/artist-interview.jpg',
      category: '藝術家專訪',
      readTime: '12 分鐘'
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
              <span className="text-gallery-red">部落格</span> 
              <span className="ml-2">最新文章</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              探索AI藝術的最新趨勢、技術發展和創作靈感，深入了解這個快速演變的領域。
            </p>
          </div>
          <Button className="bg-gallery-red hover:bg-gallery-red/90 text-white mt-4 md:mt-0 group">
            查看全部
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <a 
                  href="#" 
                  className="inline-flex items-center text-gallery-red font-medium hover:text-gallery-gold transition-colors"
                >
                  閱讀更多
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
