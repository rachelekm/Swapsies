import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export class SwapInfo extends React.Component {

	render() {
			console.log(this.props);
		const categoryTags = this.props.tags.map((tag, index) =>
            <li key={index}>
                <SwapTags {...tag} />
            </li>
        );
		console.log(this.props);
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
}

export default connect()(SwapInfo);