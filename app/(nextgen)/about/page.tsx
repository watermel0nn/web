'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';

const TEAM_MEMBERS = [
  {
    name: '',
    role: 'Quản lý Dự án & Kỹ thuật',
    desc: 'Định hướng kiến trúc hệ thống và đảm bảo tiến độ triển khai các sản phẩm trọng điểm.',
    avatar: '',
  },
  {
    name: 'Dương',
    role: 'UI/UX Design',
    desc: 'Chuyên gia thiết kế trải nghiệm người dùng, thổi hồn vào các sản phẩm với giao diện thân thiện, hiện đại.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Phong',
    role: 'Developer / Kỹ thuật',
    desc: 'Đảm nhiệm việc phát triển tính năng, tối ưu hiệu suất và xây dựng hệ thống bền vững.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* ── Page Header ── */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Về NextGenLab
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Chúng tôi tin rằng công nghệ là cầu nối vững chắc nhất để kết nối các thế hệ và kiến tạo giá trị bền vững cho xã hội.
          </motion.p>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              className="rounded-3xl relative overflow-hidden text-white shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=2070&auto=format&fit=crop"
                alt="Mission background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/80"></div>
              <div className="relative z-10 p-10 md:p-14">
                <Target className="w-12 h-12 text-blue-200 mb-8" />
                <h2 className="text-3xl font-bold mb-6">Sứ mệnh</h2>
                <p className="text-lg text-blue-50 leading-relaxed">
                  Ứng dụng công nghệ để giải quyết những bài toán thực tiễn trong cuộc sống, lấy con người làm trung tâm và tạo ra các giải pháp số mang lại giá trị bền vững cho cá nhân, gia đình và doanh nghiệp. Chúng tôi không chỉ phát triển sản phẩm công nghệ mà còn xây dựng một hệ sinh thái đổi mới sáng tạo, giúp kết nối con người với công nghệ theo cách đơn giản, hiệu quả và gần gũi hơn.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-slate-50 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-sm border border-slate-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl translate-y-1/2 translate-x-1/3"></div>
              <Lightbulb className="w-12 h-12 text-emerald-600 mb-8 relative z-10" />
              <h2 className="text-3xl font-bold text-blue-900 mb-6 relative z-10">Tầm nhìn</h2>
              <p className="text-lg text-slate-700 leading-relaxed relative z-10">
                Trở thành hệ sinh thái công nghệ lấy con người làm trung tâm hàng đầu Việt Nam, tiên phong phát triển các giải pháp số sáng tạo nhằm nâng cao chất lượng cuộc sống và tạo ra những giá trị tích cực cho cộng đồng trong kỷ nguyên số.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Users className="w-10 h-10 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4 text-blue-900">Education Innovators</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Những người tiên phong nhiệt huyết, dày dặn kinh nghiệm, cùng chung một niềm tin vào sức mạnh thay đổi của công nghệ trong giáo dục.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="aspect-square relative overflow-hidden bg-slate-100">
                  {member.avatar && (
                    <Image 
                      src={member.avatar} 
                      alt={member.name || 'Member'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col bg-white relative z-10">
                  {member.name ? (
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  ) : (
                    <div className="h-8 mb-1"></div>
                  )}
                  <div className="text-emerald-600 font-medium mb-4">{member.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
