import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage';
import AddSwap from './add-swap';
import UserProfile from './user-profile';
import MatchesBoard from './matches-board';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/add-swap" component={AddSwap} />
        <Route exact path="/user-profile" component={UserProfile} />
        <Route exact path="/matches" component={MatchesBoard} />
      </div>
    </Router>
  );
}