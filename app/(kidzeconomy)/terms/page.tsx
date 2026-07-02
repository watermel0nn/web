export default function TermsPage() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-32 w-full">
      <h1 className="text-4xl font-black text-slate-800 mb-8">Điều khoản sử dụng</h1>
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-orange max-w-none">
        <p className="text-slate-600 mb-6">
          Bằng việc sử dụng KidzEconomy, bạn đồng ý với các điều khoản dưới đây:
        </p>
        <ul className="space-y-4 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>Tài khoản phụ huynh đăng ký sử dụng ứng dụng phải từ đủ 18 tuổi trở lên.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>Việc phê duyệt phần thưởng và quy đổi điểm số hoàn toàn thuộc quyền quyết định và thỏa thuận nội bộ của phụ huynh đối với con cái.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>KidzEconomy cung cấp nền tảng quản lý ảo và không tham gia vào bất kỳ giao dịch mua bán, trao đổi phần thưởng thực tế nào giữa phụ huynh và trẻ.</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
