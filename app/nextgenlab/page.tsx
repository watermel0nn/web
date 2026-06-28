'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lightbulb, UserCheck, Heart, Globe, Users, Smile, BarChart3, GraduationCap, ShieldCheck, PlayCircle, Brain } from 'lucide-react';
import Image from 'next/image';
import ImpactStats from '@/components/nextgenlab/ImpactStats';
import RnDProcess from '@/components/nextgenlab/RnDProcess';
import Partners from '@/components/nextgenlab/Partners';
import FAQSection from '@/components/nextgenlab/FAQSection';

const NEWS_MOCKS = [
  {
    id: 1,
    title: 'NextGenLab ra mắt phiên bản Beta của KidzEconomy',
    excerpt: 'Ứng dụng giáo dục tài chính sớm dành cho trẻ em đã chính thức ra mắt phiên bản thử nghiệm với nhiều tính năng hấp dẫn.',
    date: '15/06/2026',
    tag: 'SỰ KIỆN',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Xu hướng EdTech: Ứng dụng Gamification vào giáo dục',
    excerpt: 'Làm thế nào để biến việc học thành một trò chơi thú vị? Cùng chuyên gia NextGenLab tìm hiểu sức mạnh của gamification.',
    date: '28/05/2026',
    tag: 'TIN TỨC',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Tọa đàm: Dạy con tự lập trong kỷ nguyên số',
    excerpt: 'NextGenLab đồng hành cùng hàng trăm phụ huynh trong sự kiện chia sẻ kỹ năng nuôi dạy con tự lập và quản lý tài chính.',
    date: '10/05/2026',
    tag: 'CẬP NHẬT',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop',
  },
];

export default function NextGenLabHome() {
  return (
    <div className="flex flex-col bg-slate-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* ── 1. Hero Section (Split Layout) ── */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-24 pb-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm mb-6 border border-blue-100">
              <GraduationCap className="w-5 h-5" />
              <span>Tổ chức Công nghệ Giáo dục</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-900 leading-[1.15] mb-6">
              NextGenLab - <br />
              Kiến tạo <span className="text-emerald-600">Hệ sinh thái</span><br />
              Giáo dục Tương lai
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Ứng dụng công nghệ để khơi dậy tiềm năng, đồng hành cùng gia đình và nhà trường trong hành trình phát triển toàn diện của thế hệ trẻ.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Khám phá Giải pháp Giáo dục
              </button>
              <button className="flex items-center gap-2 text-blue-900 font-bold px-6 py-4 rounded-2xl hover:bg-slate-100 transition-colors">
                <PlayCircle className="w-6 h-6 text-emerald-600" />
                Xem Video Giới thiệu
              </button>
            </div>
          </motion.div>

          {/* Right Content: Image with Floating Tags */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 z-10">
              <Image 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop"
                alt="Học sinh sử dụng công nghệ"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>

            {/* Background Blob/Decoration */}
            <div className="absolute -inset-10 bg-emerald-100 rounded-full blur-3xl opacity-50 z-0"></div>

            {/* Floating Tags */}
            <motion.div 
              className="absolute top-[15%] -left-8 lg:-left-16 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 border border-slate-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="bg-emerald-100 p-2 rounded-xl"><Lightbulb className="text-emerald-600 w-5 h-5"/></div>
              <span className="font-extrabold text-slate-800">Kỹ năng sống</span>
            </motion.div>

            <motion.div 
              className="absolute bottom-[20%] -right-4 lg:-right-12 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20 border border-slate-100"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="bg-blue-100 p-2 rounded-xl"><BarChart3 className="text-blue-600 w-5 h-5"/></div>
              <span className="font-extrabold text-slate-800">Giáo dục tài chính</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Core Values (4 Trụ cột EdTech) ── */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-extrabold tracking-wider text-sm uppercase mb-3 block">Triết lý của chúng tôi</span>
            <h2 className="text-4xl font-black text-blue-900 mb-6">4 Trụ cột Công nghệ Giáo dục</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chúng tôi không chỉ viết code, chúng tôi thiết kế những trải nghiệm học tập và phát triển cá nhân mang tính cách mạng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <UserCheck />, title: 'Lấy học sinh làm trung tâm', desc: 'Thiết kế cá nhân hóa, tôn trọng sự phát triển tự nhiên và nhu cầu học tập riêng biệt của từng trẻ.' },
              { icon: <Brain />, title: 'Công nghệ Sư phạm', desc: 'Kết hợp nền tảng công nghệ mạnh mẽ với các phương pháp sư phạm tiên tiến nhất hiện nay.' },
              { icon: <Heart />, title: 'Gắn kết gia đình', desc: 'Tạo ra các giải pháp không cô lập trẻ em với thiết bị, mà kết nối trẻ với cha mẹ và thế giới thực.' },
              { icon: <Globe />, title: 'Tác động Bền vững', desc: 'Đóng góp vào một thế hệ tương lai tự lập, có tư duy toàn cầu và nền tảng tài chính vững chắc.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <div className="w-8 h-8">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Sản phẩm nổi bật (Case Study: KidzEconomy) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-emerald-600 font-extrabold tracking-wider text-sm uppercase mb-3 block">Giải pháp Thực tiễn</span>
            <h2 className="text-4xl font-black text-blue-900">KidzEconomy</h2>
          </div>

          <motion.div 
            className="bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              
              {/* Left Column: Image/Mockup */}
              <div className="relative min-h-[400px] lg:min-h-[600px] bg-slate-900 flex items-center justify-center p-12 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop" 
                  alt="KidzEconomy Preview"
                  fill
                  className="object-cover opacity-40 mix-blend-overlay"
                />
                
                {/* Floating Mockup representation */}
                <div className="relative z-10 w-full max-w-[280px] aspect-[1/2] rounded-[2.5rem] bg-white p-3 shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden relative">
                    <Image
                      src="/images/screenshots/dashboard.png"
                      alt="KidzEconomy Mockup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="p-10 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 relative z-10">
                  Học tài chính qua Gamification
                </h3>
                <p className="text-lg text-blue-100 mb-10 leading-relaxed relative z-10">
                  Một nền tảng giúp phụ huynh giáo dục tư duy tài chính sớm cho trẻ thông qua vòng lặp: <strong className="text-white">Thực hiện nhiệm vụ - Nhận điểm thưởng - Đàm phán đổi quà</strong>. Biến những công việc nhà nhàm chán thành bài học giá trị.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-800/50 border border-blue-700/50">
                    <div className="bg-blue-700 p-2 rounded-xl"><Users className="w-5 h-5 text-emerald-400"/></div>
                    <span className="font-bold text-white text-sm">Dành cho trẻ 7-12 tuổi</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-800/50 border border-blue-700/50">
                    <div className="bg-blue-700 p-2 rounded-xl"><Brain className="w-5 h-5 text-emerald-400"/></div>
                    <span className="font-bold text-white text-sm">Phát triển tư duy tài chính</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-800/50 border border-blue-700/50">
                    <div className="bg-blue-700 p-2 rounded-xl"><Heart className="w-5 h-5 text-emerald-400"/></div>
                    <span className="font-bold text-white text-sm">Kết nối phụ huynh & con cái</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-800/50 border border-blue-700/50">
                    <div className="bg-blue-700 p-2 rounded-xl"><ShieldCheck className="w-5 h-5 text-emerald-400"/></div>
                    <span className="font-bold text-white text-sm">Môi trường an toàn 100%</span>
                  </div>
                </div>

                <Link href="/" className="relative z-10 self-start">
                  <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold px-8 py-4 rounded-2xl transition-all shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 flex items-center gap-2">
                    TÌM HIỂU THÊM VỀ DỰ ÁN
                    <ArrowRight className="w-5 h-5"/>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImpactStats />
      <RnDProcess />
      <Partners />
      <FAQSection />

      {/* ── 4. Tin tức & Sự kiện Giáo dục ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="text-emerald-600 font-extrabold tracking-wider text-sm uppercase mb-2 block">Cộng đồng & Nhịp cầu</span>
              <h2 className="text-4xl font-black text-blue-900 mb-6 md:mb-0">Tin tức Giáo dục</h2>
            </div>
            <Link href="/nextgenlab/news" className="text-blue-900 font-bold border-2 border-blue-200 bg-white px-6 py-3 rounded-2xl hover:border-blue-900 hover:bg-blue-900 hover:text-white transition-all">
              XEM TẤT CẢ
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_MOCKS.map((news, idx) => (
              <motion.div
                key={news.id}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Image Cover */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={news.image} 
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black text-blue-900 tracking-wider">
                    {news.tag}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="text-sm text-slate-400 mb-4 font-bold">{news.date}</div>
                  <h3 className="text-xl font-black text-blue-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {news.excerpt}
                  </p>
                  <Link href="/nextgenlab/news" className="text-emerald-600 font-black flex items-center gap-2 group-hover:gap-3 transition-all">
                    Xem chi tiết <ArrowRight className="w-4 h-4"/>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
