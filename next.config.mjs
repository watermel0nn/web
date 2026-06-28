/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cho phép dùng ảnh từ thư mục /public (mặc định next/image hỗ trợ)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Các định dạng tối ưu
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
