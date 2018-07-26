import React from 'react';
import {connect} from 'react-redux';
import AccountSwapInfo from './profile-swap-info.js';
import { Link } from 'react-router-dom'

export class SwapHistory extends React.Component {
  render() {
    console.log(this.props.userSwaps);
    if(this.props.userSwaps.length > 0){
      const swaps = this.props.userSwaps.map((swap, index) => (
          <div key={index} className="userSwapsBox">
            <AccountSwapInfo {...swap}/>
            <button 
              type="button"
              id="editSwapPostButton" 
              className="button"
            >
            Edit Swap
            < /button>
            <button 
              type="button"
              id="deleteSwapPostButton" 
              className="button"
            >
            Delete Swap
            < /button>
          </div>
      ));
      return (
        <div className="userSwapPostInfo">
          <h2>Current Swaps:</h2>

            {swaps}

        </div>
      );
    }
    else {
      return (
        <div className="userSwapPostInfo">
          <h2>You haven't posted a meal to swap yet!
          Click below to get started:</h2>
           <Link to="/add-swap">
              <button 
                type="button"
                id="redirectSwapPostButton" >
                Post a Swap
              </button>
            </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  userSwaps: state.app.userSwaps
});

export default connect(mapStateToProps)(SwapHistory);
