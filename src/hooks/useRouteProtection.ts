'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRouteProtection = (requireAuth: boolean = true) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

      if (requireAuth && !isLoggedIn) {
        // User should be logged in but isn't - redirect to login
        router.push('/login');
      } else if (!requireAuth && isLoggedIn) {
        // User shouldn't be logged in but is - redirect to dashboard
        router.push('/dashboard');
      }
    }
  }, [requireAuth, router]);
};
