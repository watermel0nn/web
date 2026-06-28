'use client';

import { motion } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { SectionHeading, FloatingBlob } from '@/components/ui';

const PROBLEMS = [
  { text: 'Con đòi mua đồ chơi mọi lúc mọi nơi', id: 'problem-1' },
  { text: 'Không biết tiết kiệm, tiêu xài hoang phí', id: 'problem-2' },
  { text: 'Chưa hiểu giá trị của đồng tiền', id: 'problem-3' },
  { text: 'Phụ huynh không biết bắt đầu từ đâu', id: 'problem-4' },
  { text: 'Các bài học tài chính quá khô khan, nhàm chán', id: 'problem-5' },
];

const SOLUTIONS = [
  { text: 'Học tài chính qua nhiệm vụ thú vị như trò chơi', id: 'solution-1' },
  { text: 'Hệ thống xu thưởng tạo động lực tiết kiệm', id: 'solution-2' },
  { text: 'Hiểu giá trị tiền qua trải nghiệm thực tế', id: 'solution-3' },
  { text: 'Bảng điều khiển phụ huynh dễ theo dõi', id: 'solution-4' },
  { text: 'Nội dung được thiết kế bởi chuyên gia giáo dục', id: 'solution-5' },
];

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden section-padding"
      style={{ background: '#FFF7ED' }}
    >
      <FloatingBlob color="#F8312F" size="350px" className="-left-24 top-0" opacity={0.05} blur="80px" />
      <FloatingBlob color="#49911B" size="350px" className="-right-24 bottom-0" opacity={0.06} blur="80px" />

      <div className="section-container">
        {/* Heading */}
        <SectionHeading
          badge="🔍 Nhận diện vấn đề"
          title="Nỗi lo của mọi"
          highlight="phụ huynh"
          description="Hàng triệu cha mẹ đang gặp những vấn đề này — và Kidzeconomy ra đời để giải quyết tất cả."
          badgeColor="orange"
        />

        {/* Two-column cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Problem Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #FFF5F5 0%, #FFE8E8 100%)',
              border: '2px solid rgba(248,49,47,0.15)',
              boxShadow: '0 8px 32px rgba(248,49,47,0.08)',
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: 'rgba(248,49,47,0.08)', borderBottom: '1px solid rgba(248,49,47,0.12)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(248,49,47,0.12)' }}
              >
                😰
              </div>
              <div>
                <h3 className="font-black text-lg" style={{ color: '#C0392B', fontFamily: "'Nunito', sans-serif" }}>
                  Trước khi có Kidzeconomy
                </h3>
                <p className="text-xs" style={{ color: '#9C7A5B' }}>Những vấn đề thường gặp</p>
              </div>
            </div>

            {/* List */}
            <div className="p-6 flex flex-col gap-3">
              {PROBLEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3.5 rounded-2xl"
                  style={{ background: 'rgba(248,49,47,0.06)' }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(248,49,47,0.15)' }}
                  >
                    <X className="w-3.5 h-3.5" style={{ color: '#F8312F' }} strokeWidth={3} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#5A2D2D', fontFamily: "'Nunito', sans-serif" }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow (desktop) */}
          <motion.div
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          >
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #F0FFF4 0%, #DCFCE7 100%)',
              border: '2px solid rgba(73,145,27,0.20)',
              boxShadow: '0 8px 32px rgba(73,145,27,0.10)',
            }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: 'rgba(73,145,27,0.08)', borderBottom: '1px solid rgba(73,145,27,0.12)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(73,145,27,0.12)' }}
              >
                🚀
              </div>
              <div>
                <h3 className="font-black text-lg" style={{ color: '#276B1B', fontFamily: "'Nunito', sans-serif" }}>
                  Sau khi có Kidzeconomy
                </h3>
                <p className="text-xs" style={{ color: '#9C7A5B' }}>Những thay đổi tích cực</p>
              </div>
            </div>

            {/* List */}
            <div className="p-6 flex flex-col gap-3">
              {SOLUTIONS.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3.5 rounded-2xl"
                  style={{ background: 'rgba(73,145,27,0.06)' }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(73,145,27,0.15)' }}
                  >
                    <Check className="w-3.5 h-3.5" style={{ color: '#49911B' }} strokeWidth={3} />
                  </div>
                  <p className="text-sm font-semibold" style={{ color: '#1A3D0E', fontFamily: "'Nunito', sans-serif" }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center connector arrow */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)', boxShadow: '0 8px 24px rgba(229,138,44,0.30)' }}
          >
            <span className="text-white font-bold text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Kidzeconomy là giải pháp
            </span>
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
