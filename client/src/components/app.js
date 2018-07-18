import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage';
import AddSwap from './add-swap';

export default function App(props) {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/add-swap" component={AddSwap} />
      </div>
    </Router>
  );
}