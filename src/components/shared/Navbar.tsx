'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { isLoggedIn, syncAuthState } from '@/lib/auth';
import { logoutUser } from '@/services/actions/logoutUser';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';

const menuItems = [
  { name: 'Home', path: '/', current: false },
  { name: 'Dashboard', path: '/dashboard', current: false },
];

const Navbar = () => {
  const [isloggedIn, setIsLoggedin] = useState<boolean>(false);
  const router = useRouter();

  const handleLogOut = async () => {
    await logoutUser(router);
    setIsLoggedin(false);
    setTimeout(() => {
      router.push('/login');
    }, 100);
  };

  useEffect(() => {
    syncAuthState();
    setIsLoggedin(isLoggedIn());
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="main-container">
        <div className="flex items-center justify-between py-3">
          {/* Left Side */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold dark:text-dim">
              Wallet
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

          {/* Login/Logout Button */}
          <div className="hidden md:flex items-center">
            <button
              className="btn-primary md:ml-12 lg:ml-16 w-20"
              onClick={isloggedIn ? handleLogOut : () => router.push('/login')}
            >
              {isloggedIn ? 'Logout' : 'Login'}
            </button>
          </div>

          {/* Mobile Menu (Drawer) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="p-2">
                <HiOutlineMenu className="w-6 h-6 dark:text-dim" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-white dark:bg-black dark:text-white flex flex-col justify-center">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
