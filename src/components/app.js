import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Homepage from './homepage';
import AddSwap from './add-swap';
import UserProfile from './user-profile';
import MatchesBoard from './matches-board';
import LandingPage from './landing-page';
import AccountRegistration from './account-registration';
import {refreshAuthToken} from '../actions/actions-auth';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
    	return (
    		<Router>
      			<div className="app">
      			    <Route exact path="/" component={LandingPage} />
      			    <Route exact path="/sign-up" component={AccountRegistration} />
        			<Route exact path="/home" component={Homepage} />
        			<Route exact path="/add-swap" component={AddSwap} />
        			<Route exact path="/user-profile" component={UserProfile} />
        			<Route exact path="/matches" component={MatchesBoard} />
      			</div>
    		</Router>
  		);

    }
  
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));