'use client';

import { getCurrentUser } from '@/lib/auth';
import { logoutUser } from '@/services/actions/logoutUser';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const user = getCurrentUser();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser(router);
    setTimeout(() => {
      router.push('/login');
    }, 100);
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Open</span>
        <svg
          className="w-6 h-6 text-xl text-gray-300 dark:text-gray-400 hover:text-red-700 hover:transition-all duration-300 ease-in-out"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? '' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-black">
          <Link href={`/dashboard`}>
            <div
              className="flex justify-start items-center space-x-1 hover:cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <h6
                className={`hover:transition-all duration-300 ease-in-out hover:text-primary ${
                  pathname === '/dashboard'
                    ? 'text-primary dark:text-primary'
                    : 'dark:text-dim '
                }`}
              >
                Wallet
              </h6>
            </div>
          </Link>
          <div className="flex justify-end items-center mb-5 sm:hidden">
            <button
              className="text-xl text-orange hover:text-primary hover:transition-all duration-300 ease-in-out dark:text-primary"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <RxCross2 />
            </button>
          </div>
          <ul className="font-medium lg:mt-12">
            <Link
              href={`/dashboard/profile`}
              className="lg:hidden flex items-center space-x-2 mb-4 hover:text-primary dark:hover:text-primary transition-all duration-300 ease-in-out rounded-md py-2.5 px-3 md:mt-6"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <li
                className={`${
                  pathname === '/dashboard/profile'
                    ? 'text-primary dark:text-primary'
                    : 'dark:text-dim'
                }`}
              >
                {user?.name}
              </li>
            </Link>

            <div className="absolute bottom-20 sm:bottom-10">
              <li>
                <Link
                  href="/"
                  className="cursor-pointer ms-5 text-offgray hover:text-primary group hover:transition-all duration-300 ease-in-out dark:hover:text-orange-400"
                >
                  <div
                    className="flex items-center space-x-2"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  >
                    <span className="dark:text-dim hover:transition-all duration-300 ease-in-out dark:hover:text-orange-400">
                      Back To Home
                    </span>
                  </div>
                </Link>
              </li>
              <li className="cursor-pointer mt-4 text-offgray hover:text-primary dark:hover:text-primary group hover:transition-all duration-300 ease-in-out">
                <div
                  className="flex items-center space-x-2"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  <button
                    className="dark:text-dim hover:transition-all duration-300 ease-in-out dark:hover:text-orange-400"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </aside>

      <div className={`p-4 lg:p-0 ${isSidebarOpen ? 'sm:ml-64' : ''} sm:ml-64`}>
        {/* dashboard header */}
        <div className="py-10 hidden lg:flex justify-end items-center bg-gray-100 dark:bg-black">
          <Link
            href="/dashboard/profile"
            className="flex justify-center items-center space-x-2  mr-10"
          >
            <li
              className={`list-none text-md font-[500] hover:text-primary dark:hover:text-primary transition-all ease-in-out duration-300 ${
                pathname === '/dashboard/profile'
                  ? 'text-primary dark:text-primary'
                  : 'dark:text-dim'
              }`}
            >
              {user?.name}
            </li>
          </Link>
        </div>
        {/* dashboard content */}
        <div className="h-screen flex lg:px-10 lg:py-6">{children}</div>
      </div>
    </div>
  );
}
