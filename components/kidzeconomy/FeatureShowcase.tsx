'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading, FloatingBlob } from '@/components/ui';

const FEATURES = [
  {
    id: 'feature-tasks',
    image: '/images/screenshots/new1.jpg',
    title: 'Trẻ tự giác làm việc nhà',
    subtitle: 'Hệ thống Nhiệm vụ Gamification',
    description:
      'Biến việc nhà thành trò chơi thú vị! Con nhận nhiệm vụ hàng ngày, theo dõi tiến độ trên timeline trực quan và nhận điểm thưởng khi hoàn thành. Từ quét nhà, tưới cây đến dọn phòng — mọi việc đều trở nên hào hứng.',
    highlights: [
      { emoji: '📋', text: 'Danh sách nhiệm vụ theo ngày' },
      { emoji: '⏰', text: 'Timeline trực quan với giờ cụ thể' },
      { emoji: '✅', text: 'Đánh dấu hoàn thành dễ dàng' },
    ],
    accent: '#6B4DE6',
    accentBg: '#EDE5FF',
  },
  {
    id: 'feature-savings',
    image: '/images/screenshots/new3.jpg',
    title: 'Học cách tiết kiệm và quản lý tài chính',
    subtitle: 'Mục tiêu & Tích lũy Thông minh',
    description:
      'Con đặt mục tiêu cho món quà mình thích và theo dõi tiến độ tích lũy điểm. Hệ thống hiển thị rõ ràng bao nhiêu điểm đã có, còn thiếu bao nhiêu — giúp con học cách kiên nhẫn và lên kế hoạch tài chính.',
    highlights: [
      { emoji: '🎯', text: 'Đặt mục tiêu tiết kiệm cá nhân' },
      { emoji: '📊', text: 'Theo dõi tiến độ % trực quan' },
      { emoji: '💪', text: 'Động lực "Chỉ còn X điểm nữa thôi!"' },
    ],
    accent: '#E58A2C',
    accentBg: '#FFF0D9',
  },
  {
    id: 'feature-rewards',
    image: '/images/screenshots/new4.jpg',
    title: 'Động lực hoàn thành từ các món quà yêu thích',
    subtitle: 'Cửa hàng Phần thưởng Đa dạng',
    description:
      'Cửa hàng phần thưởng phong phú với các danh mục: Đồ chơi, Trải nghiệm, Du lịch, Ăn uống và Tiền mặt. Con tự chọn phần thưởng, tự quyết định chi tiêu — học cách đưa ra quyết định tài chính thực tế.',
    highlights: [
      { emoji: '🎁', text: '5+ danh mục phần thưởng đa dạng' },
      { emoji: '🛒', text: 'Con tự chọn và "mua" phần thưởng' },
      { emoji: '💡', text: 'Học chi tiêu có kế hoạch' },
    ],
    accent: '#49911B',
    accentBg: '#F0FFF4',
  },
  {
    id: 'feature-progress-tracking',
    image: '/images/screenshots/realtime_progress.jpg',
    title: 'Theo dõi tiến độ thời gian thực',
    subtitle: 'Cập nhật tức thì, kết nối gia đình',
    description:
      'Ba mẹ và con có thể theo dõi tiến trình thực hiện nhiệm vụ và tích lũy điểm số ngay lập tức. Hệ thống đồng bộ dữ liệu theo thời gian thực giúp cả nhà luôn nắm bắt được trạng thái công việc và thành quả mà không có độ trễ.',
    highlights: [
      { emoji: '⚡', text: 'Đồng bộ dữ liệu tức thời (Real-time)' },
      { emoji: '📱', text: 'Thông báo đẩy ngay khi con hoàn thành' },
      { emoji: '📊', text: 'Báo cáo tổng quan dễ hiểu' },
    ],
    accent: '#0EA5E9',
    accentBg: '#E0F2FE',
  },
];

export default function FeatureShowcase() {
  return (
    <section
      id="feature-showcase"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF7ED 0%, #FFF0D9 50%, #FFF7ED 100%)',
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <FloatingBlob color="#6B4DE6" size="400px" className="-left-40 top-20" opacity={0.05} blur="100px" />
      <FloatingBlob color="#49911B" size="350px" className="-right-32 top-1/2" opacity={0.06} blur="90px" />
      <FloatingBlob color="#F3A85A" size="300px" className="left-1/3 bottom-0" opacity={0.07} blur="80px" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <SectionHeading
          badge="🚀 Tính năng cốt lõi"
          badgeColor="orange"
          title="Giải pháp toàn diện giúp con"
          highlight="tự lập và hiểu giá trị tiền bạc"
          description="Mỗi tính năng được thiết kế tỉ mỉ để biến việc học tài chính thành hành trình thú vị cho cả gia đình."
          align="center"
        />

        <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-32">
          {FEATURES.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className={`flex flex-col ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-10 lg:gap-16`}
              >
                {/* Phone Mockup */}
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center"
                  initial={{ opacity: 0, x: isReversed ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="relative">
                    {/* Glow background */}
                    <div
                      className="absolute -inset-8 rounded-full blur-3xl opacity-20"
                      style={{ background: feature.accent }}
                    />
                    {/* Phone frame */}
                    <div
                      className="relative mx-auto"
                      style={{
                        width: 280,
                        borderRadius: '2.5rem',
                        background: '#1a1a1a',
                        padding: '12px 10px',
                        boxShadow: `0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset`,
                      }}
                    >
                      {/* Notch */}
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
                        style={{
                          width: 120,
                          height: 28,
                          background: '#1a1a1a',
                          borderRadius: '0 0 20px 20px',
                        }}
                      >
                        <div
                          className="absolute top-2 left-1/2 -translate-x-1/2"
                          style={{
                            width: 60,
                            height: 6,
                            background: '#333',
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      {/* Screen */}
                      <div
                        className="relative overflow-hidden"
                        style={{ borderRadius: '2rem' }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={260}
                          height={563}
                          className="w-full h-auto object-cover"
                          quality={90}
                        />
                      </div>
                      {/* Home indicator */}
                      <div className="flex justify-center mt-2">
                        <div
                          style={{
                            width: 100,
                            height: 4,
                            background: '#555',
                            borderRadius: 2,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {/* Subtitle badge */}
                  <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
                    style={{
                      background: feature.accentBg,
                      color: feature.accent,
                      border: `1.5px solid ${feature.accent}30`,
                    }}
                  >
                    {feature.subtitle}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-5"
                    style={{ color: '#3A2A1A' }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed mb-8"
                    style={{ color: '#6A4A32' }}
                  >
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-4">
                    {feature.highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl"
                        style={{
                          background: '#FFFFFF',
                          border: `1.5px solid ${feature.accent}15`,
                          boxShadow: `0 2px 12px ${feature.accent}08`,
                        }}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{
                          y: -2,
                          boxShadow: `0 8px 24px ${feature.accent}15`,
                          borderColor: `${feature.accent}30`,
                        }}
                      >
                        <span
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ background: feature.accentBg }}
                        >
                          {h.emoji}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: '#3A2A1A' }}
                        >
                          {h.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
