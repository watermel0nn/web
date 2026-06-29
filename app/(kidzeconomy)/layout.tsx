import type { Metadata } from 'next';

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

import NavbarKidzeconomy from '@/components/kidzeconomy/NavbarKidzeconomy';
import FooterKidzeconomy from '@/components/kidzeconomy/FooterKidzeconomy';

export default function KidzeconomyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ background: '#FFF7ED', fontFamily: "'Nunito', ui-sans-serif, system-ui, sans-serif" }} className="min-h-screen">
      <NavbarKidzeconomy />
      {children}
      <FooterKidzeconomy />
    </div>
  );
}
