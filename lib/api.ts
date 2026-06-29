// ── Backend API client ──
// Gọi backend Kidz Economy (thay cho Supabase) cho luồng waitlist.

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://221.132.16.144.nip.io/api/v1';

const GENERIC_ERROR = 'Đã xảy ra lỗi. Vui lòng thử lại.';

// ── Types ──

export interface WaitlistEntry {
  email: string;
  name?: string;
  role?: 'parent' | 'teacher' | 'other';
}

// ── Waitlist ──

/**
 * Đăng ký email vào waitlist qua backend.
 * Contract: POST {API_URL}/public/waitlist  body {email, name?, role?}
 *   - 201 -> { success: true }
 *   - 409 (email trùng) -> { success: false, error: <message từ backend> }
 *   - lỗi mạng / lỗi khác -> { success: false, error: GENERIC_ERROR }
 */
export async function postWaitlist(
  entry: WaitlistEntry
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_URL}/public/waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
      cache: 'no-store',
    });

    if (res.ok) {
      return { success: true };
    }

    // Email đã đăng ký rồi -> dùng message từ backend
    let message = GENERIC_ERROR;
    try {
      const data = await res.json();
      if (data?.message) message = data.message;
    } catch {
      // body không phải JSON -> giữ GENERIC_ERROR
    }

    return { success: false, error: message };
  } catch {
    return { success: false, error: GENERIC_ERROR };
  }
}
