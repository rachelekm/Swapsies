import React from 'react';
import {connect} from 'react-redux';
import SwapInfo from './swap-info.js';

export function SwapHistory(props) {

    return (
    	<div className="userSwapPostInfo">
        <h2>Current Swap:</h2>
            <SwapInfo {...props.userSwaps}/>
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

const mapStateToProps = state => ({
    userSwaps: state.userSwaps
});


export default connect(mapStateToProps)(SwapHistory);
