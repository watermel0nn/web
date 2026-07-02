'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Flame, ChevronRight } from 'lucide-react';
import { FloatingBlob } from '@/components/ui';

// ═══════════════════════════════════════════════════════════
// KIDZECONOMY – EVENT SECTION
// Workshop Trải nghiệm KidzEconomy
// ═══════════════════════════════════════════════════════════

const font: React.CSSProperties = { fontFamily: "'Nunito', sans-serif" };

// ── Event details ──────────────────────────────────────────
const eventDetails = [
  { icon: <Calendar size={20} />, emoji: '📅', label: 'Thời gian', value: 'Tháng 7, 2025' },
  { icon: <MapPin size={20} />, emoji: '📍', label: 'Địa điểm', value: 'TP. Hồ Chí Minh' },
  { icon: <Users size={20} />, emoji: '👨‍👩‍👧‍👦', label: 'Đối tượng', value: 'Phụ huynh & Bé 7-12 tuổi' },
  { icon: <Flame size={20} />, emoji: '🔥', label: 'Số lượng', value: 'Giới hạn 30 gia đình' },
];

// ── Workshop activities ────────────────────────────────────
const activities = [
  { emoji: '🎮', text: 'Trải nghiệm App KidzEconomy trực tiếp' },
  { emoji: '🏆', text: 'Thử thách kiếm điểm & đổi quà thật' },
  { emoji: '🎓', text: 'Nhận tư vấn giáo dục tài chính từ chuyên gia' },
  { emoji: '🎁', text: 'Quà tặng đặc biệt cho mọi gia đình tham gia' },
];

// ── Floating emoji decorations ─────────────────────────────
const floatingEmojis = [
  { emoji: '🎪', top: '6%', left: '4%', delay: 0 },
  { emoji: '🎯', top: '12%', right: '6%', delay: 1.2 },
  { emoji: '🏠', bottom: '10%', left: '7%', delay: 0.6 },
  { emoji: '⭐', bottom: '14%', right: '5%', delay: 1.8 },
];

// ── Animations ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Pulse keyframes (injected once via style tag) ──────────
const pulseKeyframes = `
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(243,168,90,0.4), 0 0 60px rgba(243,168,90,0.15); }
  50%      { box-shadow: 0 0 30px rgba(243,168,90,0.65), 0 0 80px rgba(243,168,90,0.3); }
}
@keyframes floatEmoji {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-14px) rotate(6deg); }
}
`;

// ═══════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════

export default function EventSection() {
  const handleScroll = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="event"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'linear-gradient(160deg, #3A2A1A 0%, #6A4A32 60%, #8C4F2E 100%)',
        ...font,
      }}
    >
      {/* Injected keyframes */}
      <style>{pulseKeyframes}</style>

      {/* ── Floating blobs ─────────────────────────────── */}
      <FloatingBlob color="#F3A85A" size="420px" className="top-[-80px] left-[-120px]" opacity={0.12} blur="120px" />
      <FloatingBlob color="#6B4DE6" size="320px" className="bottom-[-60px] right-[-100px]" opacity={0.10} blur="110px" />
      <FloatingBlob color="#FFD55A" size="260px" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" opacity={0.06} blur="100px" />

      {/* ── Floating emoji decorations ─────────────────── */}
      {floatingEmojis.map(({ emoji, delay, ...pos }) => (
        <span
          key={emoji}
          className="absolute text-3xl md:text-4xl pointer-events-none select-none hidden md:block"
          style={{
            ...pos,
            animation: `floatEmoji 4s ease-in-out ${delay}s infinite`,
            opacity: 0.25,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block px-5 py-1.5 rounded-full text-sm font-bold mb-5"
            style={{
              background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
              color: '#3A2A1A',
              boxShadow: '0 2px 12px rgba(255,213,90,0.35)',
            }}
          >
            🎪 Sự kiện đặc biệt
          </motion.span>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #FFD55A 0%, #F3A85A 50%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            KIDZCONOMY FAMILY
            <br />
            EXPERIENCE DAY
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg italic max-w-xl mx-auto"
            style={{ color: '#FCE6C9', opacity: 0.85 }}
          >
            &ldquo;Những việc nhỏ hôm nay tạo nên giá trị lớn trong tương lai&rdquo;
          </motion.p>
        </motion.div>

        {/* ── Featured Card ──────────────────────────── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="rounded-3xl p-6 sm:p-8 md:p-10"
          style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FFF7ED 50%, #FCE6C9 100%)',
            border: '2px solid #DDC08A',
            boxShadow: '0 12px 48px rgba(74,44,24,0.20), 0 0 0 1px rgba(221,192,138,0.25)',
          }}
        >
          {/* Event name */}
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8"
            style={{ color: '#3A2A1A' }}
          >
            🎉 Workshop Trải nghiệm KidzEconomy
          </h3>

          {/* ── Detail grid ────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {eventDetails.map(({ emoji, label, value, icon }, idx) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, #FFF7ED 0%, #FCE6C9 100%)',
                  border: '1.5px solid #F0E0C0',
                }}
              >
                {/* Icon circle */}
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
                    color: '#fff',
                    boxShadow: '0 3px 10px rgba(140,79,46,0.20)',
                  }}
                >
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold" style={{ color: '#9C7A5B' }}>
                    {emoji} {label}
                  </p>
                  <p className="text-sm sm:text-base font-bold truncate" style={{ color: '#3A2A1A' }}>
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Divider ────────────────────────────────── */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #DDC08A)' }} />
            <span className="text-base">✨</span>
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #DDC08A, transparent)' }} />
          </div>

          {/* ── Activities ─────────────────────────────── */}
          <div className="mb-8">
            <p className="text-sm font-bold mb-4 text-center" style={{ color: '#8C4F2E' }}>
              BÉ SẼ ĐƯỢC TRẢI NGHIỆM
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activities.map(({ emoji, text }, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #F0E0C0',
                  }}
                >
                  <span className="text-xl flex-shrink-0">{emoji}</span>
                  <span className="text-sm font-semibold" style={{ color: '#3A2A1A' }}>
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Authentic community indicators ─────────────────────── */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                background: '#E8F5E9',
                color: '#2E7D32',
                border: '1px solid rgba(46,125,50,0.3)',
              }}
            >
              🌱 Gia đình tiên phong
            </span>

            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
                color: '#3A2A1A',
              }}
            >
              🤝 Cùng xây dựng cộng đồng
            </span>
          </div>

          {/* ── CTA Button ─────────────────────────────── */}
          <motion.button
            onClick={handleScroll}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base sm:text-lg font-black cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #E58A2C 0%, #F3A85A 50%, #FFD55A 100%)',
              color: '#3A2A1A',
              border: 'none',
              animation: 'pulseGlow 2.5s ease-in-out infinite',
            }}
          >
            Giữ chỗ ngay – Chỉ giới hạn 30 gia đình
            <ChevronRight size={20} strokeWidth={3} />
          </motion.button>

          <p
            className="text-xs text-center mt-3 font-semibold"
            style={{ color: '#9C7A5B' }}
          >
            Hoàn toàn miễn phí • Quà tặng cho mọi gia đình
          </p>
        </motion.div>
      </div>
    </section>
  );
}
