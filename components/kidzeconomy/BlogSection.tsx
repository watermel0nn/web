'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui';

const CATEGORIES = [
  'Tất cả',
  'Xây dựng thói quen',
  'Quản lý việc nhà',
  'Động lực & Phần thưởng',
  'Kinh nghiệm từ phụ huynh',
  'Cập nhật sản phẩm'
];

const ARTICLES = [
  {
    title: '5 thói quen nhỏ giúp trẻ tự lập hơn mỗi ngày',
    category: 'Xây dựng thói quen',
    readTime: '5 phút đọc',
    date: '20/05/2024',
    bg: 'bg-orange-100',
  },
  {
    title: 'Cách giao việc nhà phù hợp với từng độ tuổi',
    category: 'Quản lý việc nhà',
    readTime: '6 phút đọc',
    date: '15/05/2024',
    bg: 'bg-green-100',
  },
  {
    title: 'Phần thưởng - Động lực đúng cách cho trẻ',
    category: 'Động lực & Phần thưởng',
    readTime: '4 phút đọc',
    date: '10/05/2024',
    bg: 'bg-blue-100',
  },
  {
    title: '"KidzEconomy đã thay đổi thói quen của con tôi như thế nào?"',
    category: 'Kinh nghiệm từ phụ huynh',
    readTime: '7 phút đọc',
    date: '08/05/2024',
    bg: 'bg-purple-100',
  },
  {
    title: 'Làm sao để trẻ tự giác mà không cần nhắc nhở?',
    category: 'Xây dựng thói quen',
    readTime: '5 phút đọc',
    date: '05/05/2024',
    bg: 'bg-yellow-100',
  },
  {
    title: 'Ra mắt hệ thống huy hiệu mới trên KidzEconomy',
    category: 'Cập nhật sản phẩm',
    readTime: '3 phút đọc',
    date: '01/05/2024',
    bg: 'bg-pink-100',
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-orange-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="BLOG"
          title={
            <>
              Kiến thức & kinh nghiệm <br className="hidden md:block" />
              <span className="text-orange-500">nuôi dạy con hiện đại</span>
            </>
          }
          description="Cùng khám phá những bài viết hữu ích giúp ba mẹ đồng hành cùng con xây dựng thói quen tốt mỗi ngày."
          centered
        />

        {/* Categories */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                idx === 0 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-48 ${article.bg} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    🗓️ {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {article.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-orange-500 font-bold border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full transition-all">
            Xem tất cả bài viết →
          </button>
        </div>
      </div>
    </section>
  );
}
