'use client';

import dynamic from 'next/dynamic';

import '../../src/styles/globals.css';

import { AuthSync } from '@/components/shared/AuthSync';
import ThemeToggle from '@/components/theme/Themetoggle';
import Providers from '@/providers/Providers';

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
  return (
    <Providers>
      <AuthSync />
      <div className="fixed bottom-0 left-1 z-50">
        <ThemeToggle />
      </div>
      <main>
        <DynamicAOSInit />
        <DynamicToastProvider />
        {children}
      </main>
    </Providers>
  );
};

export default RootLayoutClient;
