'use client'

import { motion } from 'framer-motion'
import { SectionHeading, FloatingBlob } from '@/components/ui'

const painPoints = [
  {
    emoji: '😭',
    title: 'Con khóc lóc, ăn vạ đòi mua đồ',
    description:
      'Mỗi lần vào siêu thị là một lần "chiến tranh". Con khóc lóc, lăn ra đất đòi mua đồ chơi. Ba mẹ mệt mỏi, xấu hổ, không biết phải làm sao.',
    accent: '#F8312F',
    bg: '#FFF5F5',
  },
  {
    emoji: '😴',
    title: 'Con lười biếng, ỷ lại',
    description:
      'Con không bao giờ tự giác phụ giúp việc nhà. Mọi thứ đều do ba mẹ làm hết. Con thiếu trách nhiệm và kỹ năng tự lập cơ bản.',
    accent: '#E58A2C',
    bg: '#FFF7ED',
  },
  {
    emoji: '💸',
    title: 'Con tiêu xài phung phí',
    description:
      'Con không hiểu tiền từ đâu mà có. Được cho tiền tiêu vặt thì xài hết ngay lập tức, không biết tiết kiệm hay trân trọng giá trị đồng tiền.',
    accent: '#6B4DE6',
    bg: '#F5F0FF',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function PainPoints() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #FFF7ED 0%, #FFF0D9 100%)',
        fontFamily: "'Nunito', sans-serif",
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <FloatingBlob
        color="#F8312F"
        size="260px"
        className="top-[5%] -left-[80px]"
        opacity={0.06}
      />
      <FloatingBlob
        color="#6B4DE6"
        size="220px"
        className="top-[60%] -right-[60px]"
        opacity={0.06}
      />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
        <SectionHeading
          badge="😤 Nỗi đau của phụ huynh"
          title="Ba mẹ có đang đau đầu vì..."
          badgeColor="orange"
          align="center"
        />

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 28,
            marginTop: 48,
          }}
        >
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                background: '#FFFFFF',
                borderRadius: 24,
                padding: 32,
                position: 'relative',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                borderBottom: `3px dashed ${point.accent}`,
                cursor: 'default',
              }}
            >
              {/* Red indicator dot — top-right */}
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#F8312F',
                  boxShadow: '0 0 0 3px rgba(248,49,47,0.18)',
                }}
              />

              {/* Emoji container */}
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: point.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  marginBottom: 20,
                }}
              >
                {point.emoji}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  color: '#3A2A1A',
                  marginBottom: 12,
                  lineHeight: 1.4,
                }}
              >
                {point.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: '#6A4A32',
                  margin: 0,
                }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statistic text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontFamily: "'Nunito', sans-serif",
            textAlign: 'center',
            marginTop: 44,
            fontSize: 15,
            color: '#9C7A5B',
            background: 'rgba(255,255,255,0.6)',
            display: 'inline-block',
            width: '100%',
            padding: '14px 24px',
            borderRadius: 16,
            lineHeight: 1.6,
          }}
        >
          Bạn không đơn độc!{' '}
          <span style={{ fontWeight: 800, color: '#F8312F' }}>87% phụ huynh Việt Nam</span>{' '}
          gặp ít nhất 1 trong 3 vấn đề trên.
        </motion.p>
      </div>
    </section>
  )
}
