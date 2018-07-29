import React from 'react';
import {connect} from 'react-redux';
import { toggleEditInfo } from '../actions';

export class AccountInfo extends React.Component {

  render() {
    return (
    	<div className="accountInfo">
        <h2>Name:</h2>
        <h3 id="accountInfoName">
            {this.props.user.userFirstName} {this.props.user.userLastName}
        </h3>
        <h2>Restaurant Affiliation:</h2>
        <h3 id="accountInfoRestaurant">
            Name: {this.props.user.affiliationName}
        </h3>
        <h3 id="accountInfoRestaurant">
            Address: {this.props.user.affiliationAddress}
        </h3>
        <h3 id="accountInfoRestaurant">
            Contact Info: {this.props.user.affiliationContact}
        </h3>
        <button 
          	type="button"
          	id="editAccountInfoButton" 
          	className="button"
            onClick={() => this.props.dispatch(toggleEditInfo('accountInfo'))}
        >
          	Edit Account Profile
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.app.user
});


export default connect(mapStateToProps)(AccountInfo);
