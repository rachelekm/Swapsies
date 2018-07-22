import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export function SwapInfoMatch(props) {
	console.log(props);
    return (
    	<div className="swapMoreInfoInterested">
        <h2 id="SwapCardInterested">
            It's a match!
        </h2>
        <h2 id="SwapCardTitle">
            {props.swapTitle}
        </h2>
        <h3 className="swapCardDescription">
        	{props.description}
        </h3>
        <SwapTags {...props}/>
         <button 
          	type="button"
          	id="swapButtonInterested" 
          	className="button"
        >
          	No Longer Interested
        </button>
        <button 
            type="button"
            id="swapButtonMatch" 
            className="button"
        >
            Contact for Swap
        </button>
        </div>
    );
}


export default connect()(SwapInfoMatch);