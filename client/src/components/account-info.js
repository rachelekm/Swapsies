import React from 'react';
import {connect} from 'react-redux';

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
            Name: {this.props.user.restaurant.affiliationName}
        </h3>
        <h3 id="accountInfoRestaurant">
            Address: {this.props.user.restaurant.address}
        </h3>
        <h3 id="accountInfoRestaurant">
            Contact Info: {this.props.user.restaurant.contact}
        </h3>
        <button 
          	type="button"
          	id="editAccountInfoButton" 
          	className="button"
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
