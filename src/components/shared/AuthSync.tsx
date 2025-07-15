'use client';

import { syncAuthState } from '@/lib/auth';
import { useEffect } from 'react';

export const AuthSync = () => {
  useEffect(() => {
    // Sync auth state between localStorage and cookies on app initialization
    syncAuthState();
  }, []);

  return null;
};
