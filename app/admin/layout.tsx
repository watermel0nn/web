'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getToken, clearToken } from '@/lib/admin-api';

const NAV = [
  { href: '/admin', label: 'Tổng quan', exact: true },
  { href: '/admin/users', label: 'Người dùng', exact: false },
  { href: '/admin/payments', label: 'Thanh toán', exact: false },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === '/admin/login';
  const [ready, setReady] = useState(false);

  // Auth guard — không áp dụng cho trang login
  useEffect(() => {
    if (isLogin) {
      setReady(true);
      return;
    }
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    setReady(true);
  }, [isLogin, pathname, router]);

  function handleLogout() {
    clearToken();
    router.replace('/admin/login');
  }

  // Trang login: render trần (login page tự lo layout của nó)
  if (isLogin) {
    return <>{children}</>;
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 text-sm text-slate-500">
        Đang tải…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-900">
      {/* Sidebar */}
      <aside className="flex w-60 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center px-6 text-lg font-bold text-indigo-600">
          Kidz Admin
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAV.map((item) => {
            const active = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-slate-200 p-3">
          <button
            onClick={handleLogout}
            className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-slate-200 bg-white px-6">
          <span className="text-sm font-semibold text-slate-700">
            Bảng điều khiển quản trị
          </span>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
