// Home.jsx
import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Anamay', lastName:'Upreti', email: 'anamayupreti@gmail.com' };
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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar
      user={loggedIn}
      transactions={{}}
      banks={[{ currentBalance: 15223244 }, { currentBalance: 84759683}]}
      />
    </section>
  );
};

export default Home;
