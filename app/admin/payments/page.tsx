'use client';

import { useEffect, useState } from 'react';
import {
  getPayments,
  formatVnd,
  formatDateTime,
  AdminApiError,
  type AdminPaymentRow,
  type Page,
} from '@/lib/admin-api';

const GATEWAYS = ['VNPAY', 'MOMO', 'SEPAY', 'PAYOS'];
const STATUSES = ['PENDING', 'PAID', 'FAILED'];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    PAID: 'bg-emerald-100 text-emerald-700',
    PENDING: 'bg-amber-100 text-amber-700',
    FAILED: 'bg-red-100 text-red-700',
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
        map[status] ?? 'bg-slate-100 text-slate-600'
      }`}
    >
      {status}
    </span>
  );
}

export default function AdminPaymentsPage() {
  const [gateway, setGateway] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(0);
  const [data, setData] = useState<Page<AdminPaymentRow> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    getPayments({ gateway, status }, page)
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
  }, [gateway, status, page]);

  return (
    <div className="space-y-5">
      <h1 className="text-xl font-bold text-slate-900">Thanh toán</h1>

      <div className="flex flex-wrap gap-3">
        <select
          value={gateway}
          onChange={(e) => {
            setPage(0);
            setGateway(e.target.value);
          }}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
        >
          <option value="">Tất cả cổng</option>
          {GATEWAYS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => {
            setPage(0);
            setStatus(e.target.value);
          }}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
        >
          <option value="">Tất cả trạng thái</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-500">
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Cổng</th>
              <th className="px-4 py-3 text-right font-medium">Số tiền</th>
              <th className="px-4 py-3 font-medium">Trạng thái</th>
              <th className="px-4 py-3 font-medium">Mã GD</th>
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
                  Không có giao dịch.
                </td>
              </tr>
            ) : (
              data.content.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 text-slate-700">{p.userEmail ?? '—'}</td>
                  <td className="px-4 py-3 text-slate-700">{p.gateway}</td>
                  <td className="px-4 py-3 text-right text-slate-800">
                    {formatVnd(p.amount)}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">
                    {p.txnRef ?? '—'}
                  </td>
                  <td className="px-4 py-3 text-slate-700">
                    {formatDateTime(p.createdAt)}
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
            Trang {data.number + 1} / {data.totalPages} · {data.totalElements} giao dịch
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
