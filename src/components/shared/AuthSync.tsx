'use client';

import { syncAuthState } from '@/lib/auth';
import { useEffect } from 'react';

export const AuthSync = () => {
  useEffect(() => {
    syncAuthState();
  }, []);

  return null;
};
