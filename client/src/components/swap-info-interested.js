import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export function SwapInfoInterested(props) {
	console.log(props);
    return (
    	<div className="swapMoreInfoInterested">
        <h2 id="SwapCardInterested">
            You've asked to swap!
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
        </div>
    );
}


export default connect()(SwapInfoInterested);