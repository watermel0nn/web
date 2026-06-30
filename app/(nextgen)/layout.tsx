import type { Metadata } from 'next';
import NavbarNextGen from '@/components/nextgenlab/NavbarNextGen';
import FooterNextGen from '@/components/nextgenlab/FooterNextGen';

export const metadata: Metadata = {
  title: 'NextGen Lab — Kiến tạo giải pháp công nghệ giáo dục',
  icons: { icon: '/images/nextgenlab-badge.svg' },
};

export default function NextGenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarNextGen />
      <main className="pt-20">
        {children}
      </main>
      <FooterNextGen />
    </>
  );
}
