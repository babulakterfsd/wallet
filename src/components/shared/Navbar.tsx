'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { isLoggedIn, syncAuthState } from '@/lib/auth';
import { logoutUser } from '@/services/actions/logoutUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import ThemeToggle from '../theme/Themetoggle';

const menuItems = [
  { name: 'Home', path: '/', current: false },
  { name: 'Dashboard', path: '/dashboard', current: false },
];

const Navbar = () => {
  const [isloggedIn, setIsLoggedin] = useState<boolean>(false);
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
    setIsLoggedin(false);
  };

  useEffect(() => {
    syncAuthState();
    setIsLoggedin(isLoggedIn());
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
      <div className="main-container">
        <div className="flex items-center justify-between py-3">
          {/* Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 lg:text-2xl">
                Wallet.
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link href={item.path} key={item.name}>
                <button className="hover:text-orange-400 transition-all duration-300 ease-in-out">
                  {item.name}
                </button>
              </Link>
            ))}
          </div>

          <div className="flex gap-x-2 items-center">
            {/* Theme Toggle */}
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>

            {/* Login/Logout Button */}
            <div className="hidden md:flex items-center">
              <button
                className="btn-primary w-20"
                onClick={
                  isloggedIn ? handleLogOut : () => router.push('/login')
                }
              >
                {isloggedIn ? 'Logout' : 'Login'}
              </button>
            </div>
          </div>

          {/* Mobile Menu (Drawer) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="p-2">
                <HiOutlineMenu className="w-6 h-6 dark:text-dim" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-white dark:bg-black dark:text-white flex flex-col justify-center">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col items-center space-y-4">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link href={item.path} key={item.name}>
                      <button className="hover:text-orange-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </button>
                    </Link>
                  </SheetClose>
                ))}
                <button
                  className="btn-primary md:ml-12 lg:ml-16"
                  onClick={
                    isloggedIn ? handleLogOut : () => router.push('/login')
                  }
                >
                  {isloggedIn ? 'Logout' : 'Login'}
                </button>
                <div>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
