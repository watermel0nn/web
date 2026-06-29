'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Về chúng tôi', href: '/about' },
  { label: 'Hệ sinh thái', href: '/kidzeconomy' },
  { label: 'Tin tức', href: '/news' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white font-bold text-xl group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              NextGen<span className="text-blue-600">Lab</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:block">
            <Link
              href="mailto:contact@nextgenlab.vn"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Liên hệ hợp tác
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="mailto:contact@nextgenlab.vn"
                className="mt-2 block w-full text-center px-5 py-3 rounded-xl text-base font-semibold bg-blue-600 text-white shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Liên hệ hợp tác
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
