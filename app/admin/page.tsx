'use client';

import { useEffect, useState } from 'react';
import {
  getStats,
  formatVnd,
  AdminApiError,
  type AdminStats,
} from '@/lib/admin-api';

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    getStats()
      .then((s) => {
        if (alive) setStats(s);
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
  }, []);

  if (loading) {
    return <p className="text-sm text-slate-500">Đang tải…</p>;
  }

  if (error || !stats) {
    return (
      <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
        {error ?? 'Không có dữ liệu'}
      </p>
    );
  }

  const gateways = Object.entries(stats.revenueByGateway ?? {});

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900">Tổng quan</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Phụ huynh" value={stats.totalParents.toLocaleString('vi-VN')} />
        <StatCard label="Trẻ em" value={stats.totalKids.toLocaleString('vi-VN')} />
        <StatCard
          label="Người dùng Premium"
          value={stats.totalPremiumUsers.toLocaleString('vi-VN')}
        />
        <StatCard label="Tổng doanh thu" value={formatVnd(stats.totalRevenueVnd)} />
        <StatCard label="Tổng số việc nhà" value={stats.totalTasks.toLocaleString('vi-VN')} />
        <StatCard
          label="Đổi thưởng hoàn tất"
          value={stats.totalRedemptionsFulfilled.toLocaleString('vi-VN')}
        />
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h2 className="mb-3 text-sm font-semibold text-slate-700">
          Doanh thu theo cổng thanh toán
        </h2>
        {gateways.length === 0 ? (
          <p className="text-sm text-slate-400">Chưa có dữ liệu.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 font-medium">Cổng</th>
                <th className="py-2 text-right font-medium">Doanh thu</th>
              </tr>
            </thead>
            <tbody>
              {gateways.map(([gw, amount]) => (
                <tr key={gw} className="border-b border-slate-100 last:border-0">
                  <td className="py-2 font-medium text-slate-800">{gw}</td>
                  <td className="py-2 text-right text-slate-800">
                    {formatVnd(amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
