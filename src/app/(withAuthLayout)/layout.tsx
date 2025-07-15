'use client';

import { useRouteProtection } from '@/hooks/useRouteProtection';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect this route - should NOT be authenticated
  useRouteProtection(false);

  return <div>{children}</div>;
}
