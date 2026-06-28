'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Info, ChevronRight, Loader2 } from 'lucide-react';
import { submitWaitlist, type WaitlistFormState } from '@/app/actions';
import { FloatingBlob } from '@/components/ui';

const INITIAL_STATE: WaitlistFormState = { status: 'idle', message: '' };

const PERKS = [
  { emoji: '🎁', text: 'Truy cập sớm hoàn toàn miễn phí' },
  { emoji: '⭐', text: 'Tính năng Premium trong 3 tháng đầu' },
  { emoji: '📬', text: 'Cập nhật trực tiếp từ đội ngũ phát triển' },
  { emoji: '🎓', text: 'Tài liệu hướng dẫn dạy con tài chính' },
];

const ROLES = [
  { value: 'parent', label: '👨‍👩‍👧 Phụ huynh' },
  { value: 'teacher', label: '🏫 Giáo viên' },
  { value: 'other', label: '🙋 Khác' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      id="waitlist-submit"
      type="submit"
      disabled={pending}
      className="w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2 mt-1"
      style={{
        background: pending 
          ? '#B89A72' 
          : 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
        boxShadow: pending 
          ? 'none' 
          : '0 8px 24px rgba(229,138,44,0.35)',
        fontFamily: "'Nunito', sans-serif",
        cursor: pending ? 'not-allowed' : 'pointer',
      }}
      whileHover={pending ? {} : { y: -2, scale: 1.02 }}
      whileTap={pending ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Đang đăng ký...
        </>
      ) : (
        <>
          Đăng ký Waitlist miễn phí
          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
        </>
      )}
    </motion.button>
  );
}

export default function WaitlistCTA() {
  const [state, formAction] = useFormState(submitWaitlist, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form on success
  useEffect(() => {
    if (state.status === 'success' && formRef.current) {
      formRef.current.reset();
    }
  }, [state.status]);

  const feedbackConfig = {
    success: {
      icon: CheckCircle,
      bg: 'rgba(73,145,27,0.12)',
      border: 'rgba(73,145,27,0.30)',
      color: '#276B1B',
      iconColor: '#49911B',
    },
    duplicate: {
      icon: Info,
      bg: 'rgba(4,137,209,0.10)',
      border: 'rgba(4,137,209,0.30)',
      color: '#015A8C',
      iconColor: '#0489D1',
    },
    error: {
      icon: AlertCircle,
      bg: 'rgba(248,49,47,0.08)',
      border: 'rgba(248,49,47,0.25)',
      color: '#8B1210',
      iconColor: '#F8312F',
    },
  };

  const feedback = state.status !== 'idle' ? feedbackConfig[state.status as keyof typeof feedbackConfig] : null;

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden section-padding"
      style={{ background: 'linear-gradient(160deg, #3A2A1A 0%, #6A4A32 60%, #8C4F2E 100%)' }}
    >
      {/* Decorative blobs */}
      <FloatingBlob color="#F3A85A" size="500px" className="-top-40 -right-40" opacity={0.12} blur="100px" />
      <FloatingBlob color="#FFD55A" size="400px" className="-bottom-20 -left-32" opacity={0.10} blur="90px" />
      <FloatingBlob color="#6B4DE6" size="300px" className="top-1/3 left-1/4" opacity={0.08} blur="80px" />

      {/* Floating coins */}
      {['🪙', '💰', '🏆', '⭐'].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl pointer-events-none select-none hidden md:block"
          style={{
            left: `${[8, 85, 12, 80][i]}%`,
            top: `${[20, 15, 70, 72][i]}%`,
          }}
          animate={{ y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          {emoji}
        </motion.span>
      ))}

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
                color: '#3A2A1A',
                boxShadow: '0 4px 16px rgba(255,213,90,0.30)',
              }}
            >
              🚀 Đăng ký Waitlist — Hoàn toàn miễn phí
            </motion.div>

            <h2
              className="text-responsive-display font-black leading-tight mb-4 text-white"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Bắt đầu hành trình{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FFD55A 0%, #F3A85A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                tài chính
              </span>{' '}
              cùng con ngay!
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#FCE6C9', fontFamily: "'Nunito', sans-serif" }}
            >
              Tham gia danh sách chờ để trở thành những gia đình đầu tiên trải nghiệm Kidzeconomy và nhận đặc quyền độc quyền.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Left: Perks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <h3
                className="font-black text-xl text-white"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                🎉 Quyền lợi khi đăng ký sớm
              </h3>

              <div className="flex flex-col gap-3">
                {PERKS.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.09 }}
                    className="flex items-start gap-3 p-4 rounded-2xl"
                    style={{
                      background: 'rgba(252,230,201,0.10)',
                      border: '1px solid rgba(221,192,138,0.20)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className="text-2xl flex-shrink-0">{perk.emoji}</span>
                    <p className="text-sm font-semibold" style={{ color: '#FCE6C9', fontFamily: "'Nunito', sans-serif" }}>
                      {perk.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Counter badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,213,90,0.15) 0%, rgba(229,138,44,0.15) 100%)',
                  border: '1px solid rgba(243,168,90,0.30)',
                }}
              >
                <div className="text-3xl">👨‍👩‍👧‍👦</div>
                <div>
                  <p className="font-black text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    10,247 gia đình
                  </p>
                  <p className="text-xs" style={{ color: '#FCE6C9' }}>đã đăng ký chờ đợi</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-3xl p-8"
                style={{
                  background: 'rgba(255,247,237,0.95)',
                  border: '1.5px solid rgba(221,192,138,0.40)',
                  boxShadow: '0 24px 80px rgba(58,42,26,0.35)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <h3
                  className="font-black text-xl mb-6"
                  style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
                >
                  ✍️ Điền thông tin của bạn
                </h3>

                <form ref={formRef} action={formAction} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="waitlist-name"
                      className="text-sm font-bold"
                      style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
                    >
                      Họ và tên (tùy chọn)
                    </label>
                    <input
                      id="waitlist-name"
                      name="name"
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-2xl outline-none transition-all duration-200 text-sm font-medium"
                      style={{
                        background: '#FFF7ED',
                        border: '2px solid #DDC08A',
                        color: '#3A2A1A',
                        fontFamily: "'Nunito', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#F3A85A';
                        e.target.style.boxShadow = '0 0 0 4px rgba(243,168,90,0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#DDC08A';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="waitlist-email"
                      className="text-sm font-bold"
                      style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
                    >
                      Email <span style={{ color: '#F8312F' }}>*</span>
                    </label>
                    <input
                      id="waitlist-email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-2xl outline-none transition-all duration-200 text-sm font-medium"
                      style={{
                        background: '#FFF7ED',
                        border: '2px solid #DDC08A',
                        color: '#3A2A1A',
                        fontFamily: "'Nunito', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#F3A85A';
                        e.target.style.boxShadow = '0 0 0 4px rgba(243,168,90,0.15)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#DDC08A';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Role selector */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-sm font-bold"
                      style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
                    >
                      Bạn là?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {ROLES.map((role) => (
                        <label
                          key={role.value}
                          htmlFor={`role-${role.value}`}
                          className="flex flex-col items-center gap-1 p-3 rounded-2xl cursor-pointer transition-all duration-150 text-center"
                          style={{
                            background: '#FFF0D9',
                            border: '2px solid #DDC08A',
                            cursor: 'pointer',
                          }}
                        >
                          <input
                            type="radio"
                            id={`role-${role.value}`}
                            name="role"
                            value={role.value}
                            defaultChecked={role.value === 'parent'}
                            className="sr-only peer"
                          />
                          <span className="text-lg">{role.label.split(' ')[0]}</span>
                          <span className="text-xs font-bold" style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}>
                            {role.label.split(' ').slice(1).join(' ')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Feedback message */}
                  <AnimatePresence mode="wait">
                    {feedback && state.message && (
                      <motion.div
                        key={state.status}
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-start gap-3 p-4 rounded-2xl"
                        style={{
                          background: feedback.bg,
                          border: `1px solid ${feedback.border}`,
                        }}
                      >
                        <feedback.icon
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: feedback.iconColor }}
                        />
                        <p
                          className="text-sm font-semibold"
                          style={{ color: feedback.color, fontFamily: "'Nunito', sans-serif" }}
                        >
                          {state.message}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <form ref={formRef} action={formAction} className="flex flex-col gap-4">
  {/* ... các input cũ ... */}
  
  {/* Thay thế toàn bộ motion.button cũ bằng dòng này: */}
  <SubmitButton />

  {/* ... các phần còn lại ... */}
</form>

                  {/* Privacy note */}
                  <p
                    className="text-xs text-center"
                    style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
                  >
                    🔒 Chúng tôi tôn trọng quyền riêng tư. Không spam, hủy đăng ký bất cứ lúc nào.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Bottom logos/media strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-sm mb-5" style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}>
              Được tin dùng bởi các gia đình trên cả nước
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {['🏫 Nhà trường', '🏆 Award 2024', '📰 Báo Tuổi Trẻ', '🎓 Bộ GD&ĐT', '📱 App of the Year'].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + i * 0.07 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(252,230,201,0.12)',
                    border: '1px solid rgba(221,192,138,0.25)',
                    color: '#FCE6C9',
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
