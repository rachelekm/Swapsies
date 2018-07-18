import React from 'react';
import Header from './header';
import NewSwapForm from './new-swap-form';

export default function Homepage(props) {
  return (
    <div>
      <Header />
      <main role="main">
      <NewSwapForm />
      </main>
    </div>
  );
}