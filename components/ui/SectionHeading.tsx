'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  /** Badge nhỏ phía trên tiêu đề (optional) */
  badge?: string;
  /** Tiêu đề chính */
  title: ReactNode;
  /** Phần được highlight (gradient cam-nâu) trong tiêu đề — wrap bằng <span> */
  highlight?: string;
  /** Mô tả phụ bên dưới */
  description?: string;
  /** Căn giữa hay trái */
  align?: 'center' | 'left';
  /** Màu badge: 'orange' | 'gold' | 'purple' | 'green' */
  badgeColor?: 'orange' | 'gold' | 'purple' | 'green';
  /** Class tùy chỉnh cho wrapper */
  className?: string;
  /** Có hiệu ứng animation fade-up khi vào view không */
  animated?: boolean;
}

const BADGE_STYLES: Record<string, { background: string; color: string; border: string }> = {
  orange: {
    background: '#FFEDD5',
    color: '#8C4F2E',
    border: '1px solid #F3A85A',
  },
  gold: {
    background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
    color: '#3A2A1A',
    border: 'none',
  },
  purple: {
    background: '#EDE5FF',
    color: '#6B4DE6',
    border: '1px solid #6B4DE6',
  },
  green: {
    background: '#BEEFCA',
    color: '#49911B',
    border: '1px solid #49911B',
  },
};

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  badgeColor = 'orange',
  className = '',
  animated = true,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const badgeStyle = BADGE_STYLES[badgeColor];

  const wrapperVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const content = (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {/* Badge */}
      {badge && (
        <span
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide self-start"
          style={{
            ...badgeStyle,
            alignSelf: align === 'center' ? 'center' : 'flex-start',
          }}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h2
        className="heading-section text-responsive-h1"
        style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
      >
        {title}
        {highlight && (
          <>
            {' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {highlight}
            </span>
          </>
        )}
      </h2>

      {/* Decorative underline */}
      <div
        className="flex gap-1.5 mt-1"
        style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}
      >
        <div
          className="h-1 w-10 rounded-full"
          style={{ background: 'linear-gradient(90deg, #F3A85A, #8C4F2E)' }}
        />
        <div
          className="h-1 w-4 rounded-full"
          style={{ background: '#FCE6C9' }}
        />
        <div
          className="h-1 w-2 rounded-full"
          style={{ background: '#DDC08A' }}
        />
      </div>

      {/* Description */}
      {description && (
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          style={{
            color: '#9C7A5B',
            alignSelf: align === 'center' ? 'center' : 'flex-start',
          }}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (!animated) return content;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={wrapperVariants}
    >
      {content}
    </motion.div>
  );
}

// ── Inline highlight helper (sử dụng trong JSX title) ──
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  );
}
