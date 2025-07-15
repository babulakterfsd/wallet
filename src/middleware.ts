/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // For localStorage-only authentication, we'll handle route protection on client side
  // Middleware just allows all routes to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
