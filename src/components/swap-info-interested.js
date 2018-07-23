import React from 'react';
import {connect} from 'react-redux';
import SwapTags from './swap-tags';

import './swap-details.css';

export class SwapInfoInterested extends React.Component {

  render() {
    console.log(this.props.tags);
    const categoryTags = this.props.tags.map((tag, index) =>
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
            id="swapButtonInterested" 
            className="button"
          >
            No Longer Interested
        </button>
          </div>
      );
    }
}

export default connect()(SwapInfoInterested);