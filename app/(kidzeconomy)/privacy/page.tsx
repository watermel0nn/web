export default function PrivacyPage() {
  return (
    <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-32 w-full">
      <h1 className="text-4xl font-black text-slate-800 mb-8">Chính sách bảo mật</h1>
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 prose prose-lg prose-orange max-w-none">
        <p className="text-slate-600 mb-6">
          Tại KidzEconomy, chúng tôi đặt sự riêng tư và bảo mật dữ liệu của bạn cũng như con em bạn lên hàng đầu.
        </p>
        <ul className="space-y-4 text-slate-600">
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>Dữ liệu của trẻ chỉ được sử dụng để vận hành hệ thống, giúp theo dõi tiến độ công việc và điểm thưởng.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>KidzEconomy cam kết tuyệt đối không bán dữ liệu cho bên thứ ba dưới bất kỳ hình thức nào.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-orange-500 mt-1">●</span>
            <span>Phụ huynh có toàn quyền kiểm soát và có thể yêu cầu xóa dữ liệu bất kỳ lúc nào thông qua phần Cài đặt trong ứng dụng.</span>
          </li>
        </ul>
      </div>
    </main>
  );
}
