'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading, FloatingBlob } from '@/components/ui';

// ─── Data ────────────────────────────────────────────────────
const STEPS = [
  {
    number: '01',
    emoji: '📋',
    title: 'Giao việc & Định giá',
    description:
      'Phụ huynh thiết lập các công việc nhà trên App và gán số điểm tương ứng. Ví dụ: Rửa bát = 30 điểm, Quét nhà = 20 điểm.',
    color: '#6B4DE6',
    bg: '#EDE5FF',
    details: ['Tùy chỉnh công việc linh hoạt', 'Gán điểm theo độ khó', 'Lặp lại hàng ngày/tuần'],
    thumbnail: '/images/screenshots/parent-tasks.png',
  },
  {
    number: '02',
    emoji: '⭐',
    title: 'Con thực hiện & Tích lũy',
    description:
      'Trẻ hào hứng làm việc để kiếm "thu nhập" ảo và theo dõi số điểm của mình tăng lên mỗi ngày. Hệ thống streak giúp con duy trì thói quen.',
    color: '#E58A2C',
    bg: '#FFF0D9',
    details: ['Theo dõi điểm real-time', 'Streak liên tục 7-21 ngày', 'Thông báo nhắc nhở thông minh'],
    thumbnail: '/images/screenshots/tasks.png',
  },
  {
    number: '03',
    emoji: '🎁',
    title: 'Đàm phán & Đổi quà',
    description:
      'Trẻ dùng điểm để "mua" các phần thưởng từ phụ huynh: đồ chơi, đi chơi, món ăn yêu thích... Qua đó hiểu rằng muốn có thứ mình thích phải nỗ lực!',
    color: '#49911B',
    bg: '#F0FFF4',
    details: ['Cửa hàng phần thưởng cá nhân', 'Học đàm phán & lựa chọn', 'Hiểu giá trị sức lao động'],
    thumbnail: '/images/screenshots/rewards.png',
  },
] as const;

const STATS = [
  { value: '87%', label: 'Trẻ tự giác hơn' },
  { value: '3 tuần', label: 'Hình thành thói quen' },
  { value: '92%', label: 'PH hài lòng' },
] as const;

// ─── Framer variants ─────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const pulseRing = {
  animate: {
    scale: [1, 1.6, 1.8],
    opacity: [0.5, 0.2, 0],
  },
  transition: {
    duration: 2.4,
    repeat: Infinity,
    ease: 'easeOut',
  },
};

// ─── Component ───────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF7ED 0%, #FFF0D9 100%)',
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* ── Floating decorations ── */}
      <FloatingBlob color="#6B4DE6" size="280px" opacity={0.08} blur="100px" className="top-10 -left-32" />
      <FloatingBlob color="#F3A85A" size="320px" opacity={0.12} blur="90px" className="bottom-20 -right-40" />
      <FloatingBlob color="#49911B" size="200px" opacity={0.06} blur="80px" className="top-1/2 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section heading ── */}
        <SectionHeading
          badge="🗺️ Cách hoạt động"
          badgeColor="orange"
          title="Chỉ 3 bước đơn giản để"
          highlight="con tự lập hơn mỗi ngày"
          description="Quy trình đã được chứng minh hiệu quả bởi hàng nghìn gia đình."
          align="center"
        />

        {/* ── Steps grid ── */}
        <motion.div
          className="relative mt-16 md:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── Horizontal connector line (desktop only) ── */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: 56,
              left: '16.666%',
              right: '16.666%',
              height: 3,
              background: 'linear-gradient(90deg, #6B4DE6, #E58A2C, #49911B)',
              borderRadius: 4,
              opacity: 0.35,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {STEPS.map((step, i) => (
              <motion.div key={step.number} variants={cardVariants} className="flex flex-col items-center">
                {/* ── Emoji circle with pulse ring ── */}
                <div className="relative mb-6 flex items-center justify-center" style={{ width: 112, height: 112 }}>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2.5px solid ${step.color}` }}
                    animate={pulseRing.animate}
                    transition={{ ...pulseRing.transition, delay: i * 0.5 }}
                  />
                  {/* Outer ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `2.5px solid ${step.color}`,
                      opacity: 0.25,
                    }}
                  />
                  {/* Inner circle */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-full"
                    style={{
                      width: 88,
                      height: 88,
                      background: step.bg,
                      boxShadow: `0 8px 32px ${step.color}20`,
                    }}
                  >
                    <span className="text-4xl">{step.emoji}</span>
                  </div>
                </div>

                {/* ── Step number badge ── */}
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black tracking-widest mb-4"
                  style={{
                    background: step.bg,
                    color: step.color,
                    border: `1.5px solid ${step.color}30`,
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  BƯỚC {step.number}
                </span>

                {/* ── Card ── */}
                <motion.div
                  className="group rounded-3xl p-6 flex-1 w-full relative overflow-hidden flex flex-col"
                  style={{
                    background: '#FFFFFF',
                    border: `1.5px solid ${step.color}25`,
                    boxShadow: `0 4px 24px ${step.color}10`,
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: `0 16px 48px ${step.color}20`,
                    borderColor: `${step.color}50`,
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {/* Thumbnail background/floating at bottom right */}
                  <motion.div 
                    className="absolute -right-6 -bottom-16 w-36 drop-shadow-2xl z-0 transition-transform duration-300 group-hover:-translate-y-4 group-hover:-rotate-3"
                    initial={{ rotate: 10, opacity: 0.6 }}
                  >
                    <div className="rounded-[1.2rem] overflow-hidden border-[3px] border-[#1a1a1a] bg-[#1a1a1a] shadow-lg">
                      <Image
                        src={step.thumbnail}
                        alt={`App minh họa bước ${step.number}`}
                        width={140}
                        height={300}
                        className="w-full h-auto object-cover rounded-[0.9rem]"
                        quality={85}
                      />
                    </div>
                  </motion.div>

                  <div className="relative z-10 flex-1 flex flex-col bg-white/80 backdrop-blur-[2px] -mx-6 px-6 pt-2 pb-6 -mt-2 rounded-3xl h-full">
                    {/* Title */}
                    <h3
                      className="text-xl font-extrabold mb-3 text-center"
                      style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-5 text-center flex-1"
                      style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
                    >
                      {step.description}
                    </p>

                    {/* Divider */}
                    <div
                      className="h-px w-full mb-4"
                      style={{ background: `linear-gradient(90deg, transparent, ${step.color}30, transparent)` }}
                    />

                    {/* Details list */}
                    <ul className="space-y-2.5 bg-white/90 p-4 rounded-2xl border" style={{ borderColor: `${step.color}15` }}>
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <span
                            className="mt-1 flex-shrink-0 rounded-full"
                            style={{
                              width: 7,
                              height: 7,
                              background: step.color,
                              boxShadow: `0 0 6px ${step.color}40`,
                            }}
                          />
                          <span
                            className="text-sm font-semibold"
                            style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom stats banner ── */}
        <motion.div
          className="mt-16 md:mt-20 rounded-3xl px-6 py-8 md:px-10 md:py-10"
          style={{
            background: 'linear-gradient(135deg, #6A4A32 0%, #3A2A1A 100%)',
            boxShadow: '0 12px 48px rgba(58,42,26,0.35)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Banner header */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl">🎓</span>
            <h3
              className="text-xl md:text-2xl font-extrabold"
              style={{ color: '#FFD55A', fontFamily: "'Nunito', sans-serif" }}
            >
              Kết quả thực tế
            </h3>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 text-center"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 * i, ease: 'easeOut' }}
              >
                <span
                  className="text-4xl md:text-5xl font-black"
                  style={{
                    background: 'linear-gradient(135deg, #FFD55A 0%, #F3A85A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#DDC08A', fontFamily: "'Nunito', sans-serif" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
