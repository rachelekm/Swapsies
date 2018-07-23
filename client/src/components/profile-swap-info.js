import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export class AccountSwapInfo extends React.Component {

	render() {
		console.log(this.props.tags);
    	const categoryTags = this.props.tags.map((tag, index) =>
        	<div className="swapTagBlock" key={index}>
            	<SwapTags {...tag} />
        	</div>
    	);

    	return (
    	   <div className="swapMoreInfo">
        	   <h2 id="SwapCardTitle">
            	   {this.props.swapTitle}
        	   </h2>
        	   <h3 className="swapCardDescription">
        		  {this.props.description}
        	   </h3>
        	   <ul className="tagsSection">
        		  {categoryTags}
        	   </ul>
        	</div>
    	);
    }
}

export default connect()(AccountSwapInfo);