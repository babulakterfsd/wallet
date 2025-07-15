import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { toast } from 'sonner';

export const logoutUser = (router: AppRouterInstance) => {
  // Clear localStorage
  if (typeof window !== 'undefined') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  toast('Logged out successfully', {
    position: 'bottom-right',
    duration: 1500,
    icon: '👋',
  });

  // Navigate to login page using router (no page reload)
  router.push('/login');
};
