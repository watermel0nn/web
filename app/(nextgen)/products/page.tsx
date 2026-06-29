'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, LayoutGrid, Cpu } from 'lucide-react';

const PIPELINE = [
  {
    title: 'EduTrack AI',
    desc: 'Hệ thống đánh giá năng lực và gợi ý lộ trình học tập cá nhân hóa dựa trên trí tuệ nhân tạo.',
    category: 'EdTech / AI',
    status: 'Coming Soon',
  },
  {
    title: 'FamilySync',
    desc: 'Nền tảng lịch trình và giao tiếp gia đình, kết nối các thế hệ qua không gian số an toàn.',
    category: 'Social / Family',
    status: 'In Development',
  },
  {
    title: 'KidzLearn Hub',
    desc: 'Thư viện nội dung tương tác chất lượng cao dành riêng cho trẻ mầm non và tiểu học.',
    category: 'Content / EdTech',
    status: 'Research Phase',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* ── Page Header ── */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hệ sinh thái Giải pháp
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Khám phá các sản phẩm chiến lược của NextGenLab, nơi công nghệ gặp gỡ và giải quyết những thách thức thực tiễn của cuộc sống.
          </motion.p>
        </div>
      </section>

      {/* ── Live Product: KidzEconomy ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-sm">Đang hoạt động</span>
          </motion.div>
          
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 relative bg-orange-50 rounded-2xl flex items-center justify-center shadow-glow-orange overflow-hidden border border-orange-200">
                  <Image 
                    src="/images/logo-squirrel.png"
                    alt="KidzEconomy Logo"
                    fill
                    className="object-cover scale-[1.35] origin-top"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">KidzEconomy</h2>
                  <div className="text-blue-400 font-medium">Giáo dục tài chính sớm</div>
                </div>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Ứng dụng giúp phụ huynh giáo dục tư duy tài chính cho trẻ 5-12 tuổi thông qua mô hình: Giao việc nhà → Tích điểm → Đổi phần thưởng.
              </p>
              
              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs">1</span> 
                    Vấn đề (Nỗi đau)
                  </h4>
                  <p className="text-slate-400 pl-8 text-sm">Trẻ hay đòi hỏi vô lý, thiếu tự giác làm việc nhà và không hiểu giá trị của đồng tiền.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center text-xs">2</span> 
                    Giải pháp
                  </h4>
                  <p className="text-slate-400 pl-8 text-sm">Số hóa việc nhà thành các nhiệm vụ có thưởng. Trẻ tự làm việc, kiếm "thu nhập" và học cách quản lý chi tiêu cá nhân.</p>
                </div>
              </div>
              
              <div>
                <Link
                  href="/kidzeconomy"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Trải nghiệm KidzEconomy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-slate-800 relative overflow-hidden min-h-[400px]">
              {/* Abstract App Mockup Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-600/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://images.unsplash.com/photo-1554252116-2d88040bcfa0?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 animate-spin-slow"></div>
              
              {/* Floating UI Elements */}
              <motion.div 
                className="absolute top-1/4 left-10 bg-white p-4 rounded-2xl shadow-xl w-64"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-slate-800">Quét nhà</div>
                  <div className="text-orange-500 font-bold">+20 Xu</div>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 w-full h-full"></div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🎁</div>
                <div>
                  <div className="font-bold text-slate-800">Đổi quà thành công</div>
                  <div className="text-sm text-slate-500">-150 Xu</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Future Pipeline ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-10 h-10 text-indigo-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Future Pipeline</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Những dự án và ý tưởng đang được định hình để tiếp tục hoàn thiện hệ sinh thái NextGenLab trong tương lai.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PIPELINE.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200 border-dashed hover:border-solid hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    {i % 2 === 0 ? <Cpu size={24} /> : <LayoutGrid size={24} />}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <div className="text-indigo-600 text-sm font-medium mb-4">{item.category}</div>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
