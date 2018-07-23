import React from 'react';
import {connect} from 'react-redux';
import AccountSwapInfo from './profile-swap-info.js';


export class SwapHistory extends React.Component {
  render() {
    return (
    	<div className="userSwapPostInfo">
        <h2>Current Swap:</h2>
            <AccountSwapInfo {...this.props.userSwaps}/>
        <button 
          	type="button"
          	id="editSwapPostButton" 
          	className="button"
        >
          	Edit Swap
        </button>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  userSwaps: state.app.userSwaps
});

export default connect(mapStateToProps)(SwapHistory);
