import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import CreateAccountForm from './new-account-form';
import Header from './header';

export function AccountRegistration(props) {

    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }
    return (
        <div className="account-creation-page">
            <Header />
                <main role="main">
                    <h2>Create Your Account for Swapsies</h2>
                    <CreateAccountForm />
                    <Link to="/">Login</Link>
                </main>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AccountRegistration);