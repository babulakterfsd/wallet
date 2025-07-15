/* eslint-disable require-await */
import { logout } from '@/lib/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { toast } from 'sonner';

export const logoutUser = async (router: AppRouterInstance) => {
  logout();
  router.refresh();
  router.push('/login');
  toast('Logged out successfully', {
    position: 'top-right',
    duration: 1500,
    icon: '👋',
  });
};
