import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';
import { noLongerInterested } from '../actions/actions';
import './swap-details.css';

export class SwapInfoInterested extends React.Component {
  removeInterest(index){
    console.log(index);
      this.props.dispatch(noLongerInterested(index));
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
        <div className="swapMoreInfoInterested">
          <h2 id="SwapCardInterested">
            You've asked to swap!
          </h2>
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
            id="swapButtonInterested" 
            className="button"
            onClick={() => this.removeInterest(this.props.index)}
          >
            No Longer Interested
        </button>
          </div>
      );
    }
}

export default connect()(SwapInfoInterested);