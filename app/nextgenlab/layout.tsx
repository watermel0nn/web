import { Inter } from 'next/font/google';
import NextGenLabNavbar from '@/components/nextgenlab/NextGenLabNavbar';
import NextGenLabFooter from '@/components/nextgenlab/NextGenLabFooter';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'NextGenLab - Kiến tạo giải pháp, Định hình tương lai',
  description: 'NextGenLab cung cấp các giải pháp công nghệ hiện đại phục vụ đời sống và giáo dục tại Việt Nam.',
};

export default function NextGenLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Bọc toàn bộ nội dung trong container có màu nền slate-50 và font Inter
    // để ghi đè (override) style của root layout (hiện đang là màu kem và font Nunito)
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${inter.className} ${inter.variable}`}>
      <NextGenLabNavbar />
      <main className="pt-20"> {/* pt-20 để bù cho fixed navbar */}
        {children}
      </main>
      <NextGenLabFooter />
    </div>
  );
}
