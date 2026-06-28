'use client';

import { motion } from 'framer-motion';
import { newsData } from '@/lib/newsData';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tin tức & Cập nhật
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Theo dõi những bước tiến mới nhất của NextGenLab và các bài viết chuyên sâu về xu hướng công nghệ giáo dục.
          </motion.p>
        </div>
      </section>

      {/* ── News List ── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {newsData.map((news, i) => (
              <motion.article 
                key={news.id}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-4 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Image */}
                <div className="md:col-span-5 aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden relative bg-slate-100">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${news.imageUrl})` }}
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-7 p-4 md:p-6 flex flex-col justify-center h-full">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {news.date}
                    </span>
                    <span className="flex items-center gap-1 text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" /> {news.category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h2>
                  
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {news.excerpt}
                  </p>
                  
                  <div>
                    <Link 
                      href={`/nextgenlab/news/#`} // Thay # bằng slug nếu có trang chi tiết
                      className="inline-flex items-center gap-2 font-semibold text-blue-600 group-hover:gap-3 transition-all"
                    >
                      Đọc toàn bộ bài viết
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button Placeholder */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-colors">
              Tải thêm bài viết
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
