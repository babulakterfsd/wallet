'use client';

import { useRouteProtection } from '@/hooks/useRouteProtection';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Protect this route - should NOT be authenticated
  const { isLoading, isAuthenticated } = useRouteProtection(false);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If authenticated, return null (redirect is happening)
  if (isAuthenticated) {
    return null;
  }

  return <div>{children}</div>;
}
