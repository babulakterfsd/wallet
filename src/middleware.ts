/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

const authRoutes = ['/login'];
const privateRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;

  const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';

  // If user is not logged in
  if (!isLoggedIn) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    if (privateRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }

  // If user is logged in
  if (isLoggedIn) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    if (privateRoutes.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
