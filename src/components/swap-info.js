import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';
import { updateSwapInterest } from '../actions/actions';
import './swap-details.css';

export class SwapInfo extends React.Component {
  updateInterest(index){
    console.log(index);
      this.props.dispatch(updateSwapInterest(index));
  }

	render() {
		console.log(this.props.tags);
    	const categoryTags = this.props.swap.tags.map((tag, index) =>
        	<div className="swapTagBlock" key={index}>
            	<SwapTags {...tag} />
        	</div>
    	);

		console.log(this.props);
    	return (
    		<div className="swapMoreInfo">
        	<h2 id="SwapCardTitle">
            	{this.props.swap.swapTitle}
        	</h2>
        	<h3 className="swapCardDescription">
        		{this.props.swap.description}
        	</h3>
        	<ul className="tagsSection">
        		{categoryTags}
        	</ul>
         	<button 
          	type="button"
          	id="swapButton" 
          	className="button"
            onClick={() => this.updateInterest(this.props.index)}
        	>
          		I'm Interested
        	</button>
        	</div>
    	);
    }
}

export default connect()(SwapInfo);