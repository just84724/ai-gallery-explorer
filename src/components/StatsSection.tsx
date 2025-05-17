
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { label: '精選藝術作品', value: '10,000+' },
  { label: '活躍藝術家', value: '500+' },
  { label: '每日訪問量', value: '25,000+' },
  { label: '作品下載次數', value: '1,500,000+' },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gallery-red">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-0 shadow-none text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
