/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ── Bảng màu chính thức Kidzeconomy (từ app_colors.dart) ──
      colors: {
        brand: {
          brown:    '#8C4F2E',
          'dark-brown': '#6A4A32',
          'coffee-dark': '#3A2A1A',
          primary4: '#754227',
        },
        accent: {
          orange:   '#E58A2C',
          button:   '#F3A85A',
          gold:     '#E58A2C',
          'gold-light': '#FFD55A',
          purple:   '#6B4DE6',
          'purple-light': '#EDE5FF',
        },
        bg: {
          main:      '#FFF7ED',
          cream:     '#FCE6C9',
          highlight: '#FFEDD5',
          primary1:  '#FFF0D9',
        },
        muted: {
          DEFAULT: '#9C7A5B',
          border:  '#DDC08A',
          divider: '#E8D5B0',
          light:   '#F0E0C0',
        },
        status: {
          success: '#49911B',
          'success-light': '#BEEFCA',
          error:   '#F8312F',
          'error-light': '#FFDADA',
          info:    '#0489D1',
          'info-light': '#D6EAFF',
        },
      },

      // ═══════════════════════════════════════════════════════════
      // FONT FAMILY
      // Dùng tên font trực tiếp (KHÔNG dùng var()) vì Tailwind
      // compile tĩnh — var() chỉ resolve runtime không apply được.
      // next/font inject font vào trang, Tailwind dùng tên để tạo class.
      // ═══════════════════════════════════════════════════════════
      fontFamily: {
        // font-sans    → Nunito (toàn bộ body, mặc định)
        sans:    ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // font-display → Pacifico (decorative heading)
        display: ['Pacifico', 'cursive'],
        // font-brand   → Norican (logo branding)
        brand:   ['Norican', 'cursive'],
        // Legacy aliases (backward compat với các component cũ)
        nunito:   ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        norican:  ['Norican', 'cursive'],
      },

      // ── Gradients ──
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #F3A85A 0%, #754227 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #6A4A32 0%, #3A2A1A 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD55A 0%, #E58A2C 100%)',
        'gradient-bg': 'linear-gradient(180deg, #FFF7ED 0%, #FCE6C9 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FFF0D9 0%, #FCE6C9 60%, #F5E8D5 100%)',
        'gradient-purple': 'linear-gradient(135deg, #EDE5FF 0%, #6B4DE6 100%)',
      },

      // ── Border radius ──
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        'full': '9999px',
      },

      // ── Box shadow ──
      boxShadow: {
        'warm-sm': '0 2px 8px rgba(74, 44, 24, 0.10)',
        'warm':    '0 4px 16px rgba(74, 44, 24, 0.14)',
        'warm-lg': '0 8px 32px rgba(74, 44, 24, 0.18)',
        'warm-xl': '0 16px 48px rgba(74, 44, 24, 0.22)',
        'glow-orange': '0 0 24px rgba(229, 138, 44, 0.40)',
        'glow-gold':   '0 0 32px rgba(255, 213, 90, 0.50)',
      },

      // ── Animation ──
      animation: {
        'float':         'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'spin-slow':     'spin 8s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'fade-up':       'fadeUp 0.6s ease-out forwards',
        'shimmer':       'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
