import Navbar from '@/components/shared/Navbar';

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
}
