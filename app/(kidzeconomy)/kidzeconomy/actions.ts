'use server';

import { postWaitlist } from '@/lib/api';

export interface WaitlistFormState {
  status: 'idle' | 'success' | 'error' | 'duplicate';
  message: string;
}

// Message backend trả về (409) khi email đã tồn tại.
const DUPLICATE_ERROR = 'Email này đã được đăng ký rồi!';

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

  // ── Gửi tới backend ──
  const result = await postWaitlist({
    email,
    name: name || undefined,
    role: role as 'parent' | 'teacher' | 'other',
  });

  if (!result.success) {
    // Email đã có trong danh sách (409)
    if (result.error === DUPLICATE_ERROR) {
      return {
        status: 'duplicate',
        message: 'Email này đã có trong danh sách! Chúng tôi sẽ thông báo sớm nhé 🎉',
      };
    }
    return {
      status: 'error',
      message: result.error ?? 'Đã xảy ra lỗi. Vui lòng thử lại sau.',
    };
  }

  return {
    status: 'success',
    message: 'Bạn đã đăng ký thành công! Chúng tôi sẽ liên hệ sớm nhất. 🚀',
  };
}
