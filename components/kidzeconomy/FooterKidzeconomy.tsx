'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Shield,
  Heart,
} from 'lucide-react';
import Image from 'next/image';

const FOOTER_LINKS = {
  product: {
    title: 'Sản phẩm',
    links: [
      { label: 'Tính năng', href: '#features', id: 'footer-features' },
      { label: 'Cách hoạt động', href: '#how-it-works', id: 'footer-how-it-works' },
      { label: 'Giá cả', href: '#pricing', id: 'footer-pricing' },
      { label: 'Changelog', href: '#changelog', id: 'footer-changelog' },
    ],
  },
  company: {
    title: 'Công ty',
    links: [
      { label: 'Về chúng tôi', href: '#about', id: 'footer-about' },
      { label: 'Blog', href: '#blog', id: 'footer-blog' },
      { label: 'Tuyển dụng', href: '#careers', id: 'footer-careers' },
      { label: 'Liên hệ', href: '#contact', id: 'footer-contact' },
    ],
  },
  legal: {
    title: 'Pháp lý',
    links: [
      { label: 'Chính sách bảo mật', href: '#privacy', id: 'footer-privacy' },
      { label: 'Điều khoản sử dụng', href: '#terms', id: 'footer-terms' },
      { label: 'Chính sách cookie', href: '#cookies', id: 'footer-cookies' },
    ],
  },
};

const SOCIAL_LINKS = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
    id: 'footer-facebook',
    color: '#1877F2',
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram',
    id: 'footer-instagram',
    color: '#E1306C',
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube',
    id: 'footer-youtube',
    color: '#FF0000',
  },
];

const TRUST_BADGES = [
  { icon: Shield, label: 'Bảo mật SSL', id: 'footer-badge-ssl' },
  { icon: Heart, label: 'An toàn cho trẻ', id: 'footer-badge-kids' },
];

export default function FooterKidzeconomy() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      id="footer"
      style={{
        background: 'linear-gradient(180deg, #3A2A1A 0%, #2D1B0E 100%)',
        color: '#FCE6C9',
      }}
    >
      {/* ── Wave separator ── */}
      <div className="overflow-hidden leading-none" style={{ marginTop: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: 'block', height: '60px' }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"
            style={{ fill: '#FFF7ED' }}
          />
        </svg>
      </div>

      <div className="section-container py-12 md:py-16">

        {/* ── Top Row: Brand + Links ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Logo */}
            <a
              href="#hero"
              id="footer-logo"
              className="flex items-center gap-3 w-fit"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            >
              <div
                className="relative flex items-center justify-center flex-shrink-0"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '14px',
                  background: 'linear-gradient(145deg, rgba(252,230,201,0.25), rgba(255,247,237,0.15))',
                  border: '2px solid rgba(243,168,90,0.50)',
                  boxShadow: '0 4px 16px rgba(229,138,44,0.25)',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/logo-squirrel.png"
                  alt="Kidzeconomy logo"
                  fill
                  className="object-cover scale-[1.35] origin-top"
                  style={{ filter: 'brightness(1.05) saturate(1.1)' }}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-nunito font-extrabold leading-none"
                  style={{ fontSize: '24px', color: '#F3A85A' }}
                >
                  Kidzeconomy
                </span>
                <span
                  className="font-nunito text-xs"
                  style={{ color: '#9C7A5B' }}
                >
                  Học tài chính cùng bé 🐿️
                </span>
              </div>
            </a>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
            >
              Nền tảng giáo dục tài chính đầu tiên dành cho trẻ em Việt Nam, giúp bé học cách quản lý tiền qua hệ thống nhiệm vụ và phần thưởng thú vị.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              {[
                { icon: Mail, text: 'hello@kidzeconomy.vn', id: 'footer-email' },
                { icon: Phone, text: '1800 1234', id: 'footer-phone' },
                { icon: MapPin, text: 'TP. Hồ Chí Minh, Việt Nam', id: 'footer-location' },
              ].map(({ icon: Icon, text, id }) => (
                <div key={id} id={id} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#F3A85A' }} />
                  <span className="text-sm" style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, id }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(252,230,201,0.10)', border: '1px solid rgba(221,192,138,0.25)' }}
                  whileHover={{
                    backgroundColor: 'rgba(243,168,90,0.20)',
                    scale: 1.1,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.93 }}
                >
                  <Icon className="w-4 h-4" style={{ color: '#F3A85A' }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([key, section], colIdx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (colIdx + 1) * 0.08 }}
              className="flex flex-col gap-4"
            >
              <h4
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: '#F3A85A', fontFamily: "'Nunito', sans-serif" }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <motion.a
                      id={link.id}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className="text-sm flex items-center gap-1 group w-fit"
                      style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
                      whileHover={{ color: '#FCE6C9', x: 3 }}
                      transition={{ duration: 0.1 }}
                    >
                      <ChevronRight
                        className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-opacity"
                        style={{ color: '#F3A85A' }}
                      />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="h-px mb-8" style={{ background: 'rgba(221,192,138,0.20)' }} />

        {/* ── Bottom Row: Copyright + Trust Badges ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-xs text-center md:text-left"
            style={{ color: '#9C7A5B', fontFamily: "'Nunito', sans-serif" }}
          >
            © {new Date().getFullYear()} Kidzeconomy. Tất cả quyền được bảo lưu. Được tạo ra với{' '}
            <Heart className="inline w-3 h-3" style={{ color: '#E58A2C' }} />{' '}
            tại Việt Nam.
          </p>

          {/* Trust Badges */}
          <div className="flex items-center gap-3">
            {TRUST_BADGES.map(({ icon: Icon, label, id }) => (
              <div
                key={id}
                id={id}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(243,168,90,0.12)',
                  border: '1px solid rgba(221,192,138,0.25)',
                }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: '#F3A85A' }} />
                <span
                  className="text-xs font-semibold"
                  style={{ color: '#FCE6C9', fontFamily: "'Nunito', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
