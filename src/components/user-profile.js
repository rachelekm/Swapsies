import React from 'react';
import Header from './header';
import AccountInfo from './account-info';
import SwapHistory from './user-swap-history';

export default function UserProfile(props) {
  return (
    <div>
      <Header />
      <main role="main">
      <AccountInfo />
      <SwapHistory />
      </main>
    </div>
  );
}