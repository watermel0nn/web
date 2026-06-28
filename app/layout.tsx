import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kidzeconomy – Dạy con tư duy tài chính từ sớm',
  description:
    'Kidzeconomy giúp trẻ em 5–12 tuổi học cách quản lý tài chính qua hệ thống nhiệm vụ và phần thưởng thú vị. Đăng ký waitlist để trải nghiệm sớm.',
  keywords: [
    'kidzeconomy', 'giáo dục tài chính trẻ em', 'dạy con quản lý tiền',
    'ứng dụng học tài chính', 'edtech việt nam', 'financial literacy kids',
  ],
  authors: [{ name: 'Kidzeconomy Team' }],
  openGraph: {
    title: 'Kidzeconomy – Dạy con tư duy tài chính từ sớm',
    description: 'Giúp trẻ 5–12 tuổi học quản lý tài chính qua nhiệm vụ và phần thưởng. Đăng ký waitlist ngay!',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Kidzeconomy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kidzeconomy – Dạy con tư duy tài chính từ sớm',
    description: 'Giúp trẻ 5–12 tuổi học quản lý tài chính qua nhiệm vụ và phần thưởng.',
  },
  themeColor: '#FFF7ED',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        {/*
         * Cách load font đáng tin cậy nhất cho Next.js App Router:
         * Dùng <link> trực tiếp trong <head>, tránh @import trong CSS
         * vì Next.js / PostCSS đôi khi bỏ qua @import khi bundle.
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Pacifico&family=Norican&display=swap"
        />
        {/* Inline style để đảm bảo font áp dụng ngay, không cần class */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              * { font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif; box-sizing: border-box; }
              h1, h2, h3, h4, h5, h6 {
                font-family: 'Nunito', ui-sans-serif, sans-serif !important;
                font-weight: 800;
              }
              .font-pacifico, [class*="font-pacifico"] { font-family: 'Pacifico', cursive !important; }
              .font-norican, [class*="font-norican"]   { font-family: 'Norican',  cursive !important; }
              .font-display                            { font-family: 'Pacifico', cursive !important; }
              .font-brand                              { font-family: 'Norican',  cursive !important; }
            `,
          }}
        />
      </head>
      <body style={{ background: '#FFF7ED', fontFamily: "'Nunito', ui-sans-serif, system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
