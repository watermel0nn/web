import { NextRequest, NextResponse } from 'next/server';

// Routing theo domain (cùng 1 app Next.js phục vụ 2 thương hiệu):
// - nextgenlab.com.vn  → '/'           (landing công ty cha — route group (nextgen))
// - kidzeconomy.com.vn → '/kidzeconomy' (landing sản phẩm — route group (kidzeconomy))
// Chỉ rewrite TRANG GỐC; /admin, /kidzeconomy, /news... giữ nguyên.
export function middleware(req: NextRequest) {
  const host = (req.headers.get('host') || '').toLowerCase();
  const { pathname } = req.nextUrl;

  if (host.includes('kidzeconomy.com.vn') && pathname === '/') {
    return NextResponse.rewrite(new URL('/kidzeconomy', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
