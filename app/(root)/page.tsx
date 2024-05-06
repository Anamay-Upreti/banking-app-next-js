// Home.jsx
import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Anamay' };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={{}}
            totalBanks={1}
            totalCurrentBalance={231250} // Changed from totalCurrencyBalance to totalCurrentBalance
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
