'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useRouteProtection = (requireAuth: boolean = true) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAuthenticated(isLoggedIn);

      if (requireAuth && !isLoggedIn) {
        // User should be logged in but isn't - redirect to login
        router.push('/login');
      } else if (!requireAuth && isLoggedIn) {
        // User shouldn't be logged in but is - redirect to dashboard
        router.push('/dashboard');
      } else {
        // User is in correct state, stop loading
        setIsLoading(false);
      }
    }
  }, [requireAuth, router]);

  return { isLoading, isAuthenticated };
};
