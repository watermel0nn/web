'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// ── Kidzeconomy Brand Colors ──
const COLORS = {
  gradientPrimary: 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
  gradientGold: 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
  brandBrown: '#8C4F2E',
  coffeeDark: '#3A2A1A',
  bgCream: '#FCE6C9',
  borderLight: '#F0E0C0',
  buttonAccent: '#F3A85A',
};

// ═══════════════════════════════════════════════════════════
// PRIMARY BUTTON
// ═══════════════════════════════════════════════════════════
interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function ButtonPrimary({
  children,
  onClick,
  href,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  id,
  className = '',
  icon,
  iconPosition = 'right',
}: ButtonPrimaryProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const baseClass = `
    inline-flex items-center justify-center font-bold text-white rounded-full
    transition-all duration-200 select-none cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const style = {
    background: disabled ? '#E8D5B0' : COLORS.gradientPrimary,
    boxShadow: disabled
      ? 'none'
      : '0 4px 16px rgba(74,44,24,0.14), 0 0 24px rgba(229,138,44,0.30)',
  };

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { y: 0, scale: 0.98 },
      };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        id={id}
        className={baseClass}
        style={style}
        {...motionProps}
        transition={{ duration: 0.15 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      style={style}
      {...motionProps}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════
// SECONDARY BUTTON (Outlined)
// ═══════════════════════════════════════════════════════════
interface ButtonSecondaryProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function ButtonSecondary({
  children,
  onClick,
  href,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  id,
  className = '',
  icon,
  iconPosition = 'right',
}: ButtonSecondaryProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const baseClass = `
    inline-flex items-center justify-center font-bold rounded-full
    transition-all duration-200 select-none cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const style = {
    background: 'transparent',
    border: `2px solid ${COLORS.brandBrown}`,
    color: COLORS.brandBrown,
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -2, backgroundColor: COLORS.bgCream },
        whileTap: { y: 0, scale: 0.98 },
      };

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        id={id}
        className={baseClass}
        style={style}
        {...motionProps}
        transition={{ duration: 0.15 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      style={style}
      {...motionProps}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.button>
  );
}

// ═══════════════════════════════════════════════════════════
// GOLD BUTTON
// ═══════════════════════════════════════════════════════════
interface ButtonGoldProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  className?: string;
  icon?: ReactNode;
}

export function ButtonGold({
  children,
  onClick,
  href,
  size = 'md',
  fullWidth = false,
  disabled = false,
  type = 'button',
  id,
  className = '',
  icon,
}: ButtonGoldProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const baseClass = `
    inline-flex items-center justify-center font-bold rounded-full
    transition-all duration-200 select-none cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const style = {
    background: COLORS.gradientGold,
    color: COLORS.coffeeDark,
    boxShadow: '0 0 32px rgba(255,213,90,0.40)',
  };

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </>
  );

  const motionProps = disabled
    ? {}
    : {
        whileHover: { y: -2, scale: 1.02 },
        whileTap: { y: 0, scale: 0.98 },
      };

  if (href && !disabled) {
    return (
      <motion.a href={href} id={id} className={baseClass} style={style} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      style={style}
      {...motionProps}
      transition={{ duration: 0.15 }}
    >
      {content}
    </motion.button>
  );
}
