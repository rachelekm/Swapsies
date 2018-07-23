import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage';
import AddSwap from './add-swap';
import UserProfile from './user-profile';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/add-swap" component={AddSwap} />
        <Route exact path="/user-profile" component={UserProfile} />
      </div>
    </Router>
  );
}