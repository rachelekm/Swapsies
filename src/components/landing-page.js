import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import Header from './header';
import LoginForm from './login-form';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="landing-page">
        	<Header />
            <main role="main">
            	<h2>Welcome to Swapsies App</h2>
            	<LoginForm />
            	<Link to="/sign-up">Sign Up</Link>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
