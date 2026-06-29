'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary, StatCard, FloatingBlob } from '@/components/ui';
import Image from 'next/image';

// ── Data ──────────────────────────────────────────────────────

const TRUST_SIGNALS = [
  { icon: '🎓', text: 'Được chuyên gia giáo dục khuyên dùng' },
  { icon: '👨‍👩‍👧', text: '1000+ phụ huynh quan tâm' },
  { icon: '🔒', text: 'An toàn & bảo mật' },
];

const FLOATING_EMOJIS = [
  { emoji: '🏠', x: '-5%', y: '15%', delay: 0 },
  { emoji: '⭐', x: '105%', y: '20%', delay: 0.4 },
  { emoji: '💪', x: '-2%', y: '65%', delay: 0.8 },
  { emoji: '🎁', x: '98%', y: '80%', delay: 1.2 },
];

const STATS = [
  { value: '1000+', label: 'Phụ huynh quan tâm', icon: '👨‍👩‍👧', id: 'stat-parents' },
  { value: '50+', label: 'Nhiệm vụ thiết kế sẵn', icon: '🎯', id: 'stat-missions' },
  { value: '4.9★', label: 'Đánh giá trải nghiệm', icon: '⭐', id: 'stat-rating' },
];

// ── Animation Variants ────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Component ─────────────────────────────────────────────────

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF0D9 0%, #FFF7ED 50%, #FCE6C9 100%)' }}
    >
      {/* ── Decorative blobs ── */}
      <FloatingBlob color="#F3A85A" size="520px" className="-top-36 -right-44" opacity={0.18} blur="110px" />
      <FloatingBlob color="#FFD55A" size="420px" className="-bottom-24 -left-36" opacity={0.15} blur="95px" />
      <FloatingBlob color="#6B4DE6" size="280px" className="top-1/2 left-1/3" opacity={0.07} blur="80px" />

      <div className="section-container section-padding relative z-10 w-full">
        {/* ── Floating emoji badges (desktop only) ── */}
        {FLOATING_EMOJIS.map((el, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:flex items-center justify-center select-none pointer-events-none z-0"
            style={{ left: el.x, top: el.y }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: el.delay + 0.9, duration: 0.5 },
              scale: { delay: el.delay + 0.9, duration: 0.4 },
              y: { delay: el.delay + 1.4, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div
              className="rounded-2xl flex items-center justify-center p-3"
              style={{
                width: 60,
                height: 60,
                background: 'rgba(255,255,255,0.82)',
                border: '1.5px solid #DDC08A',
                boxShadow: '0 8px 28px rgba(74,44,24,0.14)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-2xl leading-none">{el.emoji}</span>
            </div>
          </motion.div>
        ))}

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">

          {/* ── Left Column: Text Content ── */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

            {/* ── Top badge ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
                  color: '#3A2A1A',
                  boxShadow: '0 4px 16px rgba(229,138,44,0.30)',
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                🏠 Giáo dục tài chính tại nhà
              </span>
            </motion.div>

            {/* ── Main headline group (staggered) ── */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center lg:items-start gap-5"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight max-w-2xl text-balance"
                style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
              >
                Dạy con tự lập từ những việc nhỏ nhất – Biến việc nhà thành{' '}
                &ldquo;
                <span
                  style={{
                    background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  trò chơi
                </span>
                &rdquo;{' '}
                thú vị!
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
                style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
              >
                KidzEconomy – Ứng dụng giúp phụ huynh giáo dục tài chính sớm cho con thông qua mô hình:{' '}
                <strong style={{ color: '#8C4F2E' }}>Giao việc nhà → Tích điểm → Đổi món quà con thích</strong>.
                {' '}Giúp con hiểu giá trị sức lao động và ngừng đòi hỏi vô lý.
              </motion.p>
            </motion.div>

            {/* ── CTA Buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <ButtonPrimary
                id="hero-cta-workshop"
                size="lg"
                onClick={() => handleScroll('#event')}
                icon={<ChevronRight className="w-5 h-5" strokeWidth={2.5} />}
              >
                Đăng ký tham gia Workshop
              </ButtonPrimary>
              <ButtonSecondary
                id="hero-cta-waitlist"
                size="lg"
                onClick={() => handleScroll('#waitlist')}
              >
                Đăng ký nhận thông báo ra mắt
              </ButtonSecondary>
            </motion.div>

            {/* ── Trust signals ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm"
              style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
            >
              {TRUST_SIGNALS.map(({ icon, text }, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <span>{icon}</span>
                  {text}
                </span>
              ))}
            </motion.div>

            {/* ── Stats Row ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 w-full max-w-md"
            >
              {STATS.map((stat) => (
                <StatCard key={stat.id} id={stat.id} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Phone Mockup ── */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-auto flex justify-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              {/* Glow effect behind phone */}
              <div
                className="absolute -inset-10 rounded-full blur-3xl"
                style={{ background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)', opacity: 0.15 }}
              />

              {/* Phone frame */}
              <div
                className="relative mx-auto"
                style={{
                  width: 300,
                  borderRadius: '2.5rem',
                  background: '#1a1a1a',
                  padding: '14px 12px',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset',
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
                  style={{
                    width: 130,
                    height: 30,
                    background: '#1a1a1a',
                    borderRadius: '0 0 22px 22px',
                  }}
                >
                  <div
                    className="absolute top-2 left-1/2 -translate-x-1/2"
                    style={{
                      width: 65,
                      height: 6,
                      background: '#333',
                      borderRadius: 3,
                    }}
                  />
                </div>

                {/* Screen content */}
                <div
                  className="relative overflow-hidden"
                  style={{ borderRadius: '2rem' }}
                >
                  <Image
                    src="/images/screenshots/dashboard.png"
                    alt="KidzEconomy - Màn hình chọn vai trò"
                    width={276}
                    height={598}
                    className="w-full h-auto object-cover"
                    priority
                    quality={90}
                  />
                </div>

                {/* Home indicator */}
                <div className="flex justify-center mt-2">
                  <div
                    style={{
                      width: 110,
                      height: 4,
                      background: '#555',
                      borderRadius: 2,
                    }}
                  />
                </div>
              </div>

              {/* Floating notification badges */}
              <motion.div
                className="absolute -left-8 top-1/4 hidden lg:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-xl">⭐</span>
                  <div>
                    <p className="text-xs font-extrabold" style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}>+30 điểm</p>
                    <p className="text-[10px]" style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}>Rửa bát xong!</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-16 hidden lg:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <div
                  className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span className="text-xl">🎁</span>
                  <div>
                    <p className="text-xs font-extrabold" style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}>Đổi quà!</p>
                    <p className="text-[10px]" style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}>250 xu sẵn sàng</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom wave SVG separator ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ display: 'block', height: '60px' }}
          preserveAspectRatio="none"
        >
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" style={{ fill: '#FFF7ED' }} />
        </svg>
      </div>
    </section>
  );
}
