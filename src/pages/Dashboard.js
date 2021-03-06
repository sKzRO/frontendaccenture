import React, { useContext } from 'react';
import AccountDetails from '../partials/AccountDetails';
import Footer from '../partials/Footer';

import Header from '../partials/Header';
import Loading from '../partials/Loading';
import Promotions from '../partials/Promotions';
import { LoadingContext } from '../providers/LoadingProvider';
import { UserContext } from '../providers/UserProvider';

const Dashboard = () => {


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      {/* <AccountDetails /> */}
      <Promotions />
      <Footer />
    </div>
  );
};

export default Dashboard;
