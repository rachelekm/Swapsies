import React from 'react';
import Header from './header';
import SearchSection from './search-section';
import SwapsBoard from './swaps-board';


export default function Homepage(props) {
  return (
    <div>
      <Header />
      <main role="main">
      <SearchSection />
      <SwapsBoard />
      </main>
    </div>
  );
}