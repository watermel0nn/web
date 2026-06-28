'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Về chúng tôi', href: '/nextgenlab', id: 'nav-about-nextgenlab' },
  { label: 'Vấn đề', href: '#pain-points', id: 'nav-pain-points' },
  { label: 'Cách hoạt động', href: '#how-it-works', id: 'nav-how-it-works' },
  { label: 'Sự kiện', href: '#event', id: 'nav-event' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();

  // Detect scroll để đổi style navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Đóng menu khi resize lên desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    
    // Nếu là link chuyển trang (không bắt đầu bằng #) thì dùng router.push
    if (!href.startsWith('#')) {
      router.push(href);
      return;
    }

    // Xử lý scroll mượt cho anchor links
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(255, 247, 237, 0.92)'
            : 'rgba(255, 247, 237, 0.60)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1.5px solid rgba(221, 192, 138, 0.5)'
            : '1.5px solid transparent',
          boxShadow: isScrolled
            ? '0 4px 24px rgba(74, 44, 24, 0.08)'
            : 'none',
        }}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-24 md:h-24">

            {/* ── Logo ── */}
            <motion.a
              href="#hero"
              id="nav-logo"
              className="flex items-center gap-4 select-none"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
            >
              {/* Logo sóc — 80px nổi bật */}
              <div className="relative flex-shrink-0" style={{ width: 80, height: 80 }}>
                {/* Animated pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #FFD55A, #F3A85A, #8C4F2E)',
                    borderRadius: 20,
                  }}
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* Logo container */}
                <div
                  className="absolute inset-[3px] flex items-center justify-center overflow-hidden"
                  style={{
                    borderRadius: '17px',
                    background: 'linear-gradient(145deg, #FFFBF5, #FFF0D9)',
                    boxShadow: '0 8px 28px rgba(229,138,44,0.35), inset 0 1px 0 rgba(255,255,255,0.8)',
                    padding: 6,
                  }}
                >
                  <Image
                    src="/images/logo-squirrel.png"
                    alt="Kidzeconomy logo"
                    width={68}
                    height={68}
                    className="object-contain w-full h-full drop-shadow-sm"
                    priority
                  />
                </div>
              </div>

              {/* Logo text */}
              <div className="flex flex-col gap-1">
                <span
                  className="font-brand leading-none"
                  style={{
                    fontSize: '26px',
                    color: '#8C4F2E',
                    letterSpacing: '0.01em',
                    textShadow: '0 1px 2px rgba(140,79,46,0.15)',
                  }}
                >
                  Kidzeconomy
                </span>
                <span
                  className="font-nunito font-bold text-xs"
                  style={{
                    color: '#E58A2C',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  💰 Học tài chính cùng bé
                </span>
              </div>
            </motion.a>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.href}
                  id={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150"
                  style={{ color: '#6A4A32', fontFamily: "'Nunito', sans-serif" }}
                  whileHover={{
                    backgroundColor: '#FCE6C9',
                    color: '#8C4F2E',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                id="nav-cta-waitlist"
                onClick={() => handleNavClick('#waitlist')}
                className="px-5 py-2.5 rounded-full text-sm font-bold text-white flex items-center gap-1.5"
                style={{
                  background: 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
                  boxShadow: '0 4px 14px rgba(229,138,44,0.30)',
                }}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                Đăng ký ngay
                <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
              </motion.button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <motion.button
              id="nav-mobile-toggle"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
              style={{ background: '#FCE6C9' }}
              onClick={() => setIsMobileOpen((v) => !v)}
              whileTap={{ scale: 0.93 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" style={{ color: '#8C4F2E' }} strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" style={{ color: '#8C4F2E' }} strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="nav-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 mx-4 mt-2 rounded-3xl overflow-hidden"
            style={{
              background: 'rgba(255, 247, 237, 0.97)',
              border: '1.5px solid #DDC08A',
              boxShadow: '0 16px 48px rgba(74, 44, 24, 0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="p-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  id={`${link.id}-mobile`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-5 py-3.5 rounded-2xl font-semibold text-base flex items-center justify-between"
                  style={{ color: '#3A2A1A', fontFamily: "'Nunito', sans-serif" }}
                  whileHover={{ backgroundColor: '#FCE6C9', x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4" style={{ color: '#9C7A5B' }} />
                </motion.button>
              ))}

              {/* Divider */}
              <div className="my-2 h-px" style={{ background: '#E8D5B0' }} />

              {/* Mobile CTA */}
              <motion.button
                id="nav-mobile-cta"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleNavClick('#waitlist')}
                className="w-full py-3.5 rounded-2xl font-bold text-white text-center"
                style={{
                  background: 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
                  boxShadow: '0 4px 16px rgba(229,138,44,0.35)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                🎉 Đăng ký Waitlist miễn phí
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop khi mobile menu mở */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: 'rgba(58,42,26,0.25)' }}
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
