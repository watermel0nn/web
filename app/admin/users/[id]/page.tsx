'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  getUserDetail,
  grantPremium,
  revokePremium,
  formatVnd,
  formatDate,
  formatDateTime,
  AdminApiError,
  type AdminUserDetail,
} from '@/lib/admin-api';

export default function AdminUserDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [detail, setDetail] = useState<AdminUserDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const d = await getUserDetail(id);
      setDetail(d);
    } catch (err) {
      setError(err instanceof AdminApiError ? err.message : 'Lỗi tải dữ liệu');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleGrant() {
    const raw = window.prompt('Cấp Premium bao nhiêu tháng?', '1');
    if (raw === null) return;
    const months = parseInt(raw, 10);
    if (!Number.isInteger(months) || months < 1) {
      window.alert('Số tháng không hợp lệ (phải là số nguyên ≥ 1).');
      return;
    }
    setActing(true);
    try {
      await grantPremium(id, months);
      await load();
    } catch (err) {
      window.alert(err instanceof AdminApiError ? err.message : 'Cấp Premium thất bại');
    } finally {
      setActing(false);
    }
  }

  async function handleRevoke() {
    if (!window.confirm('Gỡ Premium của người dùng này?')) return;
    setActing(true);
    try {
      await revokePremium(id);
      await load();
    } catch (err) {
      window.alert(err instanceof AdminApiError ? err.message : 'Gỡ Premium thất bại');
    } finally {
      setActing(false);
    }
  }

  if (loading) {
    return <p className="text-sm text-slate-500">Đang tải…</p>;
  }

  if (error || !detail) {
    return (
      <div className="space-y-4">
        <Link href="/admin/users" className="text-sm text-indigo-600 hover:underline">
          ← Quay lại
        </Link>
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error ?? 'Không có dữ liệu'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/admin/users" className="text-sm text-indigo-600 hover:underline">
        ← Quay lại danh sách
      </Link>

      {/* Parent info */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {detail.fullName ?? '(Chưa có tên)'}
            </h1>
            <p className="text-sm text-slate-500">{detail.email}</p>
            <div className="mt-3 grid grid-cols-1 gap-1 text-sm text-slate-600 sm:grid-cols-2">
              <p>
                Gói:{' '}
                <span className="font-semibold text-slate-800">
                  {detail.subscriptionTier}
                </span>
              </p>
              <p>Premium hết hạn: {formatDate(detail.premiumExpiresAt)}</p>
              <p>Ngày tạo: {formatDate(detail.createdAt)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleGrant}
              disabled={acting}
              className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              Cấp Premium
            </button>
            <button
              onClick={handleRevoke}
              disabled={acting}
              className="rounded-lg border border-red-300 bg-white px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:opacity-50"
            >
              Gỡ Premium
            </button>
          </div>
        </div>
      </div>

      {/* Kids */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-3 text-sm font-semibold text-slate-700">
          Trẻ em ({detail.kids.length})
        </h2>
        {detail.kids.length === 0 ? (
          <p className="text-sm text-slate-400">Chưa có trẻ.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 font-medium">Tên</th>
                <th className="py-2 text-right font-medium">Số dư (Kidz Coins)</th>
              </tr>
            </thead>
            <tbody>
              {detail.kids.map((k) => (
                <tr key={k.id} className="border-b border-slate-100 last:border-0">
                  <td className="py-2 font-medium text-slate-800">{k.name}</td>
                  <td className="py-2 text-right text-slate-800">
                    {k.walletBalance.toLocaleString('vi-VN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Recent payments */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-3 text-sm font-semibold text-slate-700">
          Thanh toán gần đây ({detail.recentPayments.length})
        </h2>
        {detail.recentPayments.length === 0 ? (
          <p className="text-sm text-slate-400">Chưa có giao dịch.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="py-2 font-medium">Cổng</th>
                  <th className="py-2 text-right font-medium">Số tiền</th>
                  <th className="py-2 text-center font-medium">Tháng</th>
                  <th className="py-2 font-medium">Trạng thái</th>
                  <th className="py-2 font-medium">Mã GD</th>
                  <th className="py-2 font-medium">Ngày tạo</th>
                </tr>
              </thead>
              <tbody>
                {detail.recentPayments.map((p) => (
                  <tr key={p.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-2 text-slate-800">{p.gateway}</td>
                    <td className="py-2 text-right text-slate-800">
                      {formatVnd(p.amount)}
                    </td>
                    <td className="py-2 text-center text-slate-700">{p.planMonths}</td>
                    <td className="py-2 text-slate-700">{p.status}</td>
                    <td className="py-2 font-mono text-xs text-slate-500">
                      {p.txnRef ?? '—'}
                    </td>
                    <td className="py-2 text-slate-700">{formatDateTime(p.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
