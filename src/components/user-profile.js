import React from 'react';
import Header from './header';
import AccountInfo from './account-info';
import SwapHistory from './user-swap-history';
import AcocuntInfoEdit from './account-info-edit';
import {connect} from 'react-redux';
import { editUserInfo } from '../actions';

export class UserProfile extends React.Component {
  editSection(location){
  	console.log('here');
    this.props.dispatch(editUserInfo(location));
  }

  render() {
  	console.log(this.props.editStatus);
  	let accountSection;
  	let editingUpdates;
  	this.props.editStatus.forEach((object, index) => (
  		(object.location === 'accountInfo') &&
  			(editingUpdates = object)
  	));

  	console.log(editingUpdates);
  	(editingUpdates.status == true) ?
  	accountSection = (<AcocuntInfoEdit />)
  	:
  	accountSection = (<AccountInfo clickResponse={location => this.editSection(location)}/>)


  	return (
    	<div>
      	<Header />
      	<main role="main">
      	{accountSection}
      	<SwapHistory />
      	</main>
    	</div>
  	);
	}
}

const mapStateToProps = state => ({
  editStatus: state.app.editStatus
});

export default connect(mapStateToProps)(UserProfile);