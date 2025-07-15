/* eslint-disable react/no-children-prop */

import RootLayoutClient from '@/layouts/RootLayout.client';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wallet: simple nextjs app to track user's wallet",
  description:
    'A simple Next.js application to track and manage your wallet transactions and balances.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <RootLayoutClient children={children} />
      </body>
    </html>
  );
}
