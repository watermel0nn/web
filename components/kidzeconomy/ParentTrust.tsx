'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading, FloatingBlob } from '@/components/ui';
import { Shield, BarChart3, ClipboardCheck, Wallet } from 'lucide-react';

const PARENT_FEATURES = [
  {
    icon: BarChart3,
    title: 'Theo dõi tiến độ chi tiết',
    description: 'Biểu đồ trực quan hiển thị số nhiệm vụ hoàn thành, đang chinh phục và chờ duyệt của từng con.',
    color: '#6B4DE6',
  },
  {
    icon: ClipboardCheck,
    title: 'Phê duyệt nhiệm vụ nhanh chóng',
    description: 'Xem xét và phê duyệt nhiệm vụ con đã hoàn thành chỉ với một chạm. Đảm bảo công bằng và minh bạch.',
    color: '#E58A2C',
  },
  {
    icon: Wallet,
    title: 'Quản lý giới hạn chi tiêu',
    description: 'Thiết lập giới hạn điểm chi tiêu, kiểm soát danh mục phần thưởng và theo dõi lịch sử giao dịch.',
    color: '#49911B',
  },
  {
    icon: Shield,
    title: 'An toàn & Riêng tư',
    description: 'Toàn bộ dữ liệu được mã hóa. Phụ huynh hoàn toàn kiểm soát, không chia sẻ với bên thứ ba.',
    color: '#0489D1',
  },
];

export default function ParentTrust() {
  return (
    <section
      id="parent-trust"
      className="relative overflow-hidden"
      style={{
        background: '#F9FAFB',
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* Subtle top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #E5E7EB, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #E5E7EB, transparent)' }} />

      <FloatingBlob color="#6B4DE6" size="300px" className="-right-20 top-10" opacity={0.04} blur="90px" />
      <FloatingBlob color="#49911B" size="250px" className="-left-16 bottom-10" opacity={0.04} blur="80px" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <SectionHeading
          badge="👨👩👧 Dành cho Phụ huynh"
          badgeColor="green"
          title="Sự an tâm của"
          highlight="Phụ huynh"
          description="Kiểm soát toàn diện, theo dõi mọi hoạt động của con — tất cả trong tầm tay bạn."
          align="center"
        />

        {/* Main Card */}
        <motion.div
          className="mt-14 md:mt-20 rounded-3xl overflow-hidden"
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E5E7EB',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left: Phone Mockup */}
            <motion.div
              className="lg:w-5/12 flex items-center justify-center p-8 md:p-12"
              style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FCE6C9 100%)' }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                {/* Glow */}
                <div
                  className="absolute -inset-6 rounded-full blur-3xl opacity-15"
                  style={{ background: '#E58A2C' }}
                />
                {/* Phone */}
                <div
                  className="relative mx-auto"
                  style={{
                    width: 240,
                    borderRadius: '2.5rem',
                    background: '#1a1a1a',
                    padding: '12px 10px',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1) inset',
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
                    style={{
                      width: 100,
                      height: 24,
                      background: '#1a1a1a',
                      borderRadius: '0 0 18px 18px',
                    }}
                  >
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2"
                      style={{ width: 50, height: 5, background: '#333', borderRadius: 3 }}
                    />
                  </div>
                  {/* Screen */}
                  <div className="relative overflow-hidden" style={{ borderRadius: '2rem' }}>
                    <Image
                      src="/images/screenshots/new2.jpg"
                      alt="Dashboard quản lý phụ huynh - KidzEconomy"
                      width={220}
                      height={476}
                      className="w-full h-auto object-cover"
                      quality={90}
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="flex justify-center mt-2">
                    <div style={{ width: 80, height: 4, background: '#555', borderRadius: 2 }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Features */}
            <div className="lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3
                  className="text-2xl sm:text-3xl font-black mb-3"
                  style={{ color: '#3A2A1A' }}
                >
                  Dashboard Quản lý Toàn diện
                </h3>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#6A4A32' }}>
                  Giao diện trực quan giúp phụ huynh nắm bắt mọi hoạt động của con: từ nhiệm vụ đã hoàn thành, điểm tích lũy đến xu hướng phát triển theo tuần/tháng.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PARENT_FEATURES.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      className="flex gap-4 p-4 rounded-2xl"
                      style={{
                        background: '#F9FAFB',
                        border: '1px solid #F0F0F0',
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{
                        y: -3,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                        borderColor: '#E0E0E0',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${feature.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: feature.color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold mb-1" style={{ color: '#3A2A1A' }}>
                          {feature.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: '#9C7A5B' }}>
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
