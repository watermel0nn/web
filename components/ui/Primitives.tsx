'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════
// CARD – Container cơ bản
// ═══════════════════════════════════════════════════════════
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'cream' | 'white' | 'glass' | 'brown';
  id?: string;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  hover = true,
  variant = 'cream',
  id,
  onClick,
}: CardProps) {
  const variants = {
    cream: {
      background: '#FCE6C9',
      border: '1.5px solid #F0E0C0',
      boxShadow: '0 2px 8px rgba(74,44,24,0.10)',
    },
    white: {
      background: '#FFFFFF',
      border: '1.5px solid #F0E0C0',
      boxShadow: '0 2px 8px rgba(74,44,24,0.08)',
    },
    glass: {
      background: 'rgba(255,247,237,0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1.5px solid rgba(221,192,138,0.40)',
      boxShadow: '0 4px 16px rgba(74,44,24,0.10)',
    },
    brown: {
      background: 'linear-gradient(135deg, #6A4A32 0%, #3A2A1A 100%)',
      border: 'none',
      boxShadow: '0 8px 32px rgba(74,44,24,0.25)',
      color: '#FCE6C9',
    },
  };

  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={`rounded-3xl p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={variants[variant]}
      whileHover={
        hover
          ? {
              y: -5,
              boxShadow: '0 12px 40px rgba(74,44,24,0.18)',
              borderColor: '#F3A85A',
            }
          : undefined
      }
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// BADGE – Label nhỏ
// ═══════════════════════════════════════════════════════════
interface BadgeProps {
  children: ReactNode;
  variant?: 'orange' | 'gold' | 'purple' | 'green' | 'brown' | 'red';
  size?: 'sm' | 'md';
  icon?: ReactNode;
  className?: string;
  id?: string;
}

const BADGE_VARIANTS = {
  orange: { background: '#FFEDD5', color: '#8C4F2E', border: '1px solid #F3A85A' },
  gold: { background: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)', color: '#3A2A1A', border: 'none' },
  purple: { background: '#EDE5FF', color: '#6B4DE6', border: '1px solid rgba(107,77,230,0.35)' },
  green: { background: '#BEEFCA', color: '#49911B', border: '1px solid rgba(73,145,27,0.35)' },
  brown: { background: '#FCE6C9', color: '#6A4A32', border: '1px solid #DDC08A' },
  red: { background: '#FFDADA', color: '#F8312F', border: '1px solid rgba(248,49,47,0.35)' },
};

export function Badge({ children, variant = 'orange', size = 'md', icon, className = '', id }: BadgeProps) {
  const style = BADGE_VARIANTS[variant];
  const sizeClass = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm';

  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 rounded-full font-bold ${sizeClass} ${className}`}
      style={{ ...style, fontFamily: "'Nunito', sans-serif" }}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// STAT CARD – Số liệu thống kê
// ═══════════════════════════════════════════════════════════
interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  gradient?: string;
  id?: string;
}

export function StatCard({ value, label, icon, gradient, id }: StatCardProps) {
  return (
    <motion.div
      id={id}
      className="flex flex-col items-center gap-1 p-5 rounded-3xl"
      style={{
        background: gradient ?? 'linear-gradient(135deg, #FFF0D9 0%, #FCE6C9 100%)',
        border: '1.5px solid #DDC08A',
        boxShadow: '0 4px 16px rgba(74,44,24,0.12)',
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3, scale: 1.03 }}
    >
      {icon && <div className="text-3xl mb-1">{icon}</div>}
      <span
        className="text-3xl font-black"
        style={{
          background: 'linear-gradient(135deg, #F3A85A 0%, #8C4F2E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {value}
      </span>
      <span
        className="text-xs font-semibold text-center"
        style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// ICON WRAPPER – Icon bo tròn có nền màu
// ═══════════════════════════════════════════════════════════
interface IconWrapperProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  gradient?: string;
  className?: string;
  id?: string;
  animated?: boolean;
}

const SIZE_MAP = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

export function IconWrapper({
  children,
  size = 'md',
  gradient = 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
  className = '',
  id,
  animated = false,
}: IconWrapperProps) {
  const floatAnimation = animated
    ? { animate: { y: [0, -6, 0] }, transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
    : {};

  return (
    <motion.div
      id={id}
      className={`${SIZE_MAP[size]} rounded-2xl flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        background: gradient,
        boxShadow: '0 4px 16px rgba(74,44,24,0.16)',
      }}
      {...floatAnimation}
    >
      {children}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════
// DIVIDER – Đường phân cách có icon trung tâm
// ═══════════════════════════════════════════════════════════
interface DividerProps {
  icon?: string;
  className?: string;
}

export function Divider({ icon = '✨', className = '' }: DividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #DDC08A)' }} />
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #DDC08A, transparent)' }} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// FLOATING DECORATION – Các blob trang trí nền
// ═══════════════════════════════════════════════════════════
interface FloatingBlobProps {
  color?: string;
  size?: string;
  className?: string;
  opacity?: number;
  blur?: string;
}

export function FloatingBlob({
  color = '#F3A85A',
  size = '300px',
  className = '',
  opacity = 0.25,
  blur = '80px',
}: FloatingBlobProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        filter: `blur(${blur})`,
      }}
    />
  );
}
