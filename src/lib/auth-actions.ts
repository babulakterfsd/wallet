'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function setAuthCookie(isLoggedIn: boolean) {
  const cookieStore = await cookies();

  if (isLoggedIn) {
    cookieStore.set('isLoggedIn', 'true', {
      path: '/',
      maxAge: 86400, // 24 hours
      secure: process.env.NODE_ENV === 'production',
      httpOnly: false, // Allow client-side access
      sameSite: 'lax',
    });
  } else {
    cookieStore.delete('isLoggedIn');
  }
}

export async function loginAction(
  email: string,
  password: string
): Promise<{ success?: boolean; error?: string }> {
  // Demo credentials
  const DEMO_CREDENTIALS = {
    email: 'admin@gmail.com',
    password: 'Admin123',
    name: 'Md Babul Akter',
  };

  if (
    email === DEMO_CREDENTIALS.email &&
    password === DEMO_CREDENTIALS.password
  ) {
    await setAuthCookie(true);
    return { success: true };
  } else {
    return { error: 'Invalid credentials' };
  }
}

export async function logoutAction() {
  await setAuthCookie(false);
  redirect('/login');
}
