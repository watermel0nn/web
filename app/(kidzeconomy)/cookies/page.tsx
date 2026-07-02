export default function CookiesPage() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-32 w-full">
      <h1 className="text-4xl font-black text-slate-800 mb-8">Chính sách Cookie</h1>
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-orange max-w-none">
        <p className="text-slate-600 mb-6">
          KidzEconomy sử dụng cookie để mang lại trải nghiệm tốt nhất cho người dùng. Cookie được sử dụng nhằm các mục đích:
        </p>
        <ul className="space-y-4 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span><strong>Duy trì đăng nhập:</strong> Giúp bạn không phải đăng nhập lại mỗi khi mở ứng dụng.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span><strong>Cá nhân hóa trải nghiệm:</strong> Ghi nhớ các tùy chọn và thiết lập của gia đình bạn.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span><strong>Cải thiện hiệu năng hệ thống:</strong> Giúp chúng tôi phân tích cách bạn sử dụng trang web để nâng cấp và tối ưu hóa ứng dụng.</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
