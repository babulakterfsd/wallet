'use client';

import transactionData from '@/data/transactions.json';
import Link from 'next/link';

const Dashboard = () => {
  const balance = 1524.75;

  // Get only the recent 3 transactions
  const recentTransactions = transactionData.transactions.slice(0, 3);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Food & Drinks': '🍽️',
      Income: '💰',
      Entertainment: '🎬',
      Transportation: '🚗',
      Shopping: '🛍️',
      Health: '💊',
      Utilities: '⚡',
    };
    return icons[category] || '📄';
  };

  return (
    <div className="">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 dark:text-white mt-4 lg:mt-0">
        Welcome to your Dashboard, Admin !
      </h2>
      <p className="w-full lg:w-8/12 mx-auto text-center text-gray-600 dark:text-gray-400 mb-6">
        Your one-stop solution for managing your finances effectively. you can
        view your balance and transaction history here.Amet consectetur
        adipisicing elit. Quod quo, natus excepturi nisi, alias unde temporibus
        culpa earum corrupti tempore molestias animi nulla eius nostrum ratione,
        recusandae a esse fugiat!
      </p>

      {/* Balance Card */}
      <div className="flex justify-end items-center">
        <div className="w-full lg:w-3/12 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20 shadow-lg rounded-xl p-6 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Current Balance
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            ${balance.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20 shadow-lg rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h4 className="text-lg lg:text-xl font-semibold dark:text-white">
            Recent Transactions
          </h4>
          <Link
            href="/dashboard/transactions"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
          >
            View All →
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentTransactions.map((txn) => (
                  <tr
                    key={txn.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {new Date(txn.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {txn.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="mr-2">
                          {getCategoryIcon(txn.category)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {txn.category}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span
                        className={`${
                          txn.amount < 0 ? 'text-red-500' : 'text-green-500'
                        }`}
                      >
                        {txn.amount < 0 ? '-' : '+'}$
                        {Math.abs(txn.amount).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {recentTransactions.map((txn) => (
              <div key={txn.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">
                      {getCategoryIcon(txn.category)}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {txn.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {txn.category} •{' '}
                        {new Date(txn.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      txn.amount < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {txn.amount < 0 ? '-' : '+'}$
                    {Math.abs(txn.amount).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link for Mobile */}
        <div className="md:hidden px-4 py-3 bg-gray-50 dark:bg-gray-700 text-center">
          <Link
            href="/dashboard/transactions"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
          >
            View All Transactions →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
