import React from 'react';
import Header from './header';
import AccountInfo from './account-info';
import SwapHistory from './user-swap-history';
import AccountInfoEdit from './account-info-edit';
import SwapHistoryEdit from './user-swap-history-edit';
import LogOutSection from './log-out';
import RequiresAuth from './requires-login';
import {connect} from 'react-redux';

export class UserProfile extends React.Component {

  render() {
    console.log(this.props.editStatus);
    let accountSection;
    let swapSection;
    let editingUpdates_account;
    let editingUpdates_swaps;
    this.props.editStatus.forEach((object, index) => (
      (object.location === 'accountInfo') ?
        (editingUpdates_account = object)
        :
        (editingUpdates_swaps = object)
    ));

    (editingUpdates_account.status == true) ?
      (accountSection = (<AccountInfoEdit />),
      (editingUpdates_swaps.status == true) ?
        swapSection = (<SwapHistoryEdit index={editingUpdates_swaps.index}/>)
        :
        swapSection = (<SwapHistory />)
    )
    :
      (accountSection = (<AccountInfo />),
      (editingUpdates_swaps.status == true) ?
        swapSection = (<SwapHistoryEdit index={editingUpdates_swaps.index}/>)
        :
        swapSection = (<SwapHistory />)
    )

console.log(this.props.editStatus);

    return (
      <div>
        <Header />
        <main role="main">
        {accountSection}
        {swapSection}
        <LogOutSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        editStatus: state.app.editStatus
    };
};

export default RequiresAuth()(connect(mapStateToProps)(UserProfile));