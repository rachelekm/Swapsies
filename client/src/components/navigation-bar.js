import React from 'react';
import {connect} from 'react-redux';
import './navbar.css';

export function NavBar(props) {
    return (
        <nav>
            <ul className="NavBar">
                <li className="homepageNavButton NavButton" aria-label="Go to homepage">
                    <a href="/">Homepage</a>
                </li>
                <li className="accountNavButton NavButton" aria-label="Go to Account Profile">
                    <a href="/user-profile">Account</a>
                </li>
                <li className="addSwapNavButton NavButton" aria-label="Add a Swap Posting">
                    <a href="/add-swap">Post a Swap</a>
                </li>
                <li className="matchesNavButton NavButton" aria-label="Go to Matches Page">
                    <a href="/">See Swap Matches</a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(NavBar);