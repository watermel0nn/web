import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Types ──

export interface WaitlistEntry {
  id?: string;
  email: string;
  name?: string;
  role?: 'parent' | 'teacher' | 'other';
  created_at?: string;
}

// ── Waitlist Actions ──

/**
 * Thêm email vào bảng waitlist trong Supabase.
 * Bảng cần có schema:
 *   CREATE TABLE waitlist (
 *     id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 *     email      text UNIQUE NOT NULL,
 *     name       text,
 *     role       text,
 *     created_at timestamptz DEFAULT now()
 *   );
 */
export async function addToWaitlist(
  entry: Omit<WaitlistEntry, 'id' | 'created_at'>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([entry]);

    if (error) {
      // Email đã tồn tại (unique constraint)
      if (error.code === '23505') {
        return { success: false, error: 'Email này đã được đăng ký rồi!' };
      }
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'Đã xảy ra lỗi. Vui lòng thử lại.' };
  }
}
