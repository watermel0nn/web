import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Cột 1: Brand & Social */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                N
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                NextGen<span className="text-blue-500">Lab</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-8">
              Kiến tạo giải pháp công nghệ hiện đại, định hình tương lai giáo dục và đời sống gia đình Việt Nam.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Cột 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Liên kết nhanh</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white hover:underline transition-all">Trang chủ</Link></li>
              <li><Link href="/about" className="hover:text-white hover:underline transition-all">Về chúng tôi</Link></li>
              <li><Link href="/products" className="hover:text-white hover:underline transition-all">Hệ sinh thái Giải pháp</Link></li>
              <li><Link href="/news" className="hover:text-white hover:underline transition-all">Tin tức & Sự kiện</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all">Tuyển dụng</Link></li>
            </ul>
          </div>

          {/* Cột 3: Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Sản phẩm</h3>
            <ul className="space-y-4">
              <li><Link href="/kidzeconomy" className="hover:text-white hover:underline transition-all flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>KidzEconomy</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>EduTrack AI (Sắp ra mắt)</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline transition-all flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>FamilySync (Đang phát triển)</Link></li>
            </ul>
          </div>

          {/* Cột 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider text-sm">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Tầng 5, Tòa nhà Innovation Hub, 123 Trần Não, Quận 2, TP. Thủ Đức, TP.HCM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:contact@nextgenlab.vn" className="text-sm hover:text-white transition-colors">contact@nextgenlab.vn</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+84123456789" className="text-sm hover:text-white transition-colors">+84 (0) 123 456 789</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NextGenLab. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
