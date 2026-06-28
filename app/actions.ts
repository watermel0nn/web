'use server';

import { supabase } from '@/lib/supabase';

export interface WaitlistFormState {
  status: 'idle' | 'success' | 'error' | 'duplicate';
  message: string;
}

export async function submitWaitlist(
  _prevState: WaitlistFormState,
  formData: FormData
): Promise<WaitlistFormState> {
  const email = (formData.get('email') as string)?.trim().toLowerCase();
  const name = (formData.get('name') as string)?.trim();
  const role = (formData.get('role') as string) ?? 'parent';

  // ── Validate ──
  if (!email) {
    return { status: 'error', message: 'Vui lòng nhập email của bạn.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Email không hợp lệ. Vui lòng kiểm tra lại.' };
  }

  // ── Insert to Supabase ──
  const { error } = await supabase.from('waitlist').insert([
    { email, name: name || null, role },
  ]);

  if (error) {
    // Duplicate email (unique constraint)
    if (error.code === '23505') {
      return {
        status: 'duplicate',
        message: 'Email này đã có trong danh sách! Chúng tôi sẽ thông báo sớm nhé 🎉',
      };
    }
    console.error('Supabase error:', error);
    return {
      status: 'error',
      message: 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
    };
  }

  return {
    status: 'success',
    message: 'Bạn đã đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất. 🚀',
  };
}
