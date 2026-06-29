'use client';

import { motion } from 'framer-motion';
import { SectionHeading, FloatingBlob } from '@/components/ui';

const FEATURES = [
  {
    id: 'feature-missions',
    emoji: '🎯',
    title: 'Hệ thống Nhiệm vụ',
    description: 'Hơn 50+ nhiệm vụ thiết kế bởi chuyên gia giáo dục. Phụ huynh cũng có thể tự tạo nhiệm vụ phù hợp với gia đình.',
    gradient: 'linear-gradient(135deg, #EDE5FF 0%, #D4C5FF 100%)',
    iconBg: 'linear-gradient(135deg, #6B4DE6 0%, #4B2DC6 100%)',
    accent: '#6B4DE6',
    tags: ['50+ nhiệm vụ', 'Tùy chỉnh', 'Phù hợp lứa tuổi'],
  },
  {
    id: 'feature-rewards',
    emoji: '🏆',
    title: 'Phần thưởng Thực tế',
    description: 'Phụ huynh thiết lập cửa hàng phần thưởng riêng. Bé dùng xu đổi quà — học được cách chi tiêu có kế hoạch.',
    gradient: 'linear-gradient(135deg, #FFF0D9 0%, #FCE0B0 100%)',
    iconBg: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
    accent: '#E58A2C',
    tags: ['Quà tùy chỉnh', 'Cửa hàng xu', 'Chi tiêu có kế hoạch'],
  },
  {
    id: 'feature-savings',
    emoji: '💰',
    title: 'Học Tiết kiệm',
    description: 'Heo đất kỹ thuật số giúp bé đặt mục tiêu tiết kiệm, theo dõi tiến độ và cảm nhận niềm vui khi đạt được.',
    gradient: 'linear-gradient(135deg, #F0FFF4 0%, #BEEFCA 100%)',
    iconBg: 'linear-gradient(135deg, #49911B 0%, #276B1B 100%)',
    accent: '#49911B',
    tags: ['Heo đất số', 'Mục tiêu tiết kiệm', 'Theo dõi tiến độ'],
  },
  {
    id: 'feature-dashboard',
    emoji: '📊',
    title: 'Dashboard Phụ huynh',
    description: 'Theo dõi toàn bộ hoạt động của con: nhiệm vụ, xu thưởng, xu tiêu. Duyệt và phân công nhiệm vụ chỉ trong vài giây.',
    gradient: 'linear-gradient(135deg, #D6EAFF 0%, #B0D4FF 100%)',
    iconBg: 'linear-gradient(135deg, #0489D1 0%, #0268A0 100%)',
    accent: '#0489D1',
    tags: ['Quản lý tập trung', 'Thông báo realtime', 'Lịch sử giao dịch'],
  },
  {
    id: 'feature-achievements',
    emoji: '🌟',
    title: 'Thành tích & Cấp độ',
    description: 'Hệ thống gamification với huy hiệu, cấp độ và bảng xếp hạng trong gia đình. Bé luôn có động lực để tiến lên!',
    gradient: 'linear-gradient(135deg, #FFF9E0 0%, #FFE88A 100%)',
    iconBg: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
    accent: '#E58A2C',
    tags: ['Huy hiệu', 'Cấp độ', 'Bảng xếp hạng'],
  },
  {
    id: 'feature-learn',
    emoji: '📚',
    title: 'Bài học Tài chính',
    description: 'Các video và câu chuyện ngắn giải thích khái niệm tài chính theo ngôn ngữ trẻ em hiểu được. Học mà chơi!',
    gradient: 'linear-gradient(135deg, #FFE8F5 0%, #FFCCE8 100%)',
    iconBg: 'linear-gradient(135deg, #E573B5 0%, #C0396B 100%)',
    accent: '#E573B5',
    tags: ['Video ngắn', 'Câu chuyện', 'Mini games'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden section-padding"
      style={{ background: '#FFF7ED' }}
    >
      <FloatingBlob color="#6B4DE6" size="450px" className="-left-40 -top-20" opacity={0.05} blur="100px" />
      <FloatingBlob color="#F3A85A" size="350px" className="-right-24 bottom-10" opacity={0.08} blur="90px" />

      <div className="section-container">
        <SectionHeading
          badge="✨ Tính năng nổi bật"
          title="Mọi thứ bé cần để trở thành"
          highlight="chuyên gia tài chính nhí"
          description="Được thiết kế cùng chuyên gia giáo dục và tâm lý trẻ em để tối ưu trải nghiệm học tập."
          badgeColor="orange"
        />

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              variants={cardVariants}
              className="group rounded-3xl p-6 flex flex-col gap-5 cursor-default"
              style={{
                background: feature.gradient,
                border: `1.5px solid ${feature.accent}20`,
                boxShadow: `0 4px 20px ${feature.accent}10`,
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 16px 48px ${feature.accent}22`,
                borderColor: `${feature.accent}40`,
              }}
              transition={{ duration: 0.22 }}
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-4">
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: feature.iconBg,
                    boxShadow: `0 6px 20px ${feature.accent}30`,
                  }}
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  {feature.emoji}
                </motion.div>
                <div className="flex flex-col gap-1 pt-1">
                  <h3
                    className="font-black text-lg leading-tight"
                    style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
              >
                {feature.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${feature.accent}15`,
                      color: feature.accent,
                      border: `1px solid ${feature.accent}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <span
            className="px-5 py-2.5 rounded-full font-semibold text-sm"
            style={{ background: '#FCE6C9', color: '#8C4F2E', border: '1px solid #DDC08A' }}
          >
            🔒 Không quảng cáo · Không mua trong app · An toàn 100% cho trẻ em
          </span>
        </motion.div>
      </div>
    </section>
  );
}
