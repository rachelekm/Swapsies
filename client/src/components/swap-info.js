import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export function SwapInfo(props) {
	console.log(props);
    return (
    	<div className="swapMoreInfo">
        <h2 id="SwapCardTitle">
            {props.swapTitle}
        </h2>
        <h3 className="swapCardDescription">
        	{props.description}
        </h3>
        <SwapTags {...props}/>
         <button 
          	type="button"
          	id="swapButton" 
          	className="button"
        >
          	I'm Interested
        </button>
        </div>
    );
}


export default connect()(SwapInfo);