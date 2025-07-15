import Image from 'next/image';
import Link from 'next/link';

const HomepageClient = () => {
  return (
    <div className="mt-28 lg:mt-16 flex flex-col lg:flex-row items-center justify-center">
      {/* Content Section */}
      <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-6 leading-tight"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Your Digital{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Wallet
          </span>{' '}
          Solution
        </h1>

        <p
          className="text-md md:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-3 lg:px-0"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Manage your finances effortlessly with our secure and intuitive
          digital wallet. Send, receive, and track your transactions with
          complete peace of mind. Manage your finances effortlessly with our
          secure and intuitive digital wallet. Send, receive, and track your
          transactions with complete peace of mind. finances effortlessly with
          our secure and intuitive digital wallet. Send, receive, and track your
          transactions with complete peace of mind.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <Link href="/dashboard">
            <button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg hover:shadow transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 justify-center lg:justify-end hidden lg:flex">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl p-8">
            <Image
              src="/assets/images/wallet.png"
              alt="Digital Wallet"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
              data-aos="fade-down"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageClient;
