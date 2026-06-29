import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'NextGenLab - Kiến tạo giải pháp, Định hình tương lai',
  description: 'NextGenLab cung cấp các giải pháp công nghệ hiện đại phục vụ đời sống và giáo dục tại Việt Nam.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Pacifico&family=Norican&display=swap"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Global utility classes for Kidzeconomy fonts */
              .font-nunito, [class*="font-nunito"] { font-family: 'Nunito', ui-sans-serif, system-ui, sans-serif !important; }
              .font-pacifico, [class*="font-pacifico"] { font-family: 'Pacifico', cursive !important; }
              .font-norican, [class*="font-norican"]   { font-family: 'Norican',  cursive !important; }
              .font-display                            { font-family: 'Pacifico', cursive !important; }
              .font-brand                              { font-family: 'Norican',  cursive !important; }
            `,
          }}
        />
      </head>
      <body className={`min-h-screen bg-slate-50 text-slate-900 ${inter.className} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
