'use client';
import { toast } from 'sonner';

const DashboardRootClient = () => {
  const handleToast = () => {
    toast.success('Toaster setup is completed!', {
      position: 'top-right',
      icon: '👏',
      duration: 1500,
    });
  };

  return (
    <button className="btn-secondary mt-1" onClick={handleToast}>
      Toast
    </button>
  );
};

export default DashboardRootClient;
