import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import NewSwapForm from './new-swap-form';
import RequiresAuth from './requires-login';

export class AddSwap extends React.Component {
	render(){
		return (
    		<div>
      			<Header />
      			<main role="main">
      				<NewSwapForm />
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

export default RequiresAuth()(connect(mapStateToProps)(AddSwap));