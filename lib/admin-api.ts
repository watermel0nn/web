// ── Admin API client ──
// Lean client cho Admin UI: plain fetch + localStorage token. KHÔNG thêm thư viện.
// Mọi response BE đều bọc { success, message, data } — helper tự bóc `data`.

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://221.132.16.144.nip.io/api/v1';

const TOKEN_KEY = 'admin_token';

// ── Types (khớp DTO backend trong dto/admin/) ──

export interface AdminUserInfo {
  id: string;
  name: string | null;
  email: string | null;
  avatarUrl: string | null;
  accountType: string; // PARENT | KID | ADMIN
  subscriptionTier: string | null;
  familyId: string | null;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
  user: AdminUserInfo;
}

export interface AdminStats {
  totalParents: number;
  totalKids: number;
  totalPremiumUsers: number;
  totalRevenueVnd: number;
  revenueByGateway: Record<string, number>;
  totalTasks: number;
  totalRedemptionsFulfilled: number;
}

export interface AdminUserSummary {
  id: string;
  email: string;
  fullName: string | null;
  subscriptionTier: string; // "PREMIUM" | "BASIC"
  premiumExpiresAt: string | null;
  kidCount: number;
  createdAt: string;
}

export interface KidSummary {
  id: string;
  name: string;
  walletBalance: number;
}

export interface RecentPayment {
  id: string;
  gateway: string;
  amount: number;
  planMonths: number;
  status: string;
  txnRef: string | null;
  createdAt: string;
  paidAt: string | null;
}

export interface AdminUserDetail {
  id: string;
  email: string;
  fullName: string | null;
  subscriptionTier: string;
  premiumExpiresAt: string | null;
  createdAt: string;
  kids: KidSummary[];
  recentPayments: RecentPayment[];
}

export interface AdminPaymentRow {
  id: string;
  userEmail: string | null;
  gateway: string;
  amount: number;
  status: string;
  txnRef: string | null;
  createdAt: string;
  paidAt: string | null;
}

export interface PremiumActionResult {
  userId: string;
  email: string;
  subscriptionTier: string;
  premiumExpiresAt: string | null;
}

// Spring Page<T>
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // current page index (0-based)
  size: number;
}

interface ApiEnvelope<T> {
  success: boolean;
  message?: string;
  data: T;
}

export class AdminApiError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'AdminApiError';
  }
}

// ── Token helpers ──

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(TOKEN_KEY);
}

// ── Core fetch wrapper: gắn Bearer, bóc `data`, clear token khi 401/403 ──

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> | undefined),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
      cache: 'no-store',
    });
  } catch {
    throw new AdminApiError(0, 'Không kết nối được máy chủ. Vui lòng thử lại.');
  }

  if (res.status === 401 || res.status === 403) {
    clearToken();
    throw new AdminApiError(res.status, 'Phiên đăng nhập đã hết hạn hoặc không có quyền.');
  }

  let body: ApiEnvelope<T> | null = null;
  try {
    body = (await res.json()) as ApiEnvelope<T>;
  } catch {
    // body không phải JSON
  }

  if (!res.ok) {
    const msg = body?.message ?? 'Đã xảy ra lỗi. Vui lòng thử lại.';
    throw new AdminApiError(res.status, msg);
  }

  if (!body) {
    throw new AdminApiError(res.status, 'Phản hồi không hợp lệ từ máy chủ.');
  }

  return body.data;
}

// ── Endpoints ──

export async function adminLogin(
  email: string,
  password: string
): Promise<AuthResponse> {
  // login KHÔNG cần token; dùng request() vẫn ổn (header Authorization bỏ qua khi chưa có token)
  return request<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function getStats(): Promise<AdminStats> {
  return request<AdminStats>('/admin/stats');
}

export async function getUsers(
  query: string,
  page: number,
  size = 20
): Promise<Page<AdminUserSummary>> {
  const params = new URLSearchParams();
  if (query) params.set('query', query);
  params.set('page', String(page));
  params.set('size', String(size));
  return request<Page<AdminUserSummary>>(`/admin/users?${params.toString()}`);
}

export async function getUserDetail(id: string): Promise<AdminUserDetail> {
  return request<AdminUserDetail>(`/admin/users/${id}`);
}

export interface PaymentFilters {
  gateway?: string;
  status?: string;
}

export async function getPayments(
  filters: PaymentFilters,
  page: number,
  size = 20
): Promise<Page<AdminPaymentRow>> {
  const params = new URLSearchParams();
  if (filters.gateway) params.set('gateway', filters.gateway);
  if (filters.status) params.set('status', filters.status);
  params.set('page', String(page));
  params.set('size', String(size));
  return request<Page<AdminPaymentRow>>(`/admin/payments?${params.toString()}`);
}

export async function grantPremium(
  id: string,
  months: number
): Promise<PremiumActionResult> {
  return request<PremiumActionResult>(`/admin/users/${id}/grant-premium`, {
    method: 'POST',
    body: JSON.stringify({ months }),
  });
}

export async function revokePremium(id: string): Promise<PremiumActionResult> {
  return request<PremiumActionResult>(`/admin/users/${id}/revoke-premium`, {
    method: 'POST',
  });
}

// ── Format helpers ──

export function formatVnd(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDateTime(iso: string | null): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

export function formatDate(iso: string | null): string {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return new Intl.DateTimeFormat('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(d);
}
