'use client';

import dynamic from 'next/dynamic';

import '../../src/styles/globals.css';

import Loading from '@/app/loading';
import { AuthSync } from '@/components/shared/AuthSync';
import Providers from '@/providers/Providers';
import { useEffect, useState } from 'react';

//Dynamic imports for client-side only components
const DynamicAOSInit = dynamic(
  () => import('../providers/AOSProvider').then((mod) => mod.AOSInit),
  { ssr: false }
);
const DynamicToastProvider = dynamic(
  () => import('../providers/ToastProvider'),
  { ssr: false }
);

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loading />;
  }

  return (
    <Providers>
      <AuthSync />
      <main>
        {mounted && <DynamicAOSInit />}
        <DynamicToastProvider />
        {children}
      </main>
    </Providers>
  );
};

export default RootLayoutClient;
