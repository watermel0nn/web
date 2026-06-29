'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getUsers,
  formatDate,
  AdminApiError,
  type AdminUserSummary,
  type Page,
} from '@/lib/admin-api';

function TierBadge({ tier }: { tier: string }) {
  const isPremium = tier === 'PREMIUM';
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
        isPremium
          ? 'bg-amber-100 text-amber-700'
          : 'bg-slate-100 text-slate-600'
      }`}
    >
      {tier}
    </span>
  );
}

export default function AdminUsersPage() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [data, setData] = useState<Page<AdminUserSummary> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    getUsers(query, page)
      .then((p) => {
        if (alive) setData(p);
      })
      .catch((err) => {
        if (alive)
          setError(err instanceof AdminApiError ? err.message : 'Lỗi tải dữ liệu');
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [query, page]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setPage(0);
    setQuery(input.trim());
  }

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-slate-900">Người dùng</h1>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tìm theo email hoặc tên…"
          className="w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Tìm
        </button>
      </form>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Họ tên</th>
              <th className="px-4 py-3 font-medium">Gói</th>
              <th className="px-4 py-3 text-center font-medium">Số trẻ</th>
              <th className="px-4 py-3 font-medium">Premium hết hạn</th>
              <th className="px-4 py-3 font-medium">Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                  Đang tải…
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : !data || data.content.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                  Không có người dùng.
                </td>
              </tr>
            ) : (
              data.content.map((u) => (
                <tr
                  key={u.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/users/${u.id}`}
                      className="font-medium text-indigo-600 hover:underline"
                    >
                      {u.email}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{u.fullName ?? '—'}</td>
                  <td className="px-4 py-3">
                    <TierBadge tier={u.subscriptionTier} />
                  </td>
                  <td className="px-4 py-3 text-center text-slate-700">
                    {u.kidCount}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {formatDate(u.premiumExpiresAt)}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {formatDate(u.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {data && data.totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">
            Trang {data.number + 1} / {data.totalPages} · {data.totalElements} người dùng
          </span>
          <div className="flex gap-2">
            <button
              disabled={data.number <= 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="rounded-lg border border-slate-300 px-3 py-1.5 font-medium text-slate-600 disabled:opacity-40 enabled:hover:bg-slate-100"
            >
              Trước
            </button>
            <button
              disabled={data.number >= data.totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-lg border border-slate-300 px-3 py-1.5 font-medium text-slate-600 disabled:opacity-40 enabled:hover:bg-slate-100"
            >
              Sau
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
