import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import './navbar.css';

export function NavBar(props) {
    return (
        <nav>
            <ul className="NavBar">
                <li className="homepageNavButton NavButton" aria-label="Go to homepage">
                    <Link to="/">Homepage</Link>
                </li>
                <li className="accountNavButton NavButton" aria-label="Go to Account Profile">
                    <Link to="/user-profile">Account</Link>
                </li>
                <li className="addSwapNavButton NavButton" aria-label="Add a Swap Posting">
                    <Link to="/add-swap">Post a Swap</Link>
                </li>
                <li className="matchesNavButton NavButton" aria-label="Go to Matches Page">
                    <Link to="/matches">See Swap Matches</Link>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(NavBar);