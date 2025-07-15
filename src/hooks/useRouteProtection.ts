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
        router.push('/login');
      } else if (!requireAuth && isLoggedIn) {
        router.push('/dashboard');
      } else {
        setIsLoading(false);
      }
    }
  }, [requireAuth, router]);

  return { isLoading, isAuthenticated };
};
