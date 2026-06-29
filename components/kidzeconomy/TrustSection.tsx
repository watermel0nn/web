'use client';

import { motion } from 'framer-motion';
import { Shield, BookOpen, Smartphone, Star, Quote } from 'lucide-react';
import { SectionHeading, FloatingBlob } from '@/components/ui';

const TRUST_PILLARS = [
  {
    id: 'trust-security',
    icon: Shield,
    emoji: '🔐',
    title: 'Bảo mật tuyệt đối',
    description: 'Dữ liệu của bé và gia đình được mã hóa SSL 256-bit. Không chia sẻ với bên thứ ba. Tuân thủ COPPA & GDPR.',
    gradient: 'linear-gradient(135deg, #EDE5FF 0%, #D4C5FF 100%)',
    accent: '#6B4DE6',
    points: ['Mã hóa SSL 256-bit', 'Không quảng cáo', 'Tuân thủ COPPA & GDPR'],
  },
  {
    id: 'trust-education',
    icon: BookOpen,
    emoji: '🎓',
    title: 'Chuẩn giáo dục',
    description: 'Nội dung được phát triển cùng chuyên gia giáo dục và tâm lý học trẻ em hàng đầu Việt Nam.',
    gradient: 'linear-gradient(135deg, #F0FFF4 0%, #BEEFCA 100%)',
    accent: '#49911B',
    points: ['Chuyên gia giáo dục xác nhận', 'Phù hợp lứa tuổi 5–12', 'Được nhà trường khuyên dùng'],
  },
  {
    id: 'trust-usability',
    icon: Smartphone,
    emoji: '📱',
    title: 'Dễ sử dụng',
    description: 'Giao diện thân thiện, bé 5 tuổi cũng tự dùng được. Phụ huynh thiết lập chỉ trong 5 phút.',
    gradient: 'linear-gradient(135deg, #FFF0D9 0%, #FCE0B0 100%)',
    accent: '#E58A2C',
    points: ['Thiết lập trong 5 phút', 'Giao diện cho trẻ em', 'Hỗ trợ 24/7'],
  },
];

const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'Chị Nguyễn Thu Hương',
    role: 'Mẹ của bé Minh An (7 tuổi)',
    avatar: '👩',
    rating: 5,
    text: 'Con tôi trước đây đòi mua đồ chơi liên tục. Sau 1 tháng dùng Kidzeconomy, bé tự giác tiết kiệm xu để mua thứ mình thích. Thay đổi rõ rệt lắm!',
    highlight: 'Thay đổi rõ rệt sau 1 tháng',
  },
  {
    id: 'testimonial-2',
    name: 'Anh Trần Văn Khoa',
    role: 'Bố của bé Gia Bảo (9 tuổi)',
    avatar: '👨',
    rating: 5,
    text: 'App đơn giản, dễ dùng cho cả bố lẫn con. Bé rất hào hứng mỗi khi nhận nhiệm vụ mới. Tôi thấy đây là cách tuyệt vời để dạy con về tiền bạc.',
    highlight: 'Bé rất hào hứng với nhiệm vụ',
  },
  {
    id: 'testimonial-3',
    name: 'Chị Lê Phương Linh',
    role: 'Mẹ của bé Bình Minh (11 tuổi)',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Tính năng dashboard phụ huynh rất tiện. Tôi có thể theo dõi con từ xa, biết con đang tiết kiệm cho mục tiêu gì. Rất khuyến khích các bậc phụ huynh!',
    highlight: 'Dashboard phụ huynh rất tiện lợi',
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden section-padding"
      style={{ background: 'linear-gradient(180deg, #FFF7ED 0%, #FFF0D9 100%)' }}
    >
      <FloatingBlob color="#49911B" size="400px" className="-left-32 center" opacity={0.05} blur="90px" />
      <FloatingBlob color="#6B4DE6" size="350px" className="-right-28 top-0" opacity={0.05} blur="90px" />

      <div className="section-container">

        {/* ── Trust Pillars ── */}
        <SectionHeading
          badge="🛡️ Cam kết của chúng tôi"
          title="Tại sao phụ huynh"
          highlight="tin tưởng Kidzeconomy?"
          description="Chúng tôi đặt sự an toàn và hiệu quả giáo dục của con lên hàng đầu."
          badgeColor="green"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="rounded-3xl p-7 flex flex-col gap-5"
                style={{
                  background: pillar.gradient,
                  border: `1.5px solid ${pillar.accent}20`,
                  boxShadow: `0 4px 20px ${pillar.accent}10`,
                }}
                whileHover={{ y: -5, boxShadow: `0 16px 48px ${pillar.accent}20` }}
              >
                {/* Icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: pillar.accent, boxShadow: `0 6px 20px ${pillar.accent}40` }}
                  >
                    <span>{pillar.emoji}</span>
                  </div>
                  <h3
                    className="font-black text-xl"
                    style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}>
                  {pillar.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {pillar.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.07 + 0.3 }}
                      className="flex items-center gap-2 text-sm font-bold"
                      style={{ color: pillar.accent }}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── Testimonials ── */}
        <div className="mt-20">
          <SectionHeading
            badge="💬 Phụ huynh nói gì"
            title="Hàng nghìn gia đình đã"
            highlight="thay đổi nhờ Kidzeconomy"
            badgeColor="gold"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                id={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="rounded-3xl p-6 flex flex-col gap-5 bg-white"
                style={{
                  border: '1.5px solid #F0E0C0',
                  boxShadow: '0 4px 24px rgba(74,44,24,0.10)',
                }}
                whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(74,44,24,0.16)' }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8" style={{ color: '#F3A85A' }} />

                {/* Highlight */}
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold self-start"
                  style={{
                    background: 'linear-gradient(135deg, #FFD55A, #E58A2C)',
                    color: '#3A2A1A',
                  }}
                >
                  {t.highlight}
                </span>

                {/* Review text */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}>
                  "{t.text}"
                </p>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06 + 0.4, type: 'spring', stiffness: 300 }}
                    >
                      <Star className="w-4 h-4" style={{ color: '#E58A2C' }} fill="#E58A2C" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: '#F0E0C0' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: '#FCE6C9' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
