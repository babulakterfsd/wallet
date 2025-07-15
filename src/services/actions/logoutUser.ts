/* eslint-disable require-await */
import { logoutAction } from '@/lib/auth-actions';
import { toast } from 'sonner';

export const logoutUser = async () => {
  // Clear localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  toast('Logged out successfully', {
    position: 'top-right',
    duration: 1500,
    icon: '👋',
  });

  // Use server action to clear cookie and redirect
  await logoutAction();
};
