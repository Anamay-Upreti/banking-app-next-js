// TotalBalanceBox.jsx
import React from 'react';
import { formatAmount } from '@/lib/utils';
import CountUp from 'react-countup';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart'
interface TotalBalanceBoxProps {
  accounts?: any[];
  totalBanks: number;
  totalCurrentBalance: number; // Changed from totalCurrencyBalance to totalCurrentBalance
}

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance, // Changed from totalCurrencyBalance to totalCurrentBalance
}) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts} />
      </div>
      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Accounts: {totalBanks} 
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance 
          </p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter
              amount={totalCurrentBalance}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;