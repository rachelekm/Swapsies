import React from 'react';
import {connect} from 'react-redux';

export function AccountInfo(props) {
  console.log(props);
    return (
    	<div className="accountInfo">
        <h2>Name:</h2>
        <h3 id="accountInfoName">
            {props.user.userFirstName} {props.user.userLastName}
        </h3>
        <h2>Restaurant Affiliation:</h2>
        <h3 id="accountInfoRestaurant">
            Name: {props.user.restaurant.affiliationName}
        </h3>
        <h3 id="accountInfoRestaurant">
            Address: {props.user.restaurant.address}
        </h3>
        <h3 id="accountInfoRestaurant">
            Contact Info: {props.user.restaurant.contact}
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

const mapStateToProps = state => ({
    user: state.user
});


export default connect(mapStateToProps)(AccountInfo);
