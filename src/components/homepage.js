import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import SearchSection from './search-section';
import SwapsBoard from './swaps-board';
import RequiresAuth from './requires-login';

export class Homepage extends React.Component {
	render(){
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
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default RequiresAuth()(connect(mapStateToProps)(Homepage));