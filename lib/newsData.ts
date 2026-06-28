export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'NextGenLab công bố dự án KidzEconomy: Giải pháp giáo dục tài chính sớm',
    excerpt: 'Nhằm giải quyết nỗi đau của hàng triệu phụ huynh trong việc dạy con quản lý tiền bạc, NextGenLab chính thức ra mắt phiên bản Beta của ứng dụng KidzEconomy.',
    date: '15/06/2026',
    category: 'Thông cáo báo chí',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    slug: 'nextgenlab-cong-bo-du-an-kidzeconomy',
  },
  {
    id: '2',
    title: 'Xu hướng EdTech 2026: Cá nhân hóa trải nghiệm học tập qua Gamification',
    excerpt: 'Gamification không chỉ là xu hướng mà đã trở thành tiêu chuẩn mới trong giáo dục. NextGenLab chia sẻ góc nhìn chuyên sâu về cách ứng dụng cơ chế trò chơi vào sản phẩm.',
    date: '28/05/2026',
    category: 'Góc nhìn chuyên gia',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    slug: 'xu-huong-edtech-2026-gamification',
  },
  {
    id: '3',
    title: 'NextGenLab tổ chức Workshop: "Dạy con tự lập từ những việc nhỏ nhất"',
    excerpt: 'Sự kiện thu hút hơn 300 gia đình đăng ký tham gia, đánh dấu bước tiến quan trọng trong việc xây dựng cộng đồng phụ huynh hiện đại tại Việt Nam.',
    date: '10/05/2026',
    category: 'Sự kiện',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
    slug: 'workshop-day-con-tu-lap',
  },
  {
    id: '4',
    title: 'Chiến lược phát triển Hệ sinh thái Giải pháp Giáo dục giai đoạn 2026-2030',
    excerpt: 'CEO NextGenLab chia sẻ định hướng chiến lược dài hạn, tập trung vào việc áp dụng AI và công nghệ dữ liệu để tối ưu hóa lộ trình phát triển của từng cá nhân.',
    date: '02/04/2026',
    category: 'Tầm nhìn chiến lược',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    slug: 'chien-luoc-phat-trien-he-sinh-thai-2026-2030',
  },
];
